// App.jsx
import React from "react";

const content = {
  brand: "Saasland",
  nav: ["Home", "Pages", "Portfolio", "Blog", "Shop", "Elements"],
  hero: {
    title: "Boost your marketing scales into top market",
    description:
      "Pellentesque lectus cum neque cursus sapien massa laoreet varius. Ultricies faucibus donec tellus cras ornare. Aliquam mattis.",
    cta: "Let’s Get Started",
  },
  features: [
    {
      icon: "📊",
      title: "Analyze your data",
      description:
        "Pellentesque lectus cum neque cursus sapien massa laoreet varius. Ultricies faucibus donec",
    },
    {
      icon: "🔒",
      title: "Collaborate securely",
      description:
        "Pellentesque lectus cum neque cursus sapien massa laoreet varius. Ultricies faucibus donec",
    },
    {
      icon: "📈",
      title: "Embedded analytics",
      description:
        "Pellentesque lectus cum neque cursus sapien massa laoreet varius. Ultricies faucibus donec",
    },
    {
      icon: "✨",
      title: "Easy and intuitive",
      description:
        "Pellentesque lectus cum neque cursus sapien massa laoreet varius. Ultricies faucibus donec",
    },
  ],
  testimonials: [
    {
      quote:
        "We’ve had positive experience working with the SaaSland platform. The support team is fast and effective.",
      name: "Chris Doe",
      role: "CEO, ExampleCorp",
      rating: 5,
    },
    {
      quote:
        "Professional, reliable, and the product itself has a very intuitive UI which our team loves to use.",
      name: "Jane Smith",
      role: "Marketing Head, Brandify",
      rating: 5,
    },
  ],
  stats: [
    { label: "Users", value: "3200+" },
    { label: "Projects", value: "480+" },
    { label: "Partners", value: "120+" },
    { label: "Awards", value: "30+" },
  ],
  ctaSection: {
    text: "Ready to boost your marketing with us?",
    button: "Get Started Now",
  },
};

function StarRating({ count }) {
  return (
    <div className="flex space-x-1 text-green-500">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-5 h-5"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.285-3.974a1 1 0 00-.363-1.118L2.037 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
          </svg>
        ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans text-[#0B1E54]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-16 py-6 bg-[#0B1E54]">
        <div className="text-white font-bold text-xl">{content.brand}</div>
        <ul className="hidden md:flex space-x-8 text-sm text-white font-medium">
          {content.nav.map((item) => (
            <li key={item} className="hover:text-[#FF6849] cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
        <button className="hidden md:block bg-[#FF6849] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#E5593B] transition">
          Let&apos;s Get Started
        </button>
      </nav>

      {/* 1. Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-16 py-32 bg-[#0B1E54] text-white">
        <h1 className="text-5xl font-extrabold max-w-3xl mb-6 leading-tight">
          {content.hero.title}
        </h1>
        <p className="max-w-xl opacity-80 mb-12">{content.hero.description}</p>
        <button className="bg-[#FF6849] px-10 py-3 rounded-lg font-semibold hover:bg-[#E5593B] transition">
          {content.hero.cta}
        </button>
      </section>

      {/* 2. Features Section */}
      <section className="max-w-7xl mx-auto px-16 py-24">
        <h2 className="text-3xl font-extrabold mb-16 max-w-lg">
          Highly effective unified platform for marketing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {content.features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col space-y-4 items-start text-[#0B1E54]"
            >
              <div className="text-5xl">{icon}</div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-[#394872]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Testimonials Section */}
      <section className="bg-white rounded-lg shadow-lg max-w-7xl mx-auto px-16 py-20 mb-24">
        <h2 className="text-3xl font-extrabold text-[#0B1E54] mb-14 max-w-lg">
          Most of satisfied clients leave their feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {content.testimonials.map(({ quote, name, role, rating }) => (
            <div
              key={name}
              className="bg-[#F9FAFB] rounded-lg p-8 shadow-sm flex flex-col justify-between"
            >
              <p className="text-[#394872] italic mb-6">“{quote}”</p>
              <div>
                <StarRating count={rating} />
                <p className="font-semibold text-[#0B1E54] mt-3">{name}</p>
                <p className="text-sm text-[#94A3B8]">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Statistics Section */}
      <section className="bg-[#0B1E54] text-white py-20">
        <div className="max-w-7xl mx-auto px-16 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {content.stats.map(({ label, value }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold">{value}</p>
              <p className="opacity-80 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Call to Action Section */}
      <section className="flex flex-col items-center bg-white py-24 px-16 max-w-7xl mx-auto rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-[#0B1E54] mb-8 text-center max-w-2xl">
          {content.ctaSection.text}
        </h2>
        <button className="bg-[#FF6849] text-white px-12 py-4 rounded-lg font-semibold hover:bg-[#E5593B] transition">
          {content.ctaSection.button}
        </button>
      </section>
    </div>
  );
}
