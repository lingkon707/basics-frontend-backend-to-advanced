const Services = () => {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage:
          "url('https://watermark.lovepik.com/photo/20211204/large/lovepik-president-office-boss-portrait-picture_501527654.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-60 absolute inset-0"></div>
      <div className="relative max-w-5xl mx-auto px-6 text-white text-center">
        <h2 className="text-5xl font-extrabold mb-8 drop-shadow-lg">
          Premium Office Solutions
        </h2>
        <p className="text-xl mb-12 drop-shadow-md">
          From private offices to coworking spaces, we offer tailored services
          for every business size.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg font-semibold shadow-lg">
          Explore Services
        </button>
      </div>
    </section>
  );
};

export default Services;
