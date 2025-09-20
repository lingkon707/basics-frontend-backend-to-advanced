import React from "react";

const skills = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Git",
  "REST APIs",
];

const experiences = [
  {
    year: "2023",
    title: "Frontend Developer at XYZ Ltd.",
    details: "Built responsive React apps & improved UX.",
  },
  {
    year: "2022",
    title: "Junior Web Developer at ABC Inc.",
    details: "Maintained client websites with Next.js.",
  },
  {
    year: "2021",
    title: "Internship - Web Development",
    details: "Learned frontend basics & worked on small projects.",
  },
];

export default function CompactProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center p-6 font-sans">
      <h1
        className="text-3xl font-extrabold mb-8 text-center bg-clip-text text-transparent
          bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 max-w-xs"
      >
        My Skills & Experience
      </h1>

      <div className="max-w-md w-full space-y-8">
        {/* Experience Section */}
        <section>
          <h2
            className="text-xl font-bold mb-4 text-transparent bg-clip-text
            bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 border-b-2 border-pink-400 pb-1 max-w-max"
          >
            Experience
          </h2>
          <div className="space-y-4">
            {experiences.map(({ year, title, details }, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-gradient-to-tr
                from-indigo-500 via-purple-600 to-pink-500 hover:shadow-md transition-shadow cursor-default"
              >
                <p className="text-pink-600 font-semibold text-lg">{year}</p>
                <p className="text-gray-900 font-semibold mt-0.5">{title}</p>
                <p className="text-gray-700 text-sm mt-1">{details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2
            className="text-xl font-bold mb-4 text-transparent bg-clip-text
            bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 border-b-2 border-pink-400 pb-1 max-w-max"
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1 rounded-full font-semibold text-white text-xs
                bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600
                shadow cursor-default
                hover:scale-105 hover:shadow-lg transition-transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
