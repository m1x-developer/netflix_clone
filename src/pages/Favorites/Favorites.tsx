import './favorites.scss'
import GridWrapper from "../../layouts/grid-wrapper/GridWrapper";
import {useFavourites} from "../../hooks/useFavorite";
import {useEffect, useState} from "react";
import {moviesAPI} from "../../api/api";
import {setMovieByFavorites} from "../../redux/slices/moviesSlice";
import {useDispatch, useSelector} from "react-redux";

const Favorites = () => {

    const {favourites} = useFavourites()
    const dispatch = useDispatch()
    const items = useSelector(state => state.movies.movieFavorites)
    const [loader, setLoader] = useState(true);
    const query = favourites.map(el => `search=${el}&field=id`).join('&')
    
    console.log(items)

    useEffect(() => {
        async function getItems() {
            try {
                if (query) {
                    const movies = await moviesAPI.getFavorites(query)
                    console.log(movies)
                    dispatch(setMovieByFavorites(movies.docs))
                }
            } catch (e) {
                console.log(e)
            } finally {
                setLoader(false);
            }
        }
        getItems()
    }, [favourites])


    return (
        <GridWrapper title={'Избранное'} loader={loader} items={items}/>
    );
};

export default Favorites;
