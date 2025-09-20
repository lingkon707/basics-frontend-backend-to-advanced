import React from 'react';

const ZaiInterface = () => {
  const blog = {
    title: "The Rise of Frozen Foods in Urban Life",
    image: "https://www.pranfoods.net/sites/default/files/2023-08/FROZEN%20FOOD_0.jpeg",
    content: `
      In recent years, frozen foods have become a staple in urban households. With the rapid pace of city life,
      more and more people are turning to convenient meal solutions that don't sacrifice nutrition.

      Frozen vegetables, ready-to-cook meals, and frozen snacks offer an incredible balance between time-saving
      and health-conscious living. With advancements in freezing technology, many frozen options now retain
      their nutrients, flavors, and textures better than ever before.

      Whether you're a student, a working professional, or a busy parent, the freezer aisle is no longer
      a place of last resort — it’s a hub of smart choices.
      
      And as food innovation grows, expect frozen options to become even more diverse and tailored to
      individual dietary needs — from vegan to high-protein, keto to gluten-free.
    `,
  };
  

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

      {/* Main Blog Content */}
      <main className="flex-1 overflow-y-auto px-10 py-10">
        <article className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h2>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
            {blog.content}
          </div>
        </article>
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
