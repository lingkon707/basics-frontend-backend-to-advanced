import { useState } from "react";

export default function OnePagePortfolio() {
  const [active, setActive] = useState("skills");

  return (
    <div className="font-sans bg-gradient-to-b from-blue-50 via-white to-gray-100 text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="bg-white shadow-lg py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-700">Lingkon</h1>
          <ul className="flex gap-6 font-medium text-gray-700">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#portfolio" className="hover:text-blue-600">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero / About */}
      <section id="about" className="py-24 bg-gradient-to-r from-blue-100 to-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold mb-6 text-blue-800">Hi, I’m Lingkon 👋</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A passionate <strong>Frontend Developer</strong> skilled in building responsive, elegant, and user-friendly interfaces. I specialize in <strong>ReactJS, Next.js, TypeScript, Tailwind CSS</strong> and enjoy creating interactive UI experiences.
          </p>
          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            View My Projects
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Tech Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-blue-800 text-lg mb-2">Frontend</h3>
              <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                <li>ReactJS / NextJS</li>
                <li>JavaScript / TypeScript</li>
                <li>HTML5 / CSS3</li>
                <li>Tailwind CSS / Bootstrap</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-blue-800 text-lg mb-2">Tools</h3>
              <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                <li>Git / GitHub</li>
                <li>VS Code / WebStorm</li>
                <li>Figma / Adobe XD</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-blue-800 text-lg mb-2">UI/UX</h3>
              <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                <li>Responsive Web Design</li>
                <li>Design Systems</li>
                <li>Accessibility (WCAG)</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-blue-800 text-lg mb-2">Soft Skills</h3>
              <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                <li>Problem Solving</li>
                <li>Clean Code Writing</li>
                <li>Team Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Professional Experience</h2>
          <div className="space-y-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-700">Frontend Developer — XYZ Tech</h3>
              <p className="text-sm text-gray-600">Jan 2023 – Present</p>
              <p className="mt-2 text-gray-700 text-sm">
                Developed scalable React applications with reusable components. Implemented UI designs from Figma and integrated REST APIs with state management (Redux).
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-700">Junior Developer — ABC Corp</h3>
              <p className="text-sm text-gray-600">Aug 2021 – Dec 2022</p>
              <p className="mt-2 text-gray-700 text-sm">
                Created dashboard UIs and frontend logic using JavaScript and Tailwind. Supported backend engineers in RESTful data flow testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl shadow text-left hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-800">Personal Portfolio</h3>
              <p className="text-sm text-gray-700 mt-2">Built using React and Tailwind, includes responsive layout, dark mode, and animations.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow text-left hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-800">Admin Dashboard</h3>
              <p className="text-sm text-gray-700 mt-2">Includes analytics charts, sidebar navigation, dark/light toggle, and user management.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow text-left hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-800">E-Commerce UI</h3>
              <p className="text-sm text-gray-700 mt-2">Product filter, cart page, checkout form, and responsive design — all built with Next.js.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-t from-gray-100 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Design Templates</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://www.ifwwebstudio.com/images/blog/full/complete-website-project-faster.jpg" alt="UI Template 1" className="rounded-lg mb-4" />
              <p className="text-sm font-medium text-gray-700">Creative Portfolio Landing</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://toggl.com/blog/wp-content/uploads/2020/12/web-design-project-management-software.jpg" alt="UI Template 2" className="rounded-lg mb-4" />
              <p className="text-sm font-medium text-gray-700">Finance Dashboard UI</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/10/web-development-projects.png" alt="UI Template 3" className="rounded-lg mb-4" />
              <p className="text-sm font-medium text-gray-700">E-Commerce Interface</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-16 bg-blue-900 text-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Let’s Connect</h3>
        <p className="text-sm mb-4">📧 Email: <a href="mailto:lingkon.dev@gmail.com" className="underline">lingkon.dev@gmail.com</a></p>
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/lingkon" target="_blank" className="hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/lingkon" target="_blank" className="hover:underline">LinkedIn</a>
          <a href="https://twitter.com/lingkon" target="_blank" className="hover:underline">Twitter</a>
        </div>
        <p className="text-xs text-blue-200">© 2025 Lingkon — Frontend Developer. All rights reserved.</p>
      </footer>
    </div>
  );
}
