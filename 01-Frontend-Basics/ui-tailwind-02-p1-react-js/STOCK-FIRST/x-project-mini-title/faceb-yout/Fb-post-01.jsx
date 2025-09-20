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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Facebook Post</h1>

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <textarea
          placeholder="Write your post..."
          value={post}
          onChange={(e) => setPost(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        ></textarea>
        <button
          onClick={handlePost}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post
        </button>
      </div>

      {/* Posts list */}
      <div className="max-w-xl mx-auto mt-6 space-y-4">
        {posts.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded shadow">
            <div className="flex items-center space-x-2">
              <h2 className="font-semibold text-lg">{p.author}</h2>
              <span className="text-blue-500 text-sm bg-blue-100 px-2 py-0.5 rounded-full">
                ✔ Verified
              </span>
            </div>
            <p className="mt-2 text-gray-800">{p.content}</p>
            <div className="mt-3 text-sm text-gray-500">
              {p.date.toLocaleDateString()} at {p.date.toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
