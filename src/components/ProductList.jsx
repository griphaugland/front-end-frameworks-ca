import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

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
                    className=" bg-white outline-blue-950 text-blue-950 px-2 py-1 rounded text-xs"
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

          <div className="flex items-center gap-2 w-full justify-between mt-1">
            <p className="text-xl text-black font-bold">{item.price}</p>
            <div className="flex items-center gap-2 w-full justify-end mt-1">
              <button className=" secondary-button px-4 py-2 rounded-3xl">
                <AddShoppingCartIcon />
              </button>
              <button className="secondary-bg primary-button text-black px-4 py-2 rounded-3xl">
                View
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProductList;
