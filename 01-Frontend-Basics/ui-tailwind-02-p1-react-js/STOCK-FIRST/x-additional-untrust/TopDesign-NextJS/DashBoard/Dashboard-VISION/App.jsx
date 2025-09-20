// App.jsx
import React from "react";

const stats = [
  { label: "Today's Money", value: "$53,000", change: "+55%", icon: "📅" },
  { label: "Today's Users", value: "2,300", change: "+5%", icon: "🌐" },
  { label: "New Clients", value: "+3,052", change: "-14%", icon: "📄" },
  { label: "Total Sales", value: "$173,000", change: "+8%", icon: "🛒" },
];

const projects = [
  {
    name: "Chakra Soft UI Version",
    budget: "$14,000",
    completion: 60,
    members: ["👩‍💻", "👨‍💻", "👩‍💼", "👨‍💼"],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e153a] via-[#0a122f] to-[#121a42] text-white font-sans">
      <div className="flex h-screen max-w-[1440px] mx-auto rounded-lg overflow-hidden shadow-lg">
        {/* Sidebar */}
        <aside className="w-64 bg-[#131d4a] p-6 flex flex-col">
          <div className="text-2xl font-bold mb-10">VISION UI FREE</div>
          <nav className="flex flex-col space-y-5 text-sm">
            <button className="bg-[#273a8f] px-4 py-2 rounded-md flex items-center space-x-3">
              <span>🏠</span>
              <span>Dashboard</span>
            </button>
            <button className="hover:bg-[#273a8f] px-4 py-2 rounded-md flex items-center space-x-3">
              <span>📊</span>
              <span>Tables</span>
            </button>
            <button className="hover:bg-[#273a8f] px-4 py-2 rounded-md flex items-center space-x-3">
              <span>💳</span>
              <span>Billing</span>
            </button>
            <button className="hover:bg-[#273a8f] px-4 py-2 rounded-md flex items-center space-x-3">
              <span>🌐</span>
              <span>RTL</span>
            </button>

            <div className="mt-8 border-t border-[#1a2b6c] pt-6 text-xs uppercase font-semibold tracking-wide">
              Account Pages
            </div>
            <button className="hover:bg-[#273a8f] px-4 py-2 rounded-md flex items-center space-x-3 mt-4">
              <span>👤</span>
              <span>Profile</span>
            </button>
            <button className="hover:bg-[#273a8f] px-4 py-2 rounded-md flex items-center space-x-3">
              <span>🔑</span>
              <span>Sign In</span>
            </button>
            <button className="hover:bg-[#273a8f] px-4 py-2 rounded-md flex items-center space-x-3">
              <span>📝</span>
              <span>Sign Up</span>
            </button>

            <div className="mt-auto bg-gradient-to-tr from-[#1e2f82] to-[#3049c7] p-4 rounded-lg text-center text-xs cursor-pointer">
              <div className="font-semibold mb-1">Need help?</div>
              <div className="mb-3">Please check our docs</div>
              <button className="bg-white text-[#1e2f82] font-bold px-4 py-2 rounded-full hover:bg-[#d0dbff] transition">
                Documentation
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto space-y-8">
          {/* Top Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {stats.map(({ label, value, change, icon }, i) => (
              <div
                key={i}
                className={`bg-gradient-to-r from-[#273a8f] to-[#3354c8] rounded-xl p-6 flex items-center justify-between`}
              >
                <div>
                  <div className="text-xs opacity-75">{label}</div>
                  <div className="text-lg font-bold">{value}</div>
                  <div
                    className={`text-sm font-semibold ${
                      change.startsWith("+") ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {change}
                  </div>
                </div>
                <div className="text-3xl opacity-70">{icon}</div>
              </div>
            ))}
          </div>

          {/* Welcome & Satisfaction */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#273a8f] rounded-xl p-6 flex flex-col justify-center items-center min-h-[150px]">
              <h2 className="text-lg font-bold mb-2">Welcome back,</h2>
              <p className="mb-4 text-center text-sm">Mark Johnson</p>
              <p className="mb-6 text-center text-xs opacity-80">
                Glad to see you again! Ask me anything.
              </p>
              <button className="bg-[#3049c7] px-4 py-2 rounded-full text-xs hover:bg-[#3a5cd6] transition">
                Tap to record →
              </button>
            </div>

            <div className="bg-[#273a8f] rounded-xl p-6 flex flex-col justify-center items-center min-h-[150px]">
              <h3 className="text-sm mb-2 font-semibold">Satisfaction Rate</h3>
              <div className="w-24 h-24 rounded-full border-8 border-[#3a5cd6] border-t-transparent animate-spin-slow flex items-center justify-center">
                <div className="text-xl font-bold">95%</div>
              </div>
              <p className="text-xs opacity-75 mt-2">Based on likes</p>
            </div>

            <div className="bg-[#273a8f] rounded-xl p-6 flex flex-col justify-center items-center min-h-[150px]">
              <h3 className="text-sm mb-4 font-semibold">Referral Tracking</h3>
              <div className="mb-3">
                <div className="text-xs opacity-75">Invited</div>
                <div className="font-bold">145 people</div>
              </div>
              <div className="mb-6">
                <div className="text-xs opacity-75">Bonus</div>
                <div className="font-bold">1,465</div>
              </div>
              <div className="w-24 h-24 rounded-full border-8 border-green-400 border-l-transparent flex items-center justify-center">
                <div className="text-xl font-bold text-green-400">9.3</div>
              </div>
              <p className="text-xs opacity-75 mt-2">Safety Total Score</p>
            </div>
          </div>

          {/* Sales Overview & Active Users */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-[#273a8f] rounded-xl p-6 min-h-[250px]">
              <h3 className="font-semibold mb-4">Sales overview</h3>
              <div className="bg-gradient-to-r from-[#3049c7] to-[#3354c8] rounded-xl h-48 flex items-center justify-center text-2xl opacity-40">
                {/* Graph placeholder */}
                Graph
              </div>
              <p className="text-xs mt-2 text-green-400">(+5) more in 2021</p>
            </div>

            <div className="bg-[#273a8f] rounded-xl p-6 col-span-2 min-h-[250px]">
              <h3 className="font-semibold mb-4">Active Users</h3>
              <div className="flex justify-between mb-4 space-x-4">
                <div className="flex-1 bg-[#1e2f82] rounded-lg p-4 text-center">
                  <div className="font-bold text-xl">32,984</div>
                  <div className="text-xs opacity-75">Users</div>
                </div>
                <div className="flex-1 bg-[#1e2f82] rounded-lg p-4 text-center">
                  <div className="font-bold text-xl">2.42m</div>
                  <div className="text-xs opacity-75">Clicks</div>
                </div>
                <div className="flex-1 bg-[#1e2f82] rounded-lg p-4 text-center">
                  <div className="font-bold text-xl">$2,400</div>
                  <div className="text-xs opacity-75">Sales</div>
                </div>
                <div className="flex-1 bg-[#1e2f82] rounded-lg p-4 text-center">
                  <div className="font-bold text-xl">320</div>
                  <div className="text-xs opacity-75">Items</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#3049c7] to-[#3354c8] rounded-xl h-24 flex items-center justify-center text-2xl opacity-40">
                {/* Bar graph placeholder */}
                Bar Graph
              </div>
              <p className="text-xs text-green-400 mt-2">(+23) than last week</p>
            </div>
          </div>

          {/* Projects & Orders Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-[#273a8f] rounded-xl p-6 col-span-2">
              <h3 className="font-semibold mb-4">Projects</h3>
              <p className="text-green-400 mb-4">30 done this month</p>
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#1a2b6c]">
                    <th className="py-2">Companies</th>
                    <th className="py-2">Members</th>
                    <th className="py-2">Budget</th>
                    <th className="py-2">Completion</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(({ name, budget, completion, members }, i) => (
                    <tr key={i} className="border-b border-[#1a2b6c]">
                      <td className="py-3">{name}</td>
                      <td className="py-3">
                        <div className="flex space-x-2">
                          {members.map((m, i) => (
                            <div
                              key={i}
                              className="w-6 h-6 rounded-full bg-[#3a5cd6] flex items-center justify-center text-xs"
                            >
                              {m}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="py-3">{budget}</td>
                      <td className="py-3">
                        <div className="w-full bg-[#1a2b6c] rounded-full h-2 relative">
                          <div
                            className="bg-[#3a5cd6] h-2 rounded-full"
                            style={{ width: `${completion}%` }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#273a8f] rounded-xl p-6">
              <h3 className="font-semibold mb-4">Orders overview</h3>
              <p className="text-green-400 mb-2">+30% this month</p>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <div>$2400, Design changes</div>
                  <div>22 DEC 7:20 PM</div>
                </div>
                {/* Add more order items here if needed */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
