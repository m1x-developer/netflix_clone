import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    newMovies: [],
    newSeries: [],
    detailMovie:[]
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

    },
});

export const {setNewMovies,setNewSeries,setDetailMovie} = moviesSlice.actions;

export default moviesSlice.reducer;
