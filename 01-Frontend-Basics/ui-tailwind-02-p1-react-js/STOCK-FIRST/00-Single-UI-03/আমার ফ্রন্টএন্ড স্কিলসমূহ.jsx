export default function FrontendSkills() {
  const skills = [
    { icon: "⚛️", label: "ReactJS", value: "Advanced" },
    { icon: "🔹", label: "NextJS", value: "Intermediate" },
    { icon: "💻", label: "HTML5 & CSS3", value: "Expert" },
    { icon: "🎨", label: "Tailwind CSS", value: "Advanced" },
    { icon: "🟨", label: "JavaScript (ES6+)", value: "Advanced" },
    { icon: "🔄", label: "TypeScript", value: "Intermediate" },
  ];

  return (
    <div className="w-full flex justify-center py-12 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">
          💻 আমার ফ্রন্টএন্ড স্কিলসমূহ
        </h2>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gradient-to-tr from-indigo-50 to-white 
                         rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform"
            >
              <span className="text-4xl mb-2">{item.icon}</span>
              <p className="text-gray-500 text-sm">{item.label}</p>
              <p className="text-xl font-semibold text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Extra Section */}
        <div className="mt-10 bg-indigo-50 p-6 rounded-2xl text-center">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">
            🚀 আমি কীভাবে সাহায্য করতে পারি?
          </h3>
          <p className="text-gray-600 mb-4">
            আমি ফ্রন্টএন্ড ডেভেলপমেন্ট, React/NextJS প্রোজেক্ট, এবং রেসপন্সিভ UI ডিজাইন তৈরি করতে পারি। 
            আপনার প্রোজেক্টের জন্য একজন দক্ষ ডেভেলপার দরকার হলে যোগাযোগ করুন।
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
            আমাকে যোগাযোগ করুন
          </button>
        </div>
      </div>
    </div>
  );
}
