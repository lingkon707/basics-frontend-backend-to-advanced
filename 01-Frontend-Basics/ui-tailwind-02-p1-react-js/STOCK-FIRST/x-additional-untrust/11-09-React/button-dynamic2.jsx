"use client"



import React, { useState, useEffect } from "react";

const OrderButton = () => {
  const states = ["Pending", "Done", "Completed"];
  const [currentState, setCurrentState] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentState((prev) => (prev + 1) % states.length);
        setAnimating(false);
      }, 600); // animation duration
    }, 4000); // change state every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Gradient colors based on state
  const gradients = {
    Pending:
      "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 animate-gradient-x",
    Done: "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 animate-gradient-x",
    Completed:
      "bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-gradient-x",
  };

  return (
    <button
      className={`
        relative overflow-hidden
        ${gradients[states[currentState]]}
        text-white text-3xl font-extrabold
        px-16 py-6 rounded-xl
        shadow-2xl
        transform transition-all duration-600
        ${animating ? "scale-110" : "scale-100"}
        focus:outline-none
        select-none
        flex items-center justify-center gap-4
        `}
      aria-live="polite"
    >
      {/* Spinner for Pending */}
      {states[currentState] === "Pending" && (
        <span className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
      )}

      {/* Text with fade transition */}
      <span
        key={states[currentState]}
        className={`transition-opacity duration-600 ${
          animating ? "opacity-0" : "opacity-100"
        }`}
      >
        {states[currentState]}
      </span>

      {/* Pulse glow on Done and Completed */}
      {(states[currentState] === "Done" ||
        states[currentState] === "Completed") && (
        <span className="absolute inset-0 rounded-xl opacity-70 blur-lg animate-pulse bg-white"></span>
      )}

      {/* Custom animation for gradient movement */}
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

export default OrderButton;
