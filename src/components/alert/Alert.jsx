import { useSelector } from "react-redux";
import { selectSearchResults } from "./../../store/search/searchSlice";

const Alert = () => {
  const { responseMessage } = useSelector(selectSearchResults);
  console.log(responseMessage);

  return (
    <div
      className={responseMessage ? "results-message show" : "results-message"}
    >
      {responseMessage}
    </div>
  );
};
export default Alert;
