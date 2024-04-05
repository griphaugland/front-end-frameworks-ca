import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="min-h-svh flex flex-col ">
      <Header />
      <main className="flex flex-col flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
