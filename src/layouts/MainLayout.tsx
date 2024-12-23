import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const MainLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
