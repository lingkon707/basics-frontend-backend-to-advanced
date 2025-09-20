import React, { useState } from "react";

const sidebarItems = [
  { icon: "🏠", label: "Dashboard" },
  { icon: "📈", label: "Analytics" },
  { icon: "🗂️", label: "Projects" },
  { icon: "📧", label: "Messages" },
  { icon: "⚙️", label: "Settings" },
];

const stats = [
  { title: "Revenue", value: "$68,450", icon: "💵" },
  { title: "Users", value: "12,340", icon: "👥" },
  { title: "Orders", value: "4,120", icon: "📦" },
  { title: "Feedbacks", value: "1,230", icon: "💬" },
];

const tableData = [
  { id: 1, name: "Alpha Project", status: "Active", budget: "$15,000" },
  { id: 2, name: "Beta Project", status: "Pending", budget: "$9,500" },
  { id: 3, name: "Gamma Project", status: "Completed", budget: "$12,000" },
  { id: 4, name: "Delta Project", status: "Active", budget: "$20,000" },
];

export default function GlassDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sortAsc, setSortAsc] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const sortedTable = [...tableData].sort((a, b) =>
    sortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <div className="flex h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 font-sans text-gray-900">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white bg-opacity-30 backdrop-blur-lg shadow-lg transition-width duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/30">
          <h1 className={`text-2xl font-bold text-indigo-700 select-none ${
            sidebarOpen ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}>
            GlassDash
          </h1>
          <button
            onClick={toggleSidebar}
            className="text-indigo-700 focus:outline-none"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? "⬅️" : "➡️"}
          </button>
        </div>
        <nav className="flex flex-col mt-4 space-y-2 flex-1">
          {sidebarItems.map(({ icon, label }) => (
            <a
              href="#"
              key={label}
              className="flex items-center space-x-4 px-4 py-3 hover:bg-white/40 transition rounded-md cursor-pointer select-none"
              title={!sidebarOpen ? label : undefined}
            >
              <span className="text-2xl">{icon}</span>
              {sidebarOpen && <span className="font-semibold">{label}</span>}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-white/30">
          {sidebarOpen && (
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
              New Project
            </button>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white bg-opacity-30 backdrop-blur-lg shadow-md">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="text-indigo-700 md:hidden focus:outline-none"
              aria-label="Toggle sidebar"
            >
              ☰
            </button>
            <input
              type="search"
              placeholder="Search projects, users..."
              className="px-4 py-2 rounded-md border border-white/40 bg-white bg-opacity-50 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition w-64"
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative group">
              🔔
              <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
                3
              </span>
            </button>
            <div className="flex items-center space-x-3 cursor-pointer select-none">
              <span className="font-semibold">JD</span>
              <img
                className="w-10 h-10 rounded-full object-cover shadow"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="User avatar"
              />
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ title, value, icon }) => (
            <div
              key={title}
              className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg p-6 flex items-center space-x-4 cursor-pointer hover:scale-[1.03] transition-transform"
            >
              <div className="text-4xl">{icon}</div>
              <div>
                <p className="text-gray-700 font-semibold">{title}</p>
                <p className="text-2xl font-bold">{value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Data Table */}
        <section className="p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg mx-6 overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th
                  className="cursor-pointer text-left p-4 font-semibold text-indigo-700"
                  onClick={() => setSortAsc(!sortAsc)}
                >
                  Project {sortAsc ? "▲" : "▼"}
                </th>
                <th className="text-left p-4 font-semibold text-indigo-700">Status</th>
                <th className="text-left p-4 font-semibold text-indigo-700">Budget</th>
              </tr>
            </thead>
            <tbody>
              {sortedTable.map(({ id, name, status, budget }) => (
                <tr
                  key={id}
                  className="hover:bg-white/40 cursor-pointer transition"
                >
                  <td className="p-4">{name}</td>
                  <td className="p-4">{status}</td>
                  <td className="p-4">{budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Footer */}
        <footer className="text-center p-4 mt-auto text-indigo-700 font-semibold">
          &copy; 2025 GlassDash. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
