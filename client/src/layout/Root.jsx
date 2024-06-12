import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
