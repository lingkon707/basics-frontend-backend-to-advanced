import React from "react";

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

export default function ModernDashboard() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="px-8 py-6 font-bold text-xl border-b">MyApp</div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map(({ label, icon }) => (
            <a
              key={label}
              href="#"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              <span className="text-lg">{icon}</span>
              <span className="font-medium">{label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-10 py-6 border-b bg-white shadow-sm">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            New Project
          </button>
        </header>

        {/* Content area */}
        <section className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ title, value, bg, icon }) => (
            <div
              key={title}
              className={`flex items-center space-x-4 rounded-xl shadow-md p-6 ${bg}`}
            >
              <div className="text-3xl">{icon}</div>
              <div>
                <p className="text-gray-600 font-semibold">{title}</p>
                <p className="text-2xl font-bold">{value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="px-10 py-6 mt-auto text-center text-gray-500 text-sm border-t bg-white">
          &copy; 2025 MyApp. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
