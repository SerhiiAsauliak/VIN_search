import { createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../../config';
import { useHttp } from './../../hooks/useHttp';

export const fetchVinData = createAsyncThunk(
    '@@articles/fetchAllArticles', 
    async (value) => {
        const {request} = useHttp()
        let url = `${BASE_URL}/${value}/?format=json`
        const res = await request(url)
        return res  
})

