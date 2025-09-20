import React from "react";

export default function ProfilePage() {
  const services = [
    "Frontend Web Development",
    "Responsive UI Design",
    "Performance Optimization",
    "Code Review & Mentorship",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 px-5 sm:px-8 md:px-16 py-16 font-sans max-w-6xl mx-auto">
      {/* Header */}
      <header className="text-center mb-20 px-2 sm:px-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-sky-900 mb-5 leading-tight">
          Lingkon Islam
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed tracking-wide">
          Passionate Frontend Developer specializing in React, Next.js, and modern web
          technologies. Dedicated to crafting clean, responsive, and performant user
          interfaces.
        </p>
      </header>

      {/* Services */}
      <section className="mb-24 px-2 sm:px-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-sky-800 mb-10 border-b-2 border-sky-300 inline-block pb-2">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <p className="text-lg font-semibold text-sky-900">{service}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
