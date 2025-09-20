import React from "react";
// import "./SellPage.css"; // optional if you're using Tailwind via CDN or PostCSS setup

export default function SellPage() {
  const products = [
    {
      name: "Exploring Bangladesh: Episode 1",
      image: "https://i.ytimg.com/vi/VD8Gj6RZf7Q/maxresdefault.jpg",
      hoverImage: "https://i.ytimg.com/vi/MJGRbW4bWD4/maxresdefault.jpg",
      status: "available",
    },
    {
      name: "Natural Wonders of Bangladesh",
      image: "https://i.ytimg.com/vi/6oM-BIVZBh8/maxresdefault.jpg",
      hoverImage: "https://www.bangladeshscenictours.com/wp-content/uploads/2024/07/Blog-Cover-min.jpg",
      status: "available",
    },
    {
      name: "Natural Wonders of Bangladesh",
      image: "https://i.ytimg.com/vi/6oM-BIVZBh8/maxresdefault.jpg",
      hoverImage: "https://www.bangladeshscenictours.com/wp-content/uploads/2024/07/Blog-Cover-min.jpg",
      status: "Sold Out",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        🛒 Explore & Book Tours
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group"
          >
            <div className="w-full h-60 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 absolute top-0 left-0"
              />
              <img
                src={product.hoverImage}
                alt={product.name + " Hover"}
                className="w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
              />

              {product.status === "sold out" && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Sold Out</span>
                </div>
              )}
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>
              <span
                className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${
                  product.status === "available"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {product.status === "available" ? "Available" : "Sold Out"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
