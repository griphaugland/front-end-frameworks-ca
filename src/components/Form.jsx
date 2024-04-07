import React, { useState } from "react";
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
    <form className="w-full mx-auto flex flex-col   px-2">
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={customerInfo.name}
        onChange={handleInputChange}
        className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={customerInfo.email}
        onChange={handleInputChange}
        className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
      />
      <input
        type="text"
        placeholder="Address"
        name="address"
        value={customerInfo.address}
        onChange={handleInputChange}
        className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        value={customerInfo.city}
        onChange={handleInputChange}
        className="shadow appearance-none border rounded w-full py-2 mb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
      />
      <input
        type="text"
        placeholder="ZIP Code"
        name="zip"
        value={customerInfo.zip}
        onChange={handleInputChange}
        className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
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
