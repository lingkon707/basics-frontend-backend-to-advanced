import React from 'react';

// Data for publications
const publications = [
  { title: 'Journal of Dairy Science', type: 'Journal', imgSrc: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/d8ca116c-c8b0-4bc1-8a6e-15556375b7dc.__CR485,0,970,600_PT0_SX970_V1___.jpg' },
  { title: 'Theriogenology', type: 'Journal', imgSrc: 'https://images.seeklogo.com/logo-png/37/1/tlc-total-life-changes-logo-png_seeklogo-379547.png' },
  { title: 'Animal Feed Science and Technology', type: 'Journal', imgSrc: 'https://static.vecteezy.com/system/resources/previews/005/074/097/non_2x/stock-creative-logo-modern-creative-brand-idea-company-business-design-free-vector.jpg' },
  { title: 'Livestock Science', type: 'Journal', imgSrc: 'https://www.logoai.com/uploads/output/2025/02/08/562a52c054f32cd0c5b692d9f5fec756.jpg' },
];


const Main = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto px-8 py-8">
      {/* Sidebar Section */}
      <div className="w-1/4 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">On this page</h2>
        <ul className="space-y-2 text-blue-600">
          <li><a href="#definition">Definition</a></li>
          <li><a href="#chapters">Chapters and Articles</a></li>
          <li><a href="#related">Related Terms</a></li>
          <li><a href="#publications">Recommended Publications</a></li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg ml-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Recommended publications</h2>

        {/* Publication List */}
        <div className="space-y-4">
          {publications.map((publication, index) => (
            <div key={index} className="flex items-center space-x-4 border-b border-gray-200 py-4">
              <img src={publication.imgSrc} alt={publication.title} className="w-20 h-20 object-cover rounded-md" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">{publication.title}</h3>
                <p className="text-gray-600">{publication.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button to browse */}
        <div className="mt-8 text-center">
          <button className="inline-block bg-blue-600 text-white text-lg font-medium py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Browse books and journals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
