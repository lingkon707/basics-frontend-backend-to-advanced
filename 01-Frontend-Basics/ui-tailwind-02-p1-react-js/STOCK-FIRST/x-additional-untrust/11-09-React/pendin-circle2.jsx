"use client"


import React from "react";

const FullPagePendingButton = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 flex items-center justify-center">
      <button
        className={`
          relative overflow-hidden
          bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 animate-gradient-x
          text-white text-4xl font-extrabold
          px-20 py-8 rounded-3xl
          shadow-2xl shadow-indigo-900/70
          flex items-center justify-center gap-6
          select-none
          focus:outline-none
          ring-4 ring-indigo-700 ring-offset-4 ring-offset-blue-900
          transition-transform duration-300 hover:scale-105
        `}
        aria-live="polite"
      >
        {/* Spinner */}
        <span className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></span>

        {/* Text */}
        <span>Pending</span>

        {/* Gradient animation CSS */}
        <style>{`
          @keyframes gradient-x {
            0%, 100% {
              background-position: 0% center;
            }
            50% {
              background-position: 100% center;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease infinite;
          }
        `}</style>
      </button>
    </div>
  );
};

export default FullPagePendingButton;


