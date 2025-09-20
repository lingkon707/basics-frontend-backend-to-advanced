'use client';

import experience from './experience.json';
import Header from './Header';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  return (
    <>
 
      <section className="pt-20 min-h-screen bg-gradient-to-tr from-rgbdark via-rgbblue to-rgbmid px-6 lg:px-20 text-white max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-center">Experience</h2>
        {experience.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} />
        ))}
      </section>
    </>
  );
}
