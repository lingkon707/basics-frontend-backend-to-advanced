"use client";
import { useState } from "react";

export default function DoctorBookingBlue() {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-600 to-sky-400 p-6">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
        
        {/* Left: Booking Form */}
        <div className="md:w-1/2 bg-white/20 rounded-2xl p-6 shadow-md backdrop-blur-md border border-white/20 hover:shadow-lg transition">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Govt Doctor Booking
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full rounded-lg p-2 bg-white/30 border border-white/40 text-white placeholder-white/60 focus:ring-2 focus:ring-sky-300 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Department</label>
              <select
                name="department"
                value={form.department}
                onChange={handleChange}
                required
                className="w-full rounded-lg p-2 bg-white/30 border border-white/40 text-white focus:ring-2 focus:ring-sky-300 outline-none"
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept} className="text-black">
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {form.department && (
              <div>
                <label className="block font-medium mb-1">Doctor</label>
                <select
                  name="doctor"
                  value={form.doctor}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg p-2 bg-white/30 border border-white/40 text-white focus:ring-2 focus:ring-sky-300 outline-none"
                >
                  <option value="">Select Doctor</option>
                  {doctors[form.department].map((doc) => (
                    <option key={doc} value={doc} className="text-black">
                      {doc}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block font-medium mb-1">Appointment Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full rounded-lg p-2 bg-white/30 border border-white/40 text-white focus:ring-2 focus:ring-sky-300 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold rounded-lg p-2 hover:scale-105 transform transition"
            >
              Book Appointment
            </button>
          </form>
        </div>

        {/* Right: Booking List */}
        <div className="md:w-1/2 bg-white/20 rounded-2xl p-6 shadow-md backdrop-blur-md border border-white/20">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Booking List
          </h2>

          {bookings.length === 0 ? (
            <p className="text-white/80 text-center italic">
              No bookings yet. Fill the form to add.
            </p>
          ) : (
            <div className="max-h-[420px] overflow-y-auto">
              <ul className="space-y-3">
                {bookings.map((b, i) => (
                  <li
                    key={i}
                    className="bg-white/30 p-4 rounded-xl flex justify-between items-center shadow-md hover:bg-white/40 transition"
                  >
                    <div>
                      <p className="font-bold text-white">{b.name}</p>
                      <p className="text-sm text-white/90">
                        {b.department} — {b.doctor}
                      </p>
                      <p className="text-sm text-white/70">{b.date}</p>
                    </div>
                    <span className="text-xs bg-sky-400 text-white px-3 py-1 rounded-lg shadow">
                      Confirmed
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
