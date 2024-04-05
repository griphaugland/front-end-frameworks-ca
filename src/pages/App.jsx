import { useState, useEffect } from "react";
import "../App.css";
import Loader from "../components/Loader";
import { useProducts } from "../store";
import ProductList from "../components/ProductList";
import HeroSection from "../components/HeroSection";
import Error from "../components/Error";

function App() {
  const error = useProducts((state) => state.error);
  const loading = useProducts((state) => state.loading);
  const products = useProducts((state) => state.products);
  let url = "https://v2.api.noroff.dev/online-shop";
  useEffect(() => {
    useProducts.getState().getProducts(url);
  }, []);

  if (error) {
    return <Error errorResponse={error} />;
  }
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col w-full">
      <HeroSection products={products} />
    </div>
  );
}

export default App;
