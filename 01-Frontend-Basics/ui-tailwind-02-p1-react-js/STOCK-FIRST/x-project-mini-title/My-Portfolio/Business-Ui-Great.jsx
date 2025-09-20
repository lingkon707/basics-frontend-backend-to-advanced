const skillLevelsColors = {
  Expert: "bg-green-500 text-white",
  Advanced: "bg-blue-500 text-white",
  Intermediate: "bg-yellow-400 text-gray-900",
  Proficient: "bg-purple-500 text-white",
};

const skillIcons = {
  Leadership: "👑",
  Negotiation: "🤝",
  "Strategic Planning": "📈",
  "Financial Management": "💰",
  "Digital Marketing": "📣",
  SEO: "🔍",
  "Sales Strategy": "🚀",
  "Customer Relationship": "💬",
  "Microsoft Excel": "📊",
  "CRM Software": "🧩",
  "Accounting Software": "📒",
  "Project Management": "🗂️",
};

export default function BusinessOwnerSkillsGrid() {
  const skillCategories = {
    "Business Skills": [
      { name: "Leadership", level: "Expert" },
      { name: "Negotiation", level: "Advanced" },
      { name: "Strategic Planning", level: "Advanced" },
      { name: "Financial Management", level: "Intermediate" },
    ],
    "Marketing & Sales": [
      { name: "Digital Marketing", level: "Advanced" },
      { name: "SEO", level: "Intermediate" },
      { name: "Sales Strategy", level: "Advanced" },
      { name: "Customer Relationship", level: "Expert" },
    ],
    Tools: [
      { name: "Microsoft Excel", level: "Proficient" },
      { name: "CRM Software", level: "Advanced" },
      { name: "Accounting Software", level: "Intermediate" },
      { name: "Project Management", level: "Advanced" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-50 px-6 py-12 font-sans max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-sky-700 mb-16">
        Business Owner Skills Showcase
      </h1>

      <div className="space-y-14">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <section key={category}>
            <h2 className="text-3xl font-semibold text-sky-800 border-b-2 border-sky-300 pb-2 mb-8">
              {category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skills.map(({ name, level }) => (
                <div
                  key={name}
                  className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition cursor-default"
                  title={`${name} — ${level}`}
                >
                  <div className="text-5xl mb-4">{skillIcons[name] || "⭐"}</div>
                  <h3 className="text-xl font-bold text-sky-800 mb-2">{name}</h3>
                  <span
                    className={`inline-block text-xs font-semibold px-4 py-1 rounded-full select-none ${
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
          className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-4 rounded-3xl shadow-xl transition text-lg"
        >
          📈 See My Business Portfolio
        </a>
      </div>
    </div>
  );
}
