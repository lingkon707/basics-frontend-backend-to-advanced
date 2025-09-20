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
    details: "Built responsive React applications and improved user experience.",
  },
  {
    year: "2022",
    title: "Junior Web Developer at ABC Inc.",
    details: "Assisted in development and maintenance of client websites using Next.js.",
  },
  {
    year: "2021",
    title: "Internship - Web Development",
    details: "Learned frontend basics and worked on small projects.",
  },
];

export default function Hello() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-white mb-10 text-center max-w-lg">
        My Skills & Experience
      </h1>

      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-semibold text-white cursor-default
                           bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md hover:from-indigo-600 hover:to-blue-500
                           transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Experience</h2>
          <ul className="relative border-l-4 border-blue-500 pl-6 space-y-8">
            {experiences.map(({ year, title, details }, i) => (
              <li key={i} className="relative">
                <span
                  className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white"
                  aria-hidden="true"
                ></span>
                <p className="text-blue-700 font-bold">{year}</p>
                <p className="font-semibold text-gray-800">{title}</p>
                <p className="text-gray-600">{details}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
