import React, { useState } from "react";

const plans = [
  {
    name: "Free",
    price: 49,
    features: [
      "Cras sodales lobortis erat",
      "Vitae pellentesque diam",
      "Consequat eted tempus",
    ],
  },
  {
    name: "Small Business",
    price: 99,
    features: [
      "Aliquet diam gravida",
      "Phasellus eu condimentum",
      "Metus non venenatis turpis",
    ],
  },
  {
    name: "Professional",
    price: 219,
    features: [
      "Donec enim nulla malesuada",
      "Sed venenatis vel, blandit vel",
      "Duis ultricies scelerisque",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: 419,
    features: [
      "Justo id molestie",
      "Nullam sodales justo fringilla",
      "Donec molestie neque urna",
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="bg-gray-100 py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Pricing</h2>
        <p className="text-gray-600 mt-2 text-sm max-w-md mx-auto">
          Sign up in less than 30 seconds. Try out our 7 day risk free trial,
          upgrade at anytime, no questions, no hassle.
        </p>

        {/* Billing toggle */}
        <div className="inline-flex bg-gray-300 rounded-md mt-6 overflow-hidden">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-2 font-semibold text-sm transition-colors ${
              billing === "monthly"
                ? "bg-green-500 text-white"
                : "text-gray-700 hover:bg-gray-400"
            }`}
          >
            MONTHLY
          </button>
          <button
            onClick={() => setBilling("annually")}
            className={`px-4 py-2 font-semibold text-sm transition-colors ${
              billing === "annually"
                ? "bg-green-500 text-white"
                : "text-gray-700 hover:bg-gray-400"
            }`}
          >
            ANNUALLY
          </button>
        </div>

        {/* Pricing cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map(({ name, price, features, recommended }, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-lg shadow-md p-6 flex flex-col ${
                recommended
                  ? "border-2 border-green-500 scale-105"
                  : "border border-gray-200"
              }`}
            >
              {recommended && (
                <div className="bg-orange-400 text-white text-xs uppercase font-bold px-3 py-1 rounded inline-block mb-3 self-start">
                  Recommended
                </div>
              )}
              <p className="text-gray-600 text-sm mb-1">{name}</p>
              <p className="text-4xl font-extrabold text-gray-900 mb-6">
                ${price}
                <span className="text-base font-normal text-gray-600">/mo</span>
              </p>

              <ul className="mb-6 space-y-2 flex-1">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 text-sm">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 rounded ${
                  recommended
                    ? "bg-green-500 text-white"
                    : "border border-gray-400 text-gray-700 hover:bg-gray-100"
                } font-semibold text-sm transition`}
              >
                SIGN UP TODAY
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
