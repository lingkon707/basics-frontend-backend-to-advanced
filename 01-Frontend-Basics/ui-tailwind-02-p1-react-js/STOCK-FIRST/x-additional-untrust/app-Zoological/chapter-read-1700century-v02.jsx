

import React from 'react';


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
      <div className="w-full lg:w-1/4 bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-lg shadow-xl text-white">
        <h2 className="text-2xl font-semibold mb-6">On this page</h2>
        <ul className="space-y-4">
          <li><a href="#definition" className="hover:text-gray-200 transition-colors">Definition</a></li>
          <li><a href="#chapters" className="hover:text-gray-200 transition-colors">Chapters and Articles</a></li>
          <li><a href="#related" className="hover:text-gray-200 transition-colors">Related Terms</a></li>
          <li><a href="#publications" className="hover:text-gray-200 transition-colors">Recommended Publications</a></li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Volume 2</h2>
        <h3 className="text-2xl font-medium text-gray-600 mb-6">Abstract</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Milk is a critical resource for sustainably feeding the growing global population. Milk production is among the most environmentally efficient ways to produce high-quality human-edible nutrients. Over the past several decades, the genetic selection and nutritional management programs for more efficient cattle have contributed to reductions in the environmental footprint of producing <strong className="text-blue-600">dairy products</strong>. Animals which produce more human-useable products per unit input are by the definitions of physical and chemical laws, less impactful on the environment. Transportation of the highest quality genetics around the world through leveraging technologies like <strong className="text-blue-600">artificial insemination</strong> has been critical in this effort. In addition to the historical success, there are a number of frontier technologies poised to provide the next steps in leveraging genetics to enhance environmental impact of dairy production.
        </p>

        {/* Button to view the chapter */}
        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all transform hover:scale-105">
            View chapter
          </button>
        </div>
      </div>

      {/* Reference Section */}
      <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-lg mt-8 lg:mt-0 border-l-4 border-teal-500">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reference work</h2>
        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
          <img src={reference.imgSrc} alt={reference.title} className="w-36 h-48 object-cover mb-4 rounded-lg shadow-md" />
          <div className="text-center">
            <p className="text-lg font-medium text-gray-800">{reference.title}</p>
            <p className="text-gray-600">{reference.year}, {reference.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;


