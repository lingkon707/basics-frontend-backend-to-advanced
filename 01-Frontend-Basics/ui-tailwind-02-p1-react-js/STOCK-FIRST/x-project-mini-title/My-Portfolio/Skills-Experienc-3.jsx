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
    details: "Built responsive React apps & improved UX with modern best practices.",
  },
  {
    year: "2022",
    title: "Junior Web Developer at ABC Inc.",
    details: "Maintained client websites using Next.js and optimized load times.",
  },
  {
    year: "2021",
    title: "Internship - Web Development",
    details: "Learned frontend fundamentals and contributed to small projects.",
  },
];

export default function FlexProfileNoIcons() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 font-sans text-gray-900 flex flex-col items-center">
      <h1
        className="text-3xl md:text-4xl font-extrabold mb-4 text-center
          bg-clip-text text-transparent
          bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 max-w-lg"
      >
        Skills & Professional Experience
      </h1>
      <p className="max-w-lg text-center mb-12 text-gray-700">
        Passionate frontend developer focused on building seamless user
        interfaces and optimized web applications using cutting-edge
        technologies. Below is a snapshot of my technical skills and work
        experience.
      </p>

      <div className="flex flex-col md:flex-row gap-12 max-w-5xl w-full">
        {/* Experience Section */}
        <section className="md:w-1/2 flex flex-col gap-6">
          <h2
            className="flex items-center gap-2 text-2xl font-semibold mb-6
          border-b-4 border-pink-400 max-w-max text-transparent bg-clip-text
          bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"
          >
            <span role="img" aria-label="briefcase">
              💼
            </span>{" "}
            Experience
          </h2>
          {experiences.map(({ year, title, details }, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-5 shadow-md border-l-8 border-gradient-to-tr
              from-indigo-500 via-purple-600 to-pink-500 hover:shadow-lg transition-shadow cursor-default"
            >
              <p className="text-pink-600 font-semibold text-lg">{year}</p>
              <p className="text-gray-900 font-semibold mt-1">{title}</p>
              <p className="text-gray-700 mt-2 text-sm">{details}</p>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section className="md:w-1/2">
          <h2
            className="flex items-center gap-2 text-2xl font-semibold mb-6
          border-b-4 border-pink-400 max-w-max text-transparent bg-clip-text
          bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"
          >
            <span role="img" aria-label="code">
              👨‍💻
            </span>{" "}
            Skills
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full font-semibold text-white text-sm
                bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600
                shadow cursor-default
                hover:scale-110 hover:shadow-lg transition-transform"
                title={skill}
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
