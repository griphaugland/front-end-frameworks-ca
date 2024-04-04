import React from "react";

function Error({ errorResponse }) {
  console.log(errorResponse);
  return (
    <div className="error flex flex-col w-full items-center">
      <h1 className="error__title text-xl">Houston, we have a problem!</h1>
      <h5 className="text-lg">
        Error Code: <b>{errorResponse.status}</b>
      </h5>
      <p>Please try again</p>
      <p className="error__message">{errorResponse.statusCode}</p>
    </div>
  );
}

export default Error;
