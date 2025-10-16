"use client";
import { useState } from "react";
import { Users, Stethoscope, CalendarDays } from "lucide-react";

export default function AdminDashboardDemo() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const doctors = [
    { name: "Dr. A. Rahman", dept: "Medicine" },
    { name: "Dr. N. Hossain", dept: "Cardiology" },
    { name: "Dr. F. Akter", dept: "Gynecology" },
    { name: "Dr. R. Sarker", dept: "Surgery" },
    { name: "Dr. L. Rahman", dept: "ENT" },
  ];

  const bookings = [
    { id: 1, name: "Mizan Rahman", dept: "Medicine", doctor: "Dr. A. Rahman", date: "2025-10-18" },
    { id: 2, name: "Tania Akter", dept: "Cardiology", doctor: "Dr. N. Hossain", date: "2025-10-20" },
    { id: 3, name: "Sajib Karim", dept: "Surgery", doctor: "Dr. R. Sarker", date: "2025-10-22" },
    { id: 4, name: "Nabila Akter", dept: "ENT", doctor: "Dr. L. Rahman", date: "2025-10-23" },
  ];

  return (
    <div className="min-h-screen flex bg-blue-50">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col justify-between">
        <div>
          <div className="p-6 text-center border-b border-blue-700">
            <h1 className="text-xl font-bold">🏥 Admin Panel</h1>
            <p className="text-sm text-blue-200">Govt Medical System</p>
          </div>
          <nav className="mt-6 space-y-1">
            {["dashboard", "doctors", "bookings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-6 py-3 hover:bg-blue-700 transition ${
                  activeTab === tab ? "bg-blue-700 font-semibold" : ""
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-blue-700">
          <button className="w-full py-2 bg-blue-700 hover:bg-blue-600 rounded-lg transition">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeTab === "dashboard" && (
          <>
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Dashboard Overview</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard icon={<Users className="text-blue-600" size={28} />} label="Total Patients" value={bookings.length} />
              <StatCard icon={<Stethoscope className="text-blue-600" size={28} />} label="Doctors" value={doctors.length} />
              <StatCard icon={<CalendarDays className="text-blue-600" size={28} />} label="Appointments" value={bookings.length} />
              <StatCard icon={<Users className="text-blue-600" size={28} />} label="Active Staff" value={42} />
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Recent Appointments</h3>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-100 text-blue-800 text-left">
                    <th className="p-2 rounded-tl-lg">#</th>
                    <th className="p-2">Patient</th>
                    <th className="p-2">Department</th>
                    <th className="p-2">Doctor</th>
                    <th className="p-2 rounded-tr-lg">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b, i) => (
                    <tr key={b.id} className="border-b hover:bg-blue-50">
                      <td className="p-2">{i + 1}</td>
                      <td className="p-2 font-medium">{b.name}</td>
                      <td className="p-2">{b.dept}</td>
                      <td className="p-2">{b.doctor}</td>
                      <td className="p-2">{b.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab === "doctors" && (
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Doctors List</h3>
            <ul className="space-y-2">
              {doctors.map((d, i) => (
                <li key={i} className="border border-blue-100 rounded-lg p-3 flex justify-between items-center hover:bg-blue-50">
                  <div>
                    <p className="font-semibold text-blue-800">{d.name}</p>
                    <p className="text-sm text-gray-600">{d.dept}</p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-lg">Active</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "bookings" && (
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">All Bookings</h3>
            <p className="text-gray-600">Here admin can manage all booking data...</p>
          </div>
        )}
      </main>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-blue-100 p-5 flex items-center gap-4 hover:shadow-lg transition">
      <div className="bg-blue-100 p-3 rounded-lg">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-semibold text-blue-800">{value}</p>
      </div>
    </div>
  );
}
