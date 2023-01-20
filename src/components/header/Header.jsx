import Alert from "./../alert/Alert";
import { Logo } from "./../logo/Logo";
import s from "./header.module.css";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.headerTop}>
        <div className={s.logo}>
          <Logo />
        </div>
        <h1>Best Servise For Finding Car Information</h1>
      </div>
      <Alert />
    </div>
  );
};
