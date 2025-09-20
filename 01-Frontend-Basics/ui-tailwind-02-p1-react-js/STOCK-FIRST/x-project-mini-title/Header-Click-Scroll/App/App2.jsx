import React, { useRef } from "react";
import About from "./sections/About";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function App() {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    blog: useRef(null),
    contact: useRef(null),
  };

  const scrollTo = (ref) => {
    if (!ref.current) return;

    const top = ref.current.offsetTop;
    const start = window.pageYOffset;
    const distance = top - start;
    const duration = 1200;
    let startTime = null;

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animate = (time) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const run = ease(elapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (elapsed < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <>
      <nav className="bg-gray-900 text-white fixed w-full top-0 shadow z-50 py-3">
        <ul className="flex justify-center space-x-8">
          {["home", "about", "blog", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollTo(sections[section])}
                className="hover:text-blue-400 capitalize"
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section
        ref={sections.home}
        id="home"
        className="min-h-screen flex items-center justify-center bg-white pt-20"
      >
        <h1 className="text-4xl font-bold">Home Section</h1>
      </section>

      <About ref={sections.about} />
      <Blog ref={sections.blog} />
      <Contact ref={sections.contact} />
    </>
  );
}
