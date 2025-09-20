import React from "react";

// Sample product data
const products = [
  {
    id: 1,
    name: "Product A",
    type: "Electronics",
    stock: true,
    expiry: "2026-01-01",
  },
  {
    id: 2,
    name: "Product B",
    type: "Food",
    stock: false,
    expiry: "2025-10-01",
  },
  {
    id: 3,
    name: "Product C",
    type: "Medicine",
    stock: true,
    expiry: "2024-06-01", // expired
  },
];

const isExpired = (dateStr) => {
  const today = new Date();
  const expiry = new Date(dateStr);
  return expiry < today;
};

export default function Main() {
  const handleOrder = (product) => {
    alert(`Ordering "${product.name}" [${product.type}]`);
  };

  const handleUnavailable = (product) => {
    const messages = [];
    if (!product.stock) messages.push("Out of Stock");
    if (isExpired(product.expiry)) messages.push("Expired");
    alert(`Cannot order "${product.name}": ${messages.join(", ")}`);
  };

  const handlePreOrder = (product) => {
    alert(`"${product.name}" is out of stock. Pre-order placed!`);
  };

  const handleChange = (product) => {
    alert(`"${product.name}" is expired. Please update or replace this item.`);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const expired = isExpired(product.expiry);
          const outOfStock = !product.stock;
          const available = product.stock && !expired;
          const unavailable = !available;

          return (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
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
                  Expiry: {product.expiry}
                </p>
              </div>

              {/* Buttons Area */}
              <div className="mt-4 flex flex-wrap gap-2">
                {/* Order */}
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

                {/* Pre-Order */}
                {outOfStock && (
                  <button
                    onClick={() => handlePreOrder(product)}
                    className="py-2 px-4 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
                  >
                    Pre-Order
                  </button>
                )}

                {/* Change */}
                {expired && (
                  <button
                    onClick={() => handleChange(product)}
                    className="py-2 px-4 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold"
                  >
                    Change
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
