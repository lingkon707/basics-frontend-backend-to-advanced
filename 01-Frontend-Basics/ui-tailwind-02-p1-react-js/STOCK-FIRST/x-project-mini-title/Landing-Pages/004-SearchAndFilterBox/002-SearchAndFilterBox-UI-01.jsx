import React, { useState } from "react";

const categories = ["All", "agro", "canacur",, "Indian"];

const products = [
  // (Your products array here...)

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

  // Filter by category and search term (case insensitive)
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200
              ${
                selectedCategory === cat
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-800 hover:bg-green-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-1">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">📅 {product.date}</p>
                <p className="text-sm text-gray-600">📂 {product.category}</p>
                <p className="text-sm text-gray-600">⏱️ {product.duration}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
