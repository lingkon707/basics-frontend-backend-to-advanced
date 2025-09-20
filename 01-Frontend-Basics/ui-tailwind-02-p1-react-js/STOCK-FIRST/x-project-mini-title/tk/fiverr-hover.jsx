import React, { useState } from 'react';

const services = [
  {
    name: 'Graphics & Design',
    categories: ['Logo Design', 'Brand Style Guides', 'Game Design', 'AI Artists', 'Packaging Design'],
  },
  {
    name: 'Digital Marketing',
    categories: ['Social Media Ads', 'SEO', 'Content Marketing', 'Video Marketing', 'Podcast Marketing'],
  },
  {
    name: 'Writing & Translation',
    categories: ['Website Content', 'Blog Writing', 'Creative Writing', 'Proofreading', 'Translation'],
  },
];

function App() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-6">Explore Fiverr‑style Services</h1>

        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          {services.map((svc) => (
            <div
              key={svc.name}
              className="relative"
              onMouseEnter={() => setHovered(svc.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Service Button */}
              <div className="px-4 py-2 bg-white hover:bg-gray-100 rounded-md cursor-pointer font-medium h-12 flex items-center">
                {svc.name}
              </div>

              {/* Sub-services Dropdown */}
              {hovered === svc.name && (
                <div className="absolute left-0 top-full w-60 bg-white border border-gray-200 shadow-lg rounded-b-md z-30">
                  <ul className="flex flex-col">
                    {svc.categories.map((cat) => (
                      <li key={cat}>
                        <a
                          href="#"
                          className="block h-12 px-4 flex items-center hover:bg-gray-100 transition w-full"
                        >
                          {cat}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default App;
