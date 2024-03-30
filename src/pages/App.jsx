import { useState, useEffect } from "react";
import "../App.css";
import Loader from "../components/Loader";
import { useProducts } from "../store";
import ProductList from "../components/ProductList";

function App() {
  const error = useProducts((state) => state.error);
  const loading = useProducts((state) => state.loading);
  const products = useProducts((state) => state.products);
  useEffect(() => {
    useProducts.getState().getProducts("https://v2.api.noroff.dev/online-shop");
  }, []);

  if (error) {
    return <>There was an issue getting the products from the server</>;
  }
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default App;
