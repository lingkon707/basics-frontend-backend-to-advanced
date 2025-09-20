import React, { useState } from "react";
import lingkonData from "./lingkon.json";

const InfoGrid = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="p-6 font-sans bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 min-h-screen">
      {/* Flex Layout */}
      <div className="flex flex-col md:flex-row bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden shadow-2xl min-h-[500px]">
        
        {/* LEFT: Info List */}
        <div className="w-full md:w-1/2 p-6 bg-gradient-to-b from-purple-50 to-blue-50">
          <h2 className="text-2xl font-extrabold mb-6 text-purple-800">Lingkon's Info</h2>
          <div className="space-y-4">
            {lingkonData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveItem(index)}
                className={`
                  w-full py-3 px-6 text-left rounded-xl font-semibold text-lg transition-all duration-300
                  ${activeItem === index 
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-[1.02]" 
                    : "bg-gradient-to-r from-blue-400 to-teal-400 text-white shadow-md hover:shadow-lg hover:scale-[1.02]"}
                `}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* MIDDLE BORDER */}
        <div className="hidden md:block w-px bg-gradient-to-b from-purple-300 via-blue-300 to-teal-300"></div>

        {/* RIGHT: Details + Output */}
        <div className="w-full md:w-1/2 p-6 bg-white/60 flex flex-col gap-6">
          <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-bold mb-4 text-purple-800">Details</h2>
            {activeItem !== null ? (
              <p className="text-gray-700 leading-relaxed">
                {lingkonData[activeItem].description}
              </p>
            ) : (
              <p className="text-gray-500">Select an item to view the details.</p>
            )}
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-bold mb-4 text-purple-800">Summary</h2>
            {activeItem !== null ? (
              <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-lg text-gray-700 whitespace-pre-line">
                {lingkonData[activeItem].output || "Summary will appear here..."}
              </div>
            ) : (
              <p className="text-gray-500">Select an item to see the summary here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoGrid;
