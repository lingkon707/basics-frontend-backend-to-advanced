import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">
      <Head>
        <title>Tech Startup</title>
        <meta name="description" content="Revolutionary tech solutions for the modern business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
          <div className="text-3xl font-bold text-indigo-600">Techify</div>
          <nav className="space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 text-lg">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 text-lg">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 text-lg">Services</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 text-lg">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 sm:px-12">
        <h1 className="text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
          Unlock the Future of Technology with Innovative Solutions
        </h1>
        <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          We provide cutting-edge tech solutions that drive business growth and empower your company to reach new heights.
        </p>
        <div className="mt-8 flex justify-center space-x-8">
          <button className="text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-lg text-lg">
            Get Started
          </button>
          <button className="text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-100 px-8 py-4 rounded-lg text-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl text-indigo-600 mb-6">💻</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Custom Software Development</h3>
              <p className="text-gray-600">
                Tailored solutions designed to fit your business needs and ensure seamless operations.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl text-indigo-600 mb-6">📱</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mobile App Development</h3>
              <p className="text-gray-600">
                User-friendly mobile applications built to enhance engagement and performance.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl text-indigo-600 mb-6">🔒</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cybersecurity Solutions</h3>
              <p className="text-gray-600">
                Protect your business with advanced cybersecurity protocols and proactive monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
              <p className="text-lg text-gray-600 mb-4">
                "Techify helped us streamline our operations and integrate the latest technologies. They are a game changer."
              </p>
              <p className="font-semibold text-gray-800">Jane Doe</p>
              <p className="text-gray-500">CEO, TechCorp</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
              <p className="text-lg text-gray-600 mb-4">
                "Their team was professional, and the results exceeded our expectations. We now have a scalable solution that fits our needs."
              </p>
              <p className="font-semibold text-gray-800">John Smith</p>
              <p className="text-gray-500">CTO, InnovateX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <p>&copy; 2025 Techify. All Rights Reserved.</p>
          <div className="mt-6 space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
