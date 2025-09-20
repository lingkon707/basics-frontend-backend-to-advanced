import React, { useRef } from "react";
import About from "./sections/About";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function App() {
  // Refs to sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (!ref.current) return;

    const targetPosition = ref.current.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200;
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

      <About ref={aboutRef} />
      <Blog ref={blogRef} />
      <Contact ref={contactRef} />
    </>
  );
}
