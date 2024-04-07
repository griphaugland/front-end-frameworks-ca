import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  // Initialize the useForm hook
  const {
    register, // This function allows you to register an input
    handleSubmit, // This function handles form submission
    formState: { errors }, // This object contains form state and errors
  } = useForm();

  // Function to be called on form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full name input */}
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            {...register("fullName", { required: true, minLength: 3 })}
          />
          {errors.fullName && (
            <p>Full name is required and must be at least 3 characters.</p>
          )}
        </div>

        {/* Subject input */}
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            {...register("subject", { required: true, minLength: 3 })}
          />
          {errors.subject && (
            <p>Subject is required and must be at least 3 characters.</p>
          )}
        </div>

        {/* Email input */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <p>Email is required and must be a valid email address.</p>
          )}
        </div>

        {/* Body textarea */}
        <div>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            {...register("body", { required: true, minLength: 3 })}
          ></textarea>
          {errors.body && (
            <p>Body is required and must be at least 3 characters.</p>
          )}
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
