import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>OZ Legacy</title>
        <meta name="description" content="Modern Estate Planning Workshops" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white flex flex-col justify-center items-center text-center px-6 sm:px-12">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Plan Today for Peace of Mind Tomorrow
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-80">
            Join our free, no-pressure workshops to help you understand wills, trusts, and estate planning.
          </p>
          <div className="flex space-x-6">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-lg transform transition duration-300 hover:bg-teal-700 hover:scale-105">
              Find Workshops Nearby
            </button>
            <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg transform transition duration-300 hover:bg-teal-100 hover:scale-105">
              Chat with Us
            </button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6 sm:px-12 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-12">
          Free Estate Planning Workshops to Empower You & Your Family
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-xl hover:shadow-2xl transition">
            <div className="text-4xl text-teal-600 mb-4">📜</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wills & Trusts</h3>
            <p className="text-gray-600">Secure your future and protect your loved ones with proper will and trust planning.</p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-xl hover:shadow-2xl transition">
            <div className="text-4xl text-teal-600 mb-4">🛡️</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Family Protection</h3>
            <p className="text-gray-600">Learn how to safeguard your family’s future with effective legal strategies and protections.</p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-xl hover:shadow-2xl transition">
            <div className="text-4xl text-teal-600 mb-4">💼</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Guidance</h3>
            <p className="text-gray-600">Get expert advice from professionals who will guide you through every step of the planning process.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-12">What Our Attendees Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="p-8 bg-white rounded-xl shadow-xl">
              <p className="text-lg text-gray-600 mb-4">"Attending the workshop provided such peace of mind! I now understand the next steps for my family."</p>
              <p className="font-semibold text-gray-800">Jane Smith, Attendee</p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 bg-white rounded-xl shadow-xl">
              <p className="text-lg text-gray-600 mb-4">"The experts explained everything in simple terms. I feel ready to secure my family’s future."</p>
              <p className="font-semibold text-gray-800">John Doe, Attendee</p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 bg-white rounded-xl shadow-xl">
              <p className="text-lg text-gray-600 mb-4">"This workshop is invaluable for anyone looking to get their estate in order. Highly recommend!"</p>
              <p className="font-semibold text-gray-800">Samantha Lee, Attendee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto text-center px-6 sm:px-8">
          <p>&copy; 2025 OZ Legacy. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-teal-400 hover:text-teal-500">Privacy Policy</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#" className="text-teal-400 hover:text-teal-500">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
