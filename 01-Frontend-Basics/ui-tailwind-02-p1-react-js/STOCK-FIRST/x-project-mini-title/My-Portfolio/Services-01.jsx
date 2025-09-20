import React from "react";

export default function ProfilePage() {
  const services = [
    "Frontend Web Development",
    "Responsive UI Design",
    "Performance Optimization",
    "Code Review & Mentorship",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-sky-100 px-4 sm:px-6 md:px-10 py-20 font-sans">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Lingkon Islam
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A passionate Frontend Developer focused on building clean, high-performing,
          and user-friendly interfaces with React, Next.js, and modern web tools.
        </p>
      </div>

      {/* Services */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-sky-800 text-center mb-12 border-b-2 border-sky-200 pb-3 w-fit mx-auto">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 sm:px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="text-sky-600 text-3xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-gray-800">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Button */}
      <div className="text-center mt-20">
        <a
          href="#"
          className="inline-block bg-sky-700 hover:bg-sky-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300 text-lg sm:text-xl"
        >
          🚀 View My Portfolio
        </a>
      </div>
    </div>
  );
}
