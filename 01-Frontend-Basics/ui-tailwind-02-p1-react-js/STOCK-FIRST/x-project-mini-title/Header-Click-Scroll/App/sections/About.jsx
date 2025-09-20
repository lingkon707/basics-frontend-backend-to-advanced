import React from "react";

const About = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    id="about"
    className="min-h-screen bg-gray-100 px-8 py-12"
  >
    <h2 className="text-3xl font-semibold mb-6">About Section</h2>
    {[...Array(20)].map((_, i) => (
      <p key={i} className="mb-4 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    ))}
  </section>
));

export default About;
