import React, { useState } from "react";

const navItems = [
  { label: "Overview", icon: "📊" },
  { label: "Sales", icon: "💵" },
  { label: "Customers", icon: "👥" },
  { label: "Messages", icon: "✉️" },
  { label: "Settings", icon: "⚙️" },
];

const stats = [
  { title: "Revenue", value: "$42,000", icon: "💰", color: "bg-green-100 text-green-700" },
  { title: "Orders", value: "1,230", icon: "📦", color: "bg-blue-100 text-blue-700" },
  { title: "Visitors", value: "8,450", icon: "👀", color: "bg-yellow-100 text-yellow-700" },
  { title: "Messages", value: "23", icon: "✉️", color: "bg-purple-100 text-purple-700" },
];

const activities = [
  { user: "Alice", action: "placed an order", time: "2 mins ago" },
  { user: "Bob", action: "sent a message", time: "10 mins ago" },
  { user: "Carol", action: "signed up", time: "1 hour ago" },
];

export default function FreshDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:shadow-none
        `}
      >
        <div className="px-8 py-6 font-bold text-2xl border-b">FreshDash</div>
        <nav className="flex flex-col mt-6 space-y-2 px-4">
          {navItems.map(({ label, icon }) => (
            <a
              key={label}
              href="#"
              className="flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-indigo-600 hover:text-white transition"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="text-xl">{icon}</span>
              <span className="font-medium">{label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm md:px-10">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-700 md:hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-label="Toggle sidebar"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {sidebarOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Search */}
          <div className="flex-1 mx-4 max-w-md">
            <input
              type="search"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* User avatar */}
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-semibold">
              JD
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6 md:p-10 space-y-8">
          {/* Stats Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ title, value, icon, color }) => (
              <div
                key={title}
                className={`flex items-center space-x-4 p-6 rounded-lg shadow ${color}`}
              >
                <div className="text-4xl">{icon}</div>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-2xl font-bold">{value}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Recent Activity */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-3">
              {activities.map(({ user, action, time }, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border-b last:border-b-0 pb-3"
                >
                  <div>
                    <span className="font-semibold">{user}</span> {action}
                  </div>
                  <time className="text-sm text-gray-500">{time}</time>
                </li>
              ))}
            </ul>
          </section>
        </main>

        {/* Footer */}
        <footer className="px-6 py-4 text-center text-gray-500 text-sm border-t bg-white md:px-10">
          &copy; 2025 FreshDash. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
