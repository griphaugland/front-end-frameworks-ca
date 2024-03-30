import React from "react";

function ProductList(products) {
  console.log(products.products.data);
  return (
    <div className="product-container">
      {products.products.data.map((item) => (
        <article
          key={item.id}
          className="flex flex-col items-start justify-between"
        >
          <img
            src={item.image.url}
            alt="product"
            className="w-48 h-48 object-cover"
          />
          <div className="flex items-start gap-2 w-full flex-col justify-between min-h-36">
            <div className="flex items-start flex-col gap-2 w-full">
              <h2 className="text-xl font-bold mt-4">{item.title}</h2>
              <div className="flex gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className=" bg-white outline-blue-950 outline-1 outline text-blue-950 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm font-extralight mb-auto text-gray-500">
              {item.description}
            </p>
          </div>

          <div className="flex items-center gap-2 w-full justify-between">
            <p className="text-xl text-blue-950 font-bold mt-4">{item.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Add to Cart
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProductList;
