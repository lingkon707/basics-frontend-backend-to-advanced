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
      }, 500); // animation duration
    }, 3000); // change state every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getColor = () => {
    switch (states[currentState]) {
      case "Pending":
        return "bg-yellow-400 hover:bg-yellow-500";
      case "Done":
        return "bg-blue-500 hover:bg-blue-600";
      case "Completed":
        return "bg-green-500 hover:bg-green-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <button
      className={`
        ${getColor()} 
        text-white text-2xl font-bold 
        px-12 py-6 rounded-lg 
        shadow-lg 
        transform transition-all duration-500
        ${animating ? "scale-105 opacity-70" : "scale-100 opacity-100"}
        focus:outline-none
      `}
    >
      {states[currentState]}
    </button>
  );
};

export default OrderButton;

