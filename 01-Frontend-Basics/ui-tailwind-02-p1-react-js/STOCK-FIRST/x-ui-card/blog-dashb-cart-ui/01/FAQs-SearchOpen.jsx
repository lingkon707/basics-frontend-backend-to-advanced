import React, { useState, useMemo, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, maintained by Facebook.",
  },
  {
    question: "How does Tailwind CSS work?",
    answer:
      "Tailwind CSS is a utility-first CSS framework that allows rapid UI building using predefined classes.",
  },
  {
    question: "Can I use React and Tailwind together?",
    answer: "Yes! React components styled with Tailwind is a popular combo.",
  },
  {
    question: "How to add animations in Tailwind?",
    answer:
      "Tailwind offers utilities for transitions and animations, and you can extend it with custom keyframes.",
  },
];

function CollapsiblePanel({ faq, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-5 py-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-800">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-indigo-600 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="px-5 overflow-hidden transition-max-height duration-300 ease-in-out bg-white"
      >
        <p className="py-4 text-gray-700">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  // Filter FAQs by search term (case-insensitive)
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">FAQs</h1>

      <input
        type="text"
        placeholder="Search questions..."
        className="w-full max-w-lg px-4 py-3 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search FAQs"
      />

      <div className="w-full max-w-lg space-y-4">
        {filteredFaqs.length === 0 ? (
          <p className="text-gray-500 text-center">No FAQs found.</p>
        ) : (
          filteredFaqs.map((faq, i) => (
            <CollapsiblePanel
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))
        )}
      </div>
    </div>
  );
}
