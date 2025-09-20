"use client";
import React, { useState } from "react";

const data = [
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
];

const TabImages = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Tabs1 */}
      <div className="flex justify-center space-x-4 mb-6">
        {data.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${
              activeTab === index
                ? "bg-green-600 text-white shadow"
                : "bg-gray-100 text-gray-800 hover:bg-green-100"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Tabs2 */}
      {/* <div className="flex justify-center items-center gap-3 bg-gray-100 p-2 rounded-full shadow-inner max-w-fit mx-auto mb-6">
        {data.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
        ${
          activeTab === index
            ? "bg-green-600 text-white shadow-md"
            : "bg-transparent text-gray-700 hover:bg-green-100"
        }`}
          >
            {item.name}
          </button>
        ))}
      </div> */}

      {/* Tabs 3*/}
      {/* <div className="flex justify-center border-b border-gray-200 mb-6">
        {data.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(index)}
            className={`relative mx-3 px-4 py-2 text-sm font-medium transition duration-300
        ${
          activeTab === index
            ? "text-green-600"
            : "text-gray-500 hover:text-green-600"
        }
      `}
          >
            {item.name}
            {activeTab === index && (
              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-green-600 rounded-full transition-all duration-300" />
            )}
          </button>
        ))}
      </div> */}

      {/* Tabs4 */}
      {/* <div className="flex justify-center border border-gray-300 rounded-lg overflow-hidden max-w-xl mx-auto mb-6 shadow-sm">
        {data.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(index)}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-all duration-200 
        border-r last:border-none
        ${
          activeTab === index
            ? "bg-white text-green-600 border-b-2 border-green-600"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
          >
            {item.name}
          </button>
        ))}
      </div> */}

      {/* Tabs5 */}
      {/* <div className="flex justify-center gap-4 mb-6 backdrop-blur-sm bg-white/30 p-3 rounded-xl shadow-lg border border-gray-200">
        {data.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition duration-300 
        ${
          activeTab === index
            ? "bg-green-500 text-white shadow-md scale-105"
            : "bg-white/60 text-gray-700 hover:ring-2 hover:ring-green-300 hover:text-green-600"
        }`}
          >
            {item.name}
          </button>
        ))}
      </div> */}

      
 {/* Tab 6 */}
{/* <div className="flex justify-center gap-6 mb-6 border-b border-gray-300">
  {data.map((item, index) => (
    <button
      key={item.id}
      onClick={() => setActiveTab(index)}
      className={`relative pb-2 font-semibold text-sm transition-all duration-300
        ${
          activeTab === index
            ? "text-green-600 scale-110"
            : "text-gray-600 hover:text-green-500 hover:scale-105"
        }`}
    >
      {item.name}
       Gradient underline 
      {activeTab === index && (
        <span
          className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-green-400 via-green-600 to-green-400"
        />
      )}
    </button>
  ))}
</div> */}

      

      <div className="flex justify-center gap-6 mb-6 border-b border-gray-300">
        {data.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(index)}
            className={`relative pb-2 font-semibold text-sm transition-all duration-300
        ${
          activeTab === index
            ? "text-green-600 scale-110"
            : "text-gray-600 hover:text-green-500 hover:scale-105"
        }`}
          >
            {item.name}
            {/* Gradient underline */}
            {activeTab === index && (
              <span className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-green-400 via-green-600 to-green-400" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="text-center">
        <img
          src={data[activeTab].img}
          alt={data[activeTab].name}
          className="w-64 h-64 object-cover mx-auto rounded-xl shadow-md mb-4"
        />
        <h2 className="text-xl font-bold text-gray-800">
          {data[activeTab].name}
        </h2>
        <p className="text-green-600 font-semibold">{data[activeTab].price}</p>
        <p className="text-gray-500 text-sm">Date: {data[activeTab].date}</p>
      </div>
    </div>
  );
};

export default TabImages;











