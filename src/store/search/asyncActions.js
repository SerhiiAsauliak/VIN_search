import { createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../../config';


export const fetchVinData = createAsyncThunk(
    '@@articles/fetchAllArticles', 
    async (value) => {
        let url = `${BASE_URL}/${value}/?format=json`
        const res = await fetch(url)
        console.log(res.json);
        return res.json
})

