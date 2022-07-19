import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    newMovies: [],
    newSeries: [],
    detailMovie: [],
    movieByFilter: [],
    seriesByFilter: [],
    cartoonsByFilter: [],
    movieFavorites: [],
    searchItems:[]
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setNewMovies(state, action) {
            state.newMovies = action.payload
        },
        setNewSeries(state, action) {
            state.newSeries = action.payload
        },
        setDetailMovie(state, action) {
            state.detailMovie = action.payload
        },
        setMovieByFilter(state, action) {
            state.movieByFilter = action.payload
        },
        setSeriesByFilter(state, action) {
            state.seriesByFilter = action.payload
        },
        setCartoonsByFilter(state, action) {
            state.cartoonsByFilter = action.payload
        },
        setMovieByFavorites(state, action) {
            state.movieFavorites = action.payload
        },
        setMovieBySearch(state, action) {
            state.searchItems = action.payload
        },
    },
});

export const {
    setNewMovies,
    setNewSeries,
    setDetailMovie,
    setMovieByFilter,
    setMovieByFavorites,
    setSeriesByFilter,
    setCartoonsByFilter,
    setMovieBySearch
} = moviesSlice.actions;

export default moviesSlice.reducer;
