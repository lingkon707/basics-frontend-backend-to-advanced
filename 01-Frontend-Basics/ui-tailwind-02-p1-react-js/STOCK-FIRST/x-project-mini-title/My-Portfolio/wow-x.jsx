"use client";
import React from "react";

const DeveloperProfileAlternative = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg p-12 flex flex-col md:flex-row gap-10">

        {/* Left - Profile & Contact */}
        <div className="md:w-1/3 flex flex-col items-center text-center space-y-6">
          <img
            src="https://blog.hyperiondev.com/wp-content/uploads/2021/01/Web-dev-cover.jpg"
            alt="Limon Islam"
            className="rounded-full w-48 h-48 object-cover border-4 border-yellow-400 shadow-xl"
          />
          <h1 className="text-4xl font-extrabold text-white">Limon Islam</h1>
          <p className="text-yellow-400 font-semibold">Frontend Developer</p>

          <a
            href="#contact"
            className="mt-4 px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition"
          >
            Contact Me
          </a>
        </div>

        {/* Right - Info */}
        <div className="md:w-2/3 text-white flex flex-col justify-between">

          {/* About Me */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-yellow-400 w-max pb-1">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Experienced Frontend Developer specialized in React, Next.js, and Tailwind CSS.
              Passionate about crafting performant and scalable web applications with pixel-perfect design.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-yellow-400 w-max pb-1">
              Skills & Strengths
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-4xl font-extrabold text-yellow-400">1.5+</p>
                <p className="text-gray-300 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-yellow-400">20+</p>
                <p className="text-gray-300 mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-yellow-400">5</p>
                <p className="text-gray-300 mt-1">Core Technologies</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-yellow-400 w-max pb-1">
              Highlighted Projects
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Next.js eCommerce platform with integrated payment solutions</li>
              <li>Open-source React UI library with accessible components</li>
              <li>YouTube series with 500K+ views on frontend tutorials</li>
              <li>Responsive Tailwind CSS admin dashboard templates</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfileAlternative;
