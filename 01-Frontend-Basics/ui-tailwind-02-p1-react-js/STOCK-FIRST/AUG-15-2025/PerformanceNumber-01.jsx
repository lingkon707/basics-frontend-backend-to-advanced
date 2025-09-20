import React from "react";

// Data for the performance metrics
const performanceMetrics = [
  {
    id: 1,
    score: 99,
    label: "Mobile Performance",
  },
  {
    id: 2,
    score: 100,
    label: "Desktop Performance",
  },
  {
    id: 3,
    score: 100,
    label: "SEO Performance",
  },
];

const PerformanceSection = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {performanceMetrics.map((metric) => (
            <div
              key={metric.id}
              className="flex flex-col items-center bg-white p-6 rounded-full shadow-lg"
            >
              <div
                className="w-24 h-24 flex items-center justify-center rounded-full bg-green-100"
                style={{
                  background: `conic-gradient(#34D399 ${metric.score}%, #E0F4E3 0%)`,
                }}
              >
                <span className="text-3xl font-semibold text-green-700">{metric.score}</span>
              </div>
              <p className="text-lg font-semibold text-blue-800 mt-4">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
