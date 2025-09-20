import React from "react";

const GoogleDesign = () => {
  return (
    <div className="bg-green-50 h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-5xl w-full flex items-center">
        {/* Text Section */}
        <div className="flex flex-col space-y-4 max-w-2xl">
          <blockquote className="text-xl font-semibold text-gray-700">
            “By making a product more accessible for people with disabilities, we’re enabling people to learn more, to accomplish more. I feel so proud to be able to help make our products better for people so that they can do anything that they want to do in their lives.”
          </blockquote>
          <div className="text-lg font-medium text-gray-800">EVE ANDERSSON</div>
          <div className="text-sm text-gray-500">SENIOR DIRECTOR, PRODUCTS FOR ALL</div>
        </div>

        {/* Image Section */}
        <div className="ml-12">
          <img
            className="w-48 h-48 object-cover rounded-full"
            src="https://yocoder.in/assets/images/hero.png" // Replace with actual image URL
            alt="Eve Andersson"
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleDesign;
