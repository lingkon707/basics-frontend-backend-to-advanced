import React from "react";

const tailwindColors = {
  primary: "bg-red-600",
  secondary: "bg-yellow-100",
  textPrimary: "text-white",
  textSecondary: "text-gray-700",
  inputBg: "bg-white",
  buttonBg: "bg-red-700",
  buttonHover: "hover:bg-red-800",
};

const FormSlide = () => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-cover bg-center`} 
      style={{
        backgroundImage: "url('https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg')",
      }}
    >
      <div className={`p-8 rounded-2xl shadow-2xl backdrop-blur-md ${tailwindColors.secondary}`}>
        <h2 className={`text-3xl font-bold mb-6 ${tailwindColors.textSecondary}`}>Contact Us</h2>
        <form className="space-y-4 w-80">
          <input
            type="text"
            placeholder="Full Name"
            className={`w-full p-3 rounded-xl ${tailwindColors.inputBg} ${tailwindColors.textSecondary} shadow`}
          />
          <input
            type="email"
            placeholder="Email Address"
            className={`w-full p-3 rounded-xl ${tailwindColors.inputBg} ${tailwindColors.textSecondary} shadow`}
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className={`w-full p-3 rounded-xl ${tailwindColors.inputBg} ${tailwindColors.textSecondary} shadow`}
          ></textarea>
          <button
            type="submit"
            className={`w-full p-3 rounded-xl font-semibold ${tailwindColors.buttonBg} ${tailwindColors.buttonHover} ${tailwindColors.textPrimary} transition duration-300`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSlide;
