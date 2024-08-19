import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MobileSidebar from "../components/MobileSidebar";

const Layout = () => {
  return (
    <div >
        <Banner />
        <MobileSidebar />
      <div className="flex justify-between h-[100vh]  ">
      <Sidebar />
        <div className=" mx-auto lg:py-8 md:py-8 py-2 flex-col flex lg:w-[80%] md:w-[80%] w-[100%]">
        <div className="ml-auto lg:py-4 md:py-4 py-2 lg:pr-12 md:pr-12 pr-4">
          <Navbar />
        </div>
        <div className="overflow-y-auto lg:px-12 md:px-12 px-4">
          <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
