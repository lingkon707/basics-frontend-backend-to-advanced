import React from "react";

const tailwindColors = {
  primary: "bg-red-600",
  secondary: "bg-white/90",
  accent: "text-red-600",
  textPrimary: "text-gray-900",
  textSecondary: "text-gray-700",
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-3 bg-white shadow rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-default text-sm">
    <div className={`p-2 rounded-full bg-red-100 text-red-600 text-xl mb-2`}>
      {icon}
    </div>
    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
    <p className="text-gray-600 leading-snug">{description}</p>
  </div>
);

const FormSlide = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-blue-400 r-bg-center px-6 py-16"
      // style={{
      //   backgroundImage:
      //     // "url('https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg')",
      // }}
    >
      <div className="max-w-6xl w-full bg-white/95 rounded-3xl shadow-2xl backdrop-blur-sm flex flex-col md:flex-row overflow-hidden">
        {/* Left image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://pbil.in/wp-content/uploads/2025/04/Untitled-design-2025-04-07T172420.550.png"
            alt="PRAN Frozen Food"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right content */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Discover PRAN Frozen Foods
          </h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-xl">
            Experience the best of convenience and taste with PRAN’s premium
            frozen food collection. Carefully crafted and hygienically packed to
            preserve freshness and nutrition, perfect for modern lifestyles.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
            <FeatureCard
              icon="🥟"
              title="Variety"
              description="Wide range of frozen options."
            />
            <FeatureCard
              icon="⏱️"
              title="Time-Saving"
              description="Ready-to-cook convenience."
            />
            <FeatureCard
              icon="🧼"
              title="Hygienic"
              description="Strict safety standards."
            />
            <FeatureCard
              icon="🛒"
              title="Availability"
              description="Found nationwide."
            />
          </div>

          <button className="self-start mt-4 px-8 py-3 bg-red-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-red-700 transition-colors">
            Browse Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSlide;
