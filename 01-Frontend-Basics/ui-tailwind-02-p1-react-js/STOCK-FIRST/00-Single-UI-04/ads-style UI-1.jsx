import React from "react";

const tailwindColors = {
  primary: "bg-red-600",
  secondary: "bg-white",
  accent: "text-red-600",
  textPrimary: "text-white",
  textSecondary: "text-gray-900",
};

const FeatureBadge = ({ text }) => (
  <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-md">
    {text}
  </span>
);

const AdFeature = ({ icon, title }) => (
  <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-pointer">
    <div className="text-3xl text-red-600">{icon}</div>
    <p className="font-semibold text-red-700">{title}</p>
  </div>
);

const FormSlide = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6 py-16"
      style={{
        backgroundImage:
          "url('https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg')",
      }}
    >
      <div className="max-w-5xl w-full bg-red-700 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://pbil.in/wp-content/uploads/2025/04/Untitled-design-2025-04-07T172420.550.png"
            alt="PRAN Frozen Food"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full p-10 flex flex-col justify-center space-y-8 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-5xl font-extrabold leading-tight max-w-[320px]">
              PRAN Frozen Foods
            </h2>
            <FeatureBadge text="Best Seller" />
          </div>

          <p className="text-lg font-semibold max-w-xl">
            Ready-to-cook meals that bring convenience and flavor to your table.
            Perfect for busy days without sacrificing taste or quality.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <AdFeature icon="🔥" title="Hot & Fresh" />
            <AdFeature icon="⏱️" title="Quick Prep" />
            <AdFeature icon="🧼" title="Hygienically Packed" />
            <AdFeature icon="🌍" title="Available Nationwide" />
          </div>

          <button className="mt-6 px-10 py-4 bg-white text-red-700 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSlide;
