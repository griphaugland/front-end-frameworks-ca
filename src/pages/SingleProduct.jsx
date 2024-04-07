import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import AddToCart from "../components/addToCartButton";
import Rating from "../components/Rating";

function SingleProduct() {
  let { id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    id: "placeholder-id",
    title: "-----",
    description: "-----",
    price: 123,
    discountedPrice: 123,
    image: { url: "placeholder-url", alt: "placeholder-alt" },
    rating: 0,
    tags: ["placeholder"],
    reviews: [],
  });

  async function getSingleProduct(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!res.ok) {
        setError({ error: { statusCode: res.statusText, status: res.status } });
      }
      setLoading(false);
      setProduct(data.data);
    } catch (e) {
      setError({ error: { statusCode: e.statusCode, status: e.status } });
    }
  }

  useEffect(() => {
    setLoading(true);
    let url = `https://v2.api.noroff.dev/online-shop/${id}`;
    getSingleProduct(url);
  }, [id]);

  if (error) {
    return <Error errorResponse={error} />;
  }
  if (loading) {
    return <Loader />;
  }
  if (!product) {
    return <Loader />;
  }
  return (
    <div className="max-w-4xl mx-auto my-4 p-4 pt-0 mt-0 rounded-lg">
      <div className="md:flex md:items-center">
        <div className="md:w-1/2">
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h1 className="text-3xl mt-3 font-bold">{product.title}</h1>
          <Rating value={product.rating} />
          <p className="mt-4 text-gray-600">{product.description}</p>
          <div className="mt-4">
            <span
              className={`ml-2 text-lg ${
                product.discountedPrice < product.price
                  ? "line-through"
                  : "font-bold"
              }`}
            >
              {product.price}
            </span>
            {product.discountedPrice < product.price && (
              <span className="ml-2 text-xl font-bold text-red-500">
                {product.discountedPrice}
              </span>
            )}
          </div>
          <div className="mt-4 flex flex-row justify-start gap-3">
            <AddToCart product={product} size={"large"} />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">
          Reviews ({product.reviews.length})
        </h2>
        {product.reviews.length ? (
          product.reviews.map((review) => (
            <div
              key={review.id}
              className="mt-4 bg-white shadow-md rounded-lg p-4"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{review.username}</h3>
                <Rating value={review.rating} />
              </div>
              <p className="text-gray-600 mt-2">{review.description}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
