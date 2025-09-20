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

export default function UniqueProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-200 via-pink-200 to-yellow-200 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900">My Journey</h1>

      {/* Experience Timeline */}
      <div className="relative w-full max-w-5xl overflow-x-auto scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-pink-100 mb-12">
        <ul className="flex space-x-16 px-4">
          {experiences.map(({ year, title, details }, i) => (
            <li key={i} className="min-w-[220px] flex flex-col items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-400 text-white font-bold text-lg shadow-lg mb-3">
                {year}
              </div>
              <h3 className="font-semibold text-gray-800 text-center mb-1">{title}</h3>
              <p className="text-sm text-gray-600 text-center">{details}</p>
            </li>
          ))}
        </ul>

        {/* Timeline line */}
        <div className="absolute top-9 left-4 right-4 h-1 bg-pink-300 rounded"></div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-5xl w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 px-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex flex-col items-center bg-white rounded-full shadow-md p-5 cursor-default hover:shadow-xl transition"
          >
            <div className="text-pink-500 font-bold text-xl mb-2 select-none">
              {skill
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>
            <span className="text-gray-700 font-medium text-center text-xs select-none">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
