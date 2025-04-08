import { NavBar } from "@/components/navbar/NavBar";
import React from "react";
import { Outlet } from "react-router";

const EmplacamientoLayout = () => {
  return (
    <>
    <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default EmplacamientoLayout;