import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    newMovies: [],
    newSeries: [],
    detailMovie: [],
    movieByFilter: [],
    movieFavorites:[]
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
        setMovieByFavorites(state, action) {
            state.movieFavorites = action.payload
        },
    },
});

export const {setNewMovies, setNewSeries, setDetailMovie,setMovieByFilter,setMovieByFavorites} = moviesSlice.actions;

export default moviesSlice.reducer;
