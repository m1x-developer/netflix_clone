import {Swiper, SwiperSlide} from 'swiper/react'
import {A11y, Navigation, Pagination, Scrollbar} from 'swiper'
import {FC} from "react";
import {Star} from "tabler-icons-react";
import {movieType} from "./types";
import {Link} from "react-router-dom";


interface Props {
    title: string;
    data: movieType[]
}

const VideoList: FC<Props> = ({title, data}) => {

    return (
        <section id='mylist' className='container'>
            <h2 className='mylist-heading'>{title}</h2>
            <div className='mylist-container d-flex flex-start flex-middle flex-no-wrap owl-carousel'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={6}
                    navigation
                    pagination={{clickable: true}}
                    scrollbar={{draggable: true}}
                >
                    {data.map((e: any) => {
                        return (
                            <SwiperSlide key={e.id}>
                                <Link to={`/detailvideo/${e.id}`}>
                                    <div style={{paddingLeft: '15px'}} className='video'>
                                        <div style={{position: 'relative'}}>
                                            <div className='mylist-img video-item'>
                                                <img src={e.poster.previewUrl} width={'200px'} height={'300px'} alt=""/>
                                            </div>

                                            <div className='video-description d-flex flex-end direction-column'>
                                                <div style={{paddingLeft: '10px'}}>
                                                    <div>
                                                        <h4 className='heading f-w-8 text-shadow'>
                                                            {e.name}
                                                        </h4>
                                                    </div>
                                                    <div className='info d-flex flex-middle flex-no-wrap'>
                                                        <p className='rated text-shadow'>
                                                            <strong>{e.year}</strong>
                                                        </p>
                                                        <p className='season-count text-shadow'>
                                                            {e.alternativeName}
                                                        </p>
                                                    </div>
                                                    <div className='genere d-flex flex-no-wrap text-shadow'>
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
                                                            {e.rating.kp}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </section>
    )
}

export default VideoList
