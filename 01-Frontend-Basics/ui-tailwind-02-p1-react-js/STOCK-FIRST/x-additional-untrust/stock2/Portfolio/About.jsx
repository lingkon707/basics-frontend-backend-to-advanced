'use client';

import aboutData from './about.json';

export default function AboutMe() {
  return (
    <section className="min-h-screen pt-20 px-6 lg:px-20 bg-gradient-to-tr from-rgbdark via-rgbblue to-rgbmid text-white flex flex-col md:flex-row items-center md:items-start gap-10">
      <img
        src={aboutData.image}
        alt={aboutData.name}
        className="rounded-3xl w-72 h-72 object-cover shadow-lg border-4 border-pink-500"
      />
      <div className="max-w-3xl">
        <h2 className="text-5xl font-extrabold mb-4">{aboutData.name}</h2>
        <h3 className="text-2xl font-semibold text-pink-500 mb-6">{aboutData.title}</h3>
        <p className="text-gray-300 leading-relaxed">{aboutData.description}</p>
        <div className="mt-8 flex gap-6">
          {Object.entries(aboutData.social).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
