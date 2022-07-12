import './detailVideo.scss'
import {Header} from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Star, X} from 'tabler-icons-react';
// @ts-ignore
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import {useEffect, useState} from "react";
import {moviesAPI} from "../../api/api";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setDetailMovie} from "../../redux/slices/moviesSlice";
import {LoadingOverlay} from "@mantine/core";
import {youtube_parse_url} from "../../utils/youtube_parse_url";

const opts = {
    height: '700',
    width: '1250',
    // playerVars: {
    //     autoplay: 1,
    // },
};

const DetailVideo = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const state = useSelector(state => state.movies.detailMovie)
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        moviesAPI.getMovieById(params.id)
            .then(r => {
                return (
                    dispatch(setDetailMovie(r))
                )

            })
            .catch(e => {
                console.log(e);
            }).finally(() => {
            setLoader(false)
        })
    }, [])


    if (loader) {
        return <LoadingOverlay visible={true}/>
    }

    const videoId =  youtube_parse_url(state.videos.trailers[0].url)
    
    console.log(state)



    return (
        <div>
            <Header/>
            <div className="videocontainer">
                <YouTube videoId={videoId} opts={opts} className='videocontainer'/>
            </div>

            <div className='black-background'>
                <section className="movieinformation container">
                    <div className="detail-content">
                        <div className="movielogo">
                            <img src={state.poster.previewUrl} width={'300px'} alt=""/>
                        </div>
                        <div className="movie-descr">
                            <div>
                                <div style={{fontSize: '30px', fontWeight: 'bold'}}>{state.name}</div>
                                <p>"{state.alternativeName}"</p>
                            </div>
                            <div className="movierelease">
                    <span className="year">
                        {state.year}
                    </span>
                                <span className="rating">
                       <Star
                           size={16}
                           strokeWidth={2}
                           color={'#bf4042'}
                       /> {state.votes.kp}
                    </span>
                                <span className="timeduration">
                        {state.genres.map((e)=>{
                            return ` #${e.name}`
                        })}
                    </span>
                            </div>
                            <div className="description">
                                {state.description}
                            </div>
                            <div className="castinformation">
                                <p><span className="name">Director:</span> Kyle Newacheck</p>
                                <p><span className="name">Screenplay:</span> James Vanderbilt</p>
                                <p><span className="name">Producers:</span> Adam Sandler, James Vanderbilt, Allen
                                    Covert, James
                                    D.
                                    Stern,
                                    Tripp Vinson, A.J. Dix</p>
                                <p><span className="name">Awards:</span> People's Choice Award for Favorite Comedic
                                    Movie</p>
                            </div>
                            <div className="actions d-flex flex-start flex-middle">
                                <button className="button service">
                                    My list
                                </button>
                                <button className="button service">
                                    Like
                                </button>
                                <button className="button service">
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>

                </section>
                {/*<section id="mylist" className="container">*/}
                {/*    <h4 className="mylist-heading">*/}
                {/*        My List*/}
                {/*    </h4>*/}
                {/*    <div className="mylist-container d-flex flex-start flex-middle flex-no-wrap owl-carousel">*/}
                {/*        <Swiper*/}
                {/*            modules={[Navigation, Pagination, Scrollbar, A11y]}*/}
                {/*            spaceBetween={50}*/}
                {/*            slidesPerView={3}*/}
                {/*            navigation*/}
                {/*            pagination={{clickable: true}}*/}
                {/*            scrollbar={{draggable: true}}*/}
                {/*            onSwiper={(swiper) => console.log(swiper)}*/}
                {/*            onSlideChange={() => console.log('slide change')}*/}
                {/*        >*/}
                {/*            <SwiperSlide>*/}
                {/*                <div style={{paddingLeft: '15px'}} className="video">*/}
                {/*                    <div style={{position: 'relative'}}>*/}
                {/*                        <div className='mylist-img video-item'>*/}
                {/*                            <ReactPlayer width={'325px'} height={'200px'} controls={true}*/}
                {/*                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>*/}
                {/*                        </div>*/}

                {/*                        <div className="video-description d-flex flex-end direction-column">*/}
                {/*                            <div style={{paddingLeft: '10px'}}>*/}
                {/*                                <div>*/}
                {/*                                    <h4 className="heading f-w-8 text-shadow">*/}
                {/*                                        Never Have I Ever*/}
                {/*                                    </h4>*/}
                {/*                                </div>*/}
                {/*                                <div className="info d-flex flex-middle flex-no-wrap">*/}
                {/*                                    <p className="rated text-shadow"><strong>18+</strong></p>*/}
                {/*                                    <p className="season-count text-shadow"> 1 Season</p>*/}
                {/*                                </div>*/}
                {/*                                <div className="genere d-flex flex-no-wrap text-shadow">*/}
                {/*                                    <p>#Nudeity</p>*/}
                {/*                                    <p>#Romance</p>*/}
                {/*                                    <p>#Love</p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </SwiperSlide>*/}
                {/*            <SwiperSlide>*/}
                {/*                <div style={{paddingLeft: '15px'}} className="video">*/}
                {/*                    <div style={{position: 'relative'}}>*/}
                {/*                        <div className='mylist-img video-item'>*/}
                {/*                            <ReactPlayer width={'325px'} height={'200px'} controls={true}*/}
                {/*                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>*/}
                {/*                        </div>*/}

                {/*                        <div className="video-description d-flex flex-end direction-column">*/}
                {/*                            <div style={{paddingLeft: '10px'}}>*/}
                {/*                                <div>*/}
                {/*                                    <h4 className="heading f-w-8 text-shadow">*/}
                {/*                                        Never Have I Ever*/}
                {/*                                    </h4>*/}
                {/*                                </div>*/}
                {/*                                <div className="info d-flex flex-middle flex-no-wrap">*/}
                {/*                                    <p className="rated text-shadow"><strong>18+</strong></p>*/}
                {/*                                    <p className="season-count text-shadow"> 1 Season</p>*/}
                {/*                                </div>*/}
                {/*                                <div className="genere d-flex flex-no-wrap text-shadow">*/}
                {/*                                    <p>#Nudeity</p>*/}
                {/*                                    <p>#Romance</p>*/}
                {/*                                    <p>#Love</p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </SwiperSlide>*/}
                {/*            <SwiperSlide>*/}
                {/*                <div style={{paddingLeft: '15px'}} className="video">*/}
                {/*                    <div style={{position: 'relative'}}>*/}
                {/*                        <div className='mylist-img video-item'>*/}
                {/*                            <ReactPlayer width={'325px'} height={'200px'} controls={true}*/}
                {/*                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>*/}
                {/*                        </div>*/}

                {/*                        <div className="video-description d-flex flex-end direction-column">*/}
                {/*                            <div style={{paddingLeft: '10px'}}>*/}
                {/*                                <div>*/}
                {/*                                    <h4 className="heading f-w-8 text-shadow">*/}
                {/*                                        Never Have I Ever*/}
                {/*                                    </h4>*/}
                {/*                                </div>*/}
                {/*                                <div className="info d-flex flex-middle flex-no-wrap">*/}
                {/*                                    <p className="rated text-shadow"><strong>18+</strong></p>*/}
                {/*                                    <p className="season-count text-shadow"> 1 Season</p>*/}
                {/*                                </div>*/}
                {/*                                <div className="genere d-flex flex-no-wrap text-shadow">*/}
                {/*                                    <p>#Nudeity</p>*/}
                {/*                                    <p>#Romance</p>*/}
                {/*                                    <p>#Love</p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </SwiperSlide>*/}
                {/*            <SwiperSlide>*/}
                {/*                <div style={{paddingLeft: '15px'}} className="video">*/}
                {/*                    <div style={{position: 'relative'}}>*/}
                {/*                        <div className='mylist-img video-item'>*/}
                {/*                            <ReactPlayer width={'325px'} height={'200px'} controls={true}*/}
                {/*                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>*/}
                {/*                        </div>*/}

                {/*                        <div className="video-description d-flex flex-end direction-column">*/}
                {/*                            <div style={{paddingLeft: '10px'}}>*/}
                {/*                                <div>*/}
                {/*                                    <h4 className="heading f-w-8 text-shadow">*/}
                {/*                                        Never Have I Ever*/}
                {/*                                    </h4>*/}
                {/*                                </div>*/}
                {/*                                <div className="info d-flex flex-middle flex-no-wrap">*/}
                {/*                                    <p className="rated text-shadow"><strong>18+</strong></p>*/}
                {/*                                    <p className="season-count text-shadow"> 1 Season</p>*/}
                {/*                                </div>*/}
                {/*                                <div className="genere d-flex flex-no-wrap text-shadow">*/}
                {/*                                    <p>#Nudeity</p>*/}
                {/*                                    <p>#Romance</p>*/}
                {/*                                    <p>#Love</p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </SwiperSlide>*/}
                {/*            <SwiperSlide>*/}
                {/*                <div style={{paddingLeft: '15px'}} className="video">*/}
                {/*                    <div style={{position: 'relative'}}>*/}
                {/*                        <div className='mylist-img video-item'>*/}
                {/*                            <ReactPlayer width={'325px'} height={'200px'} controls={true}*/}
                {/*                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>*/}
                {/*                        </div>*/}

                {/*                        <div className="video-description d-flex flex-end direction-column">*/}
                {/*                            <div style={{paddingLeft: '10px'}}>*/}
                {/*                                <div>*/}
                {/*                                    <h4 className="heading f-w-8 text-shadow">*/}
                {/*                                        Never Have I Ever*/}
                {/*                                    </h4>*/}
                {/*                                </div>*/}
                {/*                                <div className="info d-flex flex-middle flex-no-wrap">*/}
                {/*                                    <p className="rated text-shadow"><strong>18+</strong></p>*/}
                {/*                                    <p className="season-count text-shadow"> 1 Season</p>*/}
                {/*                                </div>*/}
                {/*                                <div className="genere d-flex flex-no-wrap text-shadow">*/}
                {/*                                    <p>#Nudeity</p>*/}
                {/*                                    <p>#Romance</p>*/}
                {/*                                    <p>#Love</p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </SwiperSlide>*/}
                {/*            <SwiperSlide>*/}
                {/*                <div style={{paddingLeft: '15px'}} className="video">*/}
                {/*                    <div style={{position: 'relative'}}>*/}
                {/*                        <div className='mylist-img video-item'>*/}
                {/*                            <ReactPlayer width={'325px'} height={'200px'} controls={true}*/}
                {/*                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>*/}
                {/*                        </div>*/}

                {/*                        <div className="video-description d-flex flex-end direction-column">*/}
                {/*                            <div style={{paddingLeft: '10px'}}>*/}
                {/*                                <div>*/}
                {/*                                    <h4 className="heading f-w-8 text-shadow">*/}
                {/*                                        Never Have I Ever*/}
                {/*                                    </h4>*/}
                {/*                                </div>*/}
                {/*                                <div className="info d-flex flex-middle flex-no-wrap">*/}
                {/*                                    <p className="rated text-shadow"><strong>18+</strong></p>*/}
                {/*                                    <p className="season-count text-shadow"> 1 Season</p>*/}
                {/*                                </div>*/}
                {/*                                <div className="genere d-flex flex-no-wrap text-shadow">*/}
                {/*                                    <p>#Nudeity</p>*/}
                {/*                                    <p>#Romance</p>*/}
                {/*                                    <p>#Love</p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </SwiperSlide>*/}
                {/*            <SwiperSlide>*/}
                {/*                <div style={{paddingLeft: '15px'}} className="video">*/}
                {/*                    <div style={{position: 'relative'}}>*/}
                {/*                        <div className='mylist-img video-item'>*/}
                {/*                            <ReactPlayer width={'325px'} height={'200px'} controls={true}*/}
                {/*                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>*/}
                {/*                        </div>*/}

                {/*                        <div className="video-description d-flex flex-end direction-column">*/}
                {/*                            <div style={{paddingLeft: '10px'}}>*/}
                {/*                                <div>*/}
                {/*                                    <h4 className="heading f-w-8 text-shadow">*/}
                {/*                                        Never Have I Ever*/}
                {/*                                    </h4>*/}
                {/*                                </div>*/}
                {/*                                <div className="info d-flex flex-middle flex-no-wrap">*/}
                {/*                                    <p className="rated text-shadow"><strong>18+</strong></p>*/}
                {/*                                    <p className="season-count text-shadow"> 1 Season</p>*/}
                {/*                                </div>*/}
                {/*                                <div className="genere d-flex flex-no-wrap text-shadow">*/}
                {/*                                    <p>#Nudeity</p>*/}
                {/*                                    <p>#Romance</p>*/}
                {/*                                    <p>#Love</p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </SwiperSlide>*/}
                {/*            <SwiperSlide>*/}
                {/*                <div style={{paddingLeft: '15px'}} className="video">*/}
                {/*                    <div style={{position: 'relative'}}>*/}
                {/*                        <div className='mylist-img video-item'>*/}
                {/*                            <ReactPlayer width={'325px'} height={'200px'} controls={true}*/}
                {/*                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>*/}
                {/*                        </div>*/}

                {/*                        <div className="video-description d-flex flex-end direction-column">*/}
                {/*                            <div style={{paddingLeft: '10px'}}>*/}
                {/*                                <div>*/}
                {/*                                    <h4 className="heading f-w-8 text-shadow">*/}
                {/*                                        Never Have I Ever*/}
                {/*                                    </h4>*/}
                {/*                                </div>*/}
                {/*                                <div className="info d-flex flex-middle flex-no-wrap">*/}
                {/*                                    <p className="rated text-shadow"><strong>18+</strong></p>*/}
                {/*                                    <p className="season-count text-shadow"> 1 Season</p>*/}
                {/*                                </div>*/}
                {/*                                <div className="genere d-flex flex-no-wrap text-shadow">*/}
                {/*                                    <p>#Nudeity</p>*/}
                {/*                                    <p>#Romance</p>*/}
                {/*                                    <p>#Love</p>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </SwiperSlide>*/}
                {/*        </Swiper>*/}

                {/*    </div>*/}
                {/*</section>*/}
            </div>


            <Footer/>
        </div>

    );
};

export default DetailVideo;
