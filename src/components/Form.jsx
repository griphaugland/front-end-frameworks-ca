import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form className="flex flex-col checkout-form">
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={customerInfo.name}
        onChange={handleInputChange}
        className="p-2 mt-2"
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={customerInfo.email}
        onChange={handleInputChange}
        className="p-2 mt-2"
      />
      <input
        type="text"
        placeholder="Address"
        name="address"
        value={customerInfo.address}
        onChange={handleInputChange}
        className="p-2 mt-2"
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        value={customerInfo.city}
        onChange={handleInputChange}
        className="p-2 mt-2"
      />
      <input
        type="text"
        placeholder="ZIP Code"
        name="zip"
        value={customerInfo.zip}
        onChange={handleInputChange}
        className="p-2 mt-2"
      />
      <Link
        to="/checkout-success"
        className="checkout-button text-white p-2 rounded mt-4 text-center font-bold mb-6"
      >
        Complete Checkout
      </Link>
    </form>
  );
}

export default Form;
