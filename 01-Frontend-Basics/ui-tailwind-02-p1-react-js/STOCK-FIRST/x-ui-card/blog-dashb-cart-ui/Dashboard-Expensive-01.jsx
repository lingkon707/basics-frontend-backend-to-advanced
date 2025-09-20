import React, { useState } from "react";

// npm install @heroicons/react recharts

import {
  BellIcon,
  SearchIcon,
  MoonIcon,
  SunIcon,
  UserCircleIcon,
  LogoutIcon,
  CogIcon,
  PlusCircleIcon,
  ClipboardListIcon,
  DocumentDownloadIcon,
  UserAddIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sidebarItems = [
  { icon: "🏠", label: "Dashboard" },
  { icon: "🛎️", label: "Orders" },
  { icon: "🍽️", label: "Tables" },
  { icon: "👨‍🍳", label: "Staff" },
  { icon: "📋", label: "Menu" },
  { icon: "📈", label: "Reports" },
];

const quickAccessItems = [
  { icon: <PlusCircleIcon className="w-6 h-6" />, label: "New Order" },
  { icon: <ClipboardListIcon className="w-6 h-6" />, label: "Track" },
  { icon: <DocumentDownloadIcon className="w-6 h-6" />, label: "Export" },
  { icon: <UserAddIcon className="w-6 h-6" />, label: "Add User" },
];

const stats = [
  { icon: "🛎️", label: "Total Orders", value: 245, circleBg: "bg-teal-400" },
  { icon: "🍽️", label: "Active Tables", value: 18, circleBg: "bg-teal-500" },
  { icon: "👨‍🍳", label: "Staff On Duty", value: 12, circleBg: "bg-teal-600" },
  { icon: "💰", label: "Revenue Today", value: "$3,476", circleBg: "bg-teal-700" },
];

const orders = [
  {
    id: 1,
    table: 12,
    customer: "Emily R.",
    status: "Pending",
    amount: "$34",
    time: "10m ago",
  },
  {
    id: 2,
    table: 7,
    customer: "John D.",
    status: "Delivered",
    amount: "$56",
    time: "25m ago",
  },
  {
    id: 3,
    table: 3,
    customer: "Sophia K.",
    status: "Pending",
    amount: "$18",
    time: "35m ago",
  },
  {
    id: 4,
    table: 9,
    customer: "Liam T.",
    status: "Cancelled",
    amount: "$0",
    time: "1h ago",
  },
];

const chartData = [
  { day: "Mon", revenue: 300 },
  { day: "Tue", revenue: 500 },
  { day: "Wed", revenue: 400 },
  { day: "Thu", revenue: 700 },
  { day: "Fri", revenue: 600 },
  { day: "Sat", revenue: 900 },
  { day: "Sun", revenue: 800 },
];

export default function GlassmorphismDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex h-screen bg-[#EDF2F7] dark:bg-[#2D3748] text-gray-900 dark:text-gray-100">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-20"
          } bg-white/30 backdrop-blur-lg border-r border-white/20 dark:bg-gray-900/30 dark:border-gray-700/50
          flex flex-col transition-all duration-300 relative`}
        >
          {/* Logo & toggle */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/20 dark:border-gray-700">
            <h1
              className={`font-extrabold text-teal-400 tracking-wide select-none transition-opacity duration-300 ${
                sidebarOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              RestoGlass
            </h1>
            <button
              aria-label="Toggle sidebar"
              className="text-teal-400 hover:text-teal-300 focus:outline-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? "⬅️" : "➡️"}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col flex-1 mt-6 space-y-1 px-2 overflow-auto">
            {sidebarItems.map(({ icon, label }, i) => {
              const isActive = i === 0; // simulate active on first
              return (
                <a
                  key={label}
                  href="#"
                  className={`group flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer
                    ${isActive ? "bg-teal-500/30 shadow-[0_0_8px_#4fd1c5]" : "hover:bg-white/20 dark:hover:bg-gray-800/40"}
                    transition-colors duration-200 select-none`}
                  title={!sidebarOpen ? label : undefined}
                >
                  <span className="text-xl">{icon}</span>
                  {sidebarOpen && (
                    <span
                      className={`font-semibold ${
                        isActive ? "text-teal-400" : "text-gray-200 dark:text-gray-400"
                      }`}
                    >
                      {label}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Quick Access bottom */}
          <div className="px-4 py-4 border-t border-white/20 dark:border-gray-700 flex items-center justify-around space-x-2">
            <button
              title="Profile"
              className="hover:bg-white/20 dark:hover:bg-gray-800/40 p-2 rounded-md transition"
            >
              <UserCircleIcon className="w-6 h-6 text-teal-400" />
            </button>
            <button
              title="Settings"
              className="hover:bg-white/20 dark:hover:bg-gray-800/40 p-2 rounded-md transition"
            >
              <CogIcon className="w-6 h-6 text-teal-400" />
            </button>
            <button
              title="Logout"
              className="hover:bg-white/20 dark:hover:bg-gray-800/40 p-2 rounded-md transition"
            >
              <LogoutIcon className="w-6 h-6 text-teal-400" />
            </button>
          </div>
        </aside>

        {/* Main area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Topbar */}
          <header className="flex items-center justify-between h-16 px-6 bg-white/30 backdrop-blur-lg border-b border-white/20 dark:bg-gray-900/30 dark:border-gray-700/50">
            <div className="flex items-center space-x-4">
              <div className="relative text-gray-700 dark:text-gray-300">
                <input
                  type="search"
                  placeholder="Search orders, tables, staff..."
                  className="rounded-full bg-white/70 dark:bg-gray-800/70 placeholder-gray-500 dark:placeholder-gray-400 pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <SearchIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-teal-400" />
              </div>
            </div>

            <div className="flex items-center space-x-6 relative">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setNotifOpen(!notifOpen)}
                  aria-label="Notifications"
                  className="relative text-teal-400 hover:text-teal-300 focus:outline-none"
                >
                  <BellIcon className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white rounded-full px-1.5 font-semibold animate-pulse">
                    3
                  </span>
                </button>
                {notifOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-lg shadow-lg p-4 z-50">
                    <p className="font-semibold text-teal-600 mb-2">Notifications</p>
                    <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                      <li>New order received (#245)</li>
                      <li>Table 12 marked as served</li>
                      <li>Staff schedule updated</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Dark mode toggle */}
              <button
                aria-label="Toggle dark mode"
                onClick={() => setDarkMode(!darkMode)}
                className="text-teal-400 hover:text-teal-300 focus:outline-none"
              >
                {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
              </button>

              {/* Avatar */}
              <div className="relative">
                <button
                  aria-label="User menu"
                  onClick={() => setAvatarMenuOpen(!avatarMenuOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <img
                    className="w-9 h-9 rounded-full border-2 border-teal-400"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User avatar"
                  />
                  <span className="hidden md:block font-semibold text-teal-400">Anna W.</span>
                </button>
                {avatarMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-lg shadow-lg p-3 z-50">
                    <a
                      href="#"
                      className="block py-2 px-3 rounded hover:bg-teal-500/20 text-teal-700 dark:text-teal-300"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-3 rounded hover:bg-teal-500/20 text-teal-700 dark:text-teal-300"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-3 rounded hover:bg-teal-500/20 text-teal-700 dark:text-teal-300"
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Stats cards */}
            <section className="flex space-x-6 overflow-x-auto pb-3">
              {stats.map(({ icon, label, value, circleBg }) => (
                <div
                  key={label}
                  className="min-w-[220px] bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg rounded-xl p-6 flex items-center space-x-4 shadow-md
                  hover:shadow-teal-400 hover:scale-[1.03] transition-transform cursor-pointer"
                >
                  <div
                    className={`${circleBg} w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl select-none`}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm text-teal-300 font-semibold">{label}</p>
                    <p className="text-3xl font-extrabold">{value}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Quick Actions */}
            <section>
              <h3 className="text-teal-400 font-bold mb-4 select-none">Quick Actions</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {quickAccessItems.map(({ icon, label }) => (
                  <button
                    key={label}
                    className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg rounded-lg p-4 flex flex-col items-center justify-center space-y-2 hover:bg-teal-400/20 hover:text-teal-400 transition"
                  >
                    {icon}
                    <span className="text-sm font-semibold">{label}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Recent Orders Table */}
            <section className="overflow-auto bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg rounded-xl shadow-lg p-4">
              <h3 className="text-teal-400 font-bold mb-4 select-none">Recent Orders</h3>
              <table className="min-w-full border-separate border-spacing-y-2">
                <thead className="sticky top-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-t-xl">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-teal-400">Table</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-teal-400">Customer</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-teal-400">Status</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-teal-400">Amount</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-teal-400">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(({ id, table, customer, status, amount, time }) => {
                    const isPending = status === "Pending";
                    const isDelivered = status === "Delivered";
                    return (
                      <tr
                        key={id}
                        className="cursor-pointer hover:border-teal-400 hover:border-l-4 transition-all rounded-md"
                      >
                        <td className="py-3 px-4 font-semibold">#{table}</td>
                        <td className="py-3 px-4">{customer}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full font-semibold text-sm
                          ${
                            isPending
                              ? "bg-teal-300/70 text-teal-900 animate-pulse"
                              : isDelivered
                              ? "bg-green-300 text-green-900"
                              : "bg-gray-300 text-gray-700"
                          }`}
                          >
                            {isDelivered && <CheckCircleIcon className="w-5 h-5 text-green-700" />}
                            <span>{status}</span>
                          </span>
                        </td>
                        <td className="py-3 px-4 font-semibold">{amount}</td>
                        <td className="py-3 px-4 text-gray-500 dark:text-gray-400">{time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>

            {/* Analytics */}
            <section className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg rounded-xl shadow-lg p-6 h-64">
              <h3 className="text-teal-400 font-bold mb-4 select-none">Revenue Over Last Week</h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="day" stroke="#4FD1C5" />
                  <YAxis stroke="#4FD1C5" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? "#2D3748" : "#EDF2F7",
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 0 10px rgba(79, 209, 197, 0.3)",
                      color: darkMode ? "#EDF2F7" : "#2D3748",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4FD1C5"
                    strokeWidth={3}
                    dot={{ stroke: "#4FD1C5", strokeWidth: 2, fill: "white" }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </section>
          </main>

          {/* Footer */}
          <footer className="h-12 flex items-center justify-center bg-white/30 backdrop-blur-lg border-t border-white/20 dark:bg-gray-900/30 dark:border-gray-700/50 text-sm text-teal-400 select-none">
            &copy; 2025 RestoGlass. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}
