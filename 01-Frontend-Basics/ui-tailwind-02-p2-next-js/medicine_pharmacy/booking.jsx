'use client'

import React, { useState } from 'react'

// App.jsx — Professional Advance Booking Page // Full ground UI with Next.js + Tailwind

export default function App() { const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', service: 'Blood Test', notes: '', })

const services = [ 'Blood Test', 'Diabetes Check', 'X-Ray & Imaging', 'DNA Analysis', 'Full Body Checkup', ]

function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }) }

function handleSubmit(e) { e.preventDefault() alert('Booking submitted! We will contact you shortly.') }

return ( <div className="min-h-screen bg-slate-50 flex flex-col"> {/* Hero */} <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-6"> <div className="max-w-4xl mx-auto text-center"> <h1 className="text-4xl md:text-5xl font-bold mb-4">Advance Lab Test Booking</h1> <p className="text-lg md:text-xl text-slate-100 mb-6"> Book your medical tests online with ease. Choose date, service, and get instant confirmation. </p> </div> </section>

{/* Booking Form */}
  <section className="flex-1 py-12 px-6">
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Book Your Test</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Preferred Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Select Service</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          >
            {services.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Additional Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-500"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  </section>

  {/* How it works */}
  <section className="py-16 px-6 bg-slate-100 border-t">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <StepCard number="1" title="Select Service" desc="Choose from 100+ lab tests and health packages." />
        <StepCard number="2" title="Pick Date" desc="Select a convenient date and time for your test." />
        <StepCard number="3" title="Get Results" desc="Receive your reports securely online within 24 hours." />
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-slate-900 text-slate-300 py-10 px-6 mt-auto">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-semibold text-white mb-3">MediLab Booking</h3>
        <p className="text-sm">Seamless online booking for all diagnostic tests.</p>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li>Home</li>
          <li>Services</li>
          <li>Booking</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-3">Support</h4>
        <ul className="space-y-2 text-sm">
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-3">Contact</h4>
        <p className="text-sm">📍 Dhaka, Bangladesh</p>
        <p className="text-sm">📞 +880 1234 567 890</p>
        <p className="text-sm">✉️ booking@medilab.com</p>
      </div>
    </div>
    <div className="mt-8 text-center text-xs text-slate-500">
      © 2025 MediLab. All rights reserved.
    </div>
  </footer>
</div>

) }

function StepCard({ number, title, desc }) { return ( <div className="bg-white p-6 rounded-xl shadow-md"> <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold mb-4 mx-auto"> {number} </div> <h3 className="font-semibold text-lg mb-2">{title}</h3> <p className="text-slate-600 text-sm">{desc}</p> </div> ) }

