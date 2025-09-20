import React from "react";

const TourSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Main Tour Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Africa Tour Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <img
            className="w-full h-64 object-cover"
            src="https://www.avanse.com/blogs/images/Untitled%20design%20(1).png"
            alt="Africa Safari"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Africa – Amazing African Safari
            </h2>
            <p className="text-lg text-gray-500 mt-2">5 Hours</p>
            <p className="text-gray-600 mt-4">
              Explore the wild and see the beauty of nature in this amazing safari adventure.
            </p>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xl font-semibold text-gray-800">From $100</span>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Dubai Tour Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <img
            className="w-full h-64 object-cover"
            src="https://iaeglobal.in/wp-content/uploads/Top-10-Benefits-of-Studying-in-the-USA-for-Indian-Students-copy.webp"
            alt="Dubai Tour"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Dubai – All Stunning Places
            </h2>
            <p className="text-lg text-gray-500 mt-2">8 Hours</p>
            <p className="text-gray-600 mt-4">
              Visit the best spots in Dubai, from modern architecture to ancient wonders.
            </p>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xl font-semibold text-gray-800">From $1,200</span>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Tours Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Latest Tours Cards */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <img
            className="w-full h-48 object-cover"
            src="https://www.avanse.com/blogs/images/Untitled%20design%20(1).png"
            alt="Latest Tour 1"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Africa – Amazing African Safari
            </h3>
            <span className="text-lg font-bold text-gray-800">From $100</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <img
            className="w-full h-48 object-cover"
            src="https://www.avanse.com/blogs/images/smiling-woman-with-american-flag.webp"
            alt="Latest Tour 2"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Dubai – All Stunning Places
            </h3>
            <span className="text-lg font-bold text-gray-800">From $1,200</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <img
            className="w-full h-48 object-cover"
            src="https://aspiresquare.com/wp-content/uploads/2024/05/Benefits-of-Studying-in-USA-960x550-1.webp"
            alt="Latest Tour 3"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Switzerland – 7 Days in Zurich, Zermatt
            </h3>
            <span className="text-lg font-bold text-gray-800">From $3,500</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
          <img
            className="w-full h-48 object-cover"
            src="https://cdn.experteducation.com/wp-content/uploads/sites/6/2023/08/20170640/Popular-courses-in-USA.jpg"
            alt="Latest Tour 4"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Enquiry Form Only – Italy – 6 Days
            </h3>
            <span className="text-lg font-bold text-gray-800">From $2,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSection;
