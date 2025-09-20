import { useState } from "react";

const skillLevelsColors = {
  Expert: "bg-green-500 text-white",
  Advanced: "bg-blue-500 text-white",
  Intermediate: "bg-yellow-400 text-gray-900",
  Proficient: "bg-purple-500 text-white",
};

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
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-50 px-6 py-12 font-sans max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-sky-700 mb-10">
        Developer Skills Showcase
      </h1>

      {/* Tabs */}
      <div className="relative flex justify-center mb-10 border-b border-gray-300">
        {Object.keys(skillCategories).map((category, idx, arr) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                relative px-5 py-2 font-semibold text-sm sm:text-base
                ${
                  isActive
                    ? "text-sky-700"
                    : "text-gray-500 hover:text-sky-600 transition"
                }
                focus:outline-none
              `}
              style={{ zIndex: 10 }}
            >
              {category}
              {isActive && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-1 bg-sky-600 rounded-t-md"
                  style={{ transition: "width 0.3s ease" }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skillCategories[activeCategory].map(({ name, level }) => (
          <div
            key={name}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center justify-center
              hover:shadow-xl transform hover:scale-[1.05] transition cursor-default"
            title={`${name} — ${level}`}
          >
            <span className="text-lg font-bold text-sky-800 mb-2">{name}</span>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                skillLevelsColors[level] ?? "bg-gray-300 text-gray-700"
              } select-none`}
            >
              {level}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <a
          href="#"
          className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition text-base"
        >
          💼 Explore My Portfolio
        </a>
      </div>
    </div>
  );
}
