import React, { useState } from "react";

// 🟢 Your full products array here (same as before)
const products = [
  {
    id: 1,
    name: "Fertilizer Pro 1",
    price: "$12.99",
    date: "2025-07-01",
    img: "https://m.media-amazon.com/images/I/61+FNZ7DptL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    name: "Crop Booster 2",
    price: "$10.50",
    date: "2025-07-02",
    img: "https://m.media-amazon.com/images/I/61j-lpgB9+L._UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Soil Enhancer 3",
    price: "$8.99",
    date: "2025-07-03",
    img: "https://m.media-amazon.com/images/I/61BGLZw9P1L._UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Agro Special 4",
    price: "$14.99",
    date: "2025-07-04",
    img: "https://bizimages.withfloats.com/actual/5a8cf13ba3f9b90be0025abb.jpg",
  },
  {
    id: 5,
    name: "Plant Shield 5",
    price: "$9.75",
    date: "2025-07-05",
    img: "https://tropicalagro.in/wp-content/uploads/2023/09/DION-1024x1024.png",
  },
  {
    id: 6,
    name: "Organic Growth 6",
    price: "$11.25",
    date: "2025-07-06",
    img: "https://tropicalagro.in/wp-content/uploads/2023/09/DION-1024x1024.png",
  },
  {
  id: 7,
  name: "Arpita Agro Booster",
  price: "$12.00",
  date: "2025-07-07",
  img: "https://www.arpitaagro.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-02-at-4.45.21-PM.jpeg",
},
{
  id: 8,
  name: "MI Lifestyle Fertilizer",
  price: "$10.50",
  date: "2025-07-08",
  img: "https://www.milifestylemarketing.com/Assets/Images/MI-Lifestyle_Blog-Banner_1280x540_29-Jan_001.PNG",
},
{
  id: 9,
  name: "Natural Agro Formula",
  price: "$9.99",
  date: "2025-07-09",
  img: "https://4.imimg.com/data4/VB/JI/MY-22345174/natural-agro-products.png",
},
{
  id: 10,
  name: "Premium Plant Mix",
  price: "$13.49",
  date: "2025-07-10",
  img: "https://5.imimg.com/data5/SELLER/Default/2025/4/500041379/OV/PL/BD/139021501/agro-products.jpg",
},
{
  id: 11,
  name: "Shyam Crop Max",
  price: "$14.00",
  date: "2025-07-11",
  img: "https://www.shyamgroup.org/images/slider/slider3.jpg",
},
{
  id: 12,
  name: "Shyam Growth Plus",
  price: "$11.90",
  date: "2025-07-12",
  img: "https://www.shyamgroup.org/images/agro/003.jpg",
},
{
  id: 13,
  name: "Janatha Agro ProPack",
  price: "$15.00",
  date: "2025-07-13",
  img: "https://www.janathaagro.com/cdn/shop/files/1200x400_copy.jpg?v=1718696048&width=3840",
}

];

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border">
    <img
      src={product.img}
      alt={product.name}
      className="w-full h-44 object-cover"
    />
    <div className="p-3 space-y-1">
      <h2 className="font-semibold text-gray-800 text-sm truncate">{product.name}</h2>
      <p className="text-xs text-gray-500">📅 {product.date}</p>
      <p className="text-xs text-green-600 font-medium">{product.price}</p>
    </div>
  </div>
);

export default function App() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = products.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-tr from-green-50 to-green-100 min-h-screen">
      <h1 className="text-xl font-bold mb-6 text-center text-green-700">Agro Product Store</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {currentItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination with Prev/Next */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {/* Prev */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-1 rounded-md text-sm font-medium border transition ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
          }`}
        >
          ◀ Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-md text-sm font-medium border transition ${
              currentPage === index + 1
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-1 rounded-md text-sm font-medium border transition ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
          }`}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
