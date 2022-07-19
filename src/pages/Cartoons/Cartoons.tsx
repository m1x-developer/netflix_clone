import './cartoons.scss'

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesAPI} from "../../api/api";
import {setMovieByFilter} from "../../redux/slices/moviesSlice";
import GridWrapper from "../../layouts/grid-wrapper/GridWrapper";
import {setPage, setTotal} from "../../redux/slices/paginationSlice";

const Cartoons = () => {
    const [loader, setLoader] = useState(true);
    const dispatch = useDispatch()
    const items = useSelector(state => state.movies.movieByFilter)

    const {page, total} = useSelector(state => state.pagination)
    const changePaginationPage = (e: number) => {
        dispatch(setPage(e))
    }

    useEffect(() => {
        async function getItems(currentPage:number) {
            try {
                const movies = await moviesAPI.getСartoonsByFilter(currentPage)
                dispatch(setMovieByFilter(movies.docs))
                dispatch(setTotal(movies.total))
            } catch (e) {

            } finally {
                setLoader(false);
            }
        }

        getItems(page)
    }, [page])
    



    return (
        <GridWrapper
            title={'Мультфильмы'}
            loader={loader}
            items={items}
            page={page}
            changePaginationPage={changePaginationPage}
            total={Math.ceil(total / 10)}
        />
    );

    return (
        <div>

        </div>
    );
};

export default Cartoons;
