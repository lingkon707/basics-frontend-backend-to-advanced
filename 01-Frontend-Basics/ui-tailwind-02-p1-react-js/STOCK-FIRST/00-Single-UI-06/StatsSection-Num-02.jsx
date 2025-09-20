import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '53M', label: 'Engagements in 2024' },
    { number: '6,886+', label: 'Campaigns launched in 2024' },
    { number: '570+', label: 'Brands served in 2024' },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20 text-center">
    {stats.map((stat, index) => (
      <div
        key={index}
        className="px-4 py-4 sm:py-0 sm:px-6 flex flex-col justify-center items-center"
      >
        <p className="text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
          {stat.number}
        </p>
        <p className="mt-2 text-base text-white/80">{stat.label}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default StatsSection;
