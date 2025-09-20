import React from "react";

export default function ProfilePage() {
  const services = [
    { title: "Frontend Development", icon: "💻" },
    { title: "Responsive UI Design", icon: "📱" },
    { title: "Performance Optimization", icon: "⚡" },
    { title: "Code Review & Mentorship", icon: "🧠" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-sky-100 px-4 sm:px-6 md:px-12 py-20 font-sans">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-sky-800 mb-4">
          Lingkon Islam
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Frontend Developer focused on React, Next.js, and modern UI tools. I design
          and build elegant, scalable, and responsive interfaces.
        </p>
      </header>

      {/* Services */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-sky-800 mb-12">
          What I Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Button */}
      <div className="text-center mt-20">
        <a
          href="#"
          className="inline-block bg-sky-700 hover:bg-sky-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition text-lg sm:text-xl"
        >
          🚀 Explore My Work
        </a>
      </div>
    </div>
  );
}
