import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center py-12 px-6 sm:px-8">
      <Head>
        <title>OneCare - Book Your Appointment</title>
        <meta name="description" content="OneCare Health Appointments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between space-y-12 md:space-y-0 w-full">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
            Book an Appointment Now
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            OneCare is a healthcare platform designed for easy access to top doctors, specialized care, and accurate diagnostics.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Top-searched specialties and easy-to-book appointments for your health.
          </p>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg transform transition duration-300 hover:bg-teal-700 hover:scale-105">
            See Availability
          </button>
        </div>

        <div className="md:w-1/2 relative">
          <img
            src="/doctor-image.jpg" // Replace with the actual doctor image path
            alt="Doctor"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute top-4 right-4 bg-teal-100 p-4 rounded-full text-lg font-bold text-teal-600">
            +
          </div>
          <div className="absolute bottom-4 right-4 text-white bg-teal-500 p-4 rounded-lg shadow-lg">
            <div className="text-lg">December, 2021</div>
            {/* You can replace this with a dynamic calendar component */}
            <div className="flex justify-center mt-2">
              <div className="text-white font-bold">📅</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="w-full bg-gray-50 py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-teal-600">14,000</div>
            <p className="text-lg text-gray-600">Users</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-teal-600">550</div>
            <p className="text-lg text-gray-600">Best Doctors</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-teal-600">96%</div>
            <p className="text-lg text-gray-600">Reviews</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-teal-600 text-white py-4 w-full text-center">
        <p>&copy; 2025 OneCare. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
