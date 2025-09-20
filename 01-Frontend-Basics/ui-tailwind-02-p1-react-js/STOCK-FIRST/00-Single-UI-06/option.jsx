import React, { useState } from 'react';

const RefineSearch = () => {
  // Define the options using an object
  const projectTypes = {
    all: 'All types',
    web: 'Web Development',
    mobile: 'Mobile Development',
    design: 'Design',
  };

  const businessAreas = {
    all: 'All areas',
    marketing: 'Marketing',
    finance: 'Finance',
    operations: 'Operations',
  };

  // Set up state for the selected values
  const [selectedProjectType, setSelectedProjectType] = useState('all');
  const [selectedBusinessArea, setSelectedBusinessArea] = useState('all');

  const handleProjectTypeChange = (e) => {
    setSelectedProjectType(e.target.value);
  };

  const handleBusinessAreaChange = (e) => {
    setSelectedBusinessArea(e.target.value);
  };

  return (
    <div className="bg-blue-300 min-h-screen flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-xl">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Looking for something specific?</h1>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* Project Type Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="project-type" className="text-lg text-gray-800 mb-2 font-medium">Project type</label>
            <select
              id="project-type"
              value={selectedProjectType}
              onChange={handleProjectTypeChange}
              className="p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {Object.entries(projectTypes).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>

          {/* Business Area Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="business-area" className="text-lg text-gray-800 mb-2 font-medium">Business area</label>
            <select
              id="business-area"
              value={selectedBusinessArea}
              onChange={handleBusinessAreaChange}
              className="p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {Object.entries(businessAreas).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Refine Button */}
        <div className="text-center">
          <button className="bg-indigo-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Refine results →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefineSearch;
