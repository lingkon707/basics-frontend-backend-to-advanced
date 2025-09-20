

import React from 'react';

// Data for publications and references
const reference = {
  title: 'Encyclopedia of Dairy Sciences (Third Edition)',
  year: '2022',
  author: 'Robin R. White',
  imgSrc: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/d8ca116c-c8b0-4bc1-8a6e-15556375b7dc.__CR485,0,970,600_PT0_SX970_V1___.jpg', // Replace with actual reference image URL
};

const Main = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto px-8 py-8 space-y-8 lg:space-y-0">
      {/* Sidebar Section */}
      <div className="w-full lg:w-1/4 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">On this page</h2>
        <ul className="space-y-2 text-blue-600">
          <li><a href="#definition" className="hover:text-blue-700">Definition</a></li>
          <li><a href="#chapters" className="hover:text-blue-700">Chapters and Articles</a></li>
          <li><a href="#related" className="hover:text-blue-700">Related Terms</a></li>
          <li><a href="#publications" className="hover:text-blue-700">Recommended Publications</a></li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Volume 2</h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Abstract</h3>
        <p className="text-gray-700 mb-4">
          Milk is a critical resource for sustainably feeding the growing global population. Milk production is among the most environmentally efficient ways to produce high-quality human-edible nutrients. Over the past several decades, the genetic selection and nutritional management programs for more efficient cattle have contributed to reductions in the environmental footprint of producing <strong>dairy products</strong>. Animals which produce more human-useable products per unit input are by the definitions of physical and chemical laws, less impactful on the environment. Transportation of the highest quality genetics around the world through leveraging technologies like <strong>artificial insemination</strong> has been critical in this effort. In addition to the historical success, there are a number of frontier technologies poised to provide the next steps in leveraging genetics to enhance environmental impact of dairy production.
        </p>

        {/* Button to view the chapter */}
        <div className="mt-8 text-center">
          <button className="inline-block bg-blue-600 text-white text-lg font-medium py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            View chapter
          </button>
        </div>
      </div>

      {/* Reference Section */}
      <div className="w-full lg:w-1/4 bg-gray-50 p-6 rounded-lg shadow-md mt-8 lg:mt-0">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Reference work</h2>
        <div className="flex flex-col items-center">
          <img src={reference.imgSrc} alt={reference.title} className="w-32 h-48 object-cover mb-4 rounded-lg" />
          <div className="text-center">
            <p className="text-gray-800 font-medium">{reference.title}</p>
            <p className="text-gray-600">{reference.year}, {reference.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
