"use client";
import React from "react";

const SportsStarLivePanel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 text-white">

        {/* Player Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl flex flex-col items-center space-y-4">
          <img
            src="https://mma.prnewswire.com/media/1480529/PayPal_Liccardo_Schulman_Shawlee.jpg?w=600"
            alt="Star Player"
            className="rounded-xl w-full h-72 object-cover"
          />
          <h2 className="text-2xl font-bold text-center">Alessandro Liccardo</h2>
          <p className="text-gray-300 text-center text-sm">Forward | Jersey #11 | Team Storm</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 w-full text-center mt-4">
            <div>
              <p className="text-xl font-bold text-yellow-400">45</p>
              <p className="text-xs text-gray-300">Goals</p>
            </div>
            <div>
              <p className="text-xl font-bold text-yellow-400">12</p>
              <p className="text-xs text-gray-300">Assists</p>
            </div>
            <div>
              <p className="text-xl font-bold text-yellow-400">9.8</p>
              <p className="text-xs text-gray-300">Rating</p>
            </div>
          </div>

          <button className="mt-4 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full">
            View Full Profile
          </button>
        </div>

        {/* Live Match Panel */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl space-y-6">
          <h3 className="text-xl font-semibold">LIVE: Team Storm vs Thunder FC</h3>

          <div className="flex justify-between text-center bg-white/5 rounded-xl p-4">
            <div>
              <p className="text-lg font-bold">Storm</p>
              <p className="text-4xl text-yellow-400">3</p>
            </div>
            <div className="text-sm flex items-center">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold">65'</span>
            </div>
            <div>
              <p className="text-lg font-bold">Thunder</p>
              <p className="text-4xl">1</p>
            </div>
          </div>

          <ul className="text-sm space-y-2">
            <li>⚽ 60' — Liccardo scored a header!</li>
            <li>🟨 58' — Thunder's #5 received a yellow card</li>
            <li>🔁 52' — Substitution: Marco ↔ Luka</li>
          </ul>

          <a
            href="#"
            className="inline-block mt-4 text-yellow-400 hover:underline font-medium"
          >
            Watch Full Match Highlights →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SportsStarLivePanel;
