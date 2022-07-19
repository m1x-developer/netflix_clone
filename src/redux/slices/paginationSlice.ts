import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    page: 1,
    total: 5
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        setTotal: (state, action) => {
            state.total = action.payload
        }
    }
})

export const {
    setPage,
    setTotal
} = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer