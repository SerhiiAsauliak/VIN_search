import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/arrow-left.svg";
import { fetchAllVariables } from "../../store/search/asyncActions";
import { selectSearchResults } from "../../store/search/searchSlice";
import parse from "html-react-parser";
import { Preloader } from "../preloader/preloader";
import { LinkComponent } from "./../linkComponent/LinkComponent";

export const Variables = () => {
  const dispatch = useDispatch();

  const getAllVariabls = async () => {
    try {
      dispatch(fetchAllVariables());
    } catch (error) {
      console.log(error);
    }
  };
  const { allVariables, status } = useSelector(selectSearchResults);
  const list =
    allVariables &&
    allVariables.map((el) => {
      return el.Results.map((el, index) => {
        return (
          <li key={index}>
            <span>
              <Link to={`/variables/${el.ID}`}>{el.Name} : </Link>
            </span>
            {parse(el.Description)}
          </li>
        );
      });
    });

  useEffect(() => {
    getAllVariabls();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === "pending") {
    return <Preloader />;
  }

  return (
    <>
      <LinkComponent
        text={"Back to main page"}
        link={"/"}
        img={arrowLeft}
        arrowDirection={"left"}
      />
      <h4>Click to the variable to see all possible values</h4>
      <ul>{list}</ul>
    </>
  );
};
