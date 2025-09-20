import React from 'react';

const HomePage = () => {
  return (
    <div className="font-sans bg-gradient-to-t from-blue-50 to-blue-100">

      {/* Header */}
      <header className="flex justify-between items-center p-8 bg-white shadow-md">
        <div className="text-3xl font-bold text-blue-600">Logo</div>
        <nav className="space-x-6 text-lg">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#categories" className="hover:text-blue-600">Categories</a>
          <a href="#blog" className="hover:text-blue-600">Blog</a>
          <a href="#sign-up" className="hover:text-blue-600">Sign Up</a>
        </nav>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Try Now</button>
          <button className="bg-transparent text-blue-600 py-2 px-6 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">Play Video</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-8 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Invest in knowledge and your future!</h1>
        <p className="text-xl mb-6">Join 3000+ companies collaborating with us to build successful careers for our students.</p>
        <div className="flex justify-center mb-8">
          <button className="bg-yellow-500 text-white py-3 px-6 rounded-lg mr-4 hover:bg-yellow-400 transition duration-300">Try Now</button>
          <button className="bg-transparent text-white py-3 px-6 rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition duration-300">Play Video</button>
        </div>
        <div className="flex justify-center space-x-8">
          <img src="https://via.placeholder.com/150" alt="Duolingo" className="h-8"/>
          <img src="https://via.placeholder.com/150" alt="Khan Academy" className="h-8"/>
          <img src="https://via.placeholder.com/150" alt="Udemy" className="h-8"/>
          <img src="https://via.placeholder.com/150" alt="Google" className="h-8"/>
          <img src="https://via.placeholder.com/150" alt="Facebook" className="h-8"/>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-8">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <img src="https://via.placeholder.com/50" alt="Design Icon" className="h-16"/>
            </div>
            <h3 className="text-lg font-semibold">Design</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <img src="https://via.placeholder.com/50" alt="Development Icon" className="h-16"/>
            </div>
            <h3 className="text-lg font-semibold">Development</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <img src="https://via.placeholder.com/50" alt="Marketing Icon" className="h-16"/>
            </div>
            <h3 className="text-lg font-semibold">Marketing</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-4">
              <img src="https://via.placeholder.com/50" alt="IT Icon" className="h-16"/>
            </div>
            <h3 className="text-lg font-semibold">IT & Software</h3>
          </div>
        </div>
      </section>

      {/* Why Choose E-Learning Section */}
      <section className="bg-white py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-blue-600">Why Choose E-Learning</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg shadow-lg">
            <div className="text-4xl text-blue-600 mb-4">∞</div>
            <h3 className="font-semibold">Lifetime Access</h3>
            <p>Learn at your own pace and access the course whenever you need it.</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg shadow-lg">
            <div className="text-4xl text-blue-600 mb-4">📚</div>
            <h3 className="font-semibold">Course Accessibility</h3>
            <p>Access courses from any device and learn anywhere.</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg shadow-lg">
            <div className="text-4xl text-blue-600 mb-4">🧑‍🏫</div>
            <h3 className="font-semibold">Expert Instructors</h3>
            <p>Learn from industry professionals and gain real-world knowledge.</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg shadow-lg">
            <div className="text-4xl text-blue-600 mb-4">🎓</div>
            <h3 className="font-semibold">Certificate of Completion</h3>
            <p>Receive a certificate to boost your career prospects.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-8">What Our Students Are Saying</h2>
        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
            <p className="text-lg">"This platform helped me learn everything I needed to land my dream job!"</p>
            <div className="mt-4">
              <p className="font-semibold">Kathy Lawson</p>
              <p className="text-sm text-gray-600">Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="text-center">
          <p>© 2025 E-Learning Platform. All rights reserved.</p>
          <p className="mt-4">Contact Us: info@elearning.com</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
