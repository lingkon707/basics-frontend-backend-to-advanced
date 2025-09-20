import React from "react";

// Data for each feature card
const features = [
  {
    id: 1,
    title: "Multilingual & RTL Support",
    description:
      "Support numerous languages and RTL scripts, fully translatable and compatible with multilingual plugins for broader accessibility.",
    icon: "🌐", // Placeholder icon (replace with actual icons)
    bgColor: "bg-indigo-500",
  },
  {
    id: 2,
    title: "Reliable Support Team",
    description:
      "Access dedicated and knowledgeable support promptly for effective assistance and an enhanced user experience.",
    icon: "🧑‍💻", // Placeholder icon (replace with actual icons)
    bgColor: "bg-green-500",
  },
  {
    id: 3,
    title: "GDPR Compliance",
    description:
      "Ensure compliance with data protection laws to boost user confidence and protect against privacy-related risks.",
    icon: "🔒", // Placeholder icon (replace with actual icons)
    bgColor: "bg-blue-500",
  },
  {
    id: 4,
    title: "Developer Friendly",
    description:
      "Use an intuitive interface, flexible code, and extensive documentation to customize the theme efficiently to your needs.",
    icon: "💻", // Placeholder icon (replace with actual icons)
    bgColor: "bg-purple-500",
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full ${feature.bgColor} text-white mb-4`}
              >
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
