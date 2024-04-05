import React from "react";
import AddToCart from "./addToCartButton.jsx";
import { Link } from "react-router-dom";

function ProductList(products) {
  console.log(products.products.data);

  return (
    <div className="product-container p-4">
      {products.products.data.map((item) => (
        <article
          key={item.id}
          className="flex flex-col items-start justify-between"
        >
          <Link className="w-full h-full" to={`./${item.id}`}>
            <img
              src={item.image.url}
              alt="product"
              className="w-48 h-22 object-cover"
            />
          </Link>
          <div className="flex items-start gap-2 w-full flex-col justify-between min-h-36">
            <div className="flex items-start flex-col gap-2 w-full">
              <Link
                className="text-xl px-3 product-title font-bold mt-4"
                to={`./${item.id}`}
                title={item.title}
              >
                {item.title
                  ? item.title.length > 40
                    ? item.title.substring(0, 40) + "..."
                    : item.title
                  : "No title found"}
              </Link>
              <div className="flex px-3 gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className=" bg-white outline-blue-950 text-blue-950 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p
              className="text-sm font-extralight px-3 mb-auto text-gray-500 truncate"
              title={item.description}
            >
              {item.description
                ? item.description.length > 70
                  ? item.description.substring(0, 70) + "..."
                  : item.description
                : "No description"}
            </p>
          </div>

          <div className="flex px-3 pb-3 gap-2 w-full justify-between mt-1">
            {item.discountedPrice < item.price ? (
              <div className="flex items-start flex-col-reverse gap-0">
                <p className="text-xl current-price text-red-700 font-bold">
                  {item.discountedPrice}
                </p>
                <p className="text-sm text-black line-through">{item.price}</p>
              </div>
            ) : (
              <div className="flex items-start flex-col-reverse gap-0">
                <p className="text-xl flex-end current-price text-black font-bold">
                  {item.discountedPrice}
                </p>
              </div>
            )}
            <div className="flex items-center gap-1 w-full justify-end mt-1">
              <AddToCart product={item} />
              <Link
                to={`./${item.id}`}
                className="secondary-bg primary-button text-black px-4 py-2 rounded-lg"
              >
                View
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProductList;
