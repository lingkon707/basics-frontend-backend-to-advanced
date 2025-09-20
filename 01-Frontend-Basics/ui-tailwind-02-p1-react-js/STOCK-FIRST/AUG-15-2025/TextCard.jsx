import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-blue-900 py-16 px-6">
      <h2 className="text-4xl text-white font-bold text-center mb-12">
        How It Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-blue-300 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-6 h-[400px]">
          <h3 className="text-2xl font-semibold text-blue-900">Account & Check In</h3>
          <p className="text-gray-700 text-lg">
            We provide janitorial and specialized cleaning services for all types and sizes of complexes.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-5xl">🧽</span> {/* Placeholder for the image */}
          </div>
          <a
            href="#"
            className="mt-4 text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center space-x-2"
          >
            <span>Get In Touch</span>
           
          </a>
        </div>
        <div className="bg-yellow-400 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-6 h-[400px]">
          <h3 className="text-2xl font-semibold text-yellow-900">Choose Category</h3>
          <p className="text-gray-700 text-lg">
            We provide janitorial and specialized cleaning services for all types and sizes of complexes.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-5xl">🧴</span> {/* Placeholder for the image */}
          </div>
          <a
            href="#"
            className="mt-4 text-yellow-600 hover:text-yellow-800 font-semibold inline-flex items-center space-x-2"
          >
            <span>Get In Touch</span>
           
          </a>
        </div>
        <div className="bg-teal-400 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-6 h-[400px]">
          <h3 className="text-2xl font-semibold text-teal-900">Get Clean Property</h3>
          <p className="text-gray-700 text-lg">
            We provide janitorial and specialized cleaning services for all types and sizes of complexes.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-5xl">🧹</span> {/* Placeholder for the image */}
          </div>
          <a
            href="#"
            className="mt-4 text-teal-600 hover:text-teal-800 font-semibold inline-flex items-center space-x-2"
          >
            <span>Get In Touch</span>
           
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
