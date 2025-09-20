import React, { useState, useEffect } from 'react';

// Sample data (you can load this from content.json)
const data = [
  {
    id: 1,
    name: "Frozen Food",
    category: "Frozen",
    image: "https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg"
  },
  
  {
    id: 2,
    name: "Beverage",
    category: "Beverage",
    image: "https://www.pranfoods.net/sites/default/files/2023-08/BEVERAGE.jpeg"
  },
  // More items here
];

function App() {
  // Initial filter state and categories
  const [filters, setFilters] = useState({ Frozen: false, Beverage: false });
  const [filteredData, setFilteredData] = useState(data);

  const categories = ["Frozen", "Beverage", "Milk"]; // You can dynamically extract this from the data

  useEffect(() => {
    // Apply filters based on selected checkboxes
    const activeFilters = Object.keys(filters).filter(category => filters[category]);
    if (activeFilters.length > 0) {
      setFilteredData(data.filter(item => activeFilters.includes(item.category)));
    } else {
      setFilteredData(data);
    }
  }, [filters]);

  const handleFilterChange = (category) => {
    setFilters(prev => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap gap-4">
        {/* Filter checkboxes */}
        <div className="w-full mb-4">
          <h2 className="font-bold text-lg">Filter by Category</h2>
          <div className="flex gap-4">
            {categories.map(category => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters[category]}
                  onChange={() => handleFilterChange(category)}
                  className="form-checkbox"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Display filtered data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredData.map(item => (
            <div key={item.id} className="border p-4 rounded-lg shadow-lg">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
