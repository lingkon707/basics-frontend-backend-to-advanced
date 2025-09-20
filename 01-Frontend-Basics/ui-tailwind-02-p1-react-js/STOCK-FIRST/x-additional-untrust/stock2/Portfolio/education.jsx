'use client';

import education from './education.json';
import Header from './Header';
import EducationItem from './EducationItem';

export default function Education() {
  return (
    <>

      <section className="pt-20 min-h-screen bg-gradient-to-tr from-rgbdark via-rgbblue to-rgbmid px-6 lg:px-20 text-white max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-center">Education</h2>
        {education.map((edu, i) => (
          <EducationItem key={i} edu={edu} />
        ))}
      </section>
    </>
  );
}
