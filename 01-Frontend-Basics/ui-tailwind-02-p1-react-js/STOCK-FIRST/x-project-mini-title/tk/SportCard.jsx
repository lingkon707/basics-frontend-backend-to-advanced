"use client";
import React from "react";

const SportsPlayerCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* Top Image */}
        <img
          src="https://mma.prnewswire.com/media/1480529/PayPal_Liccardo_Schulman_Shawlee.jpg?w=600"
          alt="Player"
          className="w-full h-64 object-cover"
        />

        {/* Content */}
        <div className="p-6 space-y-4 bg-gray-50">
          {/* Badge */}
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Breaking News
          </span>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Liccardo sets new season record — 45 Goals!
          </h2>

          {/* Description */}
          <p className="text-gray-700">
            After a powerful match against Team Storm, Liccardo breaks all-time record in the current season with 45 goals. FlexSports congratulates his legendary performance.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 text-center mt-4">
            <div>
              <p className="text-xl font-bold text-gray-900">45</p>
              <p className="text-sm text-gray-600">Goals</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-600">Assists</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">9.8</p>
              <p className="text-sm text-gray-600">Rating</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center">
            <a
              href="#"
              className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition"
            >
              View Full Stats
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsPlayerCard;
