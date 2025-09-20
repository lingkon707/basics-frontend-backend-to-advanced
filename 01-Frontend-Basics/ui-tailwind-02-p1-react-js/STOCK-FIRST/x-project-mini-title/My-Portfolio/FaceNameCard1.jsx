"use client";
import React from "react";

const MinimalDeveloperProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full bg-black/70 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

        {/* Left Content */}
        <div className="md:w-2/5 p-10 flex flex-col justify-center text-white space-y-6">
          <h1 className="text-5xl font-extrabold">Lingkon Islam</h1>
          <p className="text-yellow-400 text-2xl font-semibold">Frontend Developer</p>
          <p className="text-gray-300 text-lg max-w-md">
            Building clean, performant React & Next.js apps with elegant UI and smooth UX.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-3/5">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/003/316/958/small_2x/religious-muslim-man-praying-free-vector.jpg"
            alt="Religious Muslim Man Praying"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MinimalDeveloperProfile;
