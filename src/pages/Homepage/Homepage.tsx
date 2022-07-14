import {FC, useEffect} from 'react'
import './Homepage.scss'
import {Header} from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import VideoList from '../../components/VideoList/VideoList'
import {moviesAPI} from '../../api/api'
import {useDispatch, useSelector} from "react-redux";
import {setNewMovies,setNewSeries} from "../../redux/slices/moviesSlice";
import BigBannerVideo from "../../components/BigBannerVideo/BigBannerVideo";

const Homepage: FC = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state=>state.movies)

    useEffect(() => {
        moviesAPI.getNewMovies()
            .then(r => {
                dispatch(setNewMovies(r.docs))
            }).catch(e => alert(e))

        moviesAPI.getNewSeries()
            .then(r => {
               dispatch(setNewSeries(r.docs))
            }).catch(e => alert(e))


    }, [])

    return (
        <>
            <Header/>
            <BigBannerVideo/>
            <div className='black-background'>
                <VideoList title={'Новые фильмы'} data={movies.newMovies}/>
                <VideoList title={'Новые сериалы'} data={movies.newSeries}/>
            </div>
            <Footer/>
        </>
    )
}

export default Homepage
