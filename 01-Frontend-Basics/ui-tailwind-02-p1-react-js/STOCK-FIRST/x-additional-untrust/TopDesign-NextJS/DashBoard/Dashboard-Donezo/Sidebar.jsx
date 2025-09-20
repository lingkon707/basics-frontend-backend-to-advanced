// components/Sidebar.jsx
import React from "react";

const menuItems = [
  { label: "Dashboard", icon: "🏠", active: true },
  { label: "Tasks", icon: "📋", badge: "12+" },
  { label: "Calendar", icon: "📅" },
  { label: "Analytics", icon: "📊" },
  { label: "Team", icon: "👥" },
];

const generalItems = [
  { label: "Settings", icon: "⚙️" },
  { label: "Help", icon: "❓" },
  { label: "Logout", icon: "🚪" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white shadow-md flex flex-col px-6 py-8">
      {/* Logo */}
      <div className="mb-10 flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-lg">
          D
        </div>
        <span className="text-2xl font-semibold text-gray-900 select-none">
          Donezo
        </span>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-4">
        {menuItems.map(({ label, icon, badge, active }) => (
          <button
            key={label}
            className={`flex items-center justify-between w-full px-4 py-2 rounded-lg font-medium text-sm cursor-pointer
              ${
                active
                  ? "bg-green-700 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl">{icon}</span>
              <span>{label}</span>
            </div>
            {badge && (
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full select-none">
                {badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* General Section */}
      <div className="mt-10 space-y-4 border-t border-gray-200 pt-6">
        {generalItems.map(({ label, icon }) => (
          <button
            key={label}
            className="flex items-center space-x-3 text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg w-full text-sm font-medium transition"
          >
            <span className="text-xl">{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Mobile App Download Card */}
      <div className="mt-10 bg-gradient-to-br from-green-800 to-green-600 rounded-xl p-4 text-white text-center cursor-pointer select-none">
        <h3 className="font-semibold mb-2 text-lg">Download our Mobile App</h3>
        <p className="text-sm mb-4 opacity-90">Get easy in another way</p>
        <button className="bg-white text-green-800 font-semibold px-5 py-2 rounded-full hover:bg-green-50 transition">
          Download
        </button>
      </div>
    </aside>
  );
}
