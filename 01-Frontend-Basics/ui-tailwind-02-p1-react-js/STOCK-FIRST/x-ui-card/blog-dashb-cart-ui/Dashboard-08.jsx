import React, { useState } from "react";

const sidebarItems = [
  { icon: "🧪", label: "Test Suites" },
  { icon: "▶️", label: "Test Runs" },
  { icon: "🐞", label: "Bugs" },
  { icon: "📊", label: "Reports" },
  { icon: "⚙️", label: "Settings" },
];

const stats = [
  { title: "Total Tests", value: 1024, icon: "🧪", color: "bg-indigo-100 text-indigo-700" },
  { title: "Passed", value: 876, icon: "✅", color: "bg-green-100 text-green-700" },
  { title: "Failed", value: 112, icon: "❌", color: "bg-red-100 text-red-700" },
  { title: "Blocked", value: 36, icon: "⛔", color: "bg-yellow-100 text-yellow-700" },
];

const recentTestRuns = [
  { id: 1, suite: "Login Tests", status: "Passed", executedBy: "Alice", time: "10m ago" },
  { id: 2, suite: "Checkout Flow", status: "Failed", executedBy: "Bob", time: "30m ago" },
  { id: 3, suite: "API Endpoints", status: "Blocked", executedBy: "Charlie", time: "1h ago" },
  { id: 4, suite: "Performance Tests", status: "Passed", executedBy: "Diana", time: "2h ago" },
];

const statusColors = {
  Passed: "bg-green-200 text-green-800",
  Failed: "bg-red-200 text-red-800",
  Blocked: "bg-yellow-200 text-yellow-800",
};

export default function SoftwareTestDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100 font-sans text-gray-900">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-md transition-width duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h1
            className={`text-2xl font-bold text-indigo-700 select-none transition-opacity duration-300 ${
              sidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            TestSuite
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-indigo-700 focus:outline-none"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? "⬅️" : "➡️"}
          </button>
        </div>

        <nav className="flex flex-col mt-4 space-y-2 px-2 flex-1">
          {sidebarItems.map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              className="flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-indigo-100 transition cursor-pointer select-none"
              title={!sidebarOpen ? label : undefined}
            >
              <span className="text-xl">{icon}</span>
              {sidebarOpen && <span className="font-medium">{label}</span>}
            </a>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="p-4 border-t border-gray-200">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-2 rounded-md font-semibold">
              New Test Run
            </button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white shadow-sm px-8 py-4">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-indigo-700 md:hidden focus:outline-none"
              aria-label="Toggle sidebar"
            >
              ☰
            </button>

            <input
              type="search"
              placeholder="Search test suites, bugs..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 transition w-64"
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative group">
              🔔
              <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
                8
              </span>
            </button>
            <div className="flex items-center space-x-3 cursor-pointer select-none">
              <span className="font-semibold">QA</span>
              <img
                className="w-10 h-10 rounded-full object-cover shadow"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User avatar"
              />
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100">
          {stats.map(({ title, value, icon, color }) => (
            <div
              key={title}
              className={`${color} rounded-lg shadow p-6 flex items-center space-x-4 cursor-pointer hover:scale-[1.03] transition-transform`}
            >
              <div className="text-4xl">{icon}</div>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-3xl font-bold">{value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Recent Test Runs Table */}
        <section className="p-8 bg-white rounded-lg shadow mx-8 mb-8 overflow-auto">
          <h2 className="text-xl font-semibold mb-6 text-indigo-700">Recent Test Runs</h2>
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-4 font-medium text-gray-700">Test Suite</th>
                <th className="p-4 font-medium text-gray-700">Status</th>
                <th className="p-4 font-medium text-gray-700">Executed By</th>
                <th className="p-4 font-medium text-gray-700">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentTestRuns.map(({ id, suite, status, executedBy, time }) => (
                <tr
                  key={id}
                  className="border-b border-gray-100 hover:bg-indigo-50 cursor-pointer transition"
                >
                  <td className="p-4">{suite}</td>
                  <td className="p-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        statusColors[status] || "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="p-4">{executedBy}</td>
                  <td className="p-4 text-gray-500">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Footer */}
        <footer className="text-center p-6 text-gray-500 text-sm border-t bg-gray-100">
          &copy; 2025 TestSuite. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
