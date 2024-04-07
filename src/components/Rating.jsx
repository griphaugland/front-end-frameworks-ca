import React from "react";

function Rating({ value }) {
  const totalStars = 5;

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= value) {
        stars.push(
          <span key={i} className="text-yellow-500">
            ★
          </span>
        );
      } else if (i === Math.ceil(value) && !Number.isInteger(value)) {
        stars.push(
          <span key={i} className="text-yellow-500">
            ☆
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ☆
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="rating">
      {renderStars()}
      <span className="ml-2 text-sm text-gray-500">({value})</span>
    </div>
  );
}

export default Rating;
