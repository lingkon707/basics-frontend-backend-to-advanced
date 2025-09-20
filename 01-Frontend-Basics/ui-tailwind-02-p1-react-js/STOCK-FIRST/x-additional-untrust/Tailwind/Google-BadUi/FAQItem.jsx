import React, { useState } from 'react';


function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full text-left flex items-center justify-between text-blue-600 text-lg font-medium"
        onClick={toggleAnswer}
      >
        <span>{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Frequently asked questions
        </h1>
        <div className="space-y-4">
          <FAQItem
            question="Where are Google Display Ads?"
            answer="Google Display Ads appear on websites and apps that are part of the Google Display Network (GDN), which includes millions of websites, videos, and apps."
          />
          <FAQItem
            question="How do Google Display Ads work?"
            answer="Google Display Ads work by targeting users based on their interests, behaviors, and demographics across websites and apps in the Google Display Network."
          />
          <FAQItem
            question="What is the Display Network in Google Ads?"
            answer="The Google Display Network (GDN) is a network of over 2 million websites and apps where advertisers can place display ads."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
