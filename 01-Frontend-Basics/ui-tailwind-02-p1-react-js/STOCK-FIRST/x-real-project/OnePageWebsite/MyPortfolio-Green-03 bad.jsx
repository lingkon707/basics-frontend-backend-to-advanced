import React from "react";

const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "JSON"],
  Frameworks: ["React", "Next.js", "Redux", "Tailwind CSS", "Material UI", "Styled Components"],
  Tools: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Figma", "Chrome DevTools"],
  Testing: ["Jest", "React Testing Library", "Cypress"],
  Others: ["REST APIs", "GraphQL", "Webpack", "ESLint", "Prettier"],
};

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive portfolio with React & Tailwind, showcasing skills and projects.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/lingkon/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "E-commerce Storefront",
    description:
      "Modern e-commerce frontend with React and Redux.",
    tech: ["React", "Redux", "Stripe API", "Tailwind CSS"],
    github: "https://github.com/lingkon/ecommerce-store",
    demo: "https://ecommerce-demo.com",
  },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Tech Innovators Inc.",
    date: "Jan 2022 - Present",
    description:
      "Built scalable web apps using React & Redux, collaborating with designers and backend.",
  },
  {
    role: "Junior Frontend Developer",
    company: "Web Solutions Ltd.",
    date: "Jun 2020 - Dec 2021",
    description:
      "Implemented responsive UI components, optimized for performance and SEO.",
  },
];

const education = [
  {
    degree: "B.Sc. Computer Science",
    institution: "State University",
    date: "2016 - 2020",
  },
];

const socials = [
  { name: "GitHub", url: "https://github.com/lingkon" },
  { name: "LinkedIn", url: "https://linkedin.com/in/lingkon" },
];

export default function CompactPortfolio() {
  return (
    <div className="font-sans text-white bg-black min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <section className="px-6 py-12 text-center bg-green-900">
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="Lingkon"
            className="mx-auto w-36 h-36 rounded-full border-4 border-green-400 mb-4"
            loading="lazy"
          />
          <h1 className="text-4xl font-bold text-green-300 mb-1">Lingkon</h1>
          <p className="text-green-200 mb-3 text-lg font-semibold">Frontend Developer</p>
          <p className="text-green-100 max-w-md mx-auto mb-6">
            Crafting modern, performant, and responsive web applications with React and Tailwind CSS.
          </p>
          <a
            href="/resume.pdf"
            className="inline-block bg-green-500 hover:bg-green-600 rounded-full px-6 py-2 font-semibold shadow-md transition"
            download
          >
            Download Resume
          </a>
        </section>

        {/* Skills */}
        <section className="bg-gray-900 px-6 py-10">
          <h2 className="text-3xl text-green-400 font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category} className="border border-green-600 rounded-lg p-4">
                <h3 className="text-green-300 font-semibold mb-3">{category}</h3>
                <ul className="list-disc list-inside text-green-200 space-y-1">
                  {list.map((skill) => (
                    <li key={skill} className="text-sm">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="bg-green-900 px-6 py-10">
          <h2 className="text-3xl text-green-300 font-bold mb-8 text-center">Projects</h2>
          <div className="space-y-8">
            {projects.map(({ title, description, tech, github, demo }) => (
              <article
                key={title}
                className="bg-black rounded-lg p-5 border border-green-400 shadow-md"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-2">{title}</h3>
                <p className="text-green-200 mb-3 text-sm">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="bg-green-700 text-green-300 text-xs px-3 py-1 rounded-full font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-green-300 font-semibold text-sm">
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                      GitHub
                    </a>
                  )}
                  {demo && (
                    <a href={demo} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="bg-gray-900 px-6 py-10">
          <h2 className="text-3xl text-green-400 font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-6">
            {experience.map(({ role, company, date, description }) => (
              <div
                key={`${role}-${company}`}
                className="border border-green-600 rounded-lg p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-green-300 font-semibold">{role}</h3>
                  <time className="text-green-200 text-xs italic">{date}</time>
                </div>
                <p className="text-green-200 text-sm">{company}</p>
                <p className="text-green-100 mt-2 text-xs leading-snug">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="bg-green-900 px-6 py-10">
          <h2 className="text-3xl text-green-300 font-bold mb-8 text-center">Education</h2>
          <ul className="space-y-6 max-w-xl mx-auto text-green-200 text-sm">
            {education.map(({ degree, institution, date }) => (
              <li
                key={degree}
                className="border border-green-500 rounded-lg p-4 text-center"
              >
                <h3 className="font-semibold mb-1">{degree}</h3>
                <p className="italic">{institution}</p>
                <time className="block mt-1">{date}</time>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="bg-gray-900 px-6 py-12 text-center"
        >
          <h2 className="text-3xl text-green-400 font-bold mb-4">Get in Touch</h2>
          <p className="text-green-200 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            I'm actively seeking frontend development roles. Feel free to reach out!
          </p>
          <a
            href="mailto:lingkon@example.com"
            className="block mb-4 text-green-300 font-semibold underline text-sm"
          >
            lingkon@example.com
          </a>
          <div className="flex justify-center gap-8 text-green-400 font-semibold text-sm">
            {socials.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300"
              >
                {name}
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 text-xs py-6">
          © {new Date().getFullYear()} Lingkon. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
