import { createSlice } from '@reduxjs/toolkit'
import { fetchAllVariables, fetchVinData } from './asyncActions'

const initialState = {
    recentRequests: [],
    searchResults: [],
    allVariables: [],
    status: 'idle',
    responseMessage: ''
}

const searchSlice = createSlice({
    name: '@@articles',
    initialState,
    reducers: {
        setRecentRequest: (state, action) => {
            state.recentRequests.unshift(action.payload)
        }
    },
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
                state.searchResults.push(action.payload);
                state.responseMessage = action.payload.Message;
            })
            .addCase(fetchAllVariables.pending, (state) => {
                state.status = 'pending';
                state.allVariables = [];
            })
            .addCase(fetchAllVariables.rejected, (state, action) => {
                state.status = 'rejected';
                state.allVariables = [];
            })
            .addCase(fetchAllVariables.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.allVariables.push(action.payload);
                state.responseMessage = action.payload.Message;
            })
    },
})

export const searchReducer = searchSlice.reducer
export const {setRecentRequest} = searchSlice.actions

export const selectSearchResults = (state) => state.search;