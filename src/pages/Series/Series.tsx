import './series.scss'

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesAPI} from "../../api/api";
import {setSeriesByFilter} from "../../redux/slices/moviesSlice";
import GridWrapper from "../../layouts/grid-wrapper/GridWrapper";
import {setPage, setTotal} from "../../redux/slices/paginationSlice";

const Series = () => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.movies.seriesByFilter)
    const [loader, setLoader] = useState(true);

    const {page, total} = useSelector(state => state.pagination)

    const changePaginationPage = (e: number) => {
        dispatch(setPage(e))
    }

    useEffect(() => {
        async function getItems(page:number) {
            try {
                const movies = await moviesAPI.getSeriesByFilter(page)
                console.log(movies)
                dispatch(setSeriesByFilter(movies.docs))
                dispatch(setTotal(movies.total))
            } catch (e) {
                console.log(e)
            } finally {
                setLoader(false);
            }
        }

        getItems(page)
    }, [page])


    return (
        <GridWrapper title={'Сериалы'}
                     loader={loader}
                     items={items}
                     page={page}
                     changePaginationPage={changePaginationPage}
                     total={Math.ceil(total / 10)}
        />
    );

};

export default Series;
