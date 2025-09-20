import React, { useState } from "react";

const categories = ["All", "agro", "canacur", "chips"];

const products = [
  // Your products here ...

  
  {
    name: "Ruchi BBQ 150gm",
    date: "2025-07-10",
    category: "canacur",
    duration: "6 months",
    img: "https://gbegbe.com/images/thumbs/0002574_ruchi-bbq-chanachur-150-gm_510.png",
  },
  {
    name: "Sugar-Free Snack",
    date: "2025-07-13",
    category: "canacur",
    duration: "5 months",
    img: "https://wellfoodonline.com/wp-content/uploads/2020/10/Sugar-Free-2-600x600.jpg",
  },
   {
    name: "Organic Fertilizer",
    date: "2025-07-01",
    category: "agro",
    duration: "12 months",
    img: "https://m.media-amazon.com/images/I/61+FNZ7DptL._UF1000,1000_QL80_.jpg",
  }
];

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-50 to-green-100 p-8">
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8 relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-full border border-green-300 px-5 py-3 text-gray-700 text-sm
                     shadow-md focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-transparent
                     transition placeholder:text-green-400"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-400 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition 
              ${
                selectedCategory === cat
                  ? "bg-green-600 border-green-600 text-white shadow-lg shadow-green-300/30"
                  : "bg-white border-green-300 text-green-700 hover:bg-green-100 hover:border-green-400"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden border border-green-200"
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-44 object-cover rounded-t-2xl"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md select-none">
                  {product.category.toUpperCase()}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h2 className="text-md font-bold text-gray-900 truncate">
                  {product.name}
                </h2>
                <div className="flex justify-between text-xs text-gray-500 font-medium select-none">
                  <span>📅 {product.date}</span>
                  <span>⏱️ {product.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg italic mt-20 select-none">
          😞 No products found matching your search.
        </p>
      )}
    </div>
  );
}
