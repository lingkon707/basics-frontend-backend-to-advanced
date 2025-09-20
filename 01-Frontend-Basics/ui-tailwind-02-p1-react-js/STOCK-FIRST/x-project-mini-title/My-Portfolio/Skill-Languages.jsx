export default function DemoLanguagesUI() {
  const languages = [
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "ReactJS", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
  ];

  const demoImages = [
    "https://www.ifwwebstudio.com/images/blog/full/complete-website-project-faster.jpg",
    "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/10/web-development-projects.png",
    "https://toggl.com/blog/wp-content/uploads/2020/12/web-design-project-management-software.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-sky-800">My Language Skills & UI Demos</h1>
          <p className="text-gray-600 mt-2 text-sm">Explore the languages I use and see real project UI samples.</p>
        </div>

        {/* Language Skills Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-16">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md border border-gray-100 text-center"
            >
              <h3 className="text-lg font-semibold text-sky-700">{lang.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{lang.level}</p>
            </div>
          ))}
        </div>

        {/* UI Demo Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">UI Previews</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {demoImages.map((src, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <img src={src} alt={`Demo ${idx}`} className="w-full h-52 object-cover" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-sky-700">UI Design Sample #{idx + 1}</h3>
                  <p className="text-xs text-gray-500 mt-1">Clean, modern, responsive layout with React + Tailwind</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg shadow"
          >
            See More Projects
          </a>
        </div>
      </div>
    </div>
  );
}
