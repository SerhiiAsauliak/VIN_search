import { createSlice } from '@reduxjs/toolkit'
import { fetchVinData } from './asyncActions'

const initialState = {
    searchValue: '',
    searchResults: [],
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
                state.searchResults = [];
            })
            .addCase(fetchVinData.rejected, (state, action) => {
                state.status = 'rejected';
                state.searchResults = [];
            })
            .addCase(fetchVinData.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.searchResults = action.payload;
            })
    },
})

export const searchReducer = searchSlice.reducer

export const selectSearchValue = (state) => state.searchValue;