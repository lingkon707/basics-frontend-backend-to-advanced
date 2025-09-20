import React from 'react';

const HiringBanner = () => {
  // You can add/remove roles here
  const hiringRoles = [
    {
      title: 'Backend Developer',
      tech: 'Node.js, Express.js',
    },
    {
      title: 'Frontend Developer',
      tech: 'React.js, Tailwind CSS',
    },
    {
      title: 'Full Stack Developer',
      tech: 'MERN Stack',
    },
    {
      title: 'DevOps Engineer',
      tech: 'Docker, CI/CD, AWS',
    },
  ];

  const benefits = [
    'Fast Career Growth',
    'Profit Share',
    '20% Basic Extra Salary',
    '2 Festival Bonuses',
    'Performance Bonus',
    'Priority Leave Approvals',
    'Meal Allowance',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-green-950 flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full text-white text-center">
        {/* Logo & Company Name */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="w-5 h-5 bg-green-500 rotate-45"></div>
          <h2 className="text-xl font-semibold tracking-wide">Sparktech Agency</h2>
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-extrabold mb-3">WE ARE</h1>
        <h1 className="text-6xl font-extrabold text-green-400 drop-shadow-sm mb-4">
          HIRING
        </h1>
        <p className="inline-block bg-green-600/80 px-5 py-1.5 rounded-full font-medium text-sm uppercase tracking-widest">
          Join our team at Night Shift
        </p>

        {/* Multiple Roles */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {hiringRoles.map((role, index) => (
            <div
              key={index}
              className="bg-black/60 border border-green-600 rounded-xl p-5 shadow-lg"
            >
              <p className="text-sm text-gray-400 uppercase mb-1">We are looking for</p>
              <h2 className="text-xl font-bold mb-1">{role.title}</h2>
              <p className="text-green-400 font-semibold">{role.tech}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-10 bg-black/50 border border-green-800 rounded-xl p-6 text-left shadow-lg">
          <h3 className="text-lg font-semibold mb-3 text-green-400">BENEFITS</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
            {benefits.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </div>

        {/* Apply */}
        <p className="mt-6 text-sm text-gray-400">
          To apply → send your CV to the provided Google Form link
        </p>
      </div>
    </div>
  );
};

export default HiringBanner;
