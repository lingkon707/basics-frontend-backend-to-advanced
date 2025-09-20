import React from "react";
import { FaBolt, FaWind } from "react-icons/fa"; // Using icons for visual representation

const OperationsSection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Clean Energy Procurement */}
        <div className="flex items-center p-6 bg-yellow-100 rounded-xl shadow-md space-x-4">
          <div className="text-4xl text-yellow-600">
            <FaWind />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Procured over 8 GW of clean energy
            </h3>
            <p className="text-lg text-gray-600 mt-2">
              In 2024, we signed contracts to purchase over 8 GW of clean energy—more than in any prior year.
            </p>
            <a href="#" className="text-green-600 hover:text-green-800 font-medium mt-4 inline-block">
              Explore our operations
            </a>
          </div>
        </div>

        {/* Right Section - TPU Power Efficiency */}
        <div className="flex items-center p-6 bg-green-100 rounded-xl shadow-md space-x-4">
          <div className="text-4xl text-green-600">
            <FaBolt />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Improved TPU power efficiency by 30x
            </h3>
            <p className="text-lg text-gray-600 mt-2">
              Ironwood—the first Google TPU (our custom AI chips) designed to power thinking, inferential AI models at scale—is nearly 30 times more power efficient than our first Cloud TPU from 2018.
            </p>
            <a href="#" className="text-green-600 hover:text-green-800 font-medium mt-4 inline-block">
              Explore our operations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsSection;
