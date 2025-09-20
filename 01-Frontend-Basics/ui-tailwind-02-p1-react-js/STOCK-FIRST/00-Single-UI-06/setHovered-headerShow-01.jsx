import React, { useState } from 'react';


const services = [
  { name: 'Design', categories: ['Logo Design', 'UX/UI', 'Branding'] },
  { name: 'Development', categories: ['Web Dev', 'Mobile Apps', 'API'] },
  { name: 'Marketing', categories: ['SEO', 'Content', 'Social Media'] },
  
];

const App = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="p-10 font-sans">
      <h1 className="text-3xl font-bold mb-6">Main Services</h1>

      <div className="flex gap-8">
        {services.map((service) => (
          <div
            key={service.name}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHovered(service.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="text-lg font-medium">{service.name}</div>

            {hovered === service.name && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-20 rounded-md">
                {service.categories.map((cat) => (
                  <div
                    key={cat}
                    className="px-4 py-2 text-sm hover:bg-gray-100 transition"
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
