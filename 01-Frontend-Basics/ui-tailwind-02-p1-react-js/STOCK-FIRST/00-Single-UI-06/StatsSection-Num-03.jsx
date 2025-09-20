import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '53M', label: 'Engagements in 2024' },
    { number: '6,886+', label: 'Campaigns launched in 2024' },
    { number: '570+', label: 'Brands served in 2024' },
  ];

  return (
    <section className="relative bg-blue-900 py-16 px-6 overflow-hidden">
  <div className="absolute top-0 left-0 w-40 h-40 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {stats.map((stat, index) => (
      <div
        key={index}
        className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-8 flex items-center gap-4 shadow-md hover:scale-105 transition-transform duration-300"
      >
        <div className="w-1 h-16 bg-blue-400 rounded-full"></div>
        <div>
          <p className="text-4xl font-extrabold text-white drop-shadow-md">
            {stat.number}
          </p>
          <p className="text-sm text-white/80 mt-2">{stat.label}</p>
        </div>
      </div>
    ))}
  </div>
</section>

//  <section className="bg-blue-900 py-16 px-6 mt-12 text-white">
//   <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
//     {stats.map((stat, index) => (
//       <div
//         key={index}
//         className="text-left sm:text-center border-l-4 sm:border-l-0 sm:border-t-4 border-blue-400 pl-4 sm:pl-0 sm:pt-4"
//       >
//         <p className="text-5xl font-semibold tracking-tight leading-tight text-white">
//           {stat.number}
//         </p>
//         <p className="text-base text-blue-200 mt-1">{stat.label}</p>
//       </div>
//     ))}
//   </div>
// </section>


  );
};

export default StatsSection;
