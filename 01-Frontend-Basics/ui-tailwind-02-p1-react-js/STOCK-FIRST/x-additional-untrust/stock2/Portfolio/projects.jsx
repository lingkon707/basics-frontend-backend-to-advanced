'use client';

import projects from './projects.json';

import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <>
  
      <section className="pt-20 min-h-screen bg-gradient-to-tr from-rgbdark via-rgbblue to-rgbmid px-6 lg:px-20 text-white">
        <h2 className="text-5xl font-extrabold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
