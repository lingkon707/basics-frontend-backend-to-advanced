// components/TimeTrackerCard.jsx
import React from "react";

export default function TimeTrackerCard() {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center space-y-4 max-w-sm mx-auto">
      <div className="w-full bg-gradient-to-br from-green-800 to-green-600 rounded-xl p-6 text-white text-center select-none">
        <h3 className="font-semibold text-lg mb-2">Time Tracker</h3>
        <p className="text-4xl font-bold tracking-wide">01:24:08</p>

        <div className="flex justify-center mt-4 space-x-6">
          <button
            aria-label="Pause"
            className="bg-white text-green-700 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-green-50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect width="4" height="12" x="6" y="6" rx="1" />
              <rect width="4" height="12" x="14" y="6" rx="1" />
            </svg>
          </button>
          <button
            aria-label="Stop"
            className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-red-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect width="12" height="12" x="6" y="6" rx="2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
