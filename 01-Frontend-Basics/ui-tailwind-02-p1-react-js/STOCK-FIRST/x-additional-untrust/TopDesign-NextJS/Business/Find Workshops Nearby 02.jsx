import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Head>
        <title>OZ Legacy</title>
        <meta name="description" content="Estate Planning Workshops for You and Your Family" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="bg-white py-24 px-6 sm:px-12 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Plan Today for Peace of Mind Tomorrow
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            At OZ Legacy, we offer free, no-pressure workshops to help you understand wills, trusts, and estate planning because everyone deserves peace of mind.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition">
              Find Workshops Nearby
            </button>
            <button className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-100 transition">
              Chat with Us
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-2xl font-semibold text-gray-900 mb-4">What our attendees say</div>
          <div className="flex justify-center items-center space-x-4">
            <div className="bg-white p-8 rounded-xl shadow-lg w-80">
              <p className="text-lg text-gray-600 mb-4">"Attending the workshop provided such peace of mind! I now understand the next steps for my family."</p>
              <p className="font-semibold text-gray-800">Jane Smith, Attendee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12">Free Estate Planning Workshops to Empower You & Your Family</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="p-8 bg-gray-100 rounded-xl shadow-lg">
              <div className="text-4xl text-teal-600 mb-4">📜</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wills & Trusts</h3>
              <p className="text-gray-600">Learn how to secure your family's future with a well-crafted will and trust.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 bg-gray-100 rounded-xl shadow-lg">
              <div className="text-4xl text-teal-600 mb-4">🛡️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Family Protection</h3>
              <p className="text-gray-600">Discover strategies to protect your loved ones and assets in any situation.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 bg-gray-100 rounded-xl shadow-lg">
              <div className="text-4xl text-teal-600 mb-4">💼</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600">Get professional advice and expert recommendations tailored to your family's needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12">Event Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Gallery Image 1 */}
            <div className="bg-gray-200 p-4 rounded-xl">
              <img src="/images/event1.jpg" alt="Event 1" className="w-full h-56 object-cover rounded-lg" />
            </div>
            {/* Gallery Image 2 */}
            <div className="bg-gray-200 p-4 rounded-xl">
              <img src="/images/event2.jpg" alt="Event 2" className="w-full h-56 object-cover rounded-lg" />
            </div>
            {/* Gallery Image 3 */}
            <div className="bg-gray-200 p-4 rounded-xl">
              <img src="/images/event3.jpg" alt="Event 3" className="w-full h-56 object-cover rounded-lg" />
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
