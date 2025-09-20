// App.jsx
import React from "react";

const content = {
  logo: "Muffle",
  navLinks: ["Features", "How It Works?", "Pricing", "Success Stories"],
  headline: "Increase your website conversations with social proof 👋",
  description:
    "Obligations of business will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise therefore always holds these matters principle",
  emailPlaceholder: "Enter your email address",
  notifyBtn: "Notify Me",
  loginBtn: "Login",
  getStartedBtn: "Get Started",
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-blue-600 text-white font-sans">
      <nav className="flex items-center justify-between px-12 py-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 text-2xl font-bold cursor-pointer">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-700 font-black">
            M
          </div>
          <span>{content.logo}</span>
        </div>

        <ul className="hidden md:flex space-x-10 text-lg">
          {content.navLinks.map((link) => (
            <li key={link} className="cursor-pointer hover:underline">
              {link}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-400 transition">
            {content.loginBtn}
          </button>
          <button className="bg-green-400 px-4 py-2 rounded font-semibold text-blue-900 hover:bg-green-300 transition">
            {content.getStartedBtn}
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-12 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[75vh]">
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            {content.headline.split("👋")[0]}{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p className="text-sm text-blue-200 max-w-md mb-8">{content.description}</p>

          <form className="flex max-w-md">
            <input
              type="email"
              placeholder={content.emailPlaceholder}
              className="flex-grow rounded-l-md px-4 py-3 text-black outline-none"
            />
            <button
              type="submit"
              className="bg-green-400 px-6 py-3 rounded-r-md font-semibold text-blue-900 hover:bg-green-300 transition"
            >
              {content.notifyBtn}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 relative flex justify-center items-center">
          {/* The phones with chat UI */}
          <div className="transform -rotate-12 absolute left-0 w-[280px] shadow-lg rounded-3xl overflow-hidden bg-white text-black">
            <div className="p-4 flex items-center space-x-4 border-b border-gray-300">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Jean Abraham</p>
                <p className="text-sm text-gray-600">Active Now</p>
              </div>
            </div>
            <div className="p-4 text-sm">
              <p>Hello! Need your assistance.</p>
            </div>
          </div>

          <div className="transform rotate-12 absolute right-0 w-[320px] shadow-lg rounded-3xl overflow-hidden bg-white text-black">
            <div className="p-4 flex items-center space-x-4 border-b border-gray-300">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex space-x-3 overflow-x-auto">
                <img
                  src="https://randomuser.me/api/portraits/men/25.jpg"
                  alt="Addi"
                  className="w-10 h-10 rounded-full border-2 border-blue-600"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/33.jpg"
                  alt="Marina"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/40.jpg"
                  alt="Dean"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/42.jpg"
                  alt="Max"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>

            <div className="p-4">
              <div className="mb-3">
                <p className="font-semibold">Alex Linderson</p>
                <p className="text-gray-600 text-sm">How are you today?</p>
              </div>
              <div className="mb-3">
                <p className="font-semibold">Team Align</p>
                <p className="text-gray-600 text-sm">
                  Don’t miss to attend the meeting
                </p>
              </div>
              <div className="mb-3">
                <p className="font-semibold">John Abraham</p>
                <p className="text-gray-600 text-sm">Hey! Can you join the meeting?</p>
              </div>
              <div>
                <p className="font-semibold">Sabila Sayma</p>
                <p className="text-gray-600 text-sm">How are you today?</p>
              </div>
            </div>
          </div>

          <div className="absolute -z-10 w-[200px] h-[200px] bg-pink-600 opacity-70 rotate-45 rounded-lg"></div>
        </div>
      </main>
    </div>
  );
}
