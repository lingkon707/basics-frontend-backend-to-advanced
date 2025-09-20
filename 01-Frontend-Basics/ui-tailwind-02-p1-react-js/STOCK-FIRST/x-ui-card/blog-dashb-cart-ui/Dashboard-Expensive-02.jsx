import React, { useState } from "react";
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
  { icon: "🛎️", label: "Total Orders", value: 245, circleBg: "bg-gradient-to-tr from-cyan-400 to-purple-600" },
  { icon: "🍽️", label: "Active Tables", value: 18, circleBg: "bg-gradient-to-tr from-cyan-500 to-purple-700" },
  { icon: "👨‍🍳", label: "Staff On Duty", value: 12, circleBg: "bg-gradient-to-tr from-cyan-600 to-purple-800" },
  { icon: "💰", label: "Revenue Today", value: "$3,476", circleBg: "bg-gradient-to-tr from-cyan-700 to-purple-900" },
];

const orders = [
  { id: 1, table: 12, customer: "Emily R.", status: "Pending", amount: "$34", time: "10m ago" },
  { id: 2, table: 7, customer: "John D.", status: "Delivered", amount: "$56", time: "25m ago" },
  { id: 3, table: 3, customer: "Sophia K.", status: "Pending", amount: "$18", time: "35m ago" },
  { id: 4, table: 9, customer: "Liam T.", status: "Cancelled", amount: "$0", time: "1h ago" },
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

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [notifOpen, setNotifOpen] = useState(false);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex h-screen bg-[#0B1120] dark:bg-[#0B1120] text-[#F5F7FA] font-sans">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? "w-64" : "w-20"} transition-all duration-300 bg-[rgba(25,42,86,0.6)] backdrop-blur-xl border-r border-purple-900/70 shadow-lg`}>
          <div className="flex items-center justify-between px-6 py-5 border-b border-purple-900/60">
            <h1 className={`text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 font-extrabold text-lg ${sidebarOpen ? "block" : "hidden"}`}>RestoGlass</h1>
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>{sidebarOpen ? "⬅️" : "➡️"}</button>
          </div>
          <nav className="flex flex-col px-2 py-4 space-y-1">
            {sidebarItems.map((item, i) => (
              <a key={i} href="#" className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-purple-900/30 transition">
                <span className="text-xl">{item.icon}</span>
                {sidebarOpen && <span className="text-purple-300 font-medium">{item.label}</span>}
              </a>
            ))}
          </nav>
          <div className="flex justify-around px-4 py-3 mt-auto border-t border-purple-900/60">
            <UserCircleIcon className="w-6 h-6 text-cyan-400" />
            <CogIcon className="w-6 h-6 text-cyan-400" />
            <LogoutIcon className="w-6 h-6 text-cyan-400" />
          </div>
        </aside>

        {/* Main */}
        <div className="flex flex-col flex-1 overflow-auto">
          {/* Topbar */}
          <header className="flex items-center justify-between px-6 h-16 bg-[rgba(25,42,86,0.6)] backdrop-blur-lg border-b border-purple-900/60">
            <div className="relative w-64">
              <SearchIcon className="w-5 h-5 absolute left-3 top-2.5 text-cyan-400" />
              <input
                className="w-full pl-10 pr-4 py-2 rounded-full bg-[#1E2C55]/80 placeholder-[#757D99] text-[#F5F7FA] focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Search..."
              />
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={() => setNotifOpen(!notifOpen)} className="relative">
                <BellIcon className="w-6 h-6 text-cyan-400" />
                <span className="absolute -top-1 -right-1 text-xs bg-red-600 rounded-full px-1.5 animate-pulse">3</span>
              </button>
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <SunIcon className="w-6 h-6 text-cyan-400" /> : <MoonIcon className="w-6 h-6 text-cyan-400" />}
              </button>
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-9 h-9 rounded-full border-2 border-cyan-400 cursor-pointer"
                  onClick={() => setAvatarMenuOpen(!avatarMenuOpen)}
                  alt="Avatar"
                />
                {avatarMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-[#1F2A4B]/90 backdrop-blur-md rounded-lg shadow-lg p-3 text-sm">
                    <a href="#" className="block py-2 px-3 hover:bg-cyan-400/20">Profile</a>
                    <a href="#" className="block py-2 px-3 hover:bg-cyan-400/20">Settings</a>
                    <a href="#" className="block py-2 px-3 hover:bg-cyan-400/20">Logout</a>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="p-6 space-y-8">
            {/* Stats */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map(({ icon, label, value, circleBg }, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex items-center space-x-4 hover:shadow-cyan-400/40 hover:scale-[1.03] transition-transform cursor-pointer">
                  <div className={`${circleBg} w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl`}>{icon}</div>
                  <div>
                    <p className="text-sm text-cyan-300 font-semibold">{label}</p>
                    <p className="text-3xl font-extrabold">{value}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Quick Actions */}
            <section>
              <h3 className="text-cyan-400 font-bold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {quickAccessItems.map(({ icon, label }) => (
                  <button key={label} className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center justify-center space-y-2 hover:bg-cyan-400/20 transition">
                    {icon}
                    <span className="text-sm font-semibold">{label}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Orders Table */}
            <section className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 overflow-auto">
              <h3 className="text-cyan-400 font-bold mb-4">Recent Orders</h3>
              <table className="min-w-full border-separate border-spacing-y-2">
                <thead className="sticky top-0 bg-white/10 backdrop-blur-md">
                  <tr>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-cyan-400">Table</th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-cyan-400">Customer</th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-cyan-400">Status</th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-cyan-400">Amount</th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-cyan-400">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(({ id, table, customer, status, amount, time }) => (
                    <tr key={id} className="hover:border-l-4 hover:border-cyan-400 transition-all">
                      <td className="py-2 px-4 font-semibold">#{table}</td>
                      <td className="py-2 px-4">{customer}</td>
                      <td className="py-2 px-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                          status === "Pending"
                            ? "bg-orange-300/60 text-orange-900 animate-pulse"
                            : status === "Delivered"
                            ? "bg-green-300 text-green-900"
                            : "bg-gray-300 text-gray-800"
                        }`}>
                          {status === "Delivered" && <CheckCircleIcon className="w-4 h-4 mr-1" />}
                          {status}
                        </span>
                      </td>
                      <td className="py-2 px-4 font-semibold">{amount}</td>
                      <td className="py-2 px-4 text-gray-400">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Revenue Chart */}
            <section className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 h-64">
              <h3 className="text-cyan-400 font-bold mb-4">Revenue This Week</h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="day" stroke="#4FD1C5" />
                  <YAxis stroke="#4FD1C5" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4FD1C5"
                    strokeWidth={3}
                    dot={{ fill: "#F5F7FA" }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </section>
          </main>

          {/* Footer */}
          <footer className="h-12 flex items-center justify-center text-sm text-cyan-400 border-t border-white/10 bg-white/10 backdrop-blur-lg">
            &copy; 2025 RestoGlass. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}
