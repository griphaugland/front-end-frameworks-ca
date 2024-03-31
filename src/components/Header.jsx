import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/logo.svg";
import { useProducts } from "../store";

function Header() {
  const [mobile, setMobile] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [animate, setAnimate] = useState(false);
  const cart = useProducts((state) => state.cart);

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
      <header className="top-0 w-full sticky p-4 bg-white">
        <div className="flex justify-between">
          <Link to="">
            <img src={Logo} alt="logo" className="w-20" />
          </Link>
          <div className="flex items-center gap-6">
            <Link className="carticon-container" to="cart">
              <span className="cart-icon-number">
                {cart.length > 0 ? cart.length : 0}
              </span>
              <ShoppingCartOutlinedIcon />
            </Link>
            <button
              onClick={() => {
                setToggle(!toggle);
                setAnimate(!toggle);
              }}
              className="text-2xl font-bold"
            >
              {toggle ? (
                <CloseIcon style={{ fontSize: "2rem" }} />
              ) : (
                <MenuIcon style={{ fontSize: "2rem" }} />
              )}
            </button>
          </div>
        </div>
        {toggle && (
          <nav
            className={
              "text-xl font-bold flex flex-col gap-2 my-4 " +
              (animate ? "animateMenu" : "")
            }
          >
            <Link
              className="flex items-center justify-start gap-1 min-w-48"
              to=""
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <HomeOutlinedIcon style={{ fontSize: "1.5rem" }} />
              Home
            </Link>
            <Link
              className="flex items-center justify-start gap-1 min-w-48"
              to="products"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <CategoryOutlinedIcon style={{ fontSize: "1.5rem" }} />
              Products
            </Link>
            <Link
              className="flex items-center justify-start gap-1 min-w-48"
              to="cart"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <ShoppingCartOutlinedIcon style={{ fontSize: "1.5rem" }} /> Cart
            </Link>
          </nav>
        )}
      </header>
    );
  } else {
    return (
      <header className="flex flex-row justify-between items-center p-4">
        <Link to="">
          <img src={Logo} alt="logo" className="w-20" />
        </Link>
        <nav className="text-l font-bold flex flex-row gap-6 mr-6">
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
