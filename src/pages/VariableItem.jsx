import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectVariableItem } from '../store/search/searchSlice';
import { useEffect } from 'react';
import { fetchVariableItem } from '../store/search/asyncActions';
import { selectSearchResults } from './../store/search/searchSlice';

export const VariableItem = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {Results} = useSelector(selectVariableItem)
  const {status} = useSelector(selectSearchResults)
 
  const variableItem = Results && Results.map((el, index) => {
    return <li key={index}>
      {`${el.Id}. ${el.ElementName}: ${el.Name}`}
    </li>
 })

  const getVariable  = async () => {
    try {
      if(id) {
        dispatch(fetchVariableItem(id))
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
      getVariable()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    if(status === 'pending') {
      return <h3>Loading...</h3>
    }

  return (
    <>
      <h3>Full variable info:</h3>
     {variableItem && <ul>{variableItem}</ul>}
    </>
  );
};