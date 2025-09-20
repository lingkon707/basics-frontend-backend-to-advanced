import React, { useState } from "react";

const faqs = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook.",
  },
  {
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
  },
  {
    question: "How do I use this FAQ?",
    answer:
      "Click on any question to expand or collapse the answer below it.",
  },
];

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-md">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-indigo-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
