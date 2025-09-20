import React from "react";

const newsArticles = [
  {
    title: "Global Markets Rally Amid Economic Recovery",
    summary:
      "Stock markets around the world surged today as positive economic data signaled a strong recovery post-pandemic.",
    image:
     "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80",
    date: "Aug 3, 2025",
  },
  {
    title: "Breakthrough in Renewable Energy Technology",
    summary:
      "Scientists have developed a new solar panel design that significantly increases energy efficiency and reduces production costs.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    date: "Aug 2, 2025",
  },
  {
    title: "City Council Approves New Public Transit Plan",
    summary:
      "The city council has greenlit a multi-billion dollar transit initiative aimed at reducing traffic and pollution in urban areas.",
    image:
      "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80",
    date: "Aug 1, 2025",
  },
];

const NewsWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-indigo-800">
            DailyPulse News
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Bringing you the latest headlines and in-depth stories from around the world.
          </p>
        </header>

        {/* News Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {newsArticles.map(({ title, summary, image, date }, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-indigo-700 hover:text-indigo-900 cursor-pointer">
                  {title}
                </h2>
                <p className="text-gray-700 mb-4">{summary}</p>
                <time className="text-sm text-gray-500">{date}</time>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default NewsWebsite;
