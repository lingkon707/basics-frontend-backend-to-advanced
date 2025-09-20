import React from 'react';

const ZaiInterface = () => {
  const tools = [
    { name: "Blog Home", emoji: "🏠" },
    { name: "Categories", emoji: "📚" },
    { name: "Popular", emoji: "🔥" },
    { name: "Saved", emoji: "💾" },
    { name: "Write", emoji: "✍️" },
  ];

  const settings = [
    { name: "Theme", emoji: "🎨" },
    { name: "History", emoji: "🕘" },
    { name: "Settings", emoji: "⚙️" },
  ];

  const blogPosts = [
    {
      title: "The Rise of Frozen Foods in Urban Life",
      image: "https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg",
      excerpt: "Frozen foods are transforming how we eat—convenient, nutritious, and ideal for fast-paced lifestyles...",
    },
    {
      title: "10 Healthy Frozen Meals You Didn't Know Existed",
      image: "https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg",
      excerpt: "Discover surprising healthy options hiding in your freezer section. Quick doesn't have to mean unhealthy...",
    },
    {
      title: "From Freezer to Table: Recipes with Frozen Food",
      image: "https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg",
      excerpt: "Turn your frozen pantry into gourmet meals with these simple and delicious recipes.",
    },
  ];

  return (
    <div className="h-screen w-full bg-gray-100 flex font-sans text-gray-800">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-indigo-600 mb-8 tracking-tight">Z.ai Blog</h1>
          <nav className="space-y-3">
            {tools.map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-indigo-50 transition"
              >
                <span className="text-xl">{item.emoji}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
        <p className="text-xs text-gray-400 text-center">© 2025 Z.ai</p>
      </aside>

      {/* Main Blog Scroll Area */}
      <main className="flex-1 overflow-y-auto px-10 py-8 space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Blogs</h2>
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex gap-6"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-48 h-32 object-cover rounded-xl"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </main>

      {/* Right Sidebar */}
      <aside className="w-64 bg-white shadow-md border-l p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Tools</h3>
          <nav className="space-y-3">
            {settings.map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-indigo-50 transition"
              >
                <span className="text-xl">{item.emoji}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
        <p className="text-xs text-gray-400 text-center">Settings & Tools</p>
      </aside>
    </div>
  );
};

export default ZaiInterface;
