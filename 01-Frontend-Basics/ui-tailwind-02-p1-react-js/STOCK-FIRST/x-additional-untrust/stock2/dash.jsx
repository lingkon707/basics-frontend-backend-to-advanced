"use client"
// components/DashboardCards.jsx
import React from "react";

const cards = [
  {
    title: "Total Projects",
    count: 24,
    subtitle: "Increased from last month",
    color: "from-green-600 to-green-800",
    icon: "↑",
  },
  {
    title: "Ended Projects",
    count: 10,
    subtitle: "Increased from last month",
    color: "bg-white",
    icon: "↑",
  },
  {
    title: "Running Projects",
    count: 12,
    subtitle: "Increased from last month",
    color: "bg-white",
    icon: "↑",
  },
  {
    title: "Pending Project",
    count: 2,
    subtitle: "On Discuss",
    color: "bg-white",
    icon: "",
  },
];

export default function DashboardCards() {
  return (
    <div
      className="
        grid 
        gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        xl:grid-cols-4
      "
      style={{ gridAutoRows: "1fr" }} // makes cards equal height in grid rows
    >
      {cards.map(({ title, count, subtitle, color, icon }) => (
        <div
          key={title}
          className={`rounded-2xl p-6 flex flex-col justify-between shadow-md
            ${
              color.includes("from-")
                ? `bg-gradient-to-br ${color} text-white`
                : "bg-white text-gray-900"
            }
            min-h-[150px]`}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            <button
              aria-label="Open details"
              className={`w-6 h-6 flex items-center justify-center rounded-full
                ${
                  color.includes("from-")
                    ? "bg-white/30 text-white hover:bg-white/40"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }
                text-sm transition`}
            >
              ↗
            </button>
          </div>
          <p className="text-4xl font-bold">{count}</p>
          <p
            className={`text-sm mt-1 ${
              color.includes("from-")
                ? "text-green-200"
                : "text-green-600"
            }`}
          >
            {subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}
