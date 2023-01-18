import { configureStore } from "@reduxjs/toolkit";
import {searchReducer} from './search/searchSlice'

export const store = configureStore({
    reducer: {
        search: searchReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
});

