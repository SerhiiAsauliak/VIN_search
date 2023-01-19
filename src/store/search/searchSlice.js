import { createSlice } from '@reduxjs/toolkit'
import { fetchAllVariables, fetchVariableItem, fetchVinData } from './asyncActions'

const initialState = {
    recentRequests: [],
    searchResults: [],
    allVariables: [],
    variableItem: {},
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
                state.responseMessage = '';
            })
            .addCase(fetchVinData.rejected, (state, action) => {
                state.status = 'rejected';
                state.searchResults = [];
                state.responseMessage = action.payload.Message;
            })
            .addCase(fetchVinData.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.searchResults.push(action.payload);
                state.responseMessage = action.payload.Message;
            })
            // fetchAllVariables
            .addCase(fetchAllVariables.pending, (state) => {
                state.status = 'pending';
                state.allVariables = [];
                state.responseMessage = '';
            })
            .addCase(fetchAllVariables.rejected, (state, action) => {
                state.status = 'rejected';
                state.allVariables = [];
                state.responseMessage = action.payload.Message;
            })
            .addCase(fetchAllVariables.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.allVariables.push(action.payload);
                state.responseMessage = action.payload.Message;
            })
            // fetchVariableItem
            .addCase(fetchVariableItem.pending, (state) => {
                state.status = 'pending';
                state.variableItem = {};
                state.responseMessage = '';
            })
            .addCase(fetchVariableItem.rejected, (state, action) => {
                state.status = 'rejected';
                state.variableItem = {};
                state.responseMessage = action.payload.Message;
            })
            .addCase(fetchVariableItem.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.variableItem = action.payload;
                state.responseMessage = action.payload.Message;
            })
    },
})

export const searchReducer = searchSlice.reducer
export const {setRecentRequest} = searchSlice.actions

export const selectSearchResults = (state) => state.search;
export const selectVariableItem = (state) => state.search.variableItem;