import React, { useState } from "react";

// Product data with image + stock for alternatives
const products = [
  {
    id: 1,
    name: "Product A",
    type: "Electronics",
    stock: true,
    expiry: "2026-01-01",
    image:
      "https://www.pranfoods.net/sites/default/files/2022-12/pranup-new-kv-web-design-1920x900-c.jpeg",
    alternatives: [],
  },
  {
    id: 2,
    name: "Product B",
    type: "Food",
    stock: false,
    expiry: "2025-10-01",
    image:
      "https://www.pranfoods.net/sites/default/files/2023-09/Banner-min.png",
    alternatives: [
      {
        name: "Product B1",
        type: "Food - Alt 1",
        image:
          "https://www.pranfoods.net/sites/default/files/2023-08/BEVERAGE.jpeg",
        stock: true,
      },
      {
        name: "Product B2",
        type: "Food - Alt 2",
        image:
          "https://www.bombaysweetsbd.com/images/slider/slide-05.jpg",
        stock: true,
      },
      {
        name: "Product B3",
        type: "Food - Alt 3",
        image:
          "https://www.tasteofhome.com/wp-content/uploads/2018/06/tkp-tortilla-chipsArtboard-2.jpg",
        stock: true,
      },
    ],
  },
  {
    id: 3,
    name: "Product C",
    type: "Medicine",
    stock: true,
    expiry: "2024-06-01",
    image:
      "https://www.dccbazar.com.bd/images/detailed/8/71Drb_lWlfL._SL1500_.jpg",
    alternatives: [],
  },
];

const isExpired = (dateStr) => {
  const today = new Date();
  const expiry = new Date(dateStr);
  return expiry < today;
};

export default function Main() {
  const [productOverrides, setProductOverrides] = useState({});

  const handleOrder = (product) => {
    alert(`Ordering "${product.name}" [${product.type}]`);
  };

  const handleUnavailable = (product) => {
    alert(`Cannot order "${product.name}": Out of Stock or Expired`);
  };

  const handleViewAlternative = (product) => {
    const currentIdx = productOverrides[product.id]?.index || 0;
    const nextIdx = (currentIdx + 1) % product.alternatives.length;

    const nextAlt = product.alternatives[nextIdx];
    setProductOverrides((prev) => ({
      ...prev,
      [product.id]: {
        index: nextIdx,
        name: nextAlt.name,
        type: nextAlt.type,
        image: nextAlt.image,
        stock: nextAlt.stock,
      },
    }));
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((originalProduct) => {
          const override = productOverrides[originalProduct.id];
          const product = {
            ...originalProduct,
            ...override,
          };

          const expired = isExpired(originalProduct.expiry); // Keep expiry from original product
          const outOfStock = override?.hasOwnProperty("stock")
            ? !override.stock
            : !originalProduct.stock;

          const available =
            (override?.stock ?? originalProduct.stock) && !expired;

          return (
            <div
              key={originalProduct.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between"
            >
              {/* Image */}
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-md h-48 w-full object-cover mb-4"
                />
              )}

              {/* Info */}
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">Type: {product.type}</p>
                <p
                  className={`mt-2 font-medium ${
                    product.stock ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {product.stock ? "In Stock" : "Out of Stock"}
                </p>
                <p
                  className={`text-sm ${
                    expired ? "text-red-600 font-semibold" : "text-gray-500"
                  }`}
                >
                  Expiry: {originalProduct.expiry}
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex flex-wrap gap-2">
                {/* Order / Unavailable */}
                <button
                  onClick={() =>
                    available
                      ? handleOrder(product)
                      : handleUnavailable(product)
                  }
                  className={`py-2 px-4 rounded-lg font-semibold transition
                    ${
                      available
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                  disabled={!available}
                >
                  {available ? "Order" : "Unavailable"}
                </button>

                {/* View Alternative */}
                {originalProduct.stock === false &&
                  originalProduct.alternatives.length > 0 && (
                    <button
                      onClick={() => handleViewAlternative(originalProduct)}
                      className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold"
                    >
                      View Alternative
                    </button>
                  )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
