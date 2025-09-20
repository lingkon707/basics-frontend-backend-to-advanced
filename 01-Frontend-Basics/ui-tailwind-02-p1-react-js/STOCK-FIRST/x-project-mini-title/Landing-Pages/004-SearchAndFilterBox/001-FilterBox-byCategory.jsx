import React, { useState } from "react";

const categories = ["All","Indian", "agro", "canacur", "chips"];

const products = [
  // Agro Products
  {
    name: "Organic Fertilizer",
    date: "2025-07-01",
    category: "agro",
    duration: "12 months",
    img: "https://m.media-amazon.com/images/I/61+FNZ7DptL._UF1000,1000_QL80_.jpg",
  },
  {
    name: "Agro Tool Kit",
    date: "2025-07-03",
    category: "agro",
    duration: "N/A",
    img: "https://tropicalagro.in/wp-content/uploads/2023/09/DION-1024x1024.png",
  },
  {
    name: "Pesticide Bottle",
    date: "2025-07-05",
    category: "agro",
    duration: "24 months",
    img: "https://bizimages.withfloats.com/actual/5a8cf13ba3f9b90be0025abb.jpg",
  },

  // Canacur Products
  {
    name: "Ruchi BBQ 150gm",
    date: "2025-07-10",
    category: "canacur",
    duration: "6 months",
    img: "https://gbegbe.com/images/thumbs/0002574_ruchi-bbq-chanachur-150-gm_510.png",
  },
  {
    name: "Ruchi BBQ 350gm",
    date: "2025-07-12",
    category: "canacur",
    duration: "6 months",
    img: "https://d2n7tchuu1wmsv.cloudfront.net/uploads/12505/products/1589121357_ruchi-bbq-chanachur-350-gm.jpg",
  },
  {
    name: "Sugar-Free Snack",
    date: "2025-07-13",
    category: "canacur",
    duration: "5 months",
    img: "https://wellfoodonline.com/wp-content/uploads/2020/10/Sugar-Free-2-600x600.jpg",
  },

  // Chips
  {
    name: "Lay's Classic",
    date: "2025-07-08",
    category: "chips",
    duration: "8 months",
    img: "https://www.lays.com/sites/lays.com/files//2019-09/Lightly%20Salted%20Classic.png",
  },
  {
    name: "Yellow Diamond Salted",
    date: "2025-07-09",
    category: "chips",
    duration: "7 months",
    img: "https://www.yellowdiamond.in/wp-content/uploads/2024/07/Chips_Classic_Salted-e1722353260254.png",
  },
  {
    name: "Ubuy BBQ",
    date: "2025-07-11",
    category: "chips",
    duration: "10 months",
    img: "https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFUTEZVNVlqNkwuX1NMMTUwMF8uanBn.jpg",
  },
];

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
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
        {filteredProducts.map((product, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
