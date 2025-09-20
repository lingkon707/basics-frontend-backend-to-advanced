"use client";
import React from "react";

const DeveloperProfileShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-10 text-white">

        {/* Left Panel - Profile & Skills */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl flex flex-col items-center space-y-6">
          <img
            src="https://ellow.io/wp-content/uploads/2024/07/Coders-vs.-Programmers-1024x536.webp"
            alt="Limon Islam Developer"
            className="rounded-3xl w-full h-80 object-cover shadow-lg"
          />
          <h1 className="text-4xl font-extrabold text-center">Limon Islam</h1>
          <p className="text-gray-300 text-center text-lg max-w-md">
            Passionate Frontend Developer specializing in React, Next.js & Tailwind CSS. 
            Delivering seamless UI experiences with scalable code.
          </p>

          {/* Skills / Strengths */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-md text-center mt-6">
            <div>
              <p className="text-3xl font-bold text-yellow-400">1.5+</p>
              <p className="text-sm text-gray-300 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">20+</p>
              <p className="text-sm text-gray-300 mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">5</p>
              <p className="text-sm text-gray-300 mt-1">Core Strengths</p>
            </div>
          </div>

          {/* Strengths List */}
          <ul className="mt-8 max-w-md space-y-3 text-left text-gray-200">
            <li>✅ Clean, maintainable React & Next.js code</li>
            <li>✅ Responsive & mobile-first UI design with Tailwind</li>
            <li>✅ Strong collaboration & agile workflow</li>
            <li>✅ Continuous learning & adapting new tech</li>
            <li>✅ Problem solving & performance optimization</li>
          </ul>

          <a
            href="#portfolio"
            className="mt-8 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full transition"
          >
            Explore My Projects
          </a>
        </div>

        {/* Right Panel - Projects & Tips */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl flex flex-col space-y-8">

          <section>
            <h2 className="text-3xl font-bold mb-4 border-b border-yellow-400 pb-2">Featured Projects</h2>
            <ul className="space-y-4 text-gray-200">
              <li>
                <strong>⚡ Next.js eCommerce App:</strong> Integrated Stripe payment and optimized for speed & SEO.
              </li>
              <li>
                <strong>🎨 React UI Library:</strong> Open-source reusable components with full accessibility support.
              </li>
              <li>
                <strong>📺 YouTube Tutorials:</strong> 500K+ developers helped learn frontend fundamentals.
              </li>
              <li>
                <strong>📊 Admin Dashboard Template:</strong> Tailwind-based, responsive and easy to customize.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 border-b border-yellow-400 pb-2">Pro Tips & Hints</h2>
            <ul className="space-y-3 text-gray-300">
              <li>💡 Keep components small and reusable for easier maintenance.</li>
              <li>💡 Use Tailwind's utility classes to speed up styling and keep consistency.</li>
              <li>💡 Leverage Next.js static generation for faster page loads.</li>
              <li>💡 Always optimize images and assets for performance.</li>
              <li>💡 Write meaningful commit messages to track your project history clearly.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-yellow-400 hover:underline cursor-pointer">
              <a href="#resume">View Full Resume &rarr;</a>
            </h3>
          </section>

        </div>
      </div>
    </div>
  );
};

export default DeveloperProfileShowcase;
