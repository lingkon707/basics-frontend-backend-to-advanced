"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    caption: "Cutting-edge hardware prototyping",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    caption: "Innovative AI research in progress",
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    caption: "Hands-on IoT workshops & bootcamps",
  },
];

const ITLabHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate slides every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between max-w-7xl mx-auto p-6">
        <div className="text-yellow-400 font-bold text-2xl">IT-Lab</div>
        <div className="space-x-8 hidden md:flex">
          {["About", "Services", "Projects", "Research", "Events", "Resources", "Community", "News", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition"
              >
                {item}
              </a>
            )
          )}
        </div>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition md:hidden">
          Menu
        </button>
      </nav>

      {/* Hero Banner */}
      <section className="relative h-[500px] max-w-7xl mx-auto overflow-hidden rounded-lg">
        <img
          src={slides[currentSlide].img}
          alt="IT Lab banner"
          className="w-full h-full object-cover brightness-75 transition-opacity duration-700"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
            Empowering Innovation Through Technology
          </h1>
          <p className="max-w-3xl text-lg text-gray-200 mb-8 drop-shadow">
            Leading the future with advanced IT solutions, research, and community.
          </p>
          <div className="space-x-6">
            <a
              href="#join"
              className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition"
            >
              Join
            </a>
            <a
              href="#contact"
              className="border border-yellow-400 px-6 py-3 rounded font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Contact
            </a>
            <a
              href="#services"
              className="text-yellow-400 underline font-semibold hover:text-yellow-300 transition"
            >
              Explore
            </a>
          </div>
          <p className="mt-6 italic text-gray-300 drop-shadow-sm">
            {slides[currentSlide].caption}
          </p>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="max-w-7xl mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-yellow-400 w-max pb-2">
          About Us
        </h2>
        <p className="max-w-4xl text-gray-300 mb-6 leading-relaxed">
          IT-Lab was founded to push the boundaries of technology through research, innovation, and education. Our team of experts — developers, researchers, and mentors — collaborates to build state-of-the-art solutions that transform industries.
        </p>
        <p className="max-w-4xl text-gray-300 leading-relaxed">
          Over the years, we have achieved numerous milestones including successful partnerships with leading universities and companies, impactful projects, and hosting hackathons and innovation challenges to nurture the next generation of tech leaders.
        </p>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-gray-800 py-12 px-8 max-w-7xl mx-auto rounded-lg mb-16"
      >
        <h2 className="text-4xl font-bold mb-10 border-b border-yellow-400 w-max pb-2">
          Our Services
        </h2>
        <ul className="grid md:grid-cols-3 gap-8 text-gray-300">
          <li>
            <h3 className="font-semibold text-xl mb-2">Software Development</h3>
            <p>Full-stack development, custom applications, and scalable solutions tailored to your business.</p>
          </li>
          <li>
            <h3 className="font-semibold text-xl mb-2">Hardware Prototyping & IoT</h3>
            <p>Rapid prototyping with the latest tech, IoT device creation, and integration services.</p>
          </li>
          <li>
            <h3 className="font-semibold text-xl mb-2">AI & Research</h3>
            <p>Advanced AI research, machine learning models, and data-driven innovation projects.</p>
          </li>
          <li>
            <h3 className="font-semibold text-xl mb-2">Training & Workshops</h3>
            <p>Hands-on training programs, bootcamps, and workshops to upgrade your team’s skills.</p>
          </li>
          <li>
            <h3 className="font-semibold text-xl mb-2">Custom Development & Consulting</h3>
            <p>Personalized consulting and development services aligned with your strategic goals.</p>
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto p-8 mb-16">
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-yellow-400 w-max pb-2">
          Projects & Portfolio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-powered Chatbot",
              img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
              desc: "Developed an AI chatbot for customer support, improving response time by 50%.",
            },
            {
              title: "Robotics Automation",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
              desc: "Created autonomous robotics solutions for manufacturing lines.",
            },
            {
              title: "IoT Smart Home System",
              img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
              desc: "Built a smart home automation system with seamless IoT integration.",
            },
          ].map(({ title, img, desc }, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-400 transition-shadow duration-500 cursor-pointer"
            >
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-yellow-400">{title}</h3>
                <p className="text-gray-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research & Innovation */}
      <section
        id="research"
        className="bg-gray-800 py-12 px-8 max-w-7xl mx-auto rounded-lg mb-16"
      >
        <h2 className="text-4xl font-bold mb-8 border-b border-yellow-400 w-max pb-2">
          Research & Innovation
        </h2>
        <p className="text-gray-300 max-w-4xl mb-6">
          Our lab leads pioneering research in AI, robotics, and IoT technologies. We publish whitepapers and collaborate closely with universities and industry partners to drive innovation.
        </p>
        <p className="text-gray-300 max-w-4xl">
          Join our hackathons, open innovation challenges, and collaborative projects to contribute to the future of technology.
        </p>
      </section>

      {/* Training & Events */}
      <section id="events" className="max-w-7xl mx-auto p-8 mb-16">
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-yellow-400 w-max pb-2">
          Training & Events
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-300 max-w-4xl">
          <li>
            <strong>AI Bootcamp - </strong> Intensive 4-week program starting Sept 10
          </li>
          <li>
            <strong>IoT Hands-on Workshop - </strong> Monthly sessions for device prototyping
          </li>
          <li>
            <strong>Web Dev Webinar Series - </strong> Bi-weekly live coding and Q&A
          </li>
        </ul>
      </section>

      {/* Resources */}
      <section
        id="resources"
        className="bg-gray-800 py-12 px-8 max-w-7xl mx-auto rounded-lg mb-16"
      >
        <h2 className="text-4xl font-bold mb-8 border-b border-yellow-400 w-max pb-2">
          Resources & Downloads
        </h2>
        <p className="text-gray-300 max-w-4xl mb-6">
          Access our open-source tools, code samples, tutorials, and technical documentation. Browse FAQs and stay updated with our blogs.
        </p>
        <a
          href="#"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded font-semibold transition"
        >
          Explore Resources
        </a>
      </section>

      {/* Community & Forum */}
      <section id="community" className="max-w-7xl mx-auto p-8 mb-16">
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-yellow-400 w-max pb-2">
          Community & Forum
        </h2>
        <p className="text-gray-300 max-w-4xl mb-6">
          Join discussion boards, collaboration spaces, and user groups. Connect on Twitter, LinkedIn, and GitHub to stay in the loop and contribute.
        </p>
        <div className="flex space-x-6 text-yellow-400 text-3xl">
          <a href="#" aria-label="Twitter" className="hover:text-yellow-300 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-yellow-300 transition">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-yellow-300 transition">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      {/* News & Announcements */}
      <section
        id="news"
        className="bg-gray-800 py-12 px-8 max-w-7xl mx-auto rounded-lg mb-16"
      >
        <h2 className="text-4xl font-bold mb-8 border-b border-yellow-400 w-max pb-2">
          News & Announcements
        </h2>
        <ul className="list-disc list-inside text-gray-300 max-w-4xl space-y-4">
          <li>IT-Lab awarded Best Innovation Lab 2025</li>
          <li>Press release: Partnership with Tech University</li>
          <li>New AI research paper published in Journal XYZ</li>
          <li>Subscribe to our newsletter for monthly updates</li>
        </ul>
      </section>

      {/* Contact Us */}
      <section id="contact" className="max-w-7xl mx-auto p-8 mb-24">
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-yellow-400 w-max pb-2">
          Contact Us
        </h2>
        <form className="max-w-3xl mx-auto space-y-6 text-gray-900">
          <label className="block">
            <span className="text-yellow-400 font-semibold mb-1 block">Inquiry Type</span>
            <select className="w-full rounded border border-gray-300 p-3">
              <option>General</option>
              <option>Partnership</option>
              <option>Support</option>
            </select>
          </label>
          <label className="block">
            <span className="text-yellow-400 font-semibold mb-1 block">Your Email</span>
            <input type="email" placeholder="you@example.com" className="w-full rounded border border-gray-300 p-3" />
          </label>
          <label className="block">
            <span className="text-yellow-400 font-semibold mb-1 block">Message</span>
            <textarea rows={5} className="w-full rounded border border-gray-300 p-3" placeholder="Write your message here..."></textarea>
          </label>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-10 max-w-3xl mx-auto text-gray-300 text-center">
          <p>📍 123 Innovation Drive, Tech City, Country</p>
          <p>📞 +123 456 7890 | ✉ contact@it-lab.com</p>
          <p>Follow us on social media for the latest updates.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 py-8 text-center">
        &copy; {new Date().getFullYear()} IT-Lab. All rights reserved.
      </footer>
    </div>
  );
};

export default ITLabHomepage;
