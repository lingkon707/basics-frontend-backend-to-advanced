'use client'

import React from 'react'

// App.jsx — Pharmacy Solutions Landing Page (Next.js + Tailwind) // Single file demo for a complete pharmacy-related website or landing page.

export default function App() { return ( <div className="min-h-screen bg-slate-50"> {/* Hero Section */} <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6"> <div className="max-w-6xl mx-auto text-center"> <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete Pharmacy Solutions</h1> <p className="text-lg md:text-xl text-slate-100 mb-6"> Power your pharmacy business with digital tools, medicine catalogs, and healthcare services. </p> <div className="flex justify-center gap-4"> <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-md hover:shadow-lg">Get Started</button> <button className="px-6 py-3 bg-indigo-500 font-semibold rounded-xl border border-white/30 hover:bg-indigo-400">Learn More</button> </div> </div> </section>

{/* Features Section */}
  <section className="py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Core Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard title="Digital Medicine Catalog" desc="Access thousands of medicines with real-time availability and details." icon="💊" />
        <FeatureCard title="Online Prescription Upload" desc="Patients can upload prescriptions securely for quick processing." icon="📄" />
        <FeatureCard title="Delivery & Logistics" desc="Integrated home delivery service for medicines and healthcare products." icon="🚚" />
        <FeatureCard title="Pharmacy Dashboard" desc="Manage stock, sales, and customers with an all-in-one dashboard." icon="📊" />
        <FeatureCard title="Telemedicine Support" desc="Connect patients with doctors for online consultations." icon="🩺" />
        <FeatureCard title="Payment Solutions" desc="Secure payment integrations for hassle-free transactions." icon="💳" />
      </div>
    </div>
  </section>

  {/* About Section */}
  <section className="bg-white py-16 px-6 border-t">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">About Our Pharmacy Platform</h2>
        <p className="text-slate-600 mb-4">
          We are building a digital-first pharmacy solution that brings together patients, pharmacists,
          and healthcare providers on a single platform. Whether you own a local pharmacy or want to scale
          digitally, our tools are designed for growth.
        </p>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          <li>Seamless medicine ordering system</li>
          <li>Smart stock management</li>
          <li>AI-driven health insights</li>
          <li>Trusted by leading pharmacies worldwide</li>
        </ul>
      </div>
      <div className="bg-slate-100 rounded-xl p-6 shadow-md">
        <img src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png" alt="Pharmacy illustration" className="w-full h-auto" />
      </div>
    </div>
  </section>

  {/* Testimonials */}
  <section className="py-16 px-6 bg-slate-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <TestimonialCard name="Dr. Sarah Khan" role="Pharmacist" text="This platform has revolutionized how I run my pharmacy. Easy inventory management and smooth customer experience!" />
        <TestimonialCard name="Ali Ahmed" role="Customer" text="Ordering medicines online and getting them delivered to my door has never been this simple." />
        <TestimonialCard name="HealthCare Plus" role="Clinic" text="Integration with telemedicine saved us time and improved patient care." />
      </div>
    </div>
  </section>

  {/* Call to Action */}
  <section className="bg-indigo-600 text-white py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Digital Pharmacy?</h2>
      <p className="text-slate-200 mb-6">Join thousands of pharmacies who are scaling their business online with us.</p>
      <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-md hover:shadow-lg">Sign Up Now</button>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-slate-900 text-slate-300 py-10 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-semibold text-white mb-3">PharmaSolutions</h3>
        <p className="text-sm">Empowering pharmacies with modern digital tools and healthcare solutions.</p>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li>Home</li>
          <li>Features</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-3">Services</h4>
        <ul className="space-y-2 text-sm">
          <li>Pharmacy Management</li>
          <li>Medicine Delivery</li>
          <li>Telemedicine</li>
          <li>Payment Gateway</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-3">Contact</h4>
        <p className="text-sm">📍 Dhaka, Bangladesh</p>
        <p className="text-sm">📞 +880 1234 567 890</p>
        <p className="text-sm">✉️ info@pharmasolutions.com</p>
      </div>
    </div>
    <div className="mt-8 text-center text-xs text-slate-500">
      © 2025 PharmaSolutions. All rights reserved.
    </div>
  </footer>
</div>

) }

function FeatureCard({ title, desc, icon }) { return ( <div className="bg-white p-6 rounded-xl shadow-md text-center border"> <div className="text-4xl mb-3">{icon}</div> <h3 className="font-semibold text-lg mb-2">{title}</h3> <p className="text-slate-600 text-sm">{desc}</p> </div> ) }

function TestimonialCard({ name, role, text }) { return ( <div className="bg-white p-6 rounded-xl shadow-md border"> <p className="text-slate-600 mb-4">“{text}”</p> <div className="text-sm font-semibold">{name}</div> <div className="text-xs text-slate-500">{role}</div> </div> ) }

