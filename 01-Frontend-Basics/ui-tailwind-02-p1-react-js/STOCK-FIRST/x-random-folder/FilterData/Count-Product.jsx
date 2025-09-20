import React from 'react';

const data = [
  {
    id: 1,
    name: "Frozen Food",
    category: "Frozen",
    image: "https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg"
  },
  {
    id: 2,
    name: "Cheer Up Banner",
    category: "Beverage",
    image: "https://www.pranfoods.net/sites/default/files/2023-08/2-Cheer-up-Web-Banner-1920x900-px-2_1.jpg"
  },
  {
    id: 3,
    name: "Beverage",
    category: "Beverage",
    image: "https://www.pranfoods.net/sites/default/files/2023-08/BEVERAGE.jpeg"
  },
  {
    id: 4,
    name: "Potato Chips",
    category: "Frozen",
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/06/tkp-tortilla-chipsArtboard-2.jpg"
  },
  {
    id: 5,
    name: "Noodles",
    category: "Frozen",
    image: "https://pbil.in/wp-content/uploads/2025/05/2024-04-13___Noodles-Shop-Sign-Design-for-India-Market-8feet-X.-4-feet-scaled.png"
  }
];

function CategoryList() {
  // Categories to display
  const categories = ["Frozen", "Beverage"];

  // Function to get product count by category
  const getCategoryCount = (category) => {
    return data.filter(item => item.category === category).length;
  };

  return (
   <div className="container mx-auto p-4">
      <div className="flex flex-wrap gap-4">
       
        {categories.map(category => (
          <div key={category} className="flex items-center space-x-2">

            <span className="font-semibold">{category}</span>

            <span>({getCategoryCount(category)})</span>
          </div>
        ))}


      </div>
    </div>
  );
}

export default CategoryList;
