import React, { useState } from "react";

export default function SoftwareSkills() {
  const allSkills = [
    { title: "ReactJS", desc: "Modern frontend framework for UI." },
    { title: "Next.js", desc: "React framework with SSR support." },
    { title: "TypeScript", desc: "Typed JavaScript for scalable apps." },
    { title: "Redux Toolkit", desc: "State management made easy." },
    { title: "Tailwind CSS", desc: "Utility-first CSS for speed & design." },
    { title: "Figma", desc: "Interface design & prototyping tool." },
    { title: "Firebase", desc: "Real-time backend & authentication." },
    { title: "Git & GitHub", desc: "Version control and collaboration." },
    { title: "REST API", desc: "Data communication standard." },
  ];

  const [showAll, setShowAll] = useState(false);
  const skillsToShow = showAll ? allSkills : allSkills.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-sky-100 px-4 sm:px-8 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-sky-800 mb-4">
          💻 Advanced Software Skills
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          Here are the tools, frameworks, and platforms I specialize in as a frontend developer.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillsToShow.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-xl transition p-6 text-left"
            >
              <h3 className="text-lg font-bold text-sky-800 mb-1">{skill.title}</h3>
              <p className="text-sm text-gray-600">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-12 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
          >
            🔽 Show More Skills
          </button>
        )}
      </div>
    </div>
  );
}
