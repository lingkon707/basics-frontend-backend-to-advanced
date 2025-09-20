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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50 flex flex-col items-center px-4 py-10 sm:py-16 lg:py-20 text-gray-900">
      <nav className="w-full max-w-7xl flex justify-between items-center px-6 sm:px-12 mb-10">
        <button className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-2 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-indigo-700 transition">
          Join Now
        </button>
        <button
          aria-label="Menu"
          className="text-3xl text-gray-600 hover:text-gray-800 transition"
        >
          &#9776;
        </button>
      </nav>

      <section className="w-full max-w-7xl bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 flex flex-col gap-12">
        <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
              Choose your Plans
            </h1>
            <p className="text-gray-600 text-base max-w-lg leading-relaxed">
              Sign up in less than 30 seconds. Try out 7 days free trial.
              Upgrade anytime, no questions, no hassle.
            </p>
          </div>
          <div className="flex rounded-full bg-white shadow-md p-1 text-sm font-semibold select-none">
            {["monthly", "yearly"].map((period) => (
              <button
                key={period}
                onClick={() => setBilling(period)}
                className={`px-6 py-2 rounded-full transition flex-1 text-center
                  ${
                    billing === period
                      ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
                aria-pressed={billing === period}
              >
                {period.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          {plans.map(({ title, price, features, popular }, idx) => (
            <article
              key={idx}
              className={`flex flex-col bg-white rounded-2xl p-10 shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl flex-1
                ${
                  popular
                    ? "border-4 border-purple-600"
                    : "border border-gray-200"
                }
              `}
              tabIndex={0}
              aria-label={`${title} plan`}
            >
              {popular && (
                <span className="self-start bg-purple-600 text-white text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1 mb-6 shadow-md">
                  Most Popular
                </span>
              )}

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-extrabold text-gray-900">
                  ${price}
                </span>
                <span className="text-gray-500 font-medium text-lg">
                  /month
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-3 text-gray-900">{title}</h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {title === "Starter"
                  ? "Unleash the power of automation."
                  : title === "Professional"
                  ? "Automation tools to take your work to the next level."
                  : "Automation plus enterprise-grade features."}
              </p>

              <ul className="flex-1 space-y-4 text-gray-700 text-sm font-medium">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-purple-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="mt-10 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
                aria-label={`Choose ${title} plan`}
              >
                Choose plan
              </button>
            </article>
          ))}
        </div>
      </section>

      <div className="fixed bottom-6 left-6 hidden sm:block">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="walking man"
          className="h-24 opacity-70 grayscale transition-opacity duration-500 hover:opacity-100"
          style={{ filter: "grayscale(1) brightness(0.7)" }}
        />
      </div>
    </div>
  );
}
