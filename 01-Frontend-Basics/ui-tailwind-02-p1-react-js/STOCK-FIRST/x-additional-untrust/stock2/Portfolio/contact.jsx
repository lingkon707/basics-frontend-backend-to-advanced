'use client';

import { useState } from 'react';
import contactData from './contact.json';
import Header from './Header';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to API or email)
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <section className="pt-20 min-h-screen bg-gradient-to-tr from-rgbdark via-rgbblue to-rgbmid px-6 lg:px-20 text-white max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-center">Contact Me</h2>
        <div className="mb-12 text-center text-gray-300 space-y-2">
          <p>Email: <a href={`mailto:${contactData.email}`} className="text-pink-500 hover:underline">{contactData.email}</a></p>
          <p>Phone: {contactData.phone}</p>
          <p>Address: {contactData.address}</p>
          <div className="flex justify-center gap-6 mt-4">
            {Object.entries(contactData.social).map(([key, url]) => (
              <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ))}
          </div>
        </div>

        {submitted ? (
          <div className="text-center text-green-400 font-semibold text-lg">
            Thank you for reaching out! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows={5}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-full hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </>
  );
}
