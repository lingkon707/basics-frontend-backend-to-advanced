export default function ProjectCard({ project }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md hover:scale-105 transition transform">
      <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
        View Project
      </a>
    </div>
  );
}
