import React from "react";

const tailwindColors = {
  primary: "bg-red-600",
  secondary: "bg-white/30 backdrop-blur-xl",
  textPrimary: "text-white",
  textSecondary: "text-gray-900",
  inputBg: "bg-white/80",
  buttonBg: "bg-red-600",
  buttonHover: "hover:bg-red-700",
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
            src="https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg"
            alt="Frozen Food"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className={`md:w-1/2 w-full p-10 ${tailwindColors.secondary}`}>
          <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full p-3 rounded-xl ${tailwindColors.inputBg} ${tailwindColors.textSecondary} shadow-md focus:outline-none focus:ring-2 focus:ring-red-300`}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={`w-full p-3 rounded-xl ${tailwindColors.inputBg} ${tailwindColors.textSecondary} shadow-md focus:outline-none focus:ring-2 focus:ring-red-300`}
            />
            <textarea
              rows="4"
              placeholder="Message"
              className={`w-full p-3 rounded-xl ${tailwindColors.inputBg} ${tailwindColors.textSecondary} shadow-md focus:outline-none focus:ring-2 focus:ring-red-300`}
            ></textarea>
            <button
              type="submit"
              className={`w-full py-3 rounded-xl font-semibold ${tailwindColors.buttonBg} ${tailwindColors.buttonHover} ${tailwindColors.textPrimary} transition`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSlide;
