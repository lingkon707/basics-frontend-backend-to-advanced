import React from "react";

const skills = {
  languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "JSON"],
  frameworks: ["React", "Next.js", "Redux", "Tailwind CSS", "Material UI", "Styled Components"],
  tools: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Figma", "Chrome DevTools"],
  testing: ["Jest", "React Testing Library", "Cypress"],
  others: ["REST APIs", "GraphQL", "Webpack", "ESLint", "Prettier"],
};

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A fully responsive personal portfolio website built with React and Tailwind CSS showcasing my skills, projects, and experience.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/lingkon/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "E-commerce Storefront",
    description:
      "A modern e-commerce frontend with product listing, cart, and checkout flow using React and Redux.",
    tech: ["React", "Redux", "Stripe API", "Tailwind CSS"],
    github: "https://github.com/lingkon/ecommerce-store",
    demo: "https://ecommerce-demo.com",
  },
  {
    title: "Task Manager App",
    description:
      "A task management tool with drag & drop, filtering, and user authentication built with Next.js.",
    tech: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/lingkon/task-manager",
    demo: "#",
  },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Tech Innovators Inc.",
    date: "Jan 2022 - Present",
    description:
      "Developed and maintained scalable web applications using React and Redux. Collaborated closely with designers and backend teams to build intuitive user interfaces.",
  },
  {
    role: "Junior Frontend Developer",
    company: "Web Solutions Ltd.",
    date: "Jun 2020 - Dec 2021",
    description:
      "Implemented responsive UI components using React and Tailwind CSS. Optimized web apps for performance and SEO.",
  },
  {
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    date: "2018 - 2020",
    description:
      "Delivered frontend solutions for small businesses, including landing pages, dashboards, and blogs. Focused on responsive design and cross-browser compatibility.",
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    date: "2016 - 2020",
  },
  {
    degree: "Frontend Development Certification",
    institution: "FreeCodeCamp",
    date: "2021",
  },
];

const socials = [
  { name: "GitHub", url: "https://github.com/lingkon" },
  { name: "LinkedIn", url: "https://linkedin.com/in/lingkon" },
  { name: "Twitter", url: "https://twitter.com/lingkon" },
];

export default function FullPortfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <img
            src="https://avatars.githubusercontent.com/u/111384782?v=4" // Your photo URL
            alt="Lingkon"
            className="w-48 h-48 rounded-full border-4 border-green-400 shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-6xl font-extrabold text-green-400 mb-2">Lingkon</h1>
            <h2 className="text-xl text-gray-300 mb-4">Expert Frontend Developer</h2>
            <p className="max-w-xl text-gray-400 mb-6 leading-relaxed">
              Building scalable, performant, and accessible web apps using modern frontend tech. Passionate about clean UI/UX, responsive design, and code quality.
            </p>
            <div className="flex gap-4">
              <a
                href="/resume.pdf"
                className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full font-semibold shadow-md transition"
                download
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-green-500 text-green-500 hover:bg-green-600 hover:text-white rounded-full font-semibold shadow-md transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h3 className="text-4xl font-bold text-green-400 mb-8">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-xl font-semibold text-green-300 capitalize mb-4">{category}</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h3 className="text-4xl font-bold text-green-400 mb-8">Projects</h3>
          <div className="grid gap-10 md:grid-cols-2">
            {projects.map(({ title, description, tech, github, demo }) => (
              <div
                key={title}
                className="bg-gray-900 p-6 rounded-xl border border-green-400 shadow-lg hover:shadow-green-600 transition"
              >
                <h4 className="text-2xl font-semibold text-green-300 mb-3">{title}</h4>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="bg-green-700 bg-opacity-70 px-3 py-1 rounded-full text-sm font-semibold text-green-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-500 font-semibold"
                    >
                      GitHub
                    </a>
                  )}
                  {demo && demo !== "#" && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-500 font-semibold"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-green-400 mb-8 text-center">Experience</h3>
          <div className="space-y-8">
            {experience.map(({ role, company, date, description }) => (
              <div key={company} className="bg-gray-900 rounded-xl border border-green-400 p-6 shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-2xl font-semibold text-green-300">{role}</h4>
                  <span className="text-gray-400 italic">{date}</span>
                </div>
                <h5 className="text-green-400 font-semibold mb-2">{company}</h5>
                <p className="text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-green-400 mb-8 text-center">Education</h3>
          <ul className="space-y-6 text-center text-gray-400">
            {education.map(({ degree, institution, date }) => (
              <li key={degree} className="bg-gray-900 p-6 rounded-xl border border-green-400 shadow-lg">
                <h4 className="text-xl font-semibold text-green-300">{degree}</h4>
                <p className="italic">{institution}</p>
                <span>{date}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="max-w-3xl mx-auto mb-12 bg-gray-900 p-8 rounded-xl border border-green-400 shadow-lg"
        >
          <h3 className="text-4xl font-bold text-green-400 mb-6 text-center">Get in Touch</h3>
          <p className="text-gray-400 text-center mb-6">
            I’m currently looking for frontend development opportunities. Feel free to reach out via email or LinkedIn.
          </p>

          <div className="flex flex-col items-center space-y-4">
            <a
              href="mailto:lingkon@example.com"
              className="text-green-300 font-semibold underline"
            >
              lingkon@example.com
            </a>
            <div className="flex gap-6">
              {socials.map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-500 font-semibold"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 text-sm mb-6">
          © {new Date().getFullYear()} Lingkon. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
