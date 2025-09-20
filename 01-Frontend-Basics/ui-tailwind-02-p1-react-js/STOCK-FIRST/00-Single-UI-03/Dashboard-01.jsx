import React from "react";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4 font-bold text-xl border-b">My Dashboard</div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Home</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Analytics</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="font-semibold text-lg">Dashboard</div>
          <div className="text-sm text-gray-600">Welcome, User</div>
        </header>

        {/* Content */}
        <main className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Users" value="1,204" />
            <Card title="Sales" value="$19,384" />
            <Card title="Active Sessions" value="391" />
          </div>
        </main>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  );
}

export default App;
