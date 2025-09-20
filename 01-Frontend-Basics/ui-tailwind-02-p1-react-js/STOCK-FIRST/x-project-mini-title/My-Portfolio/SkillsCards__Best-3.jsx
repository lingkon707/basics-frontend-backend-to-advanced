import React from "react";

const skills = [
  { name: "React.js", weight: 5 },
  { name: "Next.js", weight: 4 },
  { name: "Tailwind CSS", weight: 5 },
  { name: "JavaScript", weight: 5 },
  { name: "TypeScript", weight: 4 },
  { name: "Node.js", weight: 3 },
  { name: "Git", weight: 4 },
  { name: "REST APIs", weight: 3 },
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

function SkillTag({ name, weight }) {
  // Map weight 1-5 to font size and bg intensity
  const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
  const bgColors = [
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
  ];

  const sizeClass = sizes[Math.min(weight - 1, sizes.length - 1)];
  const bgClass = bgColors[Math.min(weight - 1, bgColors.length - 1)];

  return (
    <span
      className={`${sizeClass} ${bgClass} text-white font-semibold rounded-full px-4 py-1 cursor-pointer
      hover:bg-blue-600 transition`}
      title={name}
    >
      {name}
    </span>
  );
}

export default function NewUI() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 p-8 flex flex-col items-center font-sans">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900">My Skills & Experience</h1>

      <div className="max-w-3xl w-full flex flex-col md:flex-row gap-12 bg-white rounded-xl shadow-lg p-8">
        {/* Timeline Section */}
        <section className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
            Experience
          </h2>
          <ul className="relative border-l-4 border-blue-400 pl-6 space-y-8">
            {experiences.map(({ year, title, details }, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-5 top-0 w-4 h-4 rounded-full bg-blue-400 ring-2 ring-white"></span>
                <p className="font-bold text-blue-700">{year}</p>
                <p className="font-semibold text-gray-900">{title}</p>
                <p className="text-gray-700">{details}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills Section */}
        <section className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <SkillTag key={skill.name} name={skill.name} weight={skill.weight} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
