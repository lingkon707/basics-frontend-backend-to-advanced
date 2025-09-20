// https://www.apple.com/lae/app-store/images/meta/og__c59t0pflacq6.png

import React from 'react';

const ToolsSection = () => {
  const tools = [
    {
  title: "Solar API",
  description: "Makes solar installation easier, faster, and more affordable.",
  image: "https://www.avanse.com/blogs/images/Untitled%20design%20(1).png"
},
{
  title: "MethaneSAT",
  description: "Tracks global methane emissions with unprecedented precision.",
  image: "https://iaeglobal.in/wp-content/uploads/Top-10-Benefits-of-Studying-in-the-USA-for-Indian-Students-copy.webp"
},
{
  title: "Environmental Insights Explorer",
  description: "Aids cities in analyzing emissions, trees, solar potential, and more.",
  image: "https://aspiresquare.com/wp-content/uploads/2024/05/Benefits-of-Studying-in-USA-960x550-1.webp"
},
{
  title: "Flood Hub",
  description: "Provides critical flood forecasts to millions of people up to 7 days in advance.",
  image: "https://cdn.experteducation.com/wp-content/uploads/sites/6/2023/08/20170640/Popular-courses-in-USA.jpg"
},
{
  title: "Heat Resilience",
  description: "Supports cities in addressing extreme heat.",
  image: "https://www.avanse.com/blogs/images/smiling-woman-with-american-flag.webp"
},
{
  title: "Tapestry",
  description: "Visualizes the electric grid so more people can access clean energy.",
  image: "https://www.avanse.com/blogs/images/Untitled%20design%20(1).png"
}

  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-r from-indigo-100 to-green-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Our Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img src={tool.image} alt={tool.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <button className="text-green-500 hover:text-green-700 font-medium border-b-2 border-transparent hover:border-green-500 transition-all duration-300">
                Explore tool
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 space-x-4 text-center">
          <button className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition duration-300">
            See how we partner
          </button>
          <button className="px-8 py-3 bg-transparent text-green-600 border-2 border-green-600 rounded-full font-semibold hover:bg-green-100 transition duration-300">
            Explore all tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
