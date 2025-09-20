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
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
        {/* Left Side Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="https://pbil.in/wp-content/uploads/2025/04/Untitled-design-2025-04-07T172420.550.png"
            alt="Frozen Food"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Info */}
        <div className={`md:w-1/2 w-full p-10 ${tailwindColors.secondary} text-center space-y-4`}>
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-800">Explore PRAN Frozen Foods</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            PRAN offers a wide range of frozen food products that combine convenience with delicious flavor. From ready-to-cook snacks to traditional meals, our frozen range is designed to bring comfort to your kitchen while preserving taste and nutrition.
          </p>
          <ul className="text-left text-gray-800 font-medium list-disc list-inside">
            <li>Wide variety of frozen items</li>
            <li>Perfect for busy lifestyles</li>
            <li>Hygienically processed & packed</li>
            <li>Available across major retailers</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition font-semibold shadow-lg">
            Browse Frozen Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSlide;
