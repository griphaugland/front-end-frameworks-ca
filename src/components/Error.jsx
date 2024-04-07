import React from "react";

function Error({ errorResponse }) {
  console.log(errorResponse);
  return (
    <div className="error flex flex-col w-full h-96 justify-center px-4">
      <h1 className="error__title text-xl">Houston, we have a problem!</h1>
      <h5 className="text-lg">
        Error Code: <b>{errorResponse.status}</b>
      </h5>
      <p className="error__message">{errorResponse.statusCode}</p>
    </div>
  );
}

export default Error;
