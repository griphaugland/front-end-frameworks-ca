import React from "react";

function Rating({ value }) {
  const totalStars = 5;

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= value) {
        stars.push(
          <span key={i} className="text-yellow-500 text-lg">
            ★
          </span>
        );
      } else if (i === Math.ceil(value) && !Number.isInteger(value)) {
        stars.push(
          <span key={i} className="text-yellow-500 text-lg">
            ☆
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300 text-lg">
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
      <span className="ml-2 text-gray-500 text-lg">({value})</span>
    </div>
  );
}

export default Rating;
