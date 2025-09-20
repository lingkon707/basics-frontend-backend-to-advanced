export default function DemoLanguagesUI() {
  const languages = [
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "ReactJS", level: "Advanced" },
    { name: "NextJS", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Redux", level: "Intermediate" },
    { name: "Figma", level: "Proficient" },
    { name: "Git & GitHub", level: "Advanced" },
  ];

  const demoImages = [
    "https://www.ifwwebstudio.com/images/blog/full/complete-website-project-faster.jpg",
    "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/10/web-development-projects.png",
    "https://toggl.com/blog/wp-content/uploads/2020/12/web-design-project-management-software.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-50 px-4 py-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-700 tracking-tight">
            Developer Skills & UI Showcase
          </h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl mx-auto">
            Programming language expertise, tools & React UI samples.
          </p>
        </div>

        {/* Skills Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center text-sky-800 mb-6">🧠 Languages & Tools</h2>
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="bg-white border border-gray-200 p-3 rounded-lg shadow-sm text-center hover:shadow-md transition"
              >
                <h3 className="text-md font-semibold text-sky-700">{lang.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{lang.level}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UI Demo Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center text-sky-800 mb-6">🎨 UI Design Demos</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {demoImages.map((src, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border border-gray-200"
              >
                <img src={src} alt={`Demo ${idx + 1}`} className="w-full h-40 object-cover" />
                <div className="p-3">
                  <h3 className="text-md font-semibold text-sky-700">UI Sample #{idx + 1}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Responsive interface with clean design.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-4 py-2 rounded-md shadow transition text-sm"
          >
            💼 Explore My Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
