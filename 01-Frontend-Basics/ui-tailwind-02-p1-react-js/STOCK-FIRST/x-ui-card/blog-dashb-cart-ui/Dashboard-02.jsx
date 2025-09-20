import React from "react";

const navItems = ["Home", "Reports", "Analytics", "Settings"];
const stats = [
  { title: "Users", value: "8,452", icon: "👥", progress: 75, color: "bg-blue-500" },
  { title: "Sales", value: "$24,300", icon: "💰", progress: 60, color: "bg-green-500" },
  { title: "Performance", value: "89%", icon: "⚡", progress: 89, color: "bg-yellow-500" },
  { title: "Issues", value: "3", icon: "🐞", progress: 5, color: "bg-red-500" },
];

export default function TopNavDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      {/* Top Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">BrandLogo</div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 font-medium transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            New Report
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 md:p-10">
        {/* Greeting */}
        <section className="mb-10">
          <h1 className="text-4xl font-extrabold mb-2">Welcome back, User!</h1>
          <p className="text-gray-600">
            Here's an overview of your dashboard status.
          </p>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ title, value, icon, progress, color }) => (
            <div
              key={title}
              className="bg-white rounded-lg shadow p-6 flex flex-col justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{icon}</div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase">
                    {title}
                  </p>
                  <p className="text-2xl font-bold">{value}</p>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`${color} h-3 rounded-full`}
                    style={{ width: `${progress}%` }}
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">{progress}% Complete</p>
              </div>
            </div>
          ))}
        </section>

        {/* Placeholder for charts or more content */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6 h-64 flex items-center justify-center text-gray-400 text-xl font-semibold">
            Chart Placeholder 1
          </div>
          <div className="bg-white rounded-lg shadow p-6 h-64 flex items-center justify-center text-gray-400 text-xl font-semibold">
            Chart Placeholder 2
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 mt-20">
        &copy; 2025 BrandName. All rights reserved.
      </footer>
    </div>
  );
}
