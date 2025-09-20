"use client";
import React from "react";

const DeveloperShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full bg-gradient-to-r from-blue-900/70 via-black/70 to-gray-900/80 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* Left: Big Image */}
        <div className="md:w-1/2 relative">
          <img
            src="https://ellow.io/wp-content/uploads/2024/07/Coders-vs.-Programmers-1024x536.webp"
            alt="Lingkon Islam Coding"
            className="w-full h-full object-cover"
          />
          {/* subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70"></div>
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center space-y-8 text-white">

          {/* Name & Role */}
          <div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-wide">
              Limon Islam
            </h1>
            <p className="text-yellow-400 text-xl mt-2 font-semibold">
              Frontend Developer & UI/UX Enthusiast
            </p>
          </div>

          {/* Intro + Tagline */}
          <p className="text-gray-300 max-w-lg leading-relaxed text-lg">
            Crafting beautiful, fast, and scalable web experiences using React, Next.js, and Tailwind CSS. Building with passion and precision.
          </p>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-b border-yellow-400 pb-1 inline-block">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-4">
              {["React", "Next.js", "Tailwind CSS", "TypeScript", "Git", "Redux"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow-md cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-b border-yellow-400 pb-1 inline-block">
              Featured Projects
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-lg">
              <li>Next.js E-commerce Platform with Stripe Integration</li>
              <li>Open-source React UI Component Library</li>
              <li>500K+ YouTube views teaching Frontend Development</li>
              <li>Custom Tailwind Admin Dashboard Template</li>
            </ul>
          </div>

          {/* Call to Action */}
          <a
            href="#portfolio"
            className="mt-6 inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperShowcase;
