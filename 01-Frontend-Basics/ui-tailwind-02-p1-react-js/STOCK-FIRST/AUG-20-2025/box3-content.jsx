import React from "react";

const EducationSection = () => {
  return (
    <section className="w-full min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md border-2 border-red-500">
            <h3 className="text-xl font-semibold text-gray-800">Trainer Marketing</h3>
            <p className="text-sm text-gray-600">2005-2009</p>
            <p className="mt-4 text-gray-700">
              A personal portfolio is a curated collection of an individual’s
              professional work, showcasing their skills, experience A personal
              portfolio.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md border-2 border-red-500">
            <h3 className="text-xl font-semibold text-gray-800">Assistant Director</h3>
            <p className="text-sm text-gray-600">2010-2014</p>
            <p className="mt-4 text-gray-700">
              Each project here showcases my commitment to excellence and adaptability,
              tailored to meet each client’s unique needs.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md border-2 border-red-500">
            <h3 className="text-xl font-semibold text-gray-800">Design Assistant</h3>
            <p className="text-sm text-gray-600">2008-2012</p>
            <p className="mt-4 text-gray-700">
              I’ve had the privilege of working with various clients, from startups to
              established companies, helping bring their visions to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
