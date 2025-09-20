import React from 'react';

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Build your own success story
      </h1>

      {/* Quote Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          {/* Quotation mark */}
          <div className="text-5xl text-gray-300 font-bold transform rotate-90">
            &ldquo;
          </div>
        </div>
        <blockquote className="text-xl text-gray-800 italic mb-4">
          “Digital media and e-commerce has allowed us over the pandemic to reach people where they are spending the most time, which is online on a screen. New Engen was able to grow our Google presence across search, shopping, and video, which helped us to gain new consumers.”
        </blockquote>

        {/* Attribution */}
        <p className="text-lg text-gray-600 font-medium text-right">
          Amanda Nelson, <span className="font-normal">Corkcicle’s Vice President of Ecommerce</span> on their partnership with New Engen
        </p>
      </div>
    </div>
  );
};

export default Main;
