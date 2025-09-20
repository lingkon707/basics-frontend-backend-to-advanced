import React, { useState } from "react";

export default function TelevisionApp() {
  const [isOn, setIsOn] = useState(true); // Start ON

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-6 drop-shadow-lg">Lingkon TV</h1>

      {/* TV Frame */}
      <div
        className="
          relative w-[640px] max-w-full h-[380px] 
          bg-gray-900 rounded-[2.5rem]
          border-[12px] border-gray-800
          shadow-[0_0_30px_rgba(255,0,0,0.5)]
          overflow-hidden
          transition-all duration-500
        "
      >
        {/* Screen */}
        <div
          className={`
            relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center
            ${isOn ? "bg-black" : "bg-gray-950"}
          `}
        >
          {isOn ? (
            <img
              src="https://images.bauerhosting.com/empire/2025/04/a-minecraft-movie-1.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
              alt="Minecraft Movie"
              className="w-full h-full object-cover animate-pulse"
            />
          ) : (
            <p className="text-red-600 text-2xl font-bold animate-pulse">TV OFF</p>
          )}

          {/* Glow Effect */}
          {isOn && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 animate-[pulse_3s_ease-in-out_infinite]"></div>
          )}
        </div>

        {/* TV Stand */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-xl shadow-[0_10px_20px_rgba(0,0,0,0.7)]"></div>
      </div>

      {/* Power Button */}
      <button
        onClick={() => setIsOn(!isOn)}
        className="mt-8 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition transform hover:scale-105 shadow-lg"
      >
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}
