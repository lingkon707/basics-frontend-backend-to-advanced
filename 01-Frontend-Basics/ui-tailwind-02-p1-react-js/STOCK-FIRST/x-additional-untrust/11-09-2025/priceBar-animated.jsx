"use client"



import { useState } from "react";

const plans = [
  {
    name: "Basic",
    price: 9,
    features: ["1 Project", "100 MB Storage", "Basic Support"],
    color: "bg-indigo-500",
  },
  {
    name: "Pro",
    price: 29,
    features: ["10 Projects", "10 GB Storage", "Priority Support"],
    color: "bg-emerald-500",
  },
  {
    name: "Enterprise",
    price: 99,
    features: ["Unlimited Projects", "100 GB Storage", "24/7 Support"],
    color: "bg-pink-500",
  },
];

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-700 via-indigo-800 to-blue-900 flex items-center justify-center p-6">
      <section className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map(({ name, price, features, color }, i) => (
          <div
            key={name}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={`relative cursor-pointer rounded-xl shadow-xl transform transition-transform duration-500 ease-in-out ${
              active === i ? "scale-105 z-10" : "scale-100"
            } bg-gray-900 text-white flex flex-col p-8`}
          >
            <div
              className={`absolute inset-0 rounded-xl opacity-75 blur-3xl transition-opacity duration-500 ${
                active === i ? "opacity-100" : "opacity-40"
              } ${color}`}
            />
            <h2 className="relative text-3xl font-bold mb-4 z-10">{name}</h2>
            <p className="relative text-5xl font-extrabold mb-6 z-10">
              ${price}
              <span className="text-lg font-normal text-gray-300">/mo</span>
            </p>
            <ul className="relative mb-8 space-y-3 z-10">
              {features.map((feat) => (
                <li key={feat} className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-green-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <button
              className={`relative z-10 rounded-md px-6 py-3 font-semibold tracking-wide transition-colors duration-300 ${
                active === i
                  ? `bg-white text-gray-900 hover:bg-gray-200`
                  : `${color} bg-opacity-90 hover:bg-opacity-100 text-white`
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
