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
    details:
      "Built responsive React applications and improved user experience.",
  },
  {
    year: "2022",
    title: "Junior Web Developer at ABC Inc.",
    details:
      "Assisted in development and maintenance of client websites using Next.js.",
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
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center max-w-lg">
         Date
      </h1>

    

      {/* Skills & Experience Card */}
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">My Skills</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Experiences
        </h2>
        <ul className="space-y-4 text-gray-800 text-sm">
          {experiences.map(({ year, title, details }) => (
            <li key={year} className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-blue-700">{year}</p>
              <p className="font-medium">{title}</p>
              <p className="text-gray-600">{details}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
