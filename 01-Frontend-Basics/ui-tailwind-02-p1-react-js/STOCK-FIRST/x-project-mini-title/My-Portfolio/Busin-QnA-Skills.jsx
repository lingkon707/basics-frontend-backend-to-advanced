import { useState } from "react";

const skillLevelsColors = {
  Expert: "bg-green-500 text-white",
  Advanced: "bg-blue-500 text-white",
  Intermediate: "bg-yellow-400 text-gray-900",
  Proficient: "bg-purple-500 text-white",
};

export default function BusinessOwnerSkillsAccordion() {
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

  const [openSections, setOpenSections] = useState({});

  function toggleSection(name) {
    setOpenSections((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-50 px-6 py-12 font-sans max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-sky-700 mb-12">
        Business Owner Skills Showcase
      </h1>

      <div className="space-y-6">
        {Object.entries(skillCategories).map(([category, skills]) => {
          const isOpen = openSections[category];
          return (
            <section
              key={category}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleSection(category)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-xl text-sky-800 hover:bg-sky-50 focus:outline-none"
              >
                {category}
                <svg
                  className={`w-6 h-6 text-sky-600 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                className={`px-6 pb-6 transition-max-height duration-500 ease-in-out ${
                  isOpen ? "max-h-screen" : "max-h-0"
                } overflow-hidden`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                  {skills.map(({ name, level }) => (
                    <div
                      key={name}
                      className="bg-sky-50 rounded-xl p-4 flex flex-col items-center shadow-inner"
                      title={`${name} — ${level}`}
                    >
                      <span className="text-lg font-bold text-sky-800 mb-2">
                        {name}
                      </span>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full select-none ${
                          skillLevelsColors[level] ?? "bg-gray-300 text-gray-700"
                        }`}
                      >
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <a
          href="#"
          className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-7 py-3 rounded-xl shadow-lg transition text-lg"
        >
          📈 See My Business Portfolio
        </a>
      </div>
    </div>
  );
}
