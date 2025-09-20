import React from "react";

const Contact = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    id="contact"
    className="min-h-screen bg-gray-300 px-8 py-12"
  >
    <h2 className="text-3xl font-semibold mb-6">Contact Section</h2>
    {[...Array(10)].map((_, i) => (
      <p key={i} className="mb-4 text-gray-800 italic">
        Contact info line #{i + 1} - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    ))}
  </section>
));

export default Contact;
