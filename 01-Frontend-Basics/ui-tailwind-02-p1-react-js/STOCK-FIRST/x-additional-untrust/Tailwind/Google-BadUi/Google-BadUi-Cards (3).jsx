import React from "react";

const GoogleAdsPartner = () => {
  return (
    <div className="bg-white h-screen flex items-center justify-center p-6">
      <div className="max-w-7xl w-full flex flex-col sm:flex-row items-center justify-between p-8 bg-gray-50 rounded-lg shadow-xl">
        {/* Left Image Section */}
        <div className="flex-shrink-0">
          <img
            className="w-80 h-80 object-cover rounded-xl"
            src="https://www.bombaysweetsbd.com/images/slider/slide-05.jpg" // Replace with actual image URL
            alt="Partnering with Google Ads"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col space-y-6 sm:ml-12 max-w-xl text-center sm:text-left">
          <h2 className="text-3xl font-semibold text-gray-800">
            Partner with a Google Ads expert to set up your first campaign
          </h2>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>• We'll get you up to speed on the latest platform updates</li>
            <li>• We'll design a media plan that makes the most of your budget</li>
            <li>• We'll help you launch your first campaign with hands-on guidance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsPartner;
