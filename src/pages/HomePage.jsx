import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {SearchContainer} from '../components/searchContainer/SearchContainer';
import { getRequestsFromLocalStorage } from '../components/utils';
import VariablesList from '../components/VariablesList';
import { setRecentRequest } from '../store/search/searchSlice';

export const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      const requestsFromLocalStorage = getRequestsFromLocalStorage('requests')
      if(requestsFromLocalStorage) {
        requestsFromLocalStorage.map(el => {
          return dispatch(setRecentRequest(el))
        })
      }
  }, [])

  return (
    <>
      <SearchContainer/>
      <VariablesList/>
    </>
  );
};
