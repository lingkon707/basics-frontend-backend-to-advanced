const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-7xl mx-auto my-20 px-6">
      <div className="md:w-1/2">
        <img
          src="https://cdn2.hubspot.net/hubfs/1583367/worker-executive-suites.jpg"
          alt="About Office"
          className="rounded-lg shadow-lg object-cover w-full h-[400px]"
        />
      </div>
      <div className="md:w-1/2 md:pl-16 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          About Our Business Office
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We provide state-of-the-art office spaces designed to enhance your
          team's productivity and creativity. Our solutions are tailored to
          meet the evolving needs of modern businesses.
        </p>
        <p className="text-lg text-gray-700">
          With flexible lease terms, premium amenities, and excellent
          connectivity, your business will thrive in our professional
          environment.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
