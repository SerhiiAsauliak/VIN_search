import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/arrow-left.svg";
import { fetchAllVariables } from "../../store/search/asyncActions";
import { selectSearchResults } from "../../store/search/searchSlice";
import parse from 'html-react-parser';
import { Preloader } from "../preloader/preloader";

export const Variables = () => {
  const dispatch = useDispatch();

  const getAllVariabls = async () => {
    dispatch(fetchAllVariables());
  }
  const {allVariables, status} = useSelector(selectSearchResults)
  const list = allVariables && allVariables.map(el => {
    return el.Results.map((el, index) => {
      return <p key={index}>
          <span>
            <Link to={`/variables/${el.ID}`}>{el.Name} : </Link>
          </span> 
          {parse(el.Description)}
        </p>
    });
  }) 
  console.log(allVariables);

  useEffect(() => {
    getAllVariabls()
  }, [])

  if(status === 'pending') {
    return <Preloader/>
  }

  return (
    <>
      <div>
        <img style={{ marginRight: "8px" }} src={arrowLeft} alt="arrowLeft" />
        <Link to="/">Back to main page</Link>
      </div>
      <ul>{list}</ul>
    </>
  );
};
