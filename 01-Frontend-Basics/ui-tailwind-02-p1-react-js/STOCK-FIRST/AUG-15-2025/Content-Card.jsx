import React from 'react';

// Data for each feature card
const features = [
  {
    id: 1,
    title: 'Customize Any Design',
    description:
      'Push technological limits to create innovative and effective designs, leading to unique solutions.',
    icon: '🔧', // Placeholder icon (Replace with actual icons)
    bgColor: 'bg-orange-500',
  },
  {
    id: 2,
    title: 'Ready-Made Templates',
    description:
      'Start your blog or magazine using our pre-designed templates, designed to strengthen your audience connection.',
    icon: '📑', // Placeholder icon (Replace with actual icons)
    bgColor: 'bg-green-500',
  },
  {
    id: 3,
    title: 'Single Purchase',
    description:
      'Make your setup process faster with one purchase, adding a rapid launch of your online publication.',
    icon: '💳', // Placeholder icon (Replace with actual icons)
    bgColor: 'bg-blue-500',
  },
];

const FeatureSection = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto flex justify-between gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`flex flex-col items-center bg-white p-6 rounded-xl shadow-lg w-full lg:w-1/3 hover:shadow-2xl transition-all`}
          >
            <div
              className={`${feature.bgColor} text-white p-4 rounded-full mb-4`}
            >
              <span className="text-4xl">{feature.icon}</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
