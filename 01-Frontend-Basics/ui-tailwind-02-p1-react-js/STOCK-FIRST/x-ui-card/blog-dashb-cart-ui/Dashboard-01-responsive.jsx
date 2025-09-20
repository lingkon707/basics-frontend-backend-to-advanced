import React, { useState } from "react";

const navItems = [
  { label: "Dashboard", icon: "🏠" },
  { label: "Projects", icon: "📁" },
  { label: "Teams", icon: "👥" },
  { label: "Calendar", icon: "📅" },
  { label: "Settings", icon: "⚙️" },
];

const cards = [
  { title: "Active Users", value: "12,345", bg: "bg-blue-100", icon: "👤" },
  { title: "New Projects", value: "24", bg: "bg-green-100", icon: "📂" },
  { title: "Open Tickets", value: "8", bg: "bg-yellow-100", icon: "🎫" },
  { title: "Server Uptime", value: "99.99%", bg: "bg-purple-100", icon: "⏱️" },
];

export default function ResponsiveDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:shadow-none
        `}
      >
        <div className="px-8 py-6 font-bold text-xl border-b">MyApp</div>
        <nav className="flex flex-col px-4 py-6 space-y-2">
          {navItems.map(({ label, icon }) => (
            <a
              key={label}
              href="#"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
              onClick={() => setSidebarOpen(false)} // close sidebar on nav click (mobile)
            >
              <span className="text-lg">{icon}</span>
              <span className="font-medium">{label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm md:px-10">
          {/* Hamburger for mobile */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-700 md:hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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

          <h1 className="text-2xl font-semibold">Dashboard</h1>

          <button className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            New Project
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6 md:p-10">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map(({ title, value, bg, icon }) => (
              <div
                key={title}
                className={`flex items-center space-x-4 rounded-xl shadow-md p-6 ${bg}`}
              >
                <div className="text-3xl">{icon}</div>
                <div>
                  <p className="uppercase text-sm text-gray-600 mb-1 tracking-wide">
                    {title}
                  </p>
                  <p className="text-2xl font-bold">{value}</p>
                </div>
              </div>
            ))}
          </section>
        </main>

        {/* Footer */}
        <footer className="px-6 py-4 text-center text-gray-500 text-sm border-t bg-white md:px-10">
          &copy; 2025 MyApp. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
