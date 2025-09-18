'use client'

import React from 'react'

// App.jsx — Full Facility Lab Landing Page using object data // Next.js + Tailwind single-file demo

export default function App() { const services = [ { icon: '🧪', title: 'Blood Test', desc: 'Comprehensive blood work analysis for overall health.' }, { icon: '🧬', title: 'DNA Analysis', desc: 'Genetic testing for ancestry and health risk factors.' }, { icon: '💉', title: 'Diabetes Test', desc: 'Accurate glucose and HbA1c monitoring.' }, { icon: '🫁', title: 'X-Ray & Imaging', desc: 'Digital X-ray, MRI, and CT scan facilities.' }, { icon: '🧫', title: 'Microbiology', desc: 'Culture and sensitivity tests for infections.' }, { icon: '🧍‍♂️', title: 'Health Packages', desc: 'Annual full-body checkup packages for families.' }, ]

const testimonials = [ { name: 'Dr. Ayesha Rahman', role: 'Physician', text: 'Their lab reports are highly accurate and always on time.' }, { name: 'Shahidul Islam', role: 'Patient', text: 'Booking my tests online and receiving results digitally is so convenient.' }, { name: 'City Hospital', role: 'Partner', text: 'Reliable lab partner with advanced diagnostic facilities.' }, ]

const stats = [ { label: 'Patients Served', value: '50,000+' }, { label: 'Tests Available', value: '200+' }, { label: 'Doctors Trusted', value: '1,000+' }, { label: 'Years Experience', value: '15+' }, ]

return ( <div className="min-h-screen bg-slate-50"> {/* Hero */} <section className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white py-20 px-6"> <div className="max-w-6xl mx-auto text-center"> <h1 className="text-4xl md:text-5xl font-bold mb-4">Full Facility Diagnostic Lab</h1> <p className="text-lg md:text-xl text-slate-100 mb-6"> Advanced medical testing with accuracy, speed, and trust. </p> <button className="px-6 py-3 bg-white text-cyan-600 font-semibold rounded-xl shadow-md hover:shadow-lg"> Book a Test Now </button> </div> </section>

{/* Stats */}
  <section className="py-12 px-6 bg-white border-b">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {stats.map((s, i) => (
        <div key={i} className="p-4">
          <div className="text-2xl font-bold text-cyan-600">{s.value}</div>
          <div className="text-slate-600 text-sm">{s.label}</div>
        </div>
      ))}
    </div>
  </section>

  {/* Services */}
  <section className="py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Lab Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md border text-center">
            <div className="text-4xl mb-3">{s.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-slate-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* About */}
  <section className="bg-slate-100 py-16 px-6 border-t">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">Why Choose Our Lab?</h2>
        <p className="text-slate-600 mb-4">
          We combine cutting-edge technology with highly skilled professionals to deliver accurate test results.
          Our lab is trusted by hospitals, doctors, and patients across the country.
        </p>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          <li>ISO-certified laboratory standards</li>
          <li>Online booking and digital reports</li>
          <li>24/7 emergency diagnostic services</li>
          <li>Affordable packages for individuals and families</li>
        </ul>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-md">
        <img src="https://cdn-icons-png.flaticon.com/512/2966/2966502.png" alt="Lab illustration" className="w-full h-auto" />
      </div>
    </div>
  </section>

  {/* Testimonials */}
  <section className="py-16 px-6 bg-slate-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">Trusted by Thousands</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md border">
            <p className="text-slate-600 mb-4">“{t.text}”</p>
            <div className="text-sm font-semibold">{t.name}</div>
            <div className="text-xs text-slate-500">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="bg-cyan-600 text-white py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Lab Test Today</h2>
      <p className="text-slate-200 mb-6">Fast results, trusted accuracy, and easy online booking.</p>
      <button className="px-8 py-3 bg-white text-cyan-600 font-semibold rounded-xl shadow-md hover:shadow-lg">
        Get Started
      </button>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-slate-900 text-slate-300 py-10 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-semibold text-white mb-3">MediLab</h3>
        <p className="text-sm">Advanced diagnostic services with accuracy and care.</p>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-3">Services</h4>
        <ul className="space-y-2 text-sm">
          <li>Blood Tests</li>
          <li>Imaging</li>
          <li>Microbiology</li>
          <li>Health Packages</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-3">Contact</h4>
        <p className="text-sm">📍 Dhaka, Bangladesh</p>
        <p className="text-sm">📞 +880 1234 567 890</p>
        <p className="text-sm">✉️ info@medilab.com</p>
      </div>
    </div>
    <div className="mt-8 text-center text-xs text-slate-500">
      © 2025 MediLab. All rights reserved.
    </div>
  </footer>
</div>

) }

