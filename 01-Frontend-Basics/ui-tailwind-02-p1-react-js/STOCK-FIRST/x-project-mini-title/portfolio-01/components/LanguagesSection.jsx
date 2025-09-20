import React from "react";

export default function LanguagesSection({ languages }) {
  return (
    <section className="bg-gray-50 p-8 md:p-16">
      <h3 className="text-3xl font-semibold text-blue-900 mb-8">Languages</h3>
      <div className="flex flex-wrap gap-6">
        {languages.map(({ language, fluency }, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow flex flex-col items-center min-w-[120px]"
          >
            <span className="text-xl font-bold text-teal-700">{language}</span>
            <span className="text-gray-600 mt-1 text-center">{fluency}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
