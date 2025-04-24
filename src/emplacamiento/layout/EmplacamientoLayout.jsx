import { NavBar } from "@/components/navbar/NavBar";
import React from "react";
import { Outlet } from "react-router";

const EmplacamientoLayout = () => {
  return (
    <>
      <div className="flex min-h-screen overflow-hidden">
        <NavBar />
        <main className="flex-1 overflow-auto bg-gray-50 p-6 box-border">
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default EmplacamientoLayout;
