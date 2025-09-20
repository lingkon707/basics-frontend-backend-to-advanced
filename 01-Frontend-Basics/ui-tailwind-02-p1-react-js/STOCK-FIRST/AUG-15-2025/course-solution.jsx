import React from "react";

// Data for each service card
const services = [
  {
    id: 1,
    title: "IT Consultation",
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    tags: ["Consultation", "Management"],
    icon: "🧑‍💼", // Placeholder icon for the service
  },
  {
    id: 2,
    title: "Data Security",
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    tags: ["Management", "Backup", "Security"],
    icon: "🔐", // Placeholder icon for the service
  },
  {
    id: 3,
    title: "Website Development",
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    tags: ["WordPress", "Theme", "Data"],
    icon: "💻", // Placeholder icon for the service
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    tags: ["Design", "Development"],
    icon: "🎨", // Placeholder icon for the service
  },
  {
    id: 5,
    title: "Cloud Services",
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    tags: ["Cloud", "Services"],
    icon: "☁️", // Placeholder icon for the service
  },
  {
    id: 6,
    title: "Game Development",
    description:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    tags: ["Gaming", "Development"],
    icon: "🎮", // Placeholder icon for the service
  },
];

const ServicesSection = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl text-center font-bold text-gray-900 mb-12">
        Perfect IT Solutions For Your Business
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl">{service.icon}</span>
            </div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-700 text-base mb-4">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
