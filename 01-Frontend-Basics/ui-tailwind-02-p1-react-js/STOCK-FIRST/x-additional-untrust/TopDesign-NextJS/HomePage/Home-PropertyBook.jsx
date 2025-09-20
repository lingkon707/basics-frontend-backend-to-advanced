import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Head>
        <title>Perfect Property</title>
        <meta name="description" content="Find your dream home with ease" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perfect Property
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We can help you find your dream home by guiding you through a few simple steps and matching you with tailor-made property listings.
          </p>

          {/* Search Form */}
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl mx-auto">
            <form className="flex space-x-4">
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 w-full"
                aria-label="Location"
              >
                <option>Choose from the list</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>San Francisco</option>
              </select>
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 w-full"
                aria-label="Property Type"
              >
                <option>Choose from the list</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 w-full"
                aria-label="Price"
              >
                <option>Choose from the list</option>
                <option>$500,000 - $750,000</option>
                <option>$750,000 - $1,000,000</option>
                <option>$1,000,000+</option>
              </select>
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Search
              </button>
            </form>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto text-center px-6 sm:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">How It Works</h2>
          <p className="text-lg text-gray-600">
            Our process is simple and tailored to help you find the perfect property for your needs.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto text-center px-6 sm:px-8">
          <p>&copy; 2025 Perfect Property. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
