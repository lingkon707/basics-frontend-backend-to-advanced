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
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer select-none">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            M
          </div>
          <span className="text-xl font-semibold">{content.logo}</span>
        </div>

        <ul className="hidden md:flex space-x-10 text-sm font-medium text-gray-700">
          {content.navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              {link}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <button className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 rounded-md transition">
            {content.loginBtn}
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition">
            {content.getStartedBtn}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[75vh]">
        {/* Left Text Section */}
        <section className="lg:w-1/2 mt-12 lg:mt-0 max-w-xl">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
            {content.headline.split("👋")[0]}{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p className="text-gray-600 text-base mb-8">{content.description}</p>

          <form className="flex max-w-md">
            <input
              type="email"
              placeholder={content.emailPlaceholder}
              className="flex-grow border border-gray-300 rounded-l-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-r-md px-6 py-3 font-semibold hover:bg-blue-700 transition"
            >
              {content.notifyBtn}
            </button>
          </form>
        </section>

        {/* Right Phones Section */}
        <section className="lg:w-1/2 relative flex justify-center items-center">
          {/* Background pink shape */}
          <div className="absolute -z-10 w-52 h-52 bg-pink-300 opacity-30 rounded-lg rotate-45"></div>

          {/* Small Phone */}
          <div className="absolute left-0 w-72 shadow-md rounded-3xl overflow-hidden bg-white text-gray-900 transform -rotate-12">
            <div className="p-4 flex items-center space-x-4 border-b border-gray-200">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">Jean Abraham</p>
                <p className="text-xs text-gray-500">Active Now</p>
              </div>
            </div>
            <div className="p-4 text-sm text-gray-700">
              <p>Hello! Need your assistance.</p>
            </div>
          </div>

          {/* Large Phone */}
          <div className="absolute right-0 w-80 shadow-md rounded-3xl overflow-hidden bg-white text-gray-900 transform rotate-12">
            <div className="p-4 flex items-center space-x-4 border-b border-gray-200">
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

            <div className="p-4 space-y-4">
              {[
                {
                  name: "Alex Linderson",
                  message: "How are you today?",
                },
                {
                  name: "Team Align",
                  message: "Don’t miss to attend the meeting",
                },
                {
                  name: "John Abraham",
                  message: "Hey! Can you join the meeting?",
                },
                {
                  name: "Sabila Sayma",
                  message: "How are you today?",
                },
              ].map(({ name, message }) => (
                <div key={name}>
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-sm text-gray-600">{message}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
