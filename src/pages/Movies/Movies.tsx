import GridWrapper from "../../layouts/grid-wrapper/GridWrapper";
import {useEffect, useState} from "react";
import {moviesAPI} from "../../api/api";
import {setMovieByFilter} from "../../redux/slices/moviesSlice";
import {useDispatch, useSelector} from "react-redux";

const Movies = () => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.movies.movieByFilter)
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        async function getItems() {
            try {
                const movies = await moviesAPI.getMoviesByFilter()
                dispatch(setMovieByFilter(movies.docs))
            } catch (e) {

            } finally {
                setLoader(false);
            }
        }

        getItems()
    }, [])


    return (
        <GridWrapper title={'Фильмы'} loader={loader} items={items}/>
    );
};

export default Movies;
