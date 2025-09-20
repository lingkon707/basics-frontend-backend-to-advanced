import { useState, useEffect, useRef } from "react";

const skillLevelsColors = {
  Expert: "bg-green-500 text-white",
  Advanced: "bg-blue-500 text-white",
  Intermediate: "bg-yellow-400 text-gray-900",
  Proficient: "bg-purple-500 text-white",
};

export default function BusinessOwnerSkills() {
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

  const [activeCategory, setActiveCategory] = useState("Business Skills");
  const tabsRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (!tabsRef.current) return;
    const buttons = Array.from(tabsRef.current.querySelectorAll("button"));
    const activeButton = buttons.find(
      (btn) => btn.textContent === activeCategory
    );
    if (activeButton) {
      setUnderlineStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-50 px-4 sm:px-6 py-12 font-sans max-w-5xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-sky-700 mb-12">
        Business Owner Skills Showcase
      </h1>

      {/* Tabs */}
      <div
        ref={tabsRef}
        className="relative flex justify-center space-x-8 border-b border-gray-300 mb-12"
      >
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative py-3 font-semibold text-base sm:text-lg transition-colors duration-300 focus:outline-none ${
              activeCategory === category
                ? "text-sky-700"
                : "text-gray-500 hover:text-sky-600"
            }`}
          >
            {category}
          </button>
        ))}

        {/* Animated underline */}
        <span
          className="absolute bottom-0 h-1 bg-sky-600 rounded-t-md transition-all duration-300"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skillCategories[activeCategory].map(({ name, level }) => (
          <div
            key={name}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center
              hover:shadow-xl transform hover:scale-[1.06] transition cursor-default"
            title={`${name} — ${level}`}
          >
            <span className="text-xl font-bold text-sky-800 mb-3">{name}</span>
            <span
              className={`text-xs font-semibold px-4 py-1 rounded-full select-none ${
                skillLevelsColors[level] ?? "bg-gray-300 text-gray-700"
              }`}
            >
              {level}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
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
