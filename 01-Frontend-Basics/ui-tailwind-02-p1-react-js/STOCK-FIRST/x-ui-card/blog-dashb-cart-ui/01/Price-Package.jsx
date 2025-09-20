import React, { useState } from "react";

export default function App() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricing = {
    monthly: [
      { plan: "Basic", price: 10, features: ["1 User", "5GB Storage", "Email Support"] },
      { plan: "Pro", price: 20, features: ["5 Users", "50GB Storage", "Priority Support"] },
      { plan: "Enterprise", price: 40, features: ["Unlimited Users", "150GB Storage", "Phone & Email Support"] },
    ],
    yearly: [
      { plan: "Basic", price: 100, features: ["1 User", "5GB Storage", "Email Support"] },
      { plan: "Pro", price: 200, features: ["5 Users", "50GB Storage", "Priority Support"] },
      { plan: "Enterprise", price: 400, features: ["Unlimited Users", "150GB Storage", "Phone & Email Support"] },
    ],
  };

  const toggleBilling = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Pricing Comparison</h1>

      {/* Toggle Switch */}
      <div className="flex items-center mb-10 space-x-4">
        <span className={`font-semibold cursor-pointer ${billingCycle === "monthly" ? "text-indigo-600" : "text-gray-500"}`}>
          Monthly
        </span>

        <button
          onClick={toggleBilling}
          aria-label="Toggle billing cycle"
          className="relative w-14 h-8 bg-indigo-600 rounded-full transition-colors duration-300 focus:outline-none"
        >
          <span
            className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>

        <span className={`font-semibold cursor-pointer ${billingCycle === "yearly" ? "text-indigo-600" : "text-gray-500"}`}>
          Yearly
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full justify-center">
        {pricing[billingCycle].map(({ plan, price, features }) => (
          <div key={plan} className="bg-white rounded-xl shadow-lg p-8 flex-1 flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{plan}</h2>
            <p className="text-4xl font-extrabold text-indigo-600 mb-4">${price}</p>
            <p className="text-gray-600 mb-6">{billingCycle === "yearly" ? "per year" : "per month"}</p>

            <ul className="mb-6 space-y-2 flex-1">
              {features.map((feat, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <button className="mt-auto bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
