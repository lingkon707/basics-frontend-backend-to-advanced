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

export default function ProfilePage() {
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

  const services = [
    "Frontend Web Development",
    "Responsive UI Design",
    "Performance Optimization",
    "Code Review & Mentorship",
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-5 sm:px-8 md:px-16 py-16 font-sans max-w-6xl mx-auto">
      {/* Header */}
      <header className="text-center mb-20 px-2 sm:px-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-sky-900 mb-5 leading-tight">
          Lingkon Islam
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed tracking-wide">
          Passionate Frontend Developer specializing in React, Next.js, and modern web
          technologies. Dedicated to crafting clean, responsive, and performant user
          interfaces.
        </p>
      </header>

      {/* Services */}
      <section className="mb-24 px-2 sm:px-10 max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold text-sky-900 mb-8 border-b border-sky-300 pb-3">
          Services
        </h2>
        <ul className="space-y-4 text-gray-700 text-lg list-disc list-inside">
          {services.map((service) => (
            <li key={service} className="hover:text-sky-700 transition cursor-default">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="px-2 sm:px-10">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-semibold text-sky-800 mb-10 border-b border-sky-200 pb-2">
              {category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {skills.map(({ name, level }) => (
                <div
                  key={name}
                  className="bg-white rounded-3xl shadow-md p-7 flex flex-col items-center text-center hover:shadow-lg transition cursor-default"
                  title={`${name} — ${level}`}
                >
                  <div className="text-5xl sm:text-6xl mb-4 sm:mb-5">{skillIcons[name] || "💻"}</div>
                  <h4 className="text-xl font-bold text-sky-900 mb-2 sm:mb-3">{name}</h4>
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
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="text-center mt-20 px-2 sm:px-0">
        <a
          href="#"
          className="inline-block bg-sky-700 hover:bg-sky-800 text-white font-semibold px-8 py-4 rounded-3xl shadow-lg transition text-lg sm:text-xl"
        >
          🚀 Explore My Portfolio
        </a>
      </div>
    </div>
  );
}
