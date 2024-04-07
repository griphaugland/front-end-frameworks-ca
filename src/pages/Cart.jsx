import React, { useState } from "react";
import { useProducts } from "../store";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import AddToCart from "../components/addToCartButton";
import Form from "../components/Form";

function Checkout() {
  const { cart, error, loading, removeFromCart } = useProducts();

  const total = cart.reduce(
    (acc, item) =>
      acc +
      (item.discountedPrice < item.price ? item.discountedPrice : item.price),
    0
  );

  if (error) {
    return <Error errorResponse={error} />;
  }

  return (
    <div className="checkout-page md:mt-6 flex flex-col md:flex-row">
      <div className="cart-overview mx-2 px-4 w-full md:w-1/2">
        {cart.length === 0 ? (
          <div className="flex flex-col justify-center">
            <h2 className="text-xl text-start border-b-2 border-blue-950 py-2">
              Your Cart ({cart.length})
            </h2>
            <h3 className="text-center mt-4 text-gray-500">
              Your cart is empty
            </h3>
            <div className="border-t-2 border-blue-950 py-2 mx-2 flex-col cart-total mt-4 flex">
              <h3 className="text-xl font-bold">Total: $0.00</h3>
              <Link
                to="/products"
                className="checkout-button text-white p-2 rounded mt-2 text-center font-bold mb-6"
              >
                Find Products
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col mx-2  justify-center">
            <h2 className="text-xl font-bold text-start border-b-2 border-blue-950 py-2">
              Your Cart ({cart.length})
            </h2>
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
                <div className="cart-item-info-wrapper">
                  <div className="cart-item-info flex flex-col w-full px-3">
                    <h4 className="font-bold">{item.title}</h4>
                    <span
                      className={`text-lg ${
                        item.discountedPrice < item.price ? "line-through" : ""
                      }`}
                    >
                      ${item.price}
                    </span>
                    {item.discountedPrice < item.price && (
                      <span className="text-xl font-bold text-red-500">
                        ${item.discountedPrice}
                      </span>
                    )}
                  </div>
                  <AddToCart product={item} size="small" />
                </div>
              </div>
            ))}
            <div className="border-t-2 border-blue-950 py-2 flex-col cart-total mt-4">
              <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
            </div>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout-info w-full mx-2 px-4 md:w-1/2 mt-8 md:mt-0 md:ml-4">
          <h2 className="text-xl text-start font-bold py-2">
            Checkout Information
          </h2>
          <Form />
        </div>
      )}
    </div>
  );
}

export default Checkout;
