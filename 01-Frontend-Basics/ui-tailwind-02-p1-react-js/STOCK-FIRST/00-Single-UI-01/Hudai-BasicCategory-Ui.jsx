import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Fresh farm fruit',
    subTitle: 'Fresh organic fruithouse',
    image: 'https://bizimages.withfloats.com/actual/5a8cf13ba3f9b90be0025abb.jpg', // Replace with your image link
    buttonText: 'Shop now',
    buttonColor: 'bg-orange-400', // Orange button for fruits
  },
  {
    id: 2,
    title: 'Fresh farm vegetables',
    subTitle: 'Organic farmfood',
    image: 'https://tropicalagro.in/wp-content/uploads/2023/09/DION-1024x1024.png', // Replace with your image link
    buttonText: 'Shop now',
    buttonColor: 'bg-yellow-400', // Yellow button for vegetables
  },
];

const FarmCategories = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transform transition duration-300"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-64 object-cover group-hover:opacity-80 transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent to-black bg-opacity-50 p-4">
              <div className="text-white">
                <p className="text-sm font-medium text-red-300">{category.title}</p>
                <h3 className="text-2xl font-semibold">{category.subTitle}</h3>
              </div>
              <button
                className={`self-start mt-4 px-6 py-2 text-white font-semibold rounded-lg ${category.buttonColor}`}
              >
                {category.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmCategories;
