import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import arrowLeft from "../assets/arrow-left.svg";
import { fetchAllVariables } from "../store/search/asyncActions";
import { selectSearchResults } from "../store/search/searchSlice";
import parse from 'html-react-parser';

export const Variables = () => {
  const dispatch = useDispatch();

  const getAllVariabls = async () => {
    dispatch(fetchAllVariables());
  }
  const {allVariables} = useSelector(selectSearchResults)
  const list = allVariables && allVariables.map(el => {
    return el.Results.map(value => {
      return <p>
          <span>{value.Name} : </span> 
          {parse(value.Description)}
        </p>
    });
  }) 
  console.log(allVariables);

  useEffect(() => {
    getAllVariabls()
  }, [])

  return (
    <>
      <div>
        <img style={{ marginRight: "8px" }} src={arrowLeft} alt="arrowLeft" />
        <Link to="/">Back to main</Link>
      </div>
      <ul>{list}</ul>
    </>
  );
};
