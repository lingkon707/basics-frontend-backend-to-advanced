"use client";
import React from "react";

const BasicProfileWithInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-10 text-white">

        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Limon Islam</h1>
          <p className="text-yellow-400 text-xl font-semibold">Frontend Developer</p>
        </header>

        {/* About Me */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 border-b border-yellow-400 pb-1 w-max">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate frontend developer specializing in React, Next.js, and Tailwind CSS. With over 1.5 years of experience, I create fast, responsive, and user-friendly websites. I enjoy turning complex problems into simple, beautiful solutions.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 border-b border-yellow-400 pb-1 w-max">
            Skills
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>React & Next.js</li>
            <li>Tailwind CSS & Responsive Design</li>
            <li>JavaScript (ES6+) & TypeScript</li>
            <li>Version Control with Git & GitHub</li>
            <li>API Integration & RESTful Services</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 border-b border-yellow-400 pb-1 w-max">
            Projects
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Next.js E-commerce App:</strong> Integrated Stripe payments and optimized for SEO.
            </li>
            <li>
              <strong>React UI Library:</strong> Created open-source accessible components.
            </li>
            <li>
              <strong>Frontend Tutorials:</strong> YouTube channel with 500K+ views teaching web dev.
            </li>
            <li>
              <strong>Admin Dashboard:</strong> Tailwind CSS based, responsive, customizable template.
            </li>
          </ul>
        </section>

        {/* Contact Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-3 rounded-full transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default BasicProfileWithInfo;
