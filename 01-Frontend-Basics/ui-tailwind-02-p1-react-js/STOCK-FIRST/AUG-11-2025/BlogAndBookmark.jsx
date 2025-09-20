import React from "react";

const App = () => {
  const articles = [
    {
      image:
        "https://cdn.pixabay.com/photo/2018/08/18/16/23/indian-man-3615047_1280.jpg",
      title: "“This Was A KEPT SECRET By Monks!”—Stop Wasting Your Life…",
      subtitle:
        "Unlock Your Potential: Discovering the Kept Secret of Monks by Sadhguru",
      date: "Apr 10, 2023",
    },
    {
      image:
        "https://img.freepik.com/free-photo/smiling-indian-man-casual-close-with-laptop-backpack-pastel-wall_496169-1583.jpg",
      title: "Leadership: Is your feedback emotionally free?",
      subtitle: "Hi",
      date: "Apr 16, 2023",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-gray-50 min-h-screen font-sans">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">
        More from The Success Insider
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between flex-grow">
              {/* Author */}
              <p className="text-xs text-gray-500 mb-1 font-medium">
                The Success Insider
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                {article.title}
              </h3>

              {/* Subtitle (if any) */}
              {article.subtitle && (
                <p className="text-sm text-gray-700 mb-4">
                  {article.subtitle}
                </p>
              )}

              {/* Footer: Date and Bookmark */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                <span className="text-xs text-gray-500">{article.date}</span>
                <button
                  title="Bookmark"
                  className="text-gray-400 hover:text-gray-700 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
