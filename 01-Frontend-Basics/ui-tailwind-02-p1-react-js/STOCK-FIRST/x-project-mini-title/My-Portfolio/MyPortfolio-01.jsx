import { useState } from "react";

export default function OnePagePortfolio() {
  const [active, setActive] = useState("skills");

  const tabs = ["skills", "experience", "projects"];

  return (
    <div className="font-sans bg-gray-50 text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Lingkon</h1>
          <ul className="flex gap-6 font-medium">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero / About */}
      <section id="about" className="py-20 bg-blue-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-4 text-blue-800">
            Hi, I’m Lingkon 👋
          </h2>
          <p className="text-lg text-gray-700">
            Frontend Developer with experience in ReactJS, NextJS, Tailwind CSS,
            and TypeScript. Passionate about UI/UX and responsive web design.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-blue-800 mb-2">Frontend</h3>
              <ul className="text-gray-700 text-sm list-disc list-inside">
                <li>ReactJS / NextJS</li>
                <li>Tailwind CSS / Bootstrap</li>
                <li>HTML5 / CSS3 / JavaScript / TypeScript</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-blue-800 mb-2">Tools</h3>
              <ul className="text-gray-700 text-sm list-disc list-inside">
                <li>Git / GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-blue-800 mb-2">Soft Skills</h3>
              <ul className="text-gray-700 text-sm list-disc list-inside">
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Team Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Experience</h2>
          <div className="text-left space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-700">Frontend Developer</h3>
              <p className="text-sm text-gray-600">XYZ Tech — 2023–2024</p>
              <p className="mt-2 text-gray-700 text-sm">
                Developed responsive web apps using ReactJS, styled with Tailwind.
                Collaborated with backend team and UI designers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-700">Junior Web Developer</h3>
              <p className="text-sm text-gray-600">ABC Corp — 2022–2023</p>
              <p className="mt-2 text-gray-700 text-sm">
                Built UI components, worked with REST APIs, and contributed to team projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl shadow text-left">
              <h3 className="text-lg font-bold text-blue-800">Portfolio Website</h3>
              <p className="text-sm text-gray-700 mt-2">Built with React and Tailwind, showcasing skills, projects, and contact form.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow text-left">
              <h3 className="text-lg font-bold text-blue-800">E-Commerce UI</h3>
              <p className="text-sm text-gray-700 mt-2">Developed frontend for an e-commerce app with shopping cart and product filter.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow text-left">
              <h3 className="text-lg font-bold text-blue-800">Dashboard Template</h3>
              <p className="text-sm text-gray-700 mt-2">Responsive admin dashboard with charts, tables, and authentication page.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="py-12 bg-blue-900 text-white text-center">
        <h3 className="text-xl font-semibold mb-2">Let's Connect</h3>
        <p className="text-sm text-blue-100 mb-4">Email: lingkon.dev@gmail.com</p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/lingkon" target="_blank" className="underline hover:text-blue-300">GitHub</a>
          <a href="https://linkedin.com/in/lingkon" target="_blank" className="underline hover:text-blue-300">LinkedIn</a>
        </div>
        <p className="mt-6 text-xs text-blue-200">© 2025 Lingkon. All rights reserved.</p>
      </footer>
    </div>
  );
}
