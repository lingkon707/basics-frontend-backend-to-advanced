export default function Dashboard() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans px-4 py-6 lg:px-8">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-gray-100 p-6 flex flex-col justify-between border-r">
          {/* Logo */}
          <div>
            <h1 className="text-xl font-bold mb-8 text-blue-600">🟦 Droit UI</h1>
            {/* Nav */}
            <nav className="space-y-4 text-gray-600">
              <div className="hover:text-black">🏠 Dashboard</div>
              <div className="hover:text-black">💬 Discussions</div>
              <div className="hover:text-black">📚 Courses</div>
              <div className="hover:text-black">🧑‍🎓 Students</div>
              <div className="hover:text-black">⭐ Reviews</div>
              <div className="hover:text-black">🏆 Achievements</div>
              <div className="hover:text-black">⚙️ Settings</div>
            </nav>
          </div>

          {/* Bottom Panel */}
          <div className="mt-10">
            <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
              <p className="text-sm font-semibold">✅ Course Progress</p>
              <p className="text-xs mt-1">40% Done</p>
            </div>
            <div className="text-xs text-gray-500">
              👤 Oliver Jack<br />Marketing Manager
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 px-6 py-4 space-y-6">

          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Welcome Back, Oliver!</h2>
              <p className="text-sm text-gray-500">
                This placeholder text is stand-in for later inserted text.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gray-100 border text-sm rounded-md hover:bg-gray-200">
                📄 Download Certificate
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-500">
                + Add New Course
              </button>
            </div>
          </div>

          {/* Featured Courses */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Figma Tutorial: A Crash Course for Beginners",
                author: "Adam Smith",
                time: "3:50",
              },
              {
                title: "Webflow Tutorial: Build Your First Website!",
                author: "Robert Hook",
                time: "9:32",
              },
              {
                title: "Getting started with templates for your team",
                author: "Daniel Thomas",
                time: "5:45",
              },
            ].map((course, index) => (
              <div key={index} className="bg-white border p-3 rounded-lg shadow-sm">
                <div className="relative bg-gray-200 aspect-video rounded-md mb-3 flex items-center justify-center">
                  <span className="text-xl text-gray-700">▶</span>
                  <span className="absolute bottom-1 right-2 text-xs bg-black text-white bg-opacity-60 px-1 rounded">
                    {course.time}
                  </span>
                </div>
                <p className="text-sm font-semibold">{course.title}</p>
                <p className="text-xs text-gray-500 mt-1">A Course by {course.author}</p>
              </div>
            ))}
          </div>

          {/* Courses Table + Messages + Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* My Courses */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-md font-semibold">My Courses</h3>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  View All Courses
                </a>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Ultimate Web Developer Course", lessons: 12, progress: 10 },
                  { name: "Web Developer Bootcamp", lessons: 16, progress: 30 },
                  { name: "Fullstack Web Developer Course", lessons: 15, progress: 100 },
                  { name: "User Experience Design Essentials", lessons: 15, progress: 50 },
                ].map((course, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{course.name}</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="space-y-6">

              {/* Messages */}
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <div className="flex justify-between mb-2">
                  <h4 className="text-sm font-semibold">Messages</h4>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Go To Chat
                  </a>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-gray-500">Hi, Robert can you help me?</p>
                    <span className="text-xs text-gray-400">Today</span>
                  </div>
                  <div>
                    <p className="font-medium">Robert Brown</p>
                    <p className="text-gray-500">Sure, I’ll do it</p>
                    <span className="text-xs text-gray-400">Yesterday</span>
                  </div>
                  <div>
                    <p className="font-medium">David Taylor</p>
                    <p className="text-gray-500">Stop working! See you later...</p>
                    <span className="text-xs text-gray-400">Jan 20</span>
                  </div>
                </div>
              </div>

              {/* Progress Placeholder */}
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <h4 className="text-sm font-semibold mb-2">Progress</h4>
                <p className="text-xs text-gray-500 mb-2">This week's total data</p>
                <div className="flex gap-3 text-sm text-center">
                  <div className="flex-1">
                    <div className="w-12 h-12 rounded-full bg-blue-500 mx-auto"></div>
                    <p className="mt-1">40%</p>
                  </div>
                  <div className="flex-1">
                    <div className="w-12 h-12 rounded-full bg-green-500 mx-auto"></div>
                    <p className="mt-1">50%</p>
                  </div>
                  <div className="flex-1">
                    <div className="w-12 h-12 rounded-full bg-yellow-400 mx-auto"></div>
                    <p className="mt-1">70%</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>
      </div>
    </main>
  );
}
