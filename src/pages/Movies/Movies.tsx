import GridWrapper from "../../layouts/grid-wrapper/GridWrapper";
import {useEffect, useState} from "react";
import {moviesAPI} from "../../api/api";
import {setMovieByFilter} from "../../redux/slices/moviesSlice";
import {useDispatch, useSelector} from "react-redux";
import {setPage, setTotal} from "../../redux/slices/paginationSlice";


const Movies = () => {
    const [loader, setLoader] = useState(true);
    const dispatch = useDispatch()
    const items = useSelector(state => state.movies.movieByFilter)
    const {page, total} = useSelector(state => state.pagination)

    const changePaginationPage = (e: number) => {
        dispatch(setPage(e))
    }

    useEffect(() => {
        async function getItems(currentPage: number) {
            try {
                const movies = await moviesAPI.getMoviesByFilter(currentPage)
                dispatch(setMovieByFilter(movies.docs))
                dispatch(setTotal(movies.total))
            } catch (e) {

            } finally {
                setLoader(false)
            }
        }

        getItems(page)
    }, [page])


    return (
        <GridWrapper
            title={'Фильмы'}
            loader={loader}
            items={items}
            page={page}
            changePaginationPage={changePaginationPage}
            total={Math.ceil(total / 10)}
        />
    );
};

export default Movies;
