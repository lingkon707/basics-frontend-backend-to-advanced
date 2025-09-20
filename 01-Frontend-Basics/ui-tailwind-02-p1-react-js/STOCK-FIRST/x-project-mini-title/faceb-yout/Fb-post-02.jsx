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
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-xl mx-auto">
        {/* Post Input Card */}
        <div className="bg-white rounded-xl shadow p-5 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Create Post</h2>
          <div className="flex items-start space-x-4">
            <img
              src="https://i.pravatar.cc/40"
              alt="Avatar"
              className="rounded-full w-10 h-10"
            />
            <div className="flex-1">
              <input
                type="text"
                placeholder="Author Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="What's on your mind?"
                value={post}
                onChange={(e) => setPost(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="text-right mt-3">
                <button
                  onClick={handlePost}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow p-5"
            >
              <div className="flex items-center space-x-3 mb-2">
               <img
  src={`https://i.pravatar.cc/40?u=${p.id}`}
  alt="Avatar"
  className="rounded-full w-10 h-10"
/>

                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-800">{p.author}</h3>
                    <span className="text-blue-500 text-xs bg-blue-100 px-2 py-0.5 rounded-full">
                      ✔ Verified
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {p.date.toLocaleDateString()} • {p.date.toLocaleTimeString()}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{p.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
