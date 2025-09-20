export default function FrontendSkills() {
  const skills = [
    { icon: "⚛️", name: "ReactJS", level: "Advanced", progress: 90 },
    { icon: "🔹", name: "NextJS", level: "Intermediate", progress: 75 },
    { icon: "💻", name: "HTML5 & CSS3", level: "Expert", progress: 95 },
    { icon: "🎨", name: "Tailwind CSS", level: "Advanced", progress: 88 },
    { icon: "🟨", name: "JavaScript (ES6+)", level: "Advanced", progress: 85 },
    { icon: "🔄", name: "TypeScript", level: "Intermediate", progress: 70 },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center items-center py-16 px-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800">
      <div className="max-w-5xl w-full">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          💻 আমার ফ্রন্টএন্ড স্কিলসমূহ
        </h2>

        {/* Skill Cards */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-md 
                         p-5 rounded-xl shadow-lg hover:scale-[1.02] hover:shadow-indigo-500/30 
                         transition-all duration-300"
            >
              <span className="text-3xl">{skill.icon}</span>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-indigo-300 text-sm">{skill.level}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-indigo-500 h-2 rounded-full transition-all duration-700"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-indigo-300 mb-3">
            🚀 আপনার প্রোজেক্টে কাজ করতে প্রস্তুত
          </h3>
          <p className="text-gray-300 mb-6">
            আমি আধুনিক, রেসপন্সিভ এবং পারফরম্যান্স-অপ্টিমাইজড ওয়েব অ্যাপ তৈরি করি।  
            React, NextJS, Tailwind এবং TypeScript ব্যবহার করে স্কেলেবল ফ্রন্টএন্ড তৈরি করতে পারি।
          </p>
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
            আমাকে যোগাযোগ করুন
          </button>
        </div>
      </div>
    </div>
  );
}
