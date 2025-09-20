import React from 'react';

const HiringBanner = () => {
  // Editable content section
  const content = {
    companyName: "Sparktech Agency",
    position: "Backend Developers",
    techStack: "Node.js",
    shift: "Night Shift",
    benefits: [
      "Fast Career Growth",
      "Profit Share",
      "20% Basic Extra Salary",
      "2 Festival Bonuses",
      "Performance Bonus",
      "Priority Leave Approvals",
      "Meal Allowance",
    ],
    applyText: "To apply, send your CV to the provided Google Form link",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-green-950 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full text-white text-center">
        {/* Logo & Company */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="w-5 h-5 bg-green-500 rotate-45"></div>
          <h2 className="text-xl font-semibold tracking-wide">
            {content.companyName}
          </h2>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl font-extrabold mb-3">WE ARE</h1>
        <h1 className="text-6xl font-extrabold text-green-400 drop-shadow-sm mb-4">
          HIRING
        </h1>
        <p className="inline-block bg-green-600/80 px-5 py-1.5 rounded-full font-medium text-sm uppercase tracking-widest">
          Join our team at {content.shift}
        </p>

        {/* Info Card */}
        <div className="mt-10 bg-black/60 border border-green-600 rounded-xl p-6 text-left shadow-lg">
          <p className="text-sm text-gray-400 mb-1 uppercase tracking-wide">
            We are looking for
          </p>
          <h2 className="text-2xl font-bold mb-1">{content.position}</h2>
          <p className="text-green-400 font-semibold mb-5">{content.techStack}</p>

          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
            {content.benefits.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <p className="mt-6 text-sm text-gray-400">
          {content.applyText}
        </p>
      </div>
    </div>
  );
};

export default HiringBanner;
