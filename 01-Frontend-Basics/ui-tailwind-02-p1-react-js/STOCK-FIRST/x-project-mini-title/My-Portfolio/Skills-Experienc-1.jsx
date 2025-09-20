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

export default function FreshUI() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8 font-sans">
      <h1 className="text-4xl font-extrabold mb-12 text-gray-900 text-center">
        My Skills & Experience
      </h1>

      <div className="max-w-4xl w-full space-y-12">
        {/* Experience Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b border-gray-300 pb-3">
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map(({ year, title, details }, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-default"
              >
                <p className="text-indigo-600 font-bold text-xl">{year}</p>
                <p className="text-gray-900 font-semibold text-lg mt-1">{title}</p>
                <p className="text-gray-700 mt-2">{details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b border-gray-300 pb-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-indigo-100 text-indigo-800 px-5 py-2 rounded-full text-base font-medium
                  hover:bg-indigo-200 cursor-default transition"
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
