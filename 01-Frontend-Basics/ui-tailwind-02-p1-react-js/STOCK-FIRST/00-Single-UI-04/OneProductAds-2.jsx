import React from "react";

const tailwindColors = {
  primary: "bg-red-600",
  secondary: "bg-white/30 backdrop-blur-xl",
  textPrimary: "text-white",
  textSecondary: "text-gray-900",
};

const FormSlide = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg')",
      }}
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden w-full max-w-6xl">
        {/* Left Side Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="https://pbil.in/wp-content/uploads/2025/04/Untitled-design-2025-04-07T172420.550.png"
            alt="Frozen Food"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Info */}
        <div className={`md:w-1/2 w-full p-10 ${tailwindColors.secondary}`}>
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-gray-800 leading-tight">Taste the Freshness</h2>
            <p className="text-gray-700 text-base leading-relaxed border-l-4 border-red-500 pl-4 italic">
              At PRAN, our frozen food range is crafted for busy lives without compromising on taste or nutrition. From quick snacks to hearty meals, every item is sealed with freshness.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-medium">
              <div className="flex items-center gap-3">
                <span className="text-red-600 text-xl">✔</span>
                <span>Wide range of options</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-600 text-xl">✔</span>
                <span>Perfect for busy lives</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-600 text-xl">✔</span>
                <span>Hygienically prepared</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-600 text-xl">✔</span>
                <span>Available nationwide</span>
              </div>
            </div>
            <div className="pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full shadow-lg hover:from-red-700 hover:to-orange-600 transition-all font-semibold text-lg">
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSlide;
