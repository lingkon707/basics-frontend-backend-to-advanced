"use client";
import { useState } from "react";

export default function HealthConsultant() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could add sending form data to backend or API
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-green-700 tracking-tight">
            HealthPulse Consultant
          </h1>
          <nav className="hidden md:flex space-x-8 font-semibold text-gray-700">
            <a href="/" className="hover:text-green-600 transition">
              Home
            </a>
            <a href="/consultant" className="hover:text-green-600 transition">
              Consultant
            </a>
            <a href="/articles" className="hover:text-green-600 transition">
              Articles
            </a>
            <a href="/contact" className="hover:text-green-600 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Consultant Info */}
      <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
          alt="Health Consultant"
          className="rounded-xl shadow-lg w-64 h-64 object-cover"
        />

        <div>
          <h2 className="text-4xl font-extrabold text-green-700 mb-4">
            Dr. Emily Parker
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            With over 15 years of experience in holistic health and wellness, Dr.
            Emily Parker specializes in creating personalized health plans
            tailored to your lifestyle. Her approach combines modern science with
            compassionate care to help you achieve lasting wellbeing.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-12 shadow-inner">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-green-700 mb-8 text-center">
            Services Offered
          </h3>
          <ul className="grid md:grid-cols-3 gap-8 text-gray-700">
            <li className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold mb-2 text-lg">Personal Health Coaching</h4>
              <p>
                One-on-one coaching sessions to guide you towards healthier habits
                and lifestyle changes.
              </p>
            </li>
            <li className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold mb-2 text-lg">Nutrition Planning</h4>
              <p>
                Customized nutrition plans designed to boost immunity, energy, and
                overall wellness.
              </p>
            </li>
            <li className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="font-semibold mb-2 text-lg">Stress & Mental Wellness</h4>
              <p>
                Techniques and support to help manage stress, improve mental clarity,
                and promote emotional balance.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Request a Consultation
        </h3>

        {submitted ? (
          <div className="bg-green-100 border border-green-300 text-green-800 p-6 rounded-lg text-center">
            <p>Thank you for your message! We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-semibold text-gray-700"
              >
                Message / Questions
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Write your message here"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-700 transition"
            >
              Send Request
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
          &copy; 2025 HealthPulse. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
