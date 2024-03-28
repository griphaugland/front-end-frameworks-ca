import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="min-h-svh flex flex-col p-4">
      <Header />
      <main className="flex flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
