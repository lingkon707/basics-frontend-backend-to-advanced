import Image from 'next/image';

export default function Home() {
  const content = {
    hero: {
      title: "Single place where every Project comes together",
      subtitle: "Fall about only a guild. Silent won’t stop the business growth, but better ideas will.",
      cta1: "Get Started",
      cta2: "Contact Us",
    },
    brands: [
      { name: "NXZN", logo: "/images/nxzn-logo.png" },
      { name: "Callfor", logo: "/images/callfor-logo.png" },
      { name: "Artma", logo: "/images/artma-logo.png" },
      { name: "ATLAS", logo: "/images/atlas-logo.png" },
      { name: "Symbi", logo: "/images/symbi-logo.png" },
    ],
    features: [
      {
        title: "Collaboration",
        description: "Work efficiently with teams on projects in a centralized platform.",
        icon: "/images/feature1-icon.svg",
      },
      {
        title: "Secure Data",
        description: "Your project data is fully encrypted with high-level security protocols.",
        icon: "/images/feature2-icon.svg",
      },
      {
        title: "Cloud Sync",
        description: "All your files are synced in the cloud for real-time collaboration.",
        icon: "/images/feature3-icon.svg",
      },
    ],
    pricing: [
      {
        plan: "Basic Plan",
        price: "$199/month",
        features: ["1 project", "1 user", "Basic support"],
      },
      {
        plan: "Pro Plan",
        price: "$499/month",
        features: ["5 projects", "5 users", "Priority support"],
      },
      {
        plan: "Enterprise Plan",
        price: "$999/month",
        features: ["Unlimited projects", "Unlimited users", "Dedicated support"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-6">{content.hero.title}</h1>
        <p className="text-xl mb-8">{content.hero.subtitle}</p>
        <div className="space-x-6">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">{content.hero.cta1}</button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-blue-600">{content.hero.cta2}</button>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="bg-white text-center py-12">
        <div className="flex justify-center space-x-8">
          {content.brands.map((brand, index) => (
            <div key={index} className="w-24">
              <Image src={brand.logo} alt={brand.name} width={100} height={50} />
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Makro</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-xl">
              <div className="mb-4">
                <Image src={feature.icon} alt={feature.title} width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-12">Affordable Pricing Plans</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.pricing.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">{plan.plan}</h3>
              <p className="text-xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-lg text-gray-700">{feature}</li>
                ))}
              </ul>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-center py-12 text-white">
        <p className="text-lg">&copy; 2023 Makro. All rights reserved.</p>
        <div className="mt-6 space-x-8">
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
