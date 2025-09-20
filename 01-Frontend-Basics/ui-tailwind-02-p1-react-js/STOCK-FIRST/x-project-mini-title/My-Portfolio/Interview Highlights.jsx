// InterviewSection.jsx
import React, { useState } from "react";

const interviewQA = [
  {
    question: "What are the main features of React?",
    answer:
      "React is a JavaScript library for building user interfaces. It uses components, virtual DOM, JSX, and hooks.",
  },
  {
    question: "How do you optimize React app performance?",
    answer:
      "Use React.memo, useCallback, lazy loading, and avoid unnecessary re-renders.",
  },
  {
    question: "Explain the difference between props and state.",
    answer:
      "Props are read-only data passed to components; state is internal and can change.",
  },
  {
    question: "What is Tailwind CSS and why do you use it?",
    answer:
      "Tailwind CSS is a utility-first CSS framework that helps build designs quickly with small reusable classes.",
  },
];

const InterviewSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Interview Highlights
      </h2>
      <p className="mb-6 text-center text-gray-700 text-sm">
        A brief overview of frontend interview questions I’ve answered.
      </p>

      <div className="space-y-3">
        {interviewQA.map((item, index) => (
          <div key={index} className="border rounded">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 focus:outline-none"
            >
              <span className="font-medium text-blue-800">{item.question}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-yellow-100 text-yellow-900 text-sm rounded-b">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="/path-to-full-interview.pdf"
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded"
        >
          Download Full Transcript
        </a>
      </div>
    </section>
  );
};

export default InterviewSection;
