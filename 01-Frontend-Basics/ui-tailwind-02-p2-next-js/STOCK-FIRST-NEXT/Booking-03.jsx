"use client";
import { useState } from "react";

export default function DoctorBooking() {
  const [form, setForm] = useState({
    name: "",
    department: "",
    date: "",
    doctor: "",
  });
  const [bookings, setBookings] = useState([]);

  const departments = ["Medicine", "Cardiology", "Gynecology", "Surgery", "ENT"];
  const doctors = {
    Medicine: ["Dr. A. Rahman", "Dr. T. Islam"],
    Cardiology: ["Dr. S. Karim", "Dr. N. Hossain"],
    Gynecology: ["Dr. F. Akter", "Dr. R. Jahan"],
    Surgery: ["Dr. M. Alam", "Dr. R. Sarker"],
    ENT: ["Dr. L. Rahman", "Dr. B. Das"],
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.department || !form.date || !form.doctor) return;
    setBookings([...bookings, form]);
    setForm({ name: "", department: "", date: "", doctor: "" });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
        
        {/* Booking Form */}
        <div className="md:w-1/2 bg-white rounded-xl shadow-md border border-blue-100 p-6">
          <h1 className="text-2xl font-bold text-blue-700 text-center mb-4">
            Govt Doctor Booking
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full border border-blue-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-1">Department</label>
              <select
                name="department"
                value={form.department}
                onChange={handleChange}
                required
                className="w-full border border-blue-200 rounded-lg p-2 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {form.department && (
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">Doctor</label>
                <select
                  name="doctor"
                  value={form.doctor}
                  onChange={handleChange}
                  required
                  className="w-full border border-blue-200 rounded-lg p-2 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="">Select Doctor</option>
                  {doctors[form.department].map((doc) => (
                    <option key={doc} value={doc}>
                      {doc}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-blue-700 mb-1">Appointment Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full border border-blue-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold rounded-lg p-2 hover:bg-blue-700 transition"
            >
              Book Appointment
            </button>
          </form>
        </div>

        {/* Booking List */}
        <div className="md:w-1/2 bg-white rounded-xl shadow-md border border-blue-100 p-6">
          <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">
            Booking List
          </h2>

          {bookings.length === 0 ? (
            <p className="text-gray-500 text-center">No bookings yet</p>
          ) : (
            <ul className="space-y-3 max-h-[420px] overflow-y-auto">
              {bookings.map((b, i) => (
                <li
                  key={i}
                  className="border border-blue-100 rounded-lg p-3 hover:bg-blue-50 transition flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-blue-800">{b.name}</p>
                    <p className="text-sm text-gray-600">
                      {b.department} — {b.doctor}
                    </p>
                    <p className="text-sm text-gray-500">{b.date}</p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-lg">
                    Confirmed
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
