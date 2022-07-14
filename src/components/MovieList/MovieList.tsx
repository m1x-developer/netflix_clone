import './movieList.scss'
import {Link} from "react-router-dom";
import {Button, LoadingOverlay} from "@mantine/core";
import {Heart, HeartOff} from "tabler-icons-react";
import {FC, useEffect} from "react";
import {IdetailVideo} from "../../@types/detailVideo";
import {useFavourites} from "../../hooks/useFavorite";

interface Props {
    items: IdetailVideo[],
    loader: boolean
}

const MovieList: FC<Props> = ({items, loader}) => {
    const {toggleFavourite, favourites} = useFavourites()

    if (loader) {
        return <LoadingOverlay visible={true}/>
    }

    return (
        <>
            {items.map((e: any) => {
                const isFavourite = favourites.includes(e.id)
                return (
                    <div key={e.id} className='movie-container-item '>
                        <div className='MovieItem_left'>
                            <Link to={`/detailvideo/${e.id}`} className='MovieItem_imageContainer'>
                                <img
                                    src={e.poster.url}
                                    alt=""/>
                            </Link>

                            <div className="MovieItem_text">
                                <div>
                                    <Link className="MovieItem_title" to={`/detailvideo/${e.id}`}>
                                        {e.name}
                                    </Link>
                                </div>
                                <div>
                                    <span className="MovieItem_info">{e.year}
                                        {e.movieLength ? <span>, {e.movieLength} мин.</span> : null}

                                    </span>
                                </div>
                                <div>
                                    <p className="MovieItem_desc">{e.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="MovieItem_right">
                <span className="MovieItem_rating">
                    {e.rating.kp}
                </span>
                            {!isFavourite ? <Button color="red" onClick={() => {
                                    toggleFavourite(e.id)
                                }}>
                                    <Heart
                                        size={30}
                                        strokeWidth={2}
                                        color={'#e6b3ba'}
                                    />

                                </Button>
                                :
                                <Button color="#adb1b4" onClick={() => {
                                    toggleFavourite(e.id)
                                }}>
                                    <HeartOff
                                        size={30}
                                        strokeWidth={2}
                                        color={'#e6b3ba'}
                                    />

                                </Button>}

                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default MovieList;
