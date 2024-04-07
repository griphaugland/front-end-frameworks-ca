import React from "react";
import { useProducts } from "../store";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import AddToCart from "../components/addToCartButton";

function Cart() {
  const { cart, error, loading, removeFromCart } = useProducts();

  if (error) {
    return <Error errorResponse={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  // Calculate the total price of items in the cart
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col justify-center">
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item flex justify-between items-center my-2 p-2"
            >
              <div className="cart-image-container">
                <img
                  src={item.image.url}
                  alt={item.title}
                  className="cart-item-image"
                />
              </div>

              <div className="cart-item-info w-full">
                <h4 className="font-bold">{item.title}</h4>
                <p>${item.price}</p>
              </div>
              <AddToCart product={item} size="small" />
            </div>
          ))}
          <div className="cart-total mt-4">
            <h3>Total: ${total.toFixed(2)}</h3>
            <Link
              to="checkout"
              className="checkout-button bg-blue-500 text-white p-2 rounded mt-2"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
