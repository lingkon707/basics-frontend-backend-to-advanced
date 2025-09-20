import React, { useState } from 'react';

// Sample tool data
const toolsData = [
  {
    id: 1,
    name: 'MRI Scanner',
    category: 'Imaging Devices',
    image: 'https://www.apple.com/lae/app-store/images/meta/og__c59t0pflacq6.png',
    description: 'Advanced imaging system for detailed soft tissue analysis.',
    features: ['High-resolution 3D scans', 'Non-invasive', 'Real-time monitoring'],
    details: {
      extendedDescription:
        'This MRI scanner delivers cutting-edge magnetic resonance imaging for deep tissue studies. Ideal for neurological, orthopedic, and oncology research.',
      specs: ['Tesla: 3T', 'Weight: 600kg', 'Resolution: 0.5mm'],
      usage: 'Used for brain, spinal cord, and organ studies.',
    },
  },
  {
    id: 2,
    name: 'Centrifuge 3000',
    category: 'Lab Equipment',
    image: 'https://madison-technologies.com/wp-content/uploads/2024/11/super-apps-2.png',
    description: 'High-speed centrifuge for lab sample separation.',
    features: ['Max Speed: 15,000 RPM', 'Digital interface', 'Noise reduction system'],
    details: {
      extendedDescription:
        'The Centrifuge 3000 is engineered for precision in separating biological components with minimal contamination risk.',
      specs: ['RPM: 15,000', 'Volume: 2L', 'Weight: 45kg'],
      usage: 'Used in molecular biology and clinical labs.',
    },
  },
  {
    id: 3,
    name: 'BioStat Analyzer',
    category: 'Data Analysis Software',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*0Ci3yW0tSeYmTqc-eSblmw.jpeg',
    description: 'Powerful statistical software for biological data.',
    features: ['Real-time analytics', 'User-friendly interface', 'Cloud sync'],
    details: {
      extendedDescription:
        'BioStat Analyzer empowers researchers to perform advanced statistical operations on complex biomedical datasets.',
      specs: ['Platform: Web & Desktop', 'License: GPL', 'Languages: R, Python'],
      usage: 'Used for clinical trials and genetics research.',
    },
  },
];

// Available categories
const categories = ['All', 'Imaging Devices', 'Lab Equipment', 'Data Analysis Software'];

const MedicalToolsHome = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTool, setSelectedTool] = useState(null);

  const filteredTools = toolsData.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">MedTools</h1>
          <nav className="space-x-4 hidden md:block">
            <a href="#tools" className="hover:text-blue-600">Tools</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <img
          src="https://madison-technologies.com/wp-content/uploads/2024/11/super-apps-2.png"
          alt="Hero"
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl font-bold">Advanced Tools for Medical Research</h2>
          <p className="mt-4 max-w-2xl">Empowering researchers and professionals with cutting-edge equipment and software to accelerate medical breakthroughs.</p>
          <a href="#tools" className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-semibold">Explore Tools</a>
        </div>
      </section>

      {/* Search + Filter */}
      <section id="tools" className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-semibold mb-4">Research Tools Catalog</h3>
          <p className="text-gray-600">Browse our collection of professional tools for labs, diagnostics, and analytics.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-4 py-2 w-full md:w-1/2"
            aria-label="Search tools"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded px-4 py-2 w-full md:w-1/3"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Tool Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="border rounded-lg hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedTool(tool)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedTool(tool)}
            >
              <img src={tool.image} alt={tool.name} className="h-40 w-full object-cover rounded-t-lg" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{tool.name}</h4>
                <p className="text-sm text-gray-600">{tool.description}</p>
                <ul className="mt-2 text-sm list-disc list-inside text-blue-800">
                  {tool.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <button className="mt-3 text-blue-600 hover:underline font-medium">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tool Modal */}
      {selectedTool && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white max-w-2xl w-full rounded-lg overflow-y-auto max-h-[90vh] shadow-lg relative">
            <button
              onClick={() => setSelectedTool(null)}
              className="absolute top-2 right-2 text-gray-700 text-xl hover:text-red-600"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <img src={selectedTool.image} alt={selectedTool.name} className="w-full h-60 object-cover rounded-t" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedTool.name}</h3>
              <p className="text-gray-700 mb-4">{selectedTool.details.extendedDescription}</p>
              <h4 className="font-semibold mb-1">Technical Specs</h4>
              <ul className="list-disc list-inside mb-3">
                {selectedTool.details.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
              <h4 className="font-semibold mb-1">Use Cases</h4>
              <p>{selectedTool.details.usage}</p>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">About MedTools</h3>
          <p className="max-w-3xl mx-auto text-gray-600">
            MedTools is a digital catalog of cutting-edge tools and technology for modern medical research. Our mission is to support the scientific community with curated, verified instruments and data platforms.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-semibold mb-4">Get In Touch</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
              <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded"></textarea>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
            </form>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Contact Info</h4>
            <p><strong>Email:</strong> contact@medtools.io</p>
            <p><strong>Phone:</strong> +1 (800) 555-1234</p>
            <p><strong>Address:</strong> 123 Science Blvd, Research City, USA</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-6">
        <div className="mb-2">
          <input
            type="email"
            placeholder="Subscribe to our newsletter"
            className="p-2 rounded w-64 text-black"
          />
          <button className="ml-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Subscribe</button>
        </div>
        <p className="text-sm">© 2025 MedTools. All rights reserved. For research purposes only.</p>
      </footer>
    </div>
  );
};

export default MedicalToolsHome;
