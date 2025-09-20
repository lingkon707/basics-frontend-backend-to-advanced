import React, { useState } from "react";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="bg-gray-100 py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex bg-gray-300 rounded-md mt-6 overflow-hidden">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-2 font-semibold text-sm transition-colors ${
              billing === "monthly"
                ? "bg-green-500 text-white"
                : "text-gray-700 hover:bg-gray-400"
            }`}
          >
            MONTHLY
          </button>
          <button
            onClick={() => setBilling("annually")}
            className={`px-4 py-2 font-semibold text-sm transition-colors ${
              billing === "annually"
                ? "bg-green-500 text-white"
                : "text-gray-700 hover:bg-gray-400"
            }`}
          >
            ANNUALLY
          </button>
        </div>
      </div>
    </div>
  );
}
