"use client";
import React from "react";

export default function AstrologerBox() {
  return (
    <div className="bg-yellow-400 p-6 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-6 shadow-md">
        <div className="text-center md:text-left">
          <p className="text-gray-800 font-semibold text-lg">
            Connect with an Astrologer on <span className="font-bold">Call</span> or <span className="font-bold">Chat</span> for more personalised detailed predictions.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="bg-black text-yellow-400 font-semibold px-6 py-2 rounded-full flex items-center gap-2 shadow hover:opacity-90 transition">
            📞 <span>Talk to Astrologer</span>
          </button>
          <button className="bg-black text-yellow-400 font-semibold px-6 py-2 rounded-full flex items-center gap-2 shadow hover:opacity-90 transition">
            💬 <span>Chat with Astrologer</span>
          </button>
        </div>
      </div>
    </div>
  );
}
