export default function ExperienceItem({ exp }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-pink-500">{exp.position}</h3>
      <p className="italic text-gray-300">{exp.company} — {exp.period}</p>
      <p className="text-gray-300 mt-2">{exp.description}</p>
    </div>
  );
}
