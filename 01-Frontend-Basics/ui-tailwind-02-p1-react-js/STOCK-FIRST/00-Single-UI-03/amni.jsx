import React from 'react';

const SecurityDoorAccessories = () => {
  return (
    <div className="flex items-center justify-center py-16 px-6 bg-gray-100">
      {/* Left Image */}
      <div className="w-1/3 pr-8">
        <img
          src="https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/20257/ffa91215eddb0386c037ce126e597a99.jpg" // replace with actual image URL
          alt="Security Door Accessory 1"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Middle Content */}
      <div className="w-1/3 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Security Doors Accessories</h3>
        <p className="text-gray-700 mb-6">
          Our line of security door accessories includes a wide range of both standard and customised products according to customer requirements.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
          MORE INFO
        </button>
      </div>

      {/* Right Image */}
      <div className="w-1/3 pl-8">
        <img
          src="https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/8a139e159b4f23e620bf3e86da2718a2.jpg" // replace with actual image URL
          alt="Security Door Accessory 2"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default SecurityDoorAccessories;
