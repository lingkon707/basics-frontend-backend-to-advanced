import React, { useState } from 'react';

const services = [
  { name: 'Design', categories: ['Logo Design', 'UX/UI', 'Branding'] },
  { name: 'Development', categories: ['Web Dev', 'Mobile Apps', 'API'] },
  { name: 'Marketing', categories: ['SEO', 'Content', 'Social Media'] },
];

const App = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="p-4 md:p-10 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Services</h1>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-start md:items-center">
        {services.map((service) => (
          <div
            key={service.name}
            className="relative group"
            onMouseEnter={() => setHovered(service.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="px-4 py-2 bg-white rounded-md shadow cursor-pointer text-center hover:bg-blue-100 transition font-medium">
              {service.name}
            </div>

            {/* Sub-header */}
            {hovered === service.name && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-blue-50 border border-blue-200 shadow-md rounded-md z-20">
                {service.categories.map((cat) => (
                  <div
                    key={cat}
                    className="px-4 py-3 text-sm hover:bg-blue-100 cursor-pointer transition"
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
