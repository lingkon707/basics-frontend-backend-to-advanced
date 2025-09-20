import React from "react";

export default function EducationSection({ education }) {
  return (
    <section className="bg-gray-50 p-8 md:p-16">
      <h3 className="text-3xl font-semibold text-blue-900 mb-8">Education</h3>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div key={`${edu.institution}-${i}`} className="border-l-4 border-orange-500 pl-6 relative">
            <h4 className="text-xl font-semibold text-gray-900">{edu.institution}</h4>
            <p className="italic text-gray-700">{edu.studyType} in {edu.area}</p>
            <p className="text-sm text-gray-500">{new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}</p>
            {edu.courses && (
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {edu.courses.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
