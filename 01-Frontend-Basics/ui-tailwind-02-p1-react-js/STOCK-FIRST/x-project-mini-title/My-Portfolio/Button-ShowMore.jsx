import React, { useState } from "react";

export default function ProductGallery() {
  const allImages = [
    "https://bengalfoods.ca/wp-content/uploads/2021/12/Pran-BBQ-Chanachur.jpg",
    "https://www.cjssupermarket.com.fj/wp-content/uploads/2021/07/Pran-Barbeque-Chanachur-150gm-Laminated-Pack.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReapEDO92vL7vfkMohzF4MLG3fDoTOlGSq-g&s",
    "https://trustfamilyneeds.com/public/uploads/all/zcWokZPBCvB1IUVQTyj97D4v4YSJDowQEO3Qtlv2.jpeg",
    "https://www.pranfoods.net/sites/default/files/750-750_0003_pran-jhal-chanachur-min.png",
  ];

  const [showAll, setShowAll] = useState(false);
  const imagesToShow = showAll ? allImages : allImages.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 sm:px-8 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-sky-800 mb-4">
          🧺 Pran Chanachur Collection
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          Explore the spicy, crunchy delights of PRAN Chanachur. Click below to reveal more tasty options.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {imagesToShow.map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow hover:shadow-xl transition group"
            >
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-sky-800">PRAN Chanachur #{index + 1}</h3>
                <p className="text-sm text-gray-500 mt-1">Crispy. Spicy. Iconic Bangladeshi taste.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-12 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
          >
            🔽 Show More Products
          </button>
        )}
      </div>
    </div>
  );
}
