import React from "react";
import fyyU from "../assets/fyyU.gif";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="error flex flex-col w-full h-96 justify-center px-4">
      <h1 className="error__title text-xl">
        <b>404</b> This is not the page you are looking for.
      </h1>
      <img src={fyyU} />
      <p className="text-start">Please check your link</p>
      <Link
        to="/"
        className=" mx-auto mt-6 bg-transparent outline outline-2 outline-blue-950 px-4 py-2 rounded text-blue-950 text-center"
      >
        Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
