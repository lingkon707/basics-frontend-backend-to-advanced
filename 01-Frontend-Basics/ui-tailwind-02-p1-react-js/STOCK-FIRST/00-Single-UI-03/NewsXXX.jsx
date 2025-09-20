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
     <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-20 text-center">
          <h1 className="text-6xl font-extrabold mb-4 tracking-tight text-indigo-900 drop-shadow-sm">
            DailyPulse News
          </h1>
          <p className="text-xl text-indigo-700 max-w-2xl mx-auto">
            Bringing you the latest headlines and in-depth stories from around the world.
          </p>
        </header>

        {/* News Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {newsArticles.map(({ title, summary, image, date }, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden h-32 rounded-t-3xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold mb-3 text-indigo-900 hover:text-indigo-700 transition-colors">
                  {title}
                </h2>
                <p className="text-gray-700 flex-grow text-sm">{summary}</p>

                {/* Flex container for date and button */}
                <div className="mt-6 flex items-center justify-between">
                  <time className="text-xs text-indigo-400 font-medium">
                    {date}
                  </time>
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-full shadow-md transition"
                    onClick={() => alert(`Read more about "${title}"`)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default NewsWebsite;
