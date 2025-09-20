import React from "react";

// Single product object
export const productObject = {
  id: 101,
  name: "Object Video - MJGRbW4bWD4",
  price: "$13.99",
  date: "2025-07-22",
  img: "https://i.ytimg.com/vi/MJGRbW4bWD4/maxresdefault.jpg",
};

// Array of products
export const productsArray = [
  {
    id: 1,
    name: "Array Video 1 - rsXVW8fTwBw",
    price: "$9.99",
    date: "2025-07-12",
    img: "https://i.ytimg.com/vi/rsXVW8fTwBw/maxresdefault.jpg",
  },
  {
    id: 2,
    name: "Array Video 2 - VD8Gj6RZf7Q",
    price: "$15.00",
    date: "2025-07-15",
    img: "https://i.ytimg.com/vi/VD8Gj6RZf7Q/maxresdefault.jpg",
  },
];

// Card component for product display
const ProductCard = ({ product }) => (
  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden border border-green-200 max-w-xs mx-auto">
    <div className="relative">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-44 object-cover rounded-t-2xl"
        loading="lazy"
      />
      <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md select-none">
        {product.price}
      </span>
    </div>
    <div className="p-4 space-y-2">
      <h2 className="text-md font-bold text-gray-900 truncate">{product.name}</h2>
      <p className="text-xs text-gray-500 font-medium select-none">📅 {product.date}</p>
    </div>
  </div>
);

// Main component showing data from both object and array
export default function ProductList() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-50 to-green-100 p-8 space-y-10">
      {/* Show single product object */}
      <section>
        <h1 className="text-xl font-bold mb-4 text-center">Single Product Object</h1>
        <ProductCard product={productObject} />
      </section>

      {/* Show products array */}
      <section>
        <h1 className="text-xl font-bold mb-4 text-center">Products Array</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {productsArray.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
