'use client';

import skills from './skills.json';
import Header from './Header';
import SkillBar from './SkillBar';

export default function Skills() {
  return (
    <>
 
      <section className="pt-20 min-h-screen bg-gradient-to-tr from-rgbdark via-rgbblue to-rgbmid px-6 lg:px-20 text-white max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-center">Skills</h2>
        {skills.map((skill, i) => (
          <SkillBar key={i} skill={skill} />
        ))}
      </section>
    </>
  );
}
