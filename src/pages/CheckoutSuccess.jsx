import React from "react";
import { Link } from "react-router-dom";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import { useProducts } from "../store";
import { useEffect } from "react";

function Checkout() {
  useEffect(() => {
    localStorage.removeItem("cart");
    useProducts.getState().clearCart();
  }, []);
  return (
    <div className="error flex flex-col w-full h-96 justify-center px-4">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="error__title text-xl  flex gap-3">
          <b className=" text-green-600">
            <DoneOutlineOutlinedIcon />
          </b>
          Successfully Checked Out
        </h1>
        <p className="text-start">Please check your email for confirmation.</p>
        <Link
          to="/"
          className=" mx-auto mt-6 bg-transparent outline outline-2 outline-blue-950 px-4 py-2 rounded text-blue-950 text-center"
        >
          View more
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
