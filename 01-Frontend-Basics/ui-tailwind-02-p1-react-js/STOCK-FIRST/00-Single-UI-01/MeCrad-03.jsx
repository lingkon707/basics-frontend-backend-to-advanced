import React, { useState } from "react";

export default function LingkonCardModal() {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/70 p-4">
      <div
        className="relative max-w-sm w-full bg-black/80 text-white rounded-2xl border border-green-400 shadow-2xl p-6 flex flex-col items-center"
        style={{ boxShadow: "0 0 30px rgba(0, 255, 150, 0.3)" }}
      >
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Lingkon Card */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://avatars.githubusercontent.com/u/111384782?v=4" // Replace with your photo URL
            alt="Lingkon"
            className="w-24 h-24 rounded-full border-4 border-green-400"
          />
          <h2 className="text-green-400 text-2xl font-semibold">Lingkon</h2>
          <p className="text-gray-300 text-lg">Frontend Developer</p>
        </div>
      </div>
    </div>
  );
}
