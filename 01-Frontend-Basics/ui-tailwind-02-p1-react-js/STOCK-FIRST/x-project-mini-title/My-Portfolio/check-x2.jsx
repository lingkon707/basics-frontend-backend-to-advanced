"use client";
import React from "react";

const DeveloperProfileEnhanced = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg p-12 flex flex-col md:flex-row gap-12">

        {/* Left: Profile & Contact */}
        <div className="md:w-1/3 flex flex-col items-center text-center space-y-8">
          <img
            src="https://blog.hyperiondev.com/wp-content/uploads/2021/01/Web-dev-cover.jpg"
            alt="Limon Islam"
            className="rounded-full w-48 h-48 object-cover border-4 border-yellow-400 shadow-xl"
          />
          <h1 className="text-4xl font-extrabold text-white">Limon Islam</h1>
          <p className="text-yellow-400 font-semibold tracking-wide">Frontend Developer & UI/UX Enthusiast</p>

          <div className="flex flex-col gap-4 w-full max-w-xs">
            <a
              href="#contact"
              className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition text-center"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold rounded-full transition text-center"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right: Info */}
        <div className="md:w-2/3 text-white flex flex-col justify-between">

          {/* About Me */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-5 border-b-4 border-yellow-400 w-max pb-1">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
              I'm a passionate Frontend Developer with over 1.5 years of professional experience
              specializing in React, Next.js, and Tailwind CSS. I believe in writing clean,
              maintainable code and crafting user interfaces that are both beautiful and highly
              performant. My mission is to empower users through intuitive digital experiences.
            </p>
          </section>

          {/* Skills & Philosophy */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-5 border-b-4 border-yellow-400 w-max pb-1">
              Skills & Philosophy
            </h2>
            <div className="grid grid-cols-3 gap-6 mb-6 max-w-md">
              <div className="text-center">
                <p className="text-5xl font-extrabold text-yellow-400">1.5+</p>
                <p className="text-gray-300 mt-2 tracking-wide">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-extrabold text-yellow-400">20+</p>
                <p className="text-gray-300 mt-2 tracking-wide">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-extrabold text-yellow-400">5</p>
                <p className="text-gray-300 mt-2 tracking-wide">Core Technologies</p>
              </div>
            </div>

            <p className="max-w-3xl text-gray-300 mb-6">
              I follow best practices like component-driven development, mobile-first design,
              and continuous refactoring to deliver scalable and efficient solutions.
              Communication and collaboration with clients and teams are always top priorities.
            </p>

            {/* Tech Stack */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "Redux",
                  "Git",
                  "Vercel",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1 bg-yellow-400 text-black font-semibold rounded-full shadow-sm cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-3xl font-bold mb-5 border-b-4 border-yellow-400 w-max pb-1">
              Highlighted Projects
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-300 max-w-3xl text-lg">
              <li>
                <strong>Next.js E-commerce Platform:</strong> Seamless Stripe payment integration with
                optimized SEO and blazing fast page loads.
              </li>
              <li>
                <strong>React UI Component Library:</strong> Open-source, accessible, and customizable components.
              </li>
              <li>
                <strong>Frontend Tutorials on YouTube:</strong> Helped 500K+ learners grasp modern frontend
                development concepts.
              </li>
              <li>
                <strong>Admin Dashboard Template:</strong> Responsive, Tailwind CSS-based with
                reusable widgets and charts.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfileEnhanced;
