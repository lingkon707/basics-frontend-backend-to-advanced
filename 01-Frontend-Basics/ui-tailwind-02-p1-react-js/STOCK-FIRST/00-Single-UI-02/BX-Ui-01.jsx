import React, { useState } from 'react';

const SpecialDealsSection = () => {


  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-100 to-teal-200 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Special Deals with Image */}
        <div className="relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out hover:scale-105">
          <img
            src="https://www.shyamgroup.org/images/agro/003.jpg"
            alt="Beach View"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-10 left-10 text-white z-10">
            <h2 className="text-4xl font-extrabold text-shadow-md mb-4">Discover Special Deals!</h2>
            <p className="text-lg mb-6 text-shadow-md">Make sure to check out these special promotions.</p>
            <button className="bg-teal-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 ease-in-out shadow-lg hover:scale-110">
              See Tours
            </button>
          </div>
        </div>

        {/* Right Section - Newsletter Form */}
        <div className="bg-white p-8 rounded-xl shadow-2xl transition-all duration-500 ease-in-out hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Don’t miss a thing</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get updates on special deals and exclusive offers. Sign up for our newsletter!
          </p>
          <form className="flex flex-col">
            <input
              type="email"
              
              placeholder="Enter Your Email Address"
              className="border-2 border-gray-300 rounded-lg p-4 mb-6 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 ease-in-out shadow-lg hover:scale-110"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SpecialDealsSection;
