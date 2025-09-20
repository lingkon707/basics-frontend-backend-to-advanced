const skillLevelsColors = {
  Expert: "bg-green-600 text-white",
  Advanced: "bg-blue-600 text-white",
  Intermediate: "bg-yellow-400 text-gray-900",
  Proficient: "bg-purple-600 text-white",
};

const skillIcons = {
  HTML: "🌐",
  CSS: "🎨",
  JavaScript: "⚡",
  TypeScript: "🔷",
  ReactJS: "⚛️",
  NextJS: "➡️",
  "Tailwind CSS": "💨",
  Redux: "🗃️",
  Figma: "🖌️",
  "Git & GitHub": "🐙",
};

export default function CodingSkillsShowcase() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-50 px-6 py-14 font-sans max-w-5xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-sky-800 mb-16">
        My Coding Skills
      </h1>

      <div className="space-y-14">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <section key={category}>
            <h2 className="text-3xl font-semibold text-sky-900 border-b-2 border-sky-300 pb-3 mb-10">
              {category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {skills.map(({ name, level }) => (
                <div
                  key={name}
                  className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition cursor-default"
                  title={`${name} — ${level}`}
                >
                  <div className="text-6xl mb-5">{skillIcons[name] || "💻"}</div>
                  <h3 className="text-2xl font-bold text-sky-900 mb-3">{name}</h3>
                  <span
                    className={`inline-block text-sm font-semibold px-5 py-2 rounded-full select-none ${
                      skillLevelsColors[level] ?? "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="text-center mt-20">
        <a
          href="#"
          className="inline-block bg-sky-700 hover:bg-sky-800 text-white font-semibold px-8 py-4 rounded-3xl shadow-xl transition text-lg sm:text-xl"
        >
          🚀 Explore My Portfolio
        </a>
      </div>
    </div>
  );
}
