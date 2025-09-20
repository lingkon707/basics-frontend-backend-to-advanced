import React from "react";
import { FaBolt, FaWind, FaWater, FaRecycle } from "react-icons/fa"; // Using icons for visual representation

const OperationsSection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 - Data Center Energy Emissions */}
        <div className="flex items-center p-6 bg-blue-100 rounded-xl shadow-md space-x-4">
          <div className="text-4xl text-blue-600">
            <FaBolt />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Reduced data center energy emissions by 12%
            </h3>
            <p className="text-lg text-gray-600 mt-2">
              In 2024, our data center emissions were reduced by 12% compared to the prior year, in the face of increased energy demands.
            </p>
            <a href="#" className="text-green-600 hover:text-green-800 font-medium mt-4 inline-block">
              Explore our operations
            </a>
          </div>
        </div>

        {/* Card 2 - Freshwater Consumption */}
        <div className="flex items-center p-6 bg-blue-200 rounded-xl shadow-md space-x-4">
          <div className="text-4xl text-blue-600">
            <FaWater />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Replenished 64% of our freshwater consumption
            </h3>
            <p className="text-lg text-gray-600 mt-2">
              In 2024, our water stewardship projects replenished approximately 64% of our freshwater consumption, or 4.5 billion gallons.
            </p>
            <a href="#" className="text-green-600 hover:text-green-800 font-medium mt-4 inline-block">
              Explore our operations
            </a>
          </div>
        </div>

        {/* Card 3 - Clean Energy Procurement */}
        <div className="flex items-center p-6 bg-yellow-100 rounded-xl shadow-md space-x-4">
          <div className="text-4xl text-yellow-600">
            <FaRecycle />
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

        {/* Card 4 - TPU Power Efficiency */}
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
