import React, { useState } from "react";
import lingkonData from "./lingkon.json";

const InfoGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-8 font-sans">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Panel */}
        <div className="md:w-1/3 bg-gradient-to-b from-indigo-500 via-purple-600 to-pink-600 p-8 flex flex-col space-y-5">
          <h2 className="text-3xl font-extrabold text-white tracking-wide">Lingkon's Info</h2>
          <nav className="flex flex-col space-y-4">
            {lingkonData.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`
                  w-full rounded-xl py-3 px-6 font-semibold text-lg text-white transition-transform duration-300
                  ${activeIndex === idx 
                    ? "bg-blue-600 bg-opacity-30 shadow-lg scale-105" 
                    : "  hover:bg-opacity-20"}
                `}
              >
                {item.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Panel */}
        <div className="md:w-2/3 bg-white p-10 flex flex-col space-y-8">
          {/* Details */}
          <section>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">{activeIndex !== null ? lingkonData[activeIndex].title : "Select a topic"}</h3>
            <p className="text-gray-800 text-lg leading-relaxed min-h-[150px]">
              {activeIndex !== null
                ? lingkonData[activeIndex].description
                : "Please select a topic from the left to see the details here."}
            </p>
          </section>

          {/* Summary */}
          <section>
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Summary</h3>
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 text-indigo-900 text-base whitespace-pre-line min-h-[100px] shadow-inner">
              {activeIndex !== null
                ? lingkonData[activeIndex].output
                : "Summary will appear here."}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InfoGrid;
