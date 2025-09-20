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

// Utility function to check expiry
const isExpired = (dateStr) => {
  const today = new Date();
  const expiry = new Date(dateStr);
  return expiry < today;
};

export default function Main() {
  const handleOrder = (product) => {
    const expired = isExpired(product.expiry);

    if (!product.stock || expired) {
      let msg = `Cannot order "${product.name}". `;
      if (!product.stock) msg += "Out of stock. ";
      if (expired) msg += "Expired.";
      alert(msg);
    } else {
      alert(`Ordering "${product.name}" [${product.type}]`);
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const expired = isExpired(product.expiry);
          const disabled = !product.stock || expired;

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

              <button
                onClick={() => handleOrder(product)}
                disabled={disabled}
                className={`mt-4 w-full py-2 px-4 rounded-lg text-white font-semibold transition
                  ${
                    disabled
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
              >
                {disabled ? "Unavailable" : "Order"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
