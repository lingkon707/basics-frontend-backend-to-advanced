"use client";
import React from "react";

const FreshDeveloperProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-indigo-900 to-purple-900 flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full bg-gradient-to-r from-indigo-800 to-purple-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <img
            src="https://thumbs.dreamstime.com/b/arabian-religious-muslim-man-isolated-36430232.jpg"
            alt="Limon Islam Developer"
            className="w-full h-full object-cover brightness-90"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70"></div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 bg-black/70 p-10 flex flex-col justify-center text-white">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide">Limon Islam</h1>
          <p className="text-yellow-400 font-semibold mb-6 text-lg">Frontend Developer & React Specialist</p>

          <p className="mb-8 max-w-lg leading-relaxed text-gray-300">
            Crafting elegant and efficient web applications with a focus on user experience, performance, and scalable code. Skilled in React, Next.js, and Tailwind CSS.
          </p>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b border-yellow-400 pb-1 w-max">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "Tailwind CSS", "TypeScript", "Redux", "Git"].map(skill => (
                <span key={skill} className="bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-yellow-400 pb-1 w-max">Projects</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300 max-w-lg">
              <li>Next.js E-commerce app with integrated Stripe payments</li>
              <li>Open-source React component library focusing on accessibility</li>
              <li>YouTube tutorials helping 500K+ users learn frontend dev</li>
              <li>Tailwind CSS admin dashboard template, responsive & modern</li>
            </ul>
          </div>

          {/* Call to action */}
          <a
            href="#contact"
            className="mt-10 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-3 rounded-full transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default FreshDeveloperProfile;
