import { Outlet } from "react-router-dom";
import { Header } from './../../components/header/Header';

export const SharedLayout = () => {
  return (
    <main className="dashboard">
      <Header />
        <div className="dashboard-page">
            <Outlet />
        </div>
    </main>
  );
};
