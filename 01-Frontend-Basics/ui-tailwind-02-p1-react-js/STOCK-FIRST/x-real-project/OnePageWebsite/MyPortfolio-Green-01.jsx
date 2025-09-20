import React from "react";

const skills = [
  "React",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Git",
  "Vite",
  "Node.js",
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React and Tailwind CSS showcasing my projects and skills.",
    link: "https://yourportfolio.com",
  },
  {
    title: "Task Manager App",
    description:
      "A task management app with user authentication and drag & drop features.",
    link: "#",
  },
  {
    title: "E-commerce Store",
    description:
      "Online store demo built with React, Tailwind, and Stripe integration.",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Container */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          {/* Photo */}
          <img
            src="https://avatars.githubusercontent.com/u/111384782?v=4" // Replace with your photo
            alt="Lingkon Islam"
            className="w-40 h-40 rounded-full border-4 border-green-400 shadow-lg"
          />
          {/* Intro */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-green-400 mb-2">Lingkon</h1>
            <h2 className="text-xl text-gray-300 mb-6">Frontend Developer</h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Passionate frontend developer focused on building modern, responsive, and accessible web applications using React, Tailwind CSS, and JavaScript. I love creating clean and user-friendly interfaces.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-green-400 mb-6">Skills</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-green-700 bg-opacity-70 px-4 py-2 rounded-full text-green-300 font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-green-400 mb-6">Projects</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map(({ title, description, link }) => (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={title}
                className="block p-6 bg-gray-900 rounded-xl border border-green-400 shadow-lg hover:shadow-green-600 transition"
              >
                <h4 className="text-xl font-semibold mb-2 text-green-300">{title}</h4>
                <p className="text-gray-400 leading-relaxed">{description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="mb-16 max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold text-green-400 mb-6">About Me</h3>
          <p className="text-gray-400 leading-relaxed">
            Hi! I’m Lingkon, a frontend developer with a passion for crafting beautiful and performant web applications.
            I specialize in React and Tailwind CSS, always striving to write clean, maintainable code. When I’m not coding,
            I enjoy learning new technologies, exploring design trends, and contributing to open source.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-16 max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold text-green-400 mb-6">Contact</h3>
          <p className="text-gray-400 mb-4">
            Feel free to reach out to me via email or LinkedIn:
          </p>
          <ul className="space-y-2 text-green-300 font-semibold">
            <li>Email: <a href="mailto:lingkon@example.com" className="underline">lingkon@example.com</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/lingkon" target="_blank" rel="noopener noreferrer" className="underline">linkedin.com/in/lingkon</a></li>
            {/* Add more socials if you want */}
          </ul>
        </section>

        <footer className="text-center text-gray-600 text-sm mb-6">
          © {new Date().getFullYear()} Lingkon. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
