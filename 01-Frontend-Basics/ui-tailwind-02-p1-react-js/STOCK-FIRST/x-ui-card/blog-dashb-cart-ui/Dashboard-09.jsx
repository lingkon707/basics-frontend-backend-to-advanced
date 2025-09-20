import React, { useState } from "react";

const sidebarItems = [
  { icon: "🏠", label: "Dashboard" },
  { icon: "🛎️", label: "Orders" },
  { icon: "🍽️", label: "Tables" },
  { icon: "👨‍🍳", label: "Staff" },
  { icon: "📋", label: "Menu" },
  { icon: "📈", label: "Reports" },
  { icon: "⚙️", label: "Settings" },
];

const stats = [
  { title: "Total Orders", value: 245, icon: "🛎️", color: "bg-orange-100 text-orange-700" },
  { title: "Active Tables", value: 18, icon: "🍽️", color: "bg-yellow-100 text-yellow-700" },
  { title: "Staff On Duty", value: 12, icon: "👨‍🍳", color: "bg-indigo-100 text-indigo-700" },
  { title: "Revenue Today", value: "$3,476", icon: "💰", color: "bg-green-100 text-green-700" },
];

const recentOrders = [
  { id: 1, table: 12, customer: "Emily R.", status: "Served", amount: "$34", time: "10m ago" },
  { id: 2, table: 7, customer: "John D.", status: "In Progress", amount: "$56", time: "25m ago" },
  { id: 3, table: 3, customer: "Sophia K.", status: "Pending", amount: "$18", time: "35m ago" },
  { id: 4, table: 9, customer: "Liam T.", status: "Cancelled", amount: "$0", time: "1h ago" },
];

const statusColors = {
  Served: "bg-green-200 text-green-800",
  "In Progress": "bg-yellow-200 text-yellow-800",
  Pending: "bg-orange-200 text-orange-800",
  Cancelled: "bg-red-200 text-red-800",
};

export default function RestaurantDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg transition-width duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h1
            className={`text-2xl font-extrabold text-orange-600 select-none transition-opacity duration-300 ${
              sidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            RestoManage
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-orange-600 focus:outline-none"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? "⬅️" : "➡️"}
          </button>
        </div>

        <nav className="flex flex-col mt-6 space-y-3 px-2 flex-1">
          {sidebarItems.map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              className="flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-orange-100 transition cursor-pointer select-none"
              title={!sidebarOpen ? label : undefined}
            >
              <span className="text-xl">{icon}</span>
              {sidebarOpen && <span className="font-semibold">{label}</span>}
            </a>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="p-4 border-t border-gray-200">
            <button className="w-full bg-orange-600 hover:bg-orange-700 transition text-white py-2 rounded-md font-semibold">
              Add New Order
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
              className="text-orange-600 md:hidden focus:outline-none"
              aria-label="Toggle sidebar"
            >
              ☰
            </button>

            <input
              type="search"
              placeholder="Search orders, tables, staff..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition w-72"
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
              <span className="font-semibold">MG</span>
              <img
                className="w-10 h-10 rounded-full object-cover shadow"
                src="https://randomuser.me/api/portraits/men/76.jpg"
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
              className={`${color} rounded-lg shadow-md p-6 flex items-center space-x-5 cursor-pointer hover:scale-[1.04] transition-transform`}
            >
              <div className="text-5xl">{icon}</div>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-3xl font-bold">{value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Recent Orders Table */}
        <section className="p-8 bg-white rounded-lg shadow-md mx-8 mb-8 overflow-auto">
          <h2 className="text-2xl font-bold mb-6 text-orange-600">Recent Orders</h2>
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="p-4 font-medium text-gray-700">Table</th>
                <th className="p-4 font-medium text-gray-700">Customer</th>
                <th className="p-4 font-medium text-gray-700">Status</th>
                <th className="p-4 font-medium text-gray-700">Amount</th>
                <th className="p-4 font-medium text-gray-700">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(({ id, table, customer, status, amount, time }) => (
                <tr
                  key={id}
                  className="border-b border-gray-200 hover:bg-orange-50 cursor-pointer transition"
                >
                  <td className="p-4 font-semibold">#{table}</td>
                  <td className="p-4">{customer}</td>
                  <td className="p-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        statusColors[status] || "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="p-4 font-semibold">{amount}</td>
                  <td className="p-4 text-gray-500">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Footer */}
        <footer className="text-center p-6 text-gray-500 text-sm border-t bg-gray-50">
          &copy; 2025 RestoManage. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
