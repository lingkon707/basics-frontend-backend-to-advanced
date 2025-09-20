import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Head>
        <title>Modern UI Design</title>
        <meta name="description" content="Modern UI design for a clean web experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">WishDesign</div>
          <nav className="space-x-6 text-lg">
            <a href="#" className="text-gray-900 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-900 hover:text-green-600">Features</a>
            <a href="#" className="text-gray-900 hover:text-green-600">Pricing</a>
            <a href="#" className="text-gray-900 hover:text-green-600">About</a>
          </nav>
          <div>
            <button className="text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full">Get Started</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-50">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          A Modern UI to Elevate Your Business
        </h1>
        <p className="text-xl text-gray-600 mb-6 max-w-xl mx-auto">
          Our platform brings innovation to the digital space with clean and intuitive design, ideal for businesses looking to modernize their interface.
        </p>
        <div className="space-x-6">
          <button className="text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-lg">Start Now</button>
          <button className="text-green-600 border-2 border-green-600 hover:bg-green-100 px-6 py-3 rounded-full text-lg">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <div className="text-3xl text-green-600 mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">We bring fresh perspectives to web design, keeping your brand ahead of the curve with cutting-edge UI elements.</p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <div className="text-3xl text-green-600 mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile-First</h3>
              <p className="text-gray-600">Designed with a mobile-first approach, ensuring your product looks great on every device.</p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <div className="text-3xl text-green-600 mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customizable</h3>
              <p className="text-gray-600">Tailor the design to suit your brand’s unique style and needs with our flexible components.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <p>&copy; 2025 WishDesign. All Rights Reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
