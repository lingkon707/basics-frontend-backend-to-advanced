import React from 'react';

const PricingPlans = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-8">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Basic Plan */}
        <div className="border p-6 rounded-lg shadow-sm">
          <span className="inline-block bg-cyan-500 text-white text-sm font-semibold px-3 py-1 rounded mb-4">
            Basic Plans
          </span>
          <h2 className="text-2xl font-semibold mb-4">Basic Plans List</h2>
          <p className="text-4xl font-bold mb-2">$14.00</p>
          <p className="text-gray-500 mb-4">
            Essential features at the best value. Get started today with our budget-friendly pricing!
          </p>
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>6 Month support</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Single end product use</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Future upgrades included</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Free for use in end products</li>
          </ul>
          <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition">
            Buy Plans
          </button>
        </div>

        {/* Business Plan */}
        <div className="border-2 border-cyan-400 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Business Plans</h2>
          <p className="text-4xl font-bold text-cyan-500 mb-4">$499.00</p>
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>6 Month support</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Single end product use</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Future upgrades included</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span>Free for use in end products</li>
          </ul>
          <button className="w-full bg-cyan-400 text-white py-2 rounded hover:bg-cyan-500 transition">
            Buy Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
