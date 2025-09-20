import React, { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 text-2xl font-bold text-indigo-600 border-b">
          MyDashboard
        </div>
        <nav className="mt-6 flex flex-col gap-1 px-4">
          <SidebarItem label="Home" />
          <SidebarItem label="Analytics" />
          <SidebarItem label="Reports" />
          <SidebarItem label="Settings" />
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <header className="bg-white shadow-md px-4 py-3 flex justify-between items-center md:px-6">
          <button
            className="text-gray-600 text-lg md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h1 className="text-xl font-semibold text-indigo-700">Dashboard</h1>
          <span className="text-sm text-gray-500">Welcome, User</span>
        </header>

        {/* Content */}
        <main className="p-4 md:p-6 overflow-y-auto flex-1 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Users" value="1,204" />
            <Card title="Revenue" value="$19,384" />
            <Card title="Sessions" value="391" />
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ label }) {
  return (
    <div className="px-3 py-2 rounded hover:bg-indigo-100 text-indigo-700 cursor-pointer transition">
      {label}
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-3xl font-bold text-indigo-600 mt-2">{value}</div>
    </div>
  );
}

export default App;
