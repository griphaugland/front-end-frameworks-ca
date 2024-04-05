import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeroSection({ products, productNumber }) {
  const [currentIndex, setCurrentIndex] = useState(productNumber);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
      if (count % 5 === 0) {
        showNextProduct();
      }
    }, 3000);
    return () => clearInterval(interval);
  });
  console.log(products);
  const showNextProduct = () => {
    const nextIndex = (currentIndex + 1) % products.data.length;
    setCurrentIndex(nextIndex);
  };
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__item">
          <img
            src={products.data[currentIndex].image.url}
            alt={products.data[currentIndex].image.alt}
            className="hero__image"
          />
          <div className="hero__overlay">
            <div className="hero__title">
              {products.data[currentIndex].title.toUpperCase()}
            </div>
            <p className="hero__description">
              {products.data[currentIndex].description}
            </p>
            <Link
              className="hero__next z-10"
              to={`products/${products.data[currentIndex].id}`}
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
