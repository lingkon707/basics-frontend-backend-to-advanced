import React, { useState } from "react";

const sidebarItems = [
  { icon: "🧪", label: "Tests" },
  { icon: "🧬", label: "Samples" },
  { icon: "📋", label: "Reports" },
  { icon: "👩‍⚕️", label: "Patients" },
  { icon: "⚙️", label: "Settings" },
];

const stats = [
  { title: "Tests Today", value: 128, icon: "🧪", color: "bg-blue-100 text-blue-700" },
  { title: "Pending Samples", value: 43, icon: "🧬", color: "bg-yellow-100 text-yellow-700" },
  { title: "Reports Generated", value: 312, icon: "📋", color: "bg-green-100 text-green-700" },
  { title: "Critical Alerts", value: 3, icon: "⚠️", color: "bg-red-100 text-red-700" },
];

const recentSamples = [
  { id: 1, patient: "John Doe", test: "COVID-19 PCR", status: "Completed", time: "2h ago" },
  { id: 2, patient: "Jane Smith", test: "Blood Glucose", status: "Pending", time: "30m ago" },
  { id: 3, patient: "Michael Lee", test: "Lipid Panel", status: "In Progress", time: "1h ago" },
  { id: 4, patient: "Anna Johnson", test: "Vitamin D", status: "Completed", time: "3h ago" },
];

const statusColors = {
  Completed: "bg-green-200 text-green-800",
  Pending: "bg-yellow-200 text-yellow-800",
  "In Progress": "bg-blue-200 text-blue-800",
};

export default function LabDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-md transition-width duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h1
            className={`text-2xl font-bold text-blue-700 select-none transition-opacity duration-300 ${
              sidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            LabTrack
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-blue-700 focus:outline-none"
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
              className="flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-blue-100 transition cursor-pointer select-none"
              title={!sidebarOpen ? label : undefined}
            >
              <span className="text-xl">{icon}</span>
              {sidebarOpen && <span className="font-medium">{label}</span>}
            </a>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="p-4 border-t border-gray-200">
            <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-md font-semibold">
              Add New Test
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
              className="text-blue-700 md:hidden focus:outline-none"
              aria-label="Toggle sidebar"
            >
              ☰
            </button>

            <input
              type="search"
              placeholder="Search patients, tests..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition w-64"
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative group">
              🔔
              <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
                5
              </span>
            </button>
            <div className="flex items-center space-x-3 cursor-pointer select-none">
              <span className="font-semibold">DR</span>
              <img
                className="w-10 h-10 rounded-full object-cover shadow"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="User avatar"
              />
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-50">
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

        {/* Recent Samples Table */}
        <section className="p-8 bg-white rounded-lg shadow mx-8 mb-8 overflow-auto">
          <h2 className="text-xl font-semibold mb-6 text-blue-700">Recent Samples</h2>
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-4 font-medium text-gray-700">Patient</th>
                <th className="p-4 font-medium text-gray-700">Test</th>
                <th className="p-4 font-medium text-gray-700">Status</th>
                <th className="p-4 font-medium text-gray-700">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentSamples.map(({ id, patient, test, status, time }) => (
                <tr
                  key={id}
                  className="border-b border-gray-100 hover:bg-blue-50 cursor-pointer transition"
                >
                  <td className="p-4">{patient}</td>
                  <td className="p-4">{test}</td>
                  <td className="p-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        statusColors[status] || "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-500">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Footer */}
        <footer className="text-center p-6 text-gray-500 text-sm border-t bg-gray-50">
          &copy; 2025 LabTrack. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
