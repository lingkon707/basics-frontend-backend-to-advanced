// pages/index.jsx
import Image from 'next/image';

const content = {
  header: {
    logo: "Makro.",
    navItems: ["Home", "Portfolio", "Pages", "Shop", "Blog"],
    cta: "Contact Us",
  },
  hero: {
    title: "Creating the best digital solutions for your business",
    description:
      "Why I say old chap that is, spiffing off his nut cor blimey guvnor geeza bloke knees up bobby, sloshed are William cock Richard. Bloke fanny around chesed of bum bag",
    btnPrimary: "Let’s Get Started Together",
    btnSecondary: "Watch Video",
    features: [
      {
        icon: "⚡",
        title: "Quick Service",
        desc: "We’re here to overcome problem solution",
      },
      {
        icon: "🕒",
        title: "24/7 Support",
        desc: "We’re always connected with your goal",
      },
    ],
    stats: [
      {
        text: "96% success projects done",
        left: "top-10 left-6",
      },
      {
        text: "Providing expert services around the world",
        left: "top-48 left-16",
      },
    ],
    image: "/hero-image.jpg", // You can replace with your own image path or upload
  },
  about: {
    title: "Empowering startups to grow their business",
    description:
      "Why I say old chap that is, spiffing off his nut cor blimey guvnor geeza bloke knees up bobby, sloshed are William cock Richard. Bloke fanny around chesed of bum bag",
    cta: "Learn More",
    image: "/about-image.jpg", // Replace with your own image path
    features: [
      "Highly Experience and dedicated team",
      "We always ready to help you",
      "Support for all digital platforms",
      "User-friendly interface and experience",
    ],
  },
};

export default function Home() {
  return (
    <div className="bg-[#c4d1cb] min-h-screen text-[#1b1e1e] font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center max-w-[1100px] mx-auto px-6 py-5">
        <div className="text-white font-bold text-2xl">{content.header.logo}</div>
        <ul className="hidden md:flex space-x-8 text-white text-sm font-semibold">
          {content.header.navItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-[#5c9f80]">
              {item}
            </li>
          ))}
        </ul>
        <button className="hidden md:block bg-[#5c9f80] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#4a8161]">
          {content.header.cta}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center py-20 gap-10 relative">
        <div className="flex-1">
          <h1 className="text-[#1b1e1e] font-bold text-3xl md:text-4xl max-w-lg leading-tight mb-6">
            {content.hero.title}
          </h1>
          <p className="text-[#3a3f3d] max-w-md mb-8">{content.hero.description}</p>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="bg-[#5c9f80] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#4a8161] whitespace-nowrap">
              {content.hero.btnPrimary}
            </button>
            <button className="flex items-center gap-2 border border-[#5c9f80] text-[#5c9f80] px-6 py-2 rounded-md font-semibold hover:bg-[#5c9f80] hover:text-white whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#5c9f80"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.75v7.5l6.518-3.75z" />
              </svg>
              {content.hero.btnSecondary}
            </button>
          </div>
          <div className="flex gap-8 mt-10 max-w-xs">
            {content.hero.features.map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="text-red-500 text-xl mt-1">{icon}</div>
                <div>
                  <h4 className="font-semibold text-[#1b1e1e]">{title}</h4>
                  <p className="text-[#3a3f3d] text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image container with decorative shapes */}
        <div className="relative flex-1 max-w-[380px] md:max-w-[480px] aspect-[5/6]">
          <div className="absolute -left-8 -top-10 w-full h-full rounded-full bg-[#5c9f80] opacity-30 -z-10"></div>
          <div className="absolute -left-6 -top-8 w-full h-full rounded-full bg-[#d54c4c] opacity-40 -z-20"></div>
          <div className="overflow-hidden rounded-full relative w-full h-full border-4 border-white shadow-lg">
            <Image
              src="/hero-image.jpg"
              alt="Person working"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          {/* Stats ribbons */}
          <span
            className={`absolute bg-white px-3 py-1 rounded-md text-xs font-semibold shadow-md text-[#3a3f3d] ${content.hero.stats[0].left}`}
            style={{ top: '2.5rem', left: '1.5rem' }}
          >
            ⚡ {content.hero.stats[0].text}
          </span>
          <span
            className={`absolute bg-white px-3 py-1 rounded-md text-xs font-semibold shadow-md text-[#3a3f3d] ${content.hero.stats[1].left}`}
            style={{ top: '12rem', left: '4rem' }}
          >
            🕒 {content.hero.stats[1].text}
          </span>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10 py-20">
        {/* Image */}
        <div className="flex-1 max-w-[380px] md:max-w-[480px] aspect-[4/5] rounded-3xl overflow-hidden relative border-4 border-white shadow-lg">
          <Image
            src="/about-image.jpg"
            alt="Team working"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Text content */}
        <div className="flex-1 max-w-lg">
          <h2 className="text-[#1b1e1e] font-bold text-3xl mb-6">{content.about.title}</h2>
          <p className="text-[#3a3f3d] mb-8">{content.about.description}</p>
          <button className="bg-[#5c9f80] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#4a8161] mb-10">
            {content.about.cta}
          </button>
          <ul className="list-disc list-inside space-y-3 text-[#3a3f3d] text-sm font-medium">
            {content.about.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
