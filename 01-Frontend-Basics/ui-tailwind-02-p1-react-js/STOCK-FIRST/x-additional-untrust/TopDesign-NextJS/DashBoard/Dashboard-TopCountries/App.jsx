import React from "react";

const countries = [
  { name: "United States", flag: "🇺🇸", percent: 50 },
  { name: "Canada", flag: "🇨🇦", percent: 20 },
  { name: "Ukraine", flag: "🇺🇦", percent: 20 },
  { name: "Spain", flag: "🇪🇸", percent: 10 },
  { name: "United Kingdom", flag: "🇫🇷", percent: 10 },
];

const users = [
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/45.jpg",
  "https://randomuser.me/api/portraits/men/10.jpg",
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Panel: Top Countries */}
        <div className="col-span-1 md:col-span-2 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Top Countries</h2>
            <button
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
              aria-label="Export Report"
            >
              Export Report{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
            </button>
          </div>
          <ul className="space-y-5">
            {countries.map(({ name, flag, percent }) => (
              <li key={name} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{flag}</span>
                  <span className="text-gray-700 font-medium">{name}</span>
                </div>
                <div className="flex items-center space-x-4 w-3/5">
                  <div className="bg-gray-200 rounded-full flex-1 h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <span className="text-gray-600 font-semibold">{percent}%</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Panel: Sentiment Analysis */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center">
            <h3 className="text-gray-900 font-semibold mb-4">Sentiment Analysis</h3>
            <div className="w-full max-w-xs">
              {/* Gauge bar */}
              <div className="relative h-6 rounded-full bg-gradient-to-r from-red-400 via-yellow-300 to-green-400">
                {/* Indicator */}
                <div
                  className="absolute top-0 left-0 h-6 w-1.5 bg-black rounded-sm"
                  style={{ left: `calc((4.85 / 7) * 100%)` }}
                />
              </div>
              <div className="flex justify-between text-xs mt-1 text-gray-500 font-medium">
                <span>😞</span>
                <span>😊</span>
              </div>
            </div>
            <div className="mt-5 flex flex-col items-center space-y-1">
              <span className="text-4xl font-bold text-gray-900">4.85</span>
              <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full font-semibold text-sm select-none">
                Positive
              </span>
            </div>
          </div>

          {/* Total Customers */}
          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center space-y-6">
            <h3 className="text-gray-900 font-semibold w-full">Total customers</h3>
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-gray-900">2,420</span>
              <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full font-semibold text-sm select-none flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
                <span>25%</span>
              </span>
            </div>
            <div className="flex -space-x-3">
              {users.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="user avatar"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <button className="text-blue-600 hover:text-blue-800 font-medium mt-2 flex items-center space-x-1">
              <span>Show All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
