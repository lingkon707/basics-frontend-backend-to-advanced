export default function AIStylePortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans px-6 py-10">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Lingkon
        </h1>
        <p className="text-2xl font-semibold text-purple-300 mt-2">Frontend Developer</p>
        <p className="text-gray-300 max-w-xl mx-auto mt-4">
          I build modern web applications with a focus on performance, responsiveness, and user experience.
        </p>
        <a href="#" className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white font-semibold">
          Download CV
        </a>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-20">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h2 className="text-xl font-bold mb-2 text-blue-400">About Me</h2>
          <p className="text-sm text-gray-300">
            I am a frontend developer specializing in building exceptional digital experiences. Currently, I am focused on developing responsive and accessible interfaces using React.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/10/web-development-projects.png" className="rounded-xl w-full max-w-sm border border-slate-700" alt="Lingkon Portrait" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {['JS', 'TS', 'HTML', 'CSS', 'React'].map((skill) => (
            <span
              key={skill}
              className="bg-slate-700 px-4 py-2 rounded-full text-sm font-semibold text-white border border-slate-600"
            >
              {skill}
            </span>
          ))}
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 max-w-xs">
            <p className="text-sm text-blue-300 font-semibold mb-1">Tailwind CSS</p>
            <p className="text-gray-400 text-xs">Utilizing utility-first CSS framework for styling</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((n) => (
            <div key={n} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <img
                src={n === 1 ?
                  "https://www.ifwwebstudio.com/images/blog/full/complete-website-project-faster.jpg" :
                  "https://toggl.com/blog/wp-content/uploads/2020/12/web-design-project-management-software.jpg"
                }
                className="rounded-lg mb-4 border border-slate-600"
                alt={`Project ${n}`}
              />
              <h3 className="text-xl font-bold text-blue-400">UI Template</h3>
              <p className="text-gray-400 text-sm mt-2">A high-quality design-template for modern web projects.</p>
              <a
                href="#"
                className="inline-block mt-4 text-sm text-blue-500 underline hover:text-blue-300"
              >
                Live Demo
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-20 border-t border-slate-700 pt-6">
        <p className="text-sm text-gray-400">© 2025 Lingkon — Frontend Developer. All rights reserved.</p>
      </footer>
    </div>
  );
}
