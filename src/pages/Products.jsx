import { useState, useEffect } from "react";
import "../App.css";
import Loader from "../components/Loader";
import { useProducts } from "../store";
import ProductList from "../components/ProductList";
import Error from "../components/Error";
import Search from "../components/Search";

function Products() {
  const error = useProducts((state) => state.error);
  const loading = useProducts((state) => state.loading);
  const products = useProducts((state) => state.products);
  useEffect(() => {
    useProducts.getState().getProducts("https://v2.api.noroff.dev/online-shop");
  }, []);

  if (error) {
    return <Error errorResponse={error} />;
  }
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Search />
      <ProductList products={products} />
    </>
  );
}

export default Products;
