import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OtherBetsCard = () => {
  const cards = [
    { name: "Google X", logo: "Google X Logo", link: "#" },
    { name: "Google Ventures", logo: "Google Ventures Logo", link: "#" },
    { name: "Verily", logo: "Verily Logo", link: "#" },
    { name: "Wing", logo: "Wing Logo", link: "#" },
    { name: "Calico Labs", logo: "Calico Labs Logo", link: "#" },
    { name: "Isomorphic Labs", logo: "Isomorphic Labs Logo", link: "#" },
  ];

  return (
    <div className="bg-white py-12 px-6">
      {/* Title and question */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Looking for information about
        <br />
        Other Bets related to health?
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center space-x-4">
              {/* Placeholder for logos */}
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="text-lg font-medium text-gray-800">{card.name}</span>
            </div>
            <a href={card.link} className="text-blue-600 hover:text-blue-800">
              <FaArrowRight />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBetsCard;
