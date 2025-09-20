import React, { useRef } from "react";

export default function App() {
  // Refs to sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  // Custom slow scroll function
  const scrollToRef = (ref) => {
    if (!ref.current) return;

    const targetPosition = ref.current.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200; // duration in ms (longer = slower)
    let startTime = null;

    const easeInOutQuad = (time, from, distance, duration) => {
      time /= duration / 2;
      if (time < 1) return (distance / 2) * time * time + from;
      time--;
      return (-distance / 2) * (time * (time - 2) - 1) + from;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-4 py-3 fixed w-full top-0 shadow z-50">
        <ul className="flex space-x-6 justify-center">
          <li>
            <button
              onClick={() => scrollToRef(homeRef)}
              className="hover:text-blue-400"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToRef(aboutRef)}
              className="hover:text-blue-400"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToRef(blogRef)}
              className="hover:text-blue-400"
            >
              Blog
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToRef(contactRef)}
              className="hover:text-blue-400"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <section
        ref={homeRef}
        id="home"
        className="min-h-screen flex items-center justify-center bg-white pt-20"
      >
        <h1 className="text-4xl font-bold">Home Section</h1>
      </section>

      <section
        ref={aboutRef}
        id="about"
        className="min-h-screen bg-gray-100 px-8 py-12"
      >
        <h2 className="text-3xl font-semibold mb-6">About Section</h2>
        {[...Array(20)].map((_, i) => (
          <p key={i} className="mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </section>

      <section
        ref={blogRef}
        id="blog"
        className="min-h-screen bg-gray-200 px-8 py-12"
      >
        <h2 className="text-3xl font-semibold mb-6">Blog Section</h2>
        {[...Array(15)].map((_, i) => (
          <article
            key={i}
            className="mb-6 p-4 bg-white rounded shadow"
          >
            <h3 className="text-xl font-bold mb-2">Blog Post #{i + 1}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
        ))}
      </section>

      <section
        ref={contactRef}
        id="contact"
        className="min-h-screen bg-gray-300 px-8 py-12"
      >
        <h2 className="text-3xl font-semibold mb-6">Contact Section</h2>
        {[...Array(10)].map((_, i) => (
          <p key={i} className="mb-4 text-gray-800 italic">
            Contact info line #{i + 1} - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        ))}
      </section>
    </>
  );
}
