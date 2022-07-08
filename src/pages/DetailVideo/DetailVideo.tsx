import './detailVideo.scss'
import {Header} from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// @ts-ignore
import poster from '../../assets/tv-show/poster/never-have-ever-tv-show.webp'
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";

const DetailVideo = () => {
    const opts = {
        height: '600',
        width: '1250',
        playerVars: {
            autoplay: 1,
        },
    };

    const video:any = () => {
        // @ts-ignore
        return <YouTube videoId="sqPnPc7nPEA" opts={opts} className='videocontainer'/>
    }

    return (

        <div>
            <Header/>
            <div className="videocontainer">
                {video}
            </div>

            <div className='black-background'>
                <section className="movieinformation container">
                    <div className="movielogo">
                        <img src="../images/movies/murder mystery logo.webp" alt=""/>
                    </div>
                    <div className="movierelease">
                    <span className="year">
                        2019
                    </span>
                        <span className="rating">
                        PG-13
                    </span>
                        <span className="timeduration">
                        3h 7m
                    </span>
                    </div>
                    <div className="description">
                        A New York cop and his wife go on a European vacation to reinvigorate the spark in their
                        marriage. A
                        chance encounter leads to them being framed for the murder of an elderly billionaire.
                    </div>
                    <div className="castinformation">
                        <p><span className="name">Director:</span> Kyle Newacheck</p>
                        <p><span className="name">Screenplay:</span> James Vanderbilt</p>
                        <p><span className="name">Producers:</span> Adam Sandler, James Vanderbilt, Allen Covert, James
                            D.
                            Stern,
                            Tripp Vinson, A.J. Dix</p>
                        <p><span className="name">Awards:</span> People's Choice Award for Favorite Comedic Movie</p>
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
                </section>
                <section id="mylist" className="container">
                    <h4 className="mylist-heading">
                        My List
                    </h4>
                    <div className="mylist-container d-flex flex-start flex-middle flex-no-wrap owl-carousel">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            pagination={{clickable: true}}
                            scrollbar={{draggable: true}}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <div style={{paddingLeft: '15px'}} className="video">
                                    <div style={{position: 'relative'}}>
                                        <div className='mylist-img video-item'>
                                            <ReactPlayer width={'325px'} height={'200px'} controls={true}
                                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                                        </div>

                                        <div className="video-description d-flex flex-end direction-column">
                                            <div style={{paddingLeft: '10px'}}>
                                                <div>
                                                    <h4 className="heading f-w-8 text-shadow">
                                                        Never Have I Ever
                                                    </h4>
                                                </div>
                                                <div className="info d-flex flex-middle flex-no-wrap">
                                                    <p className="rated text-shadow"><strong>18+</strong></p>
                                                    <p className="season-count text-shadow"> 1 Season</p>
                                                </div>
                                                <div className="genere d-flex flex-no-wrap text-shadow">
                                                    <p>#Nudeity</p>
                                                    <p>#Romance</p>
                                                    <p>#Love</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{paddingLeft: '15px'}} className="video">
                                    <div style={{position: 'relative'}}>
                                        <div className='mylist-img video-item'>
                                            <ReactPlayer width={'325px'} height={'200px'} controls={true}
                                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                                        </div>

                                        <div className="video-description d-flex flex-end direction-column">
                                            <div style={{paddingLeft: '10px'}}>
                                                <div>
                                                    <h4 className="heading f-w-8 text-shadow">
                                                        Never Have I Ever
                                                    </h4>
                                                </div>
                                                <div className="info d-flex flex-middle flex-no-wrap">
                                                    <p className="rated text-shadow"><strong>18+</strong></p>
                                                    <p className="season-count text-shadow"> 1 Season</p>
                                                </div>
                                                <div className="genere d-flex flex-no-wrap text-shadow">
                                                    <p>#Nudeity</p>
                                                    <p>#Romance</p>
                                                    <p>#Love</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{paddingLeft: '15px'}} className="video">
                                    <div style={{position: 'relative'}}>
                                        <div className='mylist-img video-item'>
                                            <ReactPlayer width={'325px'} height={'200px'} controls={true}
                                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                                        </div>

                                        <div className="video-description d-flex flex-end direction-column">
                                            <div style={{paddingLeft: '10px'}}>
                                                <div>
                                                    <h4 className="heading f-w-8 text-shadow">
                                                        Never Have I Ever
                                                    </h4>
                                                </div>
                                                <div className="info d-flex flex-middle flex-no-wrap">
                                                    <p className="rated text-shadow"><strong>18+</strong></p>
                                                    <p className="season-count text-shadow"> 1 Season</p>
                                                </div>
                                                <div className="genere d-flex flex-no-wrap text-shadow">
                                                    <p>#Nudeity</p>
                                                    <p>#Romance</p>
                                                    <p>#Love</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{paddingLeft: '15px'}} className="video">
                                    <div style={{position: 'relative'}}>
                                        <div className='mylist-img video-item'>
                                            <ReactPlayer width={'325px'} height={'200px'} controls={true}
                                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                                        </div>

                                        <div className="video-description d-flex flex-end direction-column">
                                            <div style={{paddingLeft: '10px'}}>
                                                <div>
                                                    <h4 className="heading f-w-8 text-shadow">
                                                        Never Have I Ever
                                                    </h4>
                                                </div>
                                                <div className="info d-flex flex-middle flex-no-wrap">
                                                    <p className="rated text-shadow"><strong>18+</strong></p>
                                                    <p className="season-count text-shadow"> 1 Season</p>
                                                </div>
                                                <div className="genere d-flex flex-no-wrap text-shadow">
                                                    <p>#Nudeity</p>
                                                    <p>#Romance</p>
                                                    <p>#Love</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{paddingLeft: '15px'}} className="video">
                                    <div style={{position: 'relative'}}>
                                        <div className='mylist-img video-item'>
                                            <ReactPlayer width={'325px'} height={'200px'} controls={true}
                                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                                        </div>

                                        <div className="video-description d-flex flex-end direction-column">
                                            <div style={{paddingLeft: '10px'}}>
                                                <div>
                                                    <h4 className="heading f-w-8 text-shadow">
                                                        Never Have I Ever
                                                    </h4>
                                                </div>
                                                <div className="info d-flex flex-middle flex-no-wrap">
                                                    <p className="rated text-shadow"><strong>18+</strong></p>
                                                    <p className="season-count text-shadow"> 1 Season</p>
                                                </div>
                                                <div className="genere d-flex flex-no-wrap text-shadow">
                                                    <p>#Nudeity</p>
                                                    <p>#Romance</p>
                                                    <p>#Love</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{paddingLeft: '15px'}} className="video">
                                    <div style={{position: 'relative'}}>
                                        <div className='mylist-img video-item'>
                                            <ReactPlayer width={'325px'} height={'200px'} controls={true}
                                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                                        </div>

                                        <div className="video-description d-flex flex-end direction-column">
                                            <div style={{paddingLeft: '10px'}}>
                                                <div>
                                                    <h4 className="heading f-w-8 text-shadow">
                                                        Never Have I Ever
                                                    </h4>
                                                </div>
                                                <div className="info d-flex flex-middle flex-no-wrap">
                                                    <p className="rated text-shadow"><strong>18+</strong></p>
                                                    <p className="season-count text-shadow"> 1 Season</p>
                                                </div>
                                                <div className="genere d-flex flex-no-wrap text-shadow">
                                                    <p>#Nudeity</p>
                                                    <p>#Romance</p>
                                                    <p>#Love</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{paddingLeft: '15px'}} className="video">
                                    <div style={{position: 'relative'}}>
                                        <div className='mylist-img video-item'>
                                            <ReactPlayer width={'325px'} height={'200px'} controls={true}
                                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                                        </div>

                                        <div className="video-description d-flex flex-end direction-column">
                                            <div style={{paddingLeft: '10px'}}>
                                                <div>
                                                    <h4 className="heading f-w-8 text-shadow">
                                                        Never Have I Ever
                                                    </h4>
                                                </div>
                                                <div className="info d-flex flex-middle flex-no-wrap">
                                                    <p className="rated text-shadow"><strong>18+</strong></p>
                                                    <p className="season-count text-shadow"> 1 Season</p>
                                                </div>
                                                <div className="genere d-flex flex-no-wrap text-shadow">
                                                    <p>#Nudeity</p>
                                                    <p>#Romance</p>
                                                    <p>#Love</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{paddingLeft: '15px'}} className="video">
                                    <div style={{position: 'relative'}}>
                                        <div className='mylist-img video-item'>
                                            <ReactPlayer width={'325px'} height={'200px'} controls={true}
                                                         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                                        </div>

                                        <div className="video-description d-flex flex-end direction-column">
                                            <div style={{paddingLeft: '10px'}}>
                                                <div>
                                                    <h4 className="heading f-w-8 text-shadow">
                                                        Never Have I Ever
                                                    </h4>
                                                </div>
                                                <div className="info d-flex flex-middle flex-no-wrap">
                                                    <p className="rated text-shadow"><strong>18+</strong></p>
                                                    <p className="season-count text-shadow"> 1 Season</p>
                                                </div>
                                                <div className="genere d-flex flex-no-wrap text-shadow">
                                                    <p>#Nudeity</p>
                                                    <p>#Romance</p>
                                                    <p>#Love</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </section>
            </div>


            <Footer/>
        </div>

    );
};

export default DetailVideo;
