// App.jsx
import React from "react";

const content = {
  brand: "Saasland",
  nav: ["Home", "Pages", "Portfolio", "Blog", "Shop", "Elements"],
  hero: {
    title: "Boost your marketing scales into top market",
    description:
      "Pellentesque lectus cum neque cursus sapien massa laoreet varius. Ultricies faucibus donec tellus cras ornare. Aliquam mattis.",
    avatars: [
      "/avatar1.jpg",
      "/avatar2.jpg",
      "/avatar3.jpg",
      "/avatar4.jpg",
      "/avatar5.jpg",
    ],
    avatarText: "Join other 3200+ marketers now",
    form: {
      title: "Register Now!",
      fields: ["First name", "Last name", "Email address"],
      button: "Let’s Get Started",
      disclaimer:
        "We’ll never share your details with third parties like we won’t spam you",
    },
  },
  features: {
    title: "Highly effective unified platform for marketing",
    items: [
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
  },
  testimonials: {
    title: "Most of satisfied clients leave their feedback",
    clients: [
      {
        quote:
          "“We’ve had positive experience working with the SaaSland platform. The support team is fast and effective.”",
        name: "Chris Doe",
        role: "CEO, ExampleCorp",
        rating: 5,
      },
      {
        quote:
          "“Professional, reliable, and the product itself has a very intuitive UI which our team loves to use.”",
        name: "Jane Smith",
        role: "Marketing Head, Brandify",
        rating: 5,
      },
    ],
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

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center px-16 pt-20 pb-32 bg-[#0B1E54] overflow-visible">
        {/* Left content */}
        <div className="flex-1 text-white pr-12 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            {content.hero.title}
          </h1>
          <p className="text-sm md:text-base mb-8 opacity-80">
            {content.hero.description}
          </p>

          {/* Avatars */}
          <div className="flex items-center space-x-3 mb-1">
            {content.hero.avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`User ${i + 1}`}
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <div className="text-xs opacity-70">{content.hero.avatarText}</div>
        </div>

        {/* Right form */}
        <div className="flex-1 bg-white rounded-lg p-8 shadow-lg max-w-sm w-full">
          <h2 className="font-bold text-[#0B1E54] text-lg mb-6">
            {content.hero.form.title}
          </h2>
          <form className="space-y-4">
            {content.hero.form.fields.map((field) => (
              <input
                key={field}
                type="text"
                placeholder={field}
                className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 text-[#0B1E54] placeholder-[#A3AED0] focus:outline-none focus:ring-2 focus:ring-[#FF6849]"
              />
            ))}
            <button
              type="submit"
              className="w-full bg-[#FF6849] text-white py-3 rounded-md font-semibold hover:bg-[#E5593B] transition"
            >
              {content.hero.form.button}
            </button>
          </form>
          <p className="text-xs text-center mt-4 text-[#A3AED0]">
            {content.hero.form.disclaimer}
          </p>
        </div>

        {/* Background circles */}
        <div className="absolute -bottom-20 -left-10 w-48 h-48 bg-[#7987FF] rounded-full opacity-40 pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-24 w-36 h-36 bg-[#FFC9A6] rounded-full opacity-60 pointer-events-none"></div>
      </section>

      {/* Features Section */}
      <section className="px-16 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#0B1E54] mb-14 max-w-lg">
          {content.features.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {content.features.items.map(({ icon, title, description }) => (
            <div key={title} className="flex flex-col space-y-4 items-start">
              <div className="text-[#0B1E54] text-4xl">{icon}</div>
              <h3 className="font-semibold text-lg text-[#0B1E54]">{title}</h3>
              <p className="text-[#394872] text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="bg-white py-20 px-16 max-w-7xl mx-auto rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1E54] mb-14 max-w-lg">
          {content.testimonials.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {content.testimonials.clients.map(({ quote, name, role, rating }) => (
            <div
              key={name}
              className="bg-[#F9FAFB] rounded-lg p-8 shadow-sm flex flex-col justify-between"
            >
              <p className="text-[#394872] italic mb-6">{quote}</p>
              <div>
                <StarRating count={rating} />
                <p className="font-semibold text-[#0B1E54] mt-3">{name}</p>
                <p className="text-sm text-[#94A3B8]">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
