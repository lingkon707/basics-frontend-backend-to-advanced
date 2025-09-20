import React, { useState } from "react";

const plans = [
  {
    title: "Starter",
    price: 19,
    features: [
      "Multi-step Zap",
      "3 Premium Apps",
      "2 Users Team",
    ],
  },
  {
    title: "Professional",
    price: 54,
    features: [
      "Multi-step Zap",
      "Unlimited Premium",
      "50 Users team",
      "Shared Workspace",
    ],
  },
  {
    title: "Company",
    price: 89,
    features: [
      "Multi-step Zaps",
      "Unlimited Premium",
      "Unlimited user Team",
      "Advanced Admin",
      "Custom Data Retention",
    ],
    popular: true,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-blue-300 flex flex-col items-center p-6 rounded-lg text-gray-900">
      <nav className="w-full flex justify-between items-center py-4 px-6">
        <button className="text-purple-500 font-semibold bg-purple-400 px-4 py-1 rounded-full text-sm hover:bg-purple-500 transition">Join Now</button>
        <button className="text-2xl text-gray-600 hover:text-gray-800">≡</button>
      </nav>

      <div className="max-w-5xl w-full backdrop-blur-sm bg-white/40 rounded-3xl p-10 mt-6 shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-1">Choose yourPlans</h1>
            <p className="text-gray-600 text-sm max-w-md">
              Sign up in less then 30 seconds. Try out 7 days free trial. Upgrade at anytime, no question, no hastle.
            </p>
          </div>
          <div className="flex space-x-3 bg-white rounded-full shadow-md p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
                billing === "monthly" ? "bg-purple-500 text-white" : "text-gray-700"
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
                billing === "yearly" ? "bg-purple-500 text-white" : "text-gray-700"
              }`}
            >
              YEARLY
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {plans.map(({ title, price, features, popular }, i) => (
            <div
              key={i}
              className={`flex flex-col bg-white rounded-xl p-8 flex-1 shadow-lg relative ${
                popular ? "border-4 border-purple-700" : ""
              }`}
            >
              {popular && (
                <div className="absolute top-4 right-4 bg-purple-700 text-white text-xs uppercase px-3 py-1 rounded-full tracking-widest font-semibold">
                  Most Popular
                </div>
              )}
              <div className="text-3xl font-extrabold text-gray-900 mb-4">
                ${price} <span className="text-gray-500 font-normal text-base">/month</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-600 mb-6">
                {title === "Starter"
                  ? "Unleash the power of automation."
                  : title === "Professional"
                  ? "Automation tools to take your work to the next level."
                  : "Automation plus enterprise-grade features."}
              </p>
              <ul className="space-y-2 mb-6 text-gray-700 text-sm">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-gray-600 hover:bg-gray-700 text-white rounded-full py-2 px-6 text-sm font-medium transition">
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="walking man"
          className="h-20"
          style={{ filter: "grayscale(1) brightness(0.7)" }}
        />
      </div>
    </div>
  );
}
