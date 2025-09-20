export default function SkillBar({ skill }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-white font-semibold">{skill.name}</span>
        <span className="text-gray-300">{skill.level}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-4">
        <div
          className="bg-pink-500 h-4 rounded-full transition-all"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}
