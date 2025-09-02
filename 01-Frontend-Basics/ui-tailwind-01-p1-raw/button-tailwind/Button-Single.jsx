// File: ButtonsShowcase.jsx
import React from "react";

export default function ButtonsShowcase() {
  return (
    <main className=" p-20  bg-green-900">
      <button className="px-8 py-4 text-lg font-serif text-white bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:bg-white/40 hover:border-white/40 hover:opacity-90 hover:shadow-xl">
        Elegant Button
      </button>
      <br /> <br />
      <button className="px-6 py-3 text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black border-2 border-transparent rounded-md shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-300 hover:text-gray-100 hover:shadow-xl hover:ring-2 hover:ring-gray-400">
        Luxury Button
      </button>
      <br /> <br />
      <button className="px-8 py-4 text-2xl font-bold uppercase text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text border-2 border-transparent rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:shadow-lg hover:ring-4 hover:ring-pink-400 hover:border-pink-500">
        High-End Button
      </button>
      <br /> <br />
      <button className="px-8 py-4 text-2xl font-bold text-white bg-blue-500 rounded-full border-2 border-transparent transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-600 hover:text-white hover:ring-4 hover:ring-blue-400 hover:ring-opacity-60 hover:animate-pulse">
        Neon Button
      </button>
      <br /> <br />

       <div className=" p-12 min-h-screen  bg-gray-100">
      <button className="bg-gray-900 text-white text-lg font-semibold py-3 px-8 rounded-lg border-2 border-transparent 
        hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-400 hover:text-white hover:scale-105 hover:border-indigo-500 
        transition-all duration-300 shadow-md">
        Premium Button
      </button>
      <br /> <br />
      <button className="bg-gray-900 text-white text-lg font-semibold py-3 px-8 rounded-lg border-2 border-transparent
        hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-400 hover:text-white hover:scale-105 hover:border-indigo-500 
        transition-all duration-300 shadow-md">
        Premium Button
      </button>
      <br /> <br />
       <button className="bg-purple-800 text-white text-lg font-semibold py-3 px-8 rounded-lg border-2 border-transparent
        hover:border-4 hover:border-gold-500 hover:text-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg">
        Exclusive Button
      </button>
      <br /> <br />
       <button className="bg-gray-800 text-white flex items-center text-lg py-3 px-6 rounded-md border-2 border-transparent 
        hover:bg-gray-600 hover:scale-110 transition-all duration-300">
        <span className="mr-2">Go</span>
        <i className="fas fa-chevron-right"></i>
      </button>
      <br /> <br />
      <button className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white text-lg font-serif py-3 px-8 rounded-lg border-2
        border-transparent hover:border-4 hover:border-yellow-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
        Shine Button
      </button>
      <br /> <br />
       <button className="bg-black bg-opacity-30 text-white text-lg font-medium py-3 px-8 rounded-lg border-2 border-transparent
        backdrop-blur-lg hover:bg-opacity-50 hover:font-semibold transition-all duration-300 shadow-lg">
        Frosted Button
      </button>
      <br /> <br />
      <button className="bg-black text-white text-lg font-semibold py-3 px-8 rounded-lg border-2 border-transparent 
        hover:border-4 hover:border-pink-600 hover:text-pink-600 hover:scale-105 hover:pulse transition-all duration-400">
        Neon Pulse
      </button>
      <br /> <br />
      <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-lg font-medium py-3 px-8 rounded-lg border-2 border-transparent 
        hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-red-500 transition-all duration-500">
        Gradient Text
      </button>
      <br /> <br />

    </div>
    </main>
  );
}
