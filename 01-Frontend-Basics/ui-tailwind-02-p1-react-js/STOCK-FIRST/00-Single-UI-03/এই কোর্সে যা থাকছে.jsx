export default function CourseInfo() {
  const info = [
    { icon: "👥", label: "শিক্ষার্থী", value: "২৭,১৬০ জন" },
    { icon: "⏰", label: "সময় লাগবে", value: "৬ ঘন্টা" },
    { icon: "🎥", label: "ভিডিও", value: "৪৩টি" },
    { icon: "❓", label: "কুইজ", value: "৬ সেট" },
    { icon: "♾️", label: "মেয়াদ", value: "আজীবন" },
  ];

  return (
    <div className="w-full flex justify-center py-12 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">
          🎓 এই কোর্সে যা থাকছে
        </h2>

        {/* Course Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {info.map((item, index) => (
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
            🚀 আজই আপনার শেখা শুরু করুন
          </h3>
          <p className="text-gray-600 mb-4">
            কোর্সটি একবার কিনলেই আজীবনের জন্য আপনার। শেখা শুরু করতে দেরি করবেন না!
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
            এখনই ভর্তি হোন
          </button>
        </div>
      </div>
    </div>
  );
}
