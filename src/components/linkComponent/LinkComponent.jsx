import { Link } from "react-router-dom";
import s from "./linkComponent.module.css";

export const LinkComponent = ({ text, link, img, arrowDirection }) => {
  return (
    <div className={s.link}>
      {arrowDirection === "right" ? (
        <>
          <Link to={link}>{text}</Link>
          <img src={img} alt="imgArrow" />
        </>
      ) : (
        <>
          <img src={img} alt="imgArrow" />
          <Link to={link}>{text}</Link>
        </>
      )}
    </div>
  );
};
