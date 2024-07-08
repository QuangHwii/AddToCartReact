import React from "react";
import { useSelector } from "react-redux";
import Header from "./header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);
  return (
    <div className="bg-zinc-200">
      <main
        className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-56"}`}
      >
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout
