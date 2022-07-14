import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import moviesReducer from "./slices/moviesSlice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export function useAppDispatch() {
    return useDispatch<AppDispatch>()
}