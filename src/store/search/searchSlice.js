import { createSlice } from '@reduxjs/toolkit'
import { fetchVinData } from './asyncActions'

const initialState = {
    searchValue: [],
    status: 'idle',
}

const searchSlice = createSlice({
    name: '@@articles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVinData.pending, (state) => {
                state.status = 'pending';
                state.searchValue = [];
            })
            .addCase(fetchVinData.rejected, (state, action) => {
                state.status = 'rejected';
                state.searchValue = [];
            })
            .addCase(fetchVinData.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.searchValue = action.payload;
            })
    },
})

export const searchReducer = searchSlice.reducer
export const {setSearchValue} = searchSlice.actions

export const selectSearchValue = (state) => state.searchValue;