import './detailVideo.scss'
import {Header} from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {MessageCircle, Photo, Settings, Star, X} from 'tabler-icons-react';
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
import {LoadingOverlay, SimpleGrid, Tabs} from "@mantine/core";
import {youtube_parse_url} from "../../utils/youtube_parse_url";
import VideoList from "../../components/VideoList/VideoList";

const opts = {
    height: '700',
    width: '1250',
    playerVars: {
        autoplay: 1,
    },
};

const opts2 = {
    height: '200',
    width: '300',
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

    const videoId = state?.videos?.trailers[0]?.url ? youtube_parse_url(state.videos.trailers[0].url) : null
    const allVideos = state.videos.trailers
    const persons = state.persons.slice(0, 15)
    const facts = state.facts

    console.log(state)


    return (
        <div>
            <Header/>
            <div className="videocontainer">
                <YouTube videoId={videoId} opts={opts} className='videocontainer'/>
            </div>

            <div className='black-background' style={{marginTop: 0}}>
                <section className="movieinformation container">
                    <div className="detail-content">
                        <div className="movielogo">
                            <img src={state.poster.previewUrl} width={'300px'} alt=""/>
                        </div>
                        <div className="movie-descr">
                            <div>
                                <div style={{fontSize: '30px', fontWeight: 'bold'}}>{state.name}</div>
                                <p>{state.alternativeName}</p>
                            </div>
                            <div className="movierelease">
                    <span className="year">
                        {state.year}
                    </span>
                                <span className="year">
                    </span>

                                <span className="rating">
                       <Star
                           size={16}
                           strokeWidth={2}
                           color={'#bf4042'}
                       /> {state.votes.kp}
                    </span>
                                <span className="timeduration">
                        {state.genres.map((e) => {
                            return ` #${e.name}`
                        })}
                    </span>
                            </div>
                            <Tabs variant="outline" tabPadding="md">
                                <Tabs.Tab label="Описание" color="#fff" icon={<Photo size={14}/>}>
                                    {state.description}
                                </Tabs.Tab>
                                <Tabs.Tab label="О фильме" icon={<MessageCircle size={14}/>}>
                                    <p><span className="name">Director:</span> Kyle Newacheck</p>
                                    <p><span className="name">Screenplay:</span> James Vanderbilt</p>
                                    <p><span className="name">Producers:</span> Adam Sandler, James Vanderbilt, Allen
                                        Covert, James
                                        D.
                                        Stern,
                                        Tripp Vinson, A.J. Dix</p>
                                    <p><span className="name">Awards:</span> People's Choice Award for Favorite Comedic
                                        Movie</p>
                                </Tabs.Tab>
                                <Tabs.Tab label="Актеры" icon={<Settings size={14}/>}>
                                    <div style={{width: '1200px'}}>
                                        <Swiper
                                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                                            spaceBetween={50}
                                            slidesPerView={5}
                                            navigation
                                            pagination={{clickable: true}}
                                            scrollbar={{draggable: true}}
                                        >
                                            {persons.map(e => {
                                                return (
                                                    <SwiperSlide key={e.id}>
                                                        <div style={{paddingLeft: '15px'}} className='video'>
                                                            <div style={{position: 'relative'}}>
                                                                <div className='mylist-img video-item'>
                                                                    <img src={e.photo} width={'200px'}
                                                                         height={'300px'} alt=""/>
                                                                </div>

                                                                <div
                                                                    className='video-description d-flex flex-end direction-column'>
                                                                    <div style={{paddingLeft: '10px'}}>
                                                                        <div>
                                                                            <h4 className='heading f-w-8 text-shadow'>
                                                                                {e.name}
                                                                            </h4>
                                                                        </div>
                                                                        <div
                                                                            className='info d-flex flex-middle flex-no-wrap'>
                                                                            <p className='rated text-shadow'>
                                                                                <strong>{e.enName}</strong>
                                                                            </p>
                                                                            <p className='season-count text-shadow'>
                                                                                {e.alternativeName}
                                                                            </p>
                                                                        </div>
                                                                        <div
                                                                            className='genere d-flex flex-no-wrap text-shadow'>
                                                                            <p style={{
                                                                                display: 'flex',
                                                                                justifyContent: 'center',
                                                                                alignItems: 'center'
                                                                            }}>
                                                                                <Star
                                                                                    size={16}
                                                                                    strokeWidth={2}
                                                                                    color={'#bf4042'}
                                                                                />
                                                                                {e.enProfession}</p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    </div>
                                </Tabs.Tab>
                                <Tabs.Tab label="Факты" icon={<MessageCircle size={14}/>}>
                                    {facts.map((e, i) => {
                                        return (
                                            <p key={i} dangerouslySetInnerHTML={{__html: `${i + 1}. ${e.value}`}}/>
                                        )
                                    })}
                                </Tabs.Tab>
                                <Tabs.Tab label="Все трейлеры" icon={<MessageCircle size={14}/>}>
                                    <SimpleGrid cols={4} spacing="lg">
                                        {allVideos.map((e) => {
                                            return (
                                                <div>
                                                    <YouTube videoId={youtube_parse_url(e.url)} opts={opts2}/>
                                                </div>
                                            )
                                        })}
                                    </SimpleGrid>

                                </Tabs.Tab>
                            </Tabs>
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
                <VideoList title={'Похожие фильмы'} data={[]}/>
            </div>


            <Footer/>
        </div>

    );
};

export default DetailVideo;
