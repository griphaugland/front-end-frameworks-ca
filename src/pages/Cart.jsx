import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import Loader from "../components/Loader";
import { useProducts } from "../store";
import ProductList from "../components/ProductList";
import Error from "../components/Error";

function Cart() {
  const error = useProducts((state) => state.error);
  const loading = useProducts((state) => state.loading);
  const products = useProducts((state) => state.products);
  if (error) {
    return <Error errorResponse={error} />;
  }
  if (loading) {
    return <Loader />;
  }

  return <>Cart</>;
}

export default Cart;
