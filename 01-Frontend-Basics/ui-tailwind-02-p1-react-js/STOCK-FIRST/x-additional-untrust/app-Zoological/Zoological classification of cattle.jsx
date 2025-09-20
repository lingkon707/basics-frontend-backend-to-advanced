// main.jsx
import React from "react";

const data = [
  {
    label: "Kingdom",
    value: "Animalia",
  },
  {
    label: "Phylum",
    value: "Chordata (backbone animals)",
  },
  {
    label: "Class",
    value: "Mammalia (milk-giving)",
  },
  {
    label: "Order",
    value: "Artiodactyla (even toed and hoofed)",
  },
  {
    label: "Suborder",
    value: "Ruminatia (cud-chewing)",
  },
  {
    label: "Family",
    value: "Bovidae (hollow unbranched horn)",
  },
  {
    label: "Genus",
    value: "Bos (ruminant quadrupeds)",
  },
  {
    label: "Species",
    value: "1. Bos indicus (humped cattle)\n2. Bos taurus (without any hump)",
  },
];

const Main = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen bg-gray-100 p-6">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white text-2xl font-semibold p-4">
          Zoological classification of cattle
        </div>
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-sm font-medium">Category</th>
              <th className="px-6 py-3 text-sm font-medium">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{item.label}</td>
                <td className="px-6 py-4 text-sm">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center md:justify-end p-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-sm md:text-base">
            View chapter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
