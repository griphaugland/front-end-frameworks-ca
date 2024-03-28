import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Logo from "../assets/logo.svg";

function Header() {
  const [mobile, setMobile] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else if (window.innerWidth > 768) {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else if (window.innerWidth > 768) {
        setMobile(false);
      }
    });
  }, []);
  if (mobile) {
    return (
      <header className="">
        <div className="flex justify-between ">
          <Link to="">
            <img src={Logo} alt="logo" className="w-20" />
          </Link>
          <button
            onClick={() => setToggle(!toggle)}
            className="text-2xl font-bold"
          >
            {toggle ? "X" : "☰"}
          </button>
        </div>
        {toggle && (
          <nav className="text-xl font-bold flex flex-col gap-2 my-4 ">
            <Link className="flex items-center justify-start gap-1" to="">
              <HomeOutlinedIcon />
              Home
            </Link>
            <Link
              className="flex items-center justify-start gap-1"
              to="products"
            >
              <CategoryOutlinedIcon />
              Products
            </Link>
            <Link className="flex items-center justify-start gap-1" to="cart">
              <ShoppingCartOutlinedIcon /> Cart
            </Link>
          </nav>
        )}
      </header>
    );
  } else {
    return (
      <header className="flex flex-row justify-between items-center">
        <Link to="">
          <img src={Logo} alt="logo" className="w-20" />
        </Link>
        <nav className="text-xl font-bold flex flex-row gap-6">
          <Link className="flex items-center justify-start gap-1" to="">
            <HomeOutlinedIcon />
            Home
          </Link>
          <Link className="flex items-center justify-start gap-1" to="products">
            <CategoryOutlinedIcon />
            Products
          </Link>
          <Link className="flex items-center justify-start gap-1" to="cart">
            <ShoppingCartOutlinedIcon /> Cart
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
