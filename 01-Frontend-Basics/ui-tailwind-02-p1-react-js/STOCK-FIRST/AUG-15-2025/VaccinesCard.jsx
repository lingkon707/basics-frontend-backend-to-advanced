import React from "react";

const vaccineContent = {
  title: "Development Of New Vaccines",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  listItems: [
    "Exploratory stage",
    "Pre-clinical stage",
    "Clinical development",
    "Manufacturing",
  ],
  image: "https://umetric-wordpress.iqonic.design/wp-content/uploads/2022/04/vaccine.png",
};

const VaccineSection = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section - Image */}
        <div className="flex-1">
          <img
            src={vaccineContent.image}
            alt="Vaccine Bottles"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{vaccineContent.title}</h2>
          <p className="text-lg text-gray-600 mb-6">{vaccineContent.description}</p>
          <ul className="space-y-4 text-lg">
            {vaccineContent.listItems.map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="text-orange-500 mr-2">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VaccineSection;
