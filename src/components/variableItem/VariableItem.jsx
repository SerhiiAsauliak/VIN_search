import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectVariableItem } from "../../store/search/searchSlice";
import { useEffect } from "react";
import { fetchVariableItem } from "../../store/search/asyncActions";
import { selectSearchResults } from "../../store/search/searchSlice";
import arrowLeft from '../../assets/arrow-left.svg'
import { Preloader } from '../preloader/preloader';
import { LinkComponent } from './../linkComponent/LinkComponent';

export const VariableItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { Results } = useSelector(selectVariableItem);
  const { status } = useSelector(selectSearchResults);

  const variableItemInfo =
    Results &&
    Results.map((el, index) => {
      return <li key={index}><p>{`${el.Id}. ${el.ElementName}: ${el.Name}`}</p></li>;
    });

  const getVariable = async () => {
    try {
      if (id) {
        dispatch(fetchVariableItem(id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVariable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (status === "pending") {
    return <Preloader/>;
  }
  
  return (
    <>
     <div className="">
        <h4>Full variable info:</h4>
        <LinkComponent text={'Back'} link={'/variables'} arrowDirection={'left'} img={arrowLeft}/>
     </div>
      {variableItemInfo && variableItemInfo.length > 0 
        ? <ul>{variableItemInfo}</ul>
        : <p>No information about this variable...</p>
      }
    </>
  );
};
