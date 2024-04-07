import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-start px-2 md:mt-6">Contact Us</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-4 px-2"
      >
        <div className="mb-4">
          <input
            placeholder="Full name"
            id="fullName"
            {...register("fullName", { required: true, minLength: 3 })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs italic">
              Full name is required and must be at least 3 characters.
            </p>
          )}
        </div>

        <div className="mb-4">
          <input
            placeholder="Subject"
            id="subject"
            {...register("subject", { required: true, minLength: 3 })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs italic">
              Subject is required and must be at least 3 characters.
            </p>
          )}
        </div>

        <div className="mb-4">
          <input
            placeholder="Email"
            id="email"
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              Email is required and must be a valid email address.
            </p>
          )}
        </div>

        <div className="mb-6">
          <textarea
            id="body"
            placeholder="Write your message here..."
            {...register("body", { required: true, minLength: 3 })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
          {errors.body && (
            <p className="text-red-500 text-xs italic">
              Body is required and must be at least 3 characters.
            </p>
          )}
        </div>

        <button
          type="submit"
          className="checkout-button p-2 mt-4 text-center mb-6 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
