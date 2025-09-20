import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Tech Solutions</title>
        <meta name="description" content="Your pathway to innovative tech solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-24 px-6 sm:px-12 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Simplify Your Business with Cutting-Edge Tech Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We offer innovative solutions that help you stay ahead in a fast-paced digital world. Get started today!
          </p>
          <div className="space-x-6">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition">
              Get Started
            </button>
            <button className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 sm:px-12 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl text-teal-600 mb-6">⚡</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fast Performance</h3>
              <p className="text-gray-600">Experience blazing-fast speeds and seamless operations with our state-of-the-art solutions.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl text-teal-600 mb-6">🔒</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Top-notch Security</h3>
              <p className="text-gray-600">Keep your business safe with our comprehensive security systems designed to protect against threats.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl text-teal-600 mb-6">📱</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mobile Friendly</h3>
              <p className="text-gray-600">Our solutions are optimized for mobile devices, allowing you to manage everything on-the-go.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-4">"Tech Solutions made our processes more efficient, saving us valuable time and resources. Highly recommend!"</p>
              <p className="font-semibold text-gray-800">Anna K.</p>
              <p className="text-gray-500">CEO, StartUp Inc.</p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-4">"The security features were exactly what we needed. We feel safe and confident with their solutions."</p>
              <p className="font-semibold text-gray-800">John P.</p>
              <p className="text-gray-500">CTO, SafeGuard</p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-4">"An excellent solution that works seamlessly across devices. We can manage everything from our phones!"</p>
              <p className="font-semibold text-gray-800">Samantha R.</p>
              <p className="text-gray-500">Operations Manager, TechVision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto text-center px-6 sm:px-8">
          <p>&copy; 2025 Tech Solutions. All Rights Reserved.</p>
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
