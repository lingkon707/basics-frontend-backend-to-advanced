import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '53M', label: 'Engagements in 2024' },
    { number: '6,886+', label: 'Campaigns launched in 2024' },
    { number: '570+', label: 'Brands served in 2024' },
  ];

  return (
    <section className="bg-blue-800 py-12 px-4 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-4xl sm:text-5xl font-bold text-white">{stat.number}</p>
            <p className="mt-2 text-white text-sm sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
