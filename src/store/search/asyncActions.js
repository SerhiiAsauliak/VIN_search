import { createAsyncThunk } from '@reduxjs/toolkit'
import { addRequestsToLocalStorage } from '../../utils';
import { ALL_VARIABLE_URL, BASE_URL, VARIABLE_ITEM_URL } from '../../config';
import { useHttp } from './../../hooks/useHttp';
import { setRecentRequest } from './searchSlice';

export const fetchVinData = createAsyncThunk(
    '@@articles/fetchAllArticles', 
    async (value, {dispatch, getState}) => {
        const {request} = useHttp()
        dispatch(setRecentRequest(value))
        const {search} = getState()
        addRequestsToLocalStorage('requests', search.recentRequests)
        let url = `${BASE_URL}/${value}/?format=json`
        const res = await request(url)
        return res  
})

export const fetchAllVariables = createAsyncThunk(
    '@@articles/fetchAllVariables', 
    async () => {
        const {request} = useHttp()
        const res = await request(ALL_VARIABLE_URL)
        return res  
})

export const fetchVariableItem = createAsyncThunk(
    '@@articles/fetchVariableItem', 
    async (value) => {
        const {request} = useHttp()
        let url = `${VARIABLE_ITEM_URL}/${value}?format=json`
        const res = await request(url)
        return res  
})

