'use client';

import resume from './resume.json';
import Header from './Header';

export default function Resume() {
  return (
    <>

      <section className="pt-20 min-h-screen bg-gradient-to-tr from-rgbdark via-rgbblue to-rgbmid px-6 lg:px-20 text-white max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-center">Resume</h2>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Summary</h3>
          <p className="text-gray-300">{resume.summary}</p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Skills</h3>
          <ul className="list-disc list-inside text-gray-300 flex flex-wrap gap-4">
            {resume.skills.map((skill, i) => (
              <li key={i} className="bg-pink-500 rounded-full px-4 py-1 text-white">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Experience</h3>
          {resume.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold">{exp.position}</p>
              <p className="italic text-gray-300">{exp.company} — {exp.period}</p>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Education</h3>
          {resume.education.map((edu, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold">{edu.degree}</p>
              <p className="italic text-gray-300">{edu.institution} — {edu.period}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p>Email: <a href={`mailto:${resume.contact.email}`} className="text-pink-500 hover:underline">{resume.contact.email}</a></p>
          <p>Phone: {resume.contact.phone}</p>
        </div>
      </section>
    </>
  );
}
