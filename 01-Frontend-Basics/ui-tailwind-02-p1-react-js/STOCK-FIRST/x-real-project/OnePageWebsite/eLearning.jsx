import React from "react";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white text-gray-800 font-sans overflow-x-hidden">

      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://gbs.ac.ae/media/dorphi0q/hero-image-education-training.jpg?anchor=center&mode=crop&width=1600&height=900')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Empower Your Future
          </h1>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Join our eLearning platform and gain the skills you need to succeed in today’s world.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn anytime, anywhere with our powerful features to boost your learning journey.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Flexible Learning", desc: "Access courses 24/7 from any device." },
            { title: "Expert Mentors", desc: "Learn from professionals worldwide." },
            { title: "Certified Courses", desc: "Earn recognized certificates." },
            { title: "Community Support", desc: "Engage with peers and mentors." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/istock-499343530.jpg?itok=WwL9bz7T"
            alt="eLearning"
            className="rounded-3xl shadow-lg hover:scale-105 transition-transform"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 mb-6">
              Our courses are built by industry experts and are designed for
              real-world application. Whether you're upskilling, reskilling, or
              starting a new journey, we support you all the way.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Flexible schedule</li>
              <li>✔ Affordable and accessible</li>
              <li>✔ Certification provided</li>
              <li>✔ Active support and community</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Learning Today</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Sign up now and unlock your potential with premium online courses tailored to your success.
        </p>
        <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-200 rounded-full font-semibold shadow-lg">
          Explore Courses
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} eLearn Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
