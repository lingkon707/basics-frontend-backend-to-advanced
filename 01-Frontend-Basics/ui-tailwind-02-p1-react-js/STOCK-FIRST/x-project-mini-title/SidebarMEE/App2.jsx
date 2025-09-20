import React, { useState } from "react";
import lingkonData from "./lingkon.json";

const InfoGrid = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="p-8 font-sans bg-gray-100 min-h-screen flex items-center justify-center">
      {/* Flex Container */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xl">
        
        {/* LEFT: Info List */}
        <div className="w-full md:w-5/12 p-6 bg-gray-50">
          <h2 className="text-lg font-bold mb-5 text-gray-800">Lingkon's Info</h2>
          <div className="space-y-3">
            {lingkonData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveItem(index)}
                className={`
                  w-full py-3 px-5 text-left rounded-lg font-medium text-base transition-all duration-200
                  ${activeItem === index 
                    ? "bg-blue-600 text-white shadow-sm" 
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"}
                `}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* MIDDLE BORDER */}
        <div className="hidden md:block w-px bg-gray-200"></div>

        {/* RIGHT: Details + Summary */}
        <div className="w-full md:w-7/12 p-6 bg-white flex flex-col gap-5">
          
          {/* Details Card */}
          <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-base font-semibold mb-3 text-gray-800">Details</h2>
            {activeItem !== null ? (
              <p className="text-gray-700 text-sm leading-relaxed">
                {lingkonData[activeItem].description}
              </p>
            ) : (
              <p className="text-gray-400 text-sm">Select an item to view the details.</p>
            )}
          </div>

          {/* Summary Card */}
          <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-base font-semibold mb-3 text-gray-800">Summary</h2>
            {activeItem !== null ? (
              <div className="p-3 bg-white border border-gray-200 rounded-md text-gray-700 text-sm whitespace-pre-line">
                {lingkonData[activeItem].output || "Summary will appear here..."}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">Select an item to see the summary here.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default InfoGrid;
