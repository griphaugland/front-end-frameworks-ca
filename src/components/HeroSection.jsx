import React from "react";

function HeroSection({ products }) {
  console.log(products);
  return (
    <section className="hero">
      <div className="hero__container">
        {products.data.map((product, index) => (
          <div key={index} className="hero__item">
            <img
              src={product.image}
              alt={product.title}
              className="hero__image"
            />
            <div className="hero__overlay">
              <h1 className="hero__title">{product.title}</h1>
              <p className="hero__description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
