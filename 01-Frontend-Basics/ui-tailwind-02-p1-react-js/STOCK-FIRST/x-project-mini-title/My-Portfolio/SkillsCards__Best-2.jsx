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

export default function FantasticProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-purple-900 to-indigo-900 flex flex-col items-center p-8 text-white font-sans">
      <h1 className="text-5xl font-extrabold mb-12 tracking-wide drop-shadow-lg text-center">
        My Journey
      </h1>

      {/* Timeline */}
      <div className="relative w-full max-w-6xl overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-indigo-900 mb-16">
        <ul className="flex space-x-20 px-6 relative z-10">
          {experiences.map(({ year, title, details }, i) => (
            <li
              key={i}
              className="min-w-[240px] flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-indigo-600 transition"
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600
                text-white font-extrabold text-2xl tracking-widest mb-4 drop-shadow-lg animate-pulse"
              >
                {year}
              </div>
              <h3 className="text-lg font-bold mb-2 text-indigo-100 text-center">{title}</h3>
              <p className="text-indigo-300 text-center text-sm">{details}</p>
            </li>
          ))}
        </ul>

        {/* Gradient Timeline Bar */}
        <div
          className="absolute top-12 left-8 right-8 h-1 rounded-full
           bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 opacity-60"
          style={{ filter: "blur(5px)" }}
        />
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8 px-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-full p-6 cursor-default
              shadow-lg shadow-indigo-900/50 hover:shadow-indigo-400/80 hover:scale-110 transform transition-transform duration-300"
          >
            <div className="text-indigo-400 font-extrabold text-3xl mb-2 select-none">
              {skill
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>
            <span className="text-indigo-200 font-semibold text-center select-none text-xs sm:text-sm">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
