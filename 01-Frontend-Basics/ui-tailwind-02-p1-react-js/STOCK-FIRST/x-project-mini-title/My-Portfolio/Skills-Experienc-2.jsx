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

export default function ColorfulUI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center p-10 font-sans">
      <h1
        className="text-5xl font-extrabold mb-14 text-center bg-clip-text text-transparent
      bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600"
      >
        My Skills & Experience
      </h1>

      <div className="max-w-5xl w-full space-y-14">
        {/* Experience Section */}
        <section>
          <h2
            className="text-3xl font-bold mb-8 text-transparent bg-clip-text
          bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 border-b-4 border-pink-400 pb-3 max-w-max"
          >
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map(({ year, title, details }, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md border-l-8 border-gradient-to-tr
              from-indigo-500 via-purple-600 to-pink-500 hover:shadow-lg transition-shadow cursor-default"
              >
                <p className="text-pink-600 font-extrabold text-2xl">{year}</p>
                <p className="text-gray-900 font-semibold text-xl mt-1">{title}</p>
                <p className="text-gray-700 mt-2">{details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2
            className="text-3xl font-bold mb-8 text-transparent bg-clip-text
          bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 border-b-4 border-pink-400 pb-3 max-w-max"
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 rounded-full font-semibold text-white
                bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600
                shadow-md cursor-default
                hover:scale-110 hover:shadow-lg transition-transform"
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
