import React, { useEffect } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useProducts } from "../store";

function AddToCart({ product }) {
  const cart = useProducts((state) => state.cart);
  const addToCart = useProducts((state) => state.addToCart);
  const removeFromCart = useProducts((state) => state.removeFromCart);

  useEffect(() => {
    const previousData = localStorage.getItem("cart");
    if (previousData) {
      const parsedData = JSON.parse(previousData);
    }
  }, [addToCart, removeFromCart, product]);

  function handleRemoveFromCart() {
    removeFromCart(product);
    const updatedCart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function handleAddToCart() {
    addToCart(product);
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  if (cart.find((item) => item.id === product.id)) {
    return (
      <button
        onClick={handleRemoveFromCart}
        className="secondary-button px-4 py-2 rounded"
      >
        <RemoveShoppingCartIcon className="remove-from-cart" />
      </button>
    );
  } else {
    return (
      <button
        onClick={handleAddToCart}
        className="secondary-button px-4 py-2 rounded-lg"
      >
        <AddShoppingCartIcon />
      </button>
    );
  }
}

export default AddToCart;
