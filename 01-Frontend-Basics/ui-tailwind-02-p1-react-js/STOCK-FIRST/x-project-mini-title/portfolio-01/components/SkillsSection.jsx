import React from "react";

export default function SkillsSection({ skills }) {
  return (
    <section className="bg-gray-50 p-8 md:p-16">
      <h3 className="text-3xl font-semibold text-blue-900 mb-8">Skills & Expertise</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map(({ name, x_icon, x_description }) => (
          <div
            key={name}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-default"
            title={x_description}
          >
            <i className={`${x_icon} text-teal-600 text-5xl mb-2`}></i>
            <span className="font-medium text-gray-800">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
