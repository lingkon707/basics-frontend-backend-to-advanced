export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md">
      <p className="text-gray-300 italic mb-4">"{testimonial.message}"</p>
      <h4 className="text-white font-semibold">{testimonial.name}</h4>
      <span className="text-pink-500">{testimonial.role}</span>
    </div>
  );
}
