import Image from 'next/image';

export default function Home() {
  const content = {
    hero: {
      title: "Build your digital future with us.",
      subtitle: "All-in-one platform to manage projects, teams, and workflows more efficiently.",
      cta1: "Start Free Trial",
      cta2: "Request Demo",
    },
    features: [
      {
        title: "Fast & Reliable",
        description: "Experience seamless and quick project management with guaranteed uptime.",
        icon: "/images/feature1-icon.svg",
      },
      {
        title: "Collaboration Tools",
        description: "Work better together with integrated tools to chat, share files, and track progress.",
        icon: "/images/feature2-icon.svg",
      },
      {
        title: "Analytics Dashboard",
        description: "Get real-time insights with data visualizations and in-depth analytics.",
        icon: "/images/feature3-icon.svg",
      },
      {
        title: "Customizable Workflow",
        description: "Tailor workflows to match your team's specific needs with our flexible platform.",
        icon: "/images/feature4-icon.svg",
      },
    ],
    pricing: [
      {
        plan: "Basic Plan",
        price: "$29/month",
        features: [
          "Up to 5 users",
          "Basic project tracking",
          "Email support",
        ],
      },
      {
        plan: "Professional Plan",
        price: "$79/month",
        features: [
          "Up to 25 users",
          "Advanced reporting",
          "Priority support",
        ],
      },
      {
        plan: "Enterprise Plan",
        price: "$199/month",
        features: [
          "Unlimited users",
          "Custom integrations",
          "24/7 support",
        ],
      },
    ],
    testimonials: [
      {
        name: "John Doe",
        company: "TechCorp",
        feedback: "This platform has completely transformed the way we manage projects. It's incredibly efficient!",
      },
      {
        name: "Jane Smith",
        company: "Creative Solutions",
        feedback: "The collaboration tools are fantastic, making communication with my team effortless.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-6">{content.hero.title}</h1>
        <p className="text-xl mb-8">{content.hero.subtitle}</p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700">{content.hero.cta1}</button>
          <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-purple-600">{content.hero.cta2}</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-xl rounded-lg text-center">
              <Image src={feature.icon} alt={feature.title} width={50} height={50} className="mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {content.pricing.map((plan, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-xl text-center">
              <h3 className="text-2xl font-semibold mb-4">{plan.plan}</h3>
              <p className="text-xl mb-4">{plan.price}</p>
              <ul className="text-left mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700">Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="max-w-screen-xl mx-auto space-y-8">
          {content.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 shadow-xl rounded-lg">
              <p className="italic text-lg mb-4">"{testimonial.feedback}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-gray-500">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 bg-gray-900 text-white text-center">
        <p className="text-lg">&copy; 2023 Your Company. All rights reserved.</p>
        <div className="mt-4 space-x-6">
          <a href="#" className="hover:text-purple-600">Privacy Policy</a>
          <a href="#" className="hover:text-purple-600">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
