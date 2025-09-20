import React from 'react';

const HiringBanner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-black flex items-center justify-center p-6">
      <div className="text-white max-w-xl w-full text-center">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="w-4 h-4 bg-green-500 rotate-45"></div>
          <span className="text-lg font-semibold">Sparktech Agency</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-2">WE ARE</h1>
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300 mb-4">
          HIRING
        </h1>

        {/* Subheading */}
        <p className="inline-block bg-green-600 px-4 py-1 rounded-full font-medium text-sm mb-8">
          JOIN OUR TEAM AT NIGHT SHIFT
        </p>

        {/* Card */}
        <div className="bg-gradient-to-b from-black/60 to-green-900 border border-green-500 rounded-lg p-6 text-left">
          <p className="text-sm text-gray-400 mb-1">WE ARE LOOKING FOR</p>
          <h2 className="text-2xl font-bold mb-2">Backend Developers</h2>
          <p className="text-green-400 font-semibold mb-4">Node Js</p>

          <div className="space-y-1 text-sm">
            <p>✅ Fast Career Growth.</p>
            <p>✅ Profit Share.</p>
            <p>✅ 20% Basic Extra Salary.</p>
            <p>✅ 2 Festival Bonus.</p>
            <p>✅ Performance Bonus.</p>
            <p>✅ Priority Leave Approvals.</p>
            <p>✅ Meal Allowance.</p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-sm text-gray-400">
          To Apply → Send Your CV to: <br />
          the provided Google form link
        </p>
      </div>
    </div>
  );
};

export default HiringBanner;
