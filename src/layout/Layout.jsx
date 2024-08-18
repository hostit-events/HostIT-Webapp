import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Layout = () => {
  return (
    <div >
        <Banner />
      <div className="flex justify-between h-[100vh]  ">
      <Sidebar />
        <div className=" mx-auto py-8 flex-col flex w-[80%]">
        <div className="ml-auto py-4 pr-12">
          <Navbar />
        </div>
        <div className="overflow-y-auto px-12">
          <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
