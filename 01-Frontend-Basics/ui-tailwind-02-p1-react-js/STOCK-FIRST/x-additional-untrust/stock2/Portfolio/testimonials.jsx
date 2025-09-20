'use client';

import testimonials from './testimonials.json';
import Header from './Header';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  return (
    <>
      <Header />
      <section className="pt-20 min-h-screen bg-gradient-to-tr from-rgbdark via-rgbblue to-rgbmid px-6 lg:px-20 text-white max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </section>
    </>
  );
}
