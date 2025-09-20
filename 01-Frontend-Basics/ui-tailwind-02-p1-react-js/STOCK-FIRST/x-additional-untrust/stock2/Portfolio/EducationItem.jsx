export default function EducationItem({ edu }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-pink-500">{edu.degree}</h3>
      <p className="italic text-gray-300">{edu.institution} — {edu.period}</p>
      <p className="text-gray-300 mt-2">{edu.description}</p>
    </div>
  );
}
