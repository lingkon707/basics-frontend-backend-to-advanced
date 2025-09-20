"use client";
import React from "react";

const NewFreshProfileUI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center px-6 py-12">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">

        {/* Left: Text Content */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">Limon Islam</h1>
          <p className="text-yellow-400 font-semibold text-xl mb-6">Frontend Developer</p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Creating elegant and efficient web apps with React, Next.js, and Tailwind CSS. 
            Dedicated to clean code, great UX, and scalable solutions.
          </p>

          <a
            href="#contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full transition"
          >
            Let’s Connect
          </a>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 relative">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/003/316/958/small_2x/religious-muslim-man-praying-free-vector.jpg"
            alt="Limon Islam"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70"></div>
        </div>
      </div>
    </div>
  );
};

export default NewFreshProfileUI;
