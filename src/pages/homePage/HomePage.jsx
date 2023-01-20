import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {SearchContainer} from '../../components/searchContainer/SearchContainer';
import { getRequestsFromLocalStorage } from '../../utils';
import VariablesList from '../../components/variablesList/VariablesList';
import { setRecentRequest } from '../../store/search/searchSlice';

export const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      const requestsFromLocalStorage = getRequestsFromLocalStorage('requests')
      if(requestsFromLocalStorage) {
        requestsFromLocalStorage.reverse().map(el => {
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
