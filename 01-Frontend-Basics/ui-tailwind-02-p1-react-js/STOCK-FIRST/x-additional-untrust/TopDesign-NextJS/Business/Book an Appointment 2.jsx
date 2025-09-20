import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-12 px-6 sm:px-8">
      <Head>
        <title>OneCare - Book Your Appointment</title>
        <meta name="description" content="OneCare Health Appointments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between space-y-12 md:space-y-0">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl sm:text-6xl font-semibold text-gray-900">
            Book an Appointment Now
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600">
            OneCare is a healthcare platform designed for easy access to top doctors, specialized care, and accurate diagnostics.
          </p>
          <p className="text-xl sm:text-2xl text-gray-600">
            Top-searched specialties and easy-to-book appointments for your health.
          </p>
          <button className="bg-teal-600 text-white px-10 py-4 rounded-lg transform transition duration-300 hover:bg-teal-700 hover:scale-105">
            See Availability
          </button>
        </div>

        <div className="md:w-1/2 text-center">
          <div className=" w-64 h-64 bg-teal-100 rounded-full mb-6 flex items-center justify-center text-6xl font-bold text-teal-600">
            +
          </div>
          <div className="bg-teal-100 p-6 rounded-xl text-center text-gray-700">
            <div className="text-xl font-semibold mb-4">December, 2021</div>
            <div className="text-4xl font-bold">📅</div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="w-full bg-gray-50 py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-5xl font-bold text-teal-600">14,000</div>
            <p className="text-2xl text-gray-600">Users</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-5xl font-bold text-teal-600">550</div>
            <p className="text-2xl text-gray-600">Best Doctors</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-5xl font-bold text-teal-600">96%</div>
            <p className="text-2xl text-gray-600">Reviews</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-teal-600 text-white py-8 w-full text-center">
        <p className="text-xl">&copy; 2025 OneCare. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
