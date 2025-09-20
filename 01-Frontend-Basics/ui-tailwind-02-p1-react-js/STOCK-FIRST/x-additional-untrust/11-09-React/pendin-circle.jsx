"use client"



import React from "react";

const PendingButton = () => {
  return (
    <button
      className={`
        relative overflow-hidden
        bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 animate-gradient-x
        text-white text-3xl font-extrabold
        px-16 py-6 rounded-xl
        shadow-2xl
        flex items-center justify-center gap-4
        select-none
        focus:outline-none
      `}
      aria-live="polite"
    >
      {/* Spinner */}
      <span className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></span>

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
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </button>
  );
};

export default PendingButton;

