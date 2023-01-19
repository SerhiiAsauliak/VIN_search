import { createAsyncThunk } from '@reduxjs/toolkit'
import { addRequestsToLocalStorage } from '../../components/utils';
import { ALL_VARIABLE_URL, BASE_URL } from '../../config';
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
        // addRequestsToLocalStorage('requests', search.recentRequests)
        const res = await request(ALL_VARIABLE_URL)
        return res  
})

