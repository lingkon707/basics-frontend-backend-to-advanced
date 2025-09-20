import React from "react";

const MarketingCard = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 flex justify-center items-center">
      <div className="bg-white max-w-4xl w-full rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
          Take your marketing to the next level
        </h2>
        <p className="text-center text-gray-600 text-lg mb-6">
          Get help building and optimising Google Ads campaigns today.
        </p>
        <div className="flex justify-center">
          <button className="bg-white border-2 border-blue-600 text-blue-600 text-lg font-semibold py-2 px-6 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
            Find a Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketingCard;
