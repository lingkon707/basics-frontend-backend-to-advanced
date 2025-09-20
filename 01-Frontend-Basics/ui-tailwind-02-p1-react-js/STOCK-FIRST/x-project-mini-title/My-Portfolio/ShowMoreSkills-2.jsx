import React, { useState } from "react";

export default function SoftwareSkills() {
  const allSkills = [
    { title: "ReactJS", desc: "Modern frontend framework for UI." },
    { title: "Next.js", desc: "React framework with SSR support." },
    { title: "TypeScript", desc: "Typed JavaScript for scalable apps." },
    { title: "Redux Toolkit", desc: "State management made easy." },
    { title: "Tailwind CSS", desc: "Utility-first CSS for fast styling." },
    { title: "Figma", desc: "UI/UX design and prototyping tool." },
    { title: "Firebase", desc: "Real-time backend and hosting." },
    { title: "Git & GitHub", desc: "Version control and collaboration." },
    { title: "REST API", desc: "Data communication interface." },
  ];

  const [showAll, setShowAll] = useState(false);
  const skillsToShow = showAll ? allSkills : allSkills.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-100 px-4 sm:px-8 py-20 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-sky-900 mb-3 tracking-tight">
          🚀 My Software Skills
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          These are the technologies I use to build fast, scalable, and modern web apps.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillsToShow.map((skill, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-left hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-sky-800">{skill.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-12 bg-sky-700 hover:bg-sky-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
          >
            🔽 Show More Skills
          </button>
        )}
      </div>
    </div>
  );
}
