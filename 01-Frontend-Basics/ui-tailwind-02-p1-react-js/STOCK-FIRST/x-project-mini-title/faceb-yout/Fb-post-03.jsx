import React, { useState } from "react";

export default function App() {
  const [author, setAuthor] = useState("");
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (!author.trim() || !post.trim()) return;

    const newPost = {
      id: Date.now(),
      author,
      content: post,
      date: new Date(),
    };

    setPosts([newPost, ...posts]);
    setAuthor("");
    setPost("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600 select-none">Fakebook</h1>
          <nav>
            <ul className="flex space-x-4 text-gray-700 text-sm font-medium">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">Profile</li>
              <li className="hover:text-blue-600 cursor-pointer">Messages</li>
              <li className="hover:text-blue-600 cursor-pointer">Settings</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Create Post */}
        <section className="bg-white rounded-lg shadow p-4 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Create Post</h2>
          <div className="flex space-x-4">
            <img
              src="https://i.pravatar.cc/40"
              alt="User avatar"
              className="rounded-full w-10 h-10"
            />
            <div className="flex-1">
              <input
                type="text"
                placeholder="Author Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 mb-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <textarea
                rows={3}
                placeholder="What's on your mind?"
                value={post}
                onChange={(e) => setPost(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <div className="flex justify-end mt-3">
                <button
                  onClick={handlePost}
                  className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition text-sm"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="space-y-6">
          {posts.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
            >
              <header className="flex items-center space-x-3 mb-2">
                <img
                  src={`https://i.pravatar.cc/40?u=${p.id}`}
                  alt={`${p.author} avatar`}
                  className="rounded-full w-10 h-10"
                />
                <div>
                  <div className="flex items-center space-x-1">
                    <h3 className="text-sm font-semibold text-gray-900">{p.author}</h3>
                    <span className="inline-flex items-center bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                      ✔ Verified
                    </span>
                  </div>
                  <time
                    dateTime={p.date.toISOString()}
                    className="text-xs text-gray-500"
                  >
                    {p.date.toLocaleDateString()} • {p.date.toLocaleTimeString()}
                  </time>
                </div>
              </header>
              <p className="text-gray-800 text-sm whitespace-pre-line">{p.content}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
