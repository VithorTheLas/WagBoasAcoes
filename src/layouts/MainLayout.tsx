import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import BackgroundHandler from "../components/BackgroundHandler";

const MainLayout: React.FC = () => {
  return (
    <BackgroundHandler>
      <NavBar />
      <Outlet />
    </BackgroundHandler>
  );
};

export default MainLayout;
