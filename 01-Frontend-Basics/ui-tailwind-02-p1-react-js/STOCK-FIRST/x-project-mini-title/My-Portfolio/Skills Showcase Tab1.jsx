import { useState } from "react";

export default function DemoLanguagesUI() {
  const skillCategories = {
    Languages: [
      { name: "HTML", level: "Expert" },
      { name: "CSS", level: "Expert" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
    ],
    Frameworks: [
      { name: "ReactJS", level: "Advanced" },
      { name: "NextJS", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Redux", level: "Intermediate" },
    ],
    Tools: [
      { name: "Figma", level: "Proficient" },
      { name: "Git & GitHub", level: "Advanced" },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Languages");

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-50 px-6 py-10 font-sans max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-sky-700 mb-8">
        Developer Skills Showcase
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-6 space-x-6 border-b border-gray-300">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`pb-2 font-semibold text-sm sm:text-base transition ${
              activeCategory === category
                ? "border-b-4 border-sky-600 text-sky-700"
                : "text-gray-500 hover:text-sky-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skillCategories[activeCategory].map(({ name, level }) => (
          <div
            key={name}
            className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center justify-center hover:shadow-md transition cursor-default"
            title={`${name} — ${level}`}
          >
            <span className="text-sky-800 font-semibold">{name}</span>
            <small className="text-gray-500 text-xs mt-1">{level}</small>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-5 py-3 rounded-md shadow-md transition text-sm sm:text-base"
        >
          💼 Explore My Portfolio
        </a>
      </div>
    </div>
  );
}
