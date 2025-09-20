import React, { useState } from "react";

const sidebarItems = [
  { icon: "🏠", label: "Home" },
  { icon: "📊", label: "Analytics" },
  { icon: "💼", label: "Projects" },
  { icon: "📥", label: "Inbox" },
  { icon: "⚙️", label: "Settings" },
];

const stats = [
  { title: "Revenue", value: "$50,000", color: "bg-indigo-100", icon: "💰" },
  { title: "Users", value: "9,876", color: "bg-green-100", icon: "👥" },
  { title: "Orders", value: "1,234", color: "bg-yellow-100", icon: "📦" },
];

const tableData = [
  { id: 1, name: "Project Apollo", status: "Active", budget: "$12,000" },
  { id: 2, name: "Project Zeus", status: "Pending", budget: "$8,000" },
  { id: 3, name: "Project Hera", status: "Completed", budget: "$15,000" },
  { id: 4, name: "Project Atlas", status: "Active", budget: "$20,000" },
];

export default function SplitDashboard() {
  const [selected, setSelected] = useState("Home");

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800">
      {/* Sidebar */}
      <aside className="flex flex-col w-20 bg-white shadow-lg">
        <div className="flex flex-col items-center py-6 space-y-6">
          {sidebarItems.map(({ icon, label }) => (
            <button
              key={label}
              onClick={() => setSelected(label)}
              className={`flex flex-col items-center space-y-1 text-xl focus:outline-none
                ${
                  selected === label
                    ? "text-indigo-600"
                    : "text-gray-400 hover:text-indigo-600"
                }`}
              title={label}
              aria-label={label}
            >
              <span>{icon}</span>
              <span className="text-xs">{label}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
          <h1 className="text-2xl font-semibold">{selected}</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
              New Item
            </button>
            <div className="flex items-center space-x-2">
              <span className="font-medium">JD</span>
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="User avatar"
              />
            </div>
          </div>
        </header>

        {/* Stats */}
        <section className="p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(({ title, value, color, icon }) => (
            <div
              key={title}
              className={`flex items-center space-x-4 rounded-lg p-6 shadow ${color}`}
            >
              <div className="text-4xl">{icon}</div>
              <div>
                <p className="text-sm font-semibold text-gray-600">{title}</p>
                <p className="text-2xl font-bold">{value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Table */}
        <section className="p-8 overflow-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-medium text-gray-600">Project</th>
                <th className="text-left p-4 font-medium text-gray-600">Status</th>
                <th className="text-left p-4 font-medium text-gray-600">Budget</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(({ id, name, status, budget }) => (
                <tr
                  key={id}
                  className="border-b last:border-b-0 hover:bg-gray-50 cursor-pointer"
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
        <footer className="px-8 py-6 text-center text-gray-500 text-sm border-t bg-white">
          &copy; 2025 YourCompany. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
