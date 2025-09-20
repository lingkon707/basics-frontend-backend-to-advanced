import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Fresh Vegetable',
    image: 'https://images.medicinenet.com/images/article/main_image/which-foods-are-the-easiest-to-digest.jpg?output-quality=75', // Replace with the actual image URL
    itemsCount: 22,
  },
  {
    id: 2,
    name: 'Fresh Fruits',
    image: 'https://images.medicinenet.com/images/article/main_image/which-foods-are-the-easiest-to-digest.jpg?output-quality=75', // Replace with the actual image URL
    itemsCount: 22,
    buttonText: 'Fresh Fruit',
  },
  {
    id: 3,
    name: 'Fresh Meat',
    image: 'https://images.medicinenet.com/images/article/main_image/which-foods-are-the-easiest-to-digest.jpg?output-quality=75', // Replace with the actual image URL
    itemsCount: 22,
    buttonText: 'Fresh Meat',
    buttonColor: 'bg-orange-400', // Tailwind class for button color
  },
  {
    id: 4,
    name: 'Organic Juice',
    image: 'https://images.medicinenet.com/images/article/main_image/which-foods-are-the-easiest-to-digest.jpg?output-quality=75', // Replace with the actual image URL
    itemsCount: 22,
  },
];

const CategoryGrid = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transform transition duration-300"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover group-hover:opacity-80 transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent to-black bg-opacity-50 p-4">
              <div className="text-white">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-sm">{category.itemsCount} items</p>
              </div>
              {category.buttonText && (
                <button
                  className={`self-start mt-4 px-6 py-2 text-white font-semibold rounded-lg ${category.buttonColor}`}
                >
                  {category.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
