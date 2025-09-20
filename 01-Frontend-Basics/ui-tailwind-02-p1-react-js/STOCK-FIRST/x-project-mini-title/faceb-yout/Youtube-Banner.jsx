import React, { useState } from "react";

export default function YouTubePostApp() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (!author.trim() || !title.trim() || !videoUrl.trim()) return;

    const newPost = {
      id: Date.now(),
      author,
      title,
      videoUrl,
      date: new Date(),
      views: Math.floor(Math.random() * 1000000), // Random views for demo
      duration: "10:23", // Static duration, you can parse from video metadata
    };

    setPosts([newPost, ...posts]);
    setAuthor("");
    setTitle("");
    setVideoUrl("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Post Input */}
        <div className="bg-white rounded-lg shadow p-5 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add YouTube Post</h2>
          <input
            type="text"
            placeholder="Author / Channel Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="text"
            placeholder="Video Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="text"
            placeholder="Video URL (YouTube link)"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            onClick={handlePost}
            className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
          >
            Post
          </button>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md flex space-x-4 p-4 hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail */}
              <div className="relative flex-shrink-0 w-48 h-28 rounded-lg overflow-hidden bg-gray-200">
                {/* Extract video ID from URL for thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${extractYouTubeID(
                    post.videoUrl
                  )}/mqdefault.jpg`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 rounded">
                  {post.duration}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between">
                <h3 className="text-lg font-semibold line-clamp-2">{post.title}</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <img
                    src={`https://i.pravatar.cc/40?u=${post.id}`}
                    alt={post.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-medium text-gray-800">{post.author}</span>
                  <span className="text-blue-600 font-semibold text-xs px-1 rounded bg-blue-100">
                    ✔ Verified
                  </span>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  {post.views.toLocaleString()} views •{" "}
                  {post.date.toLocaleDateString()}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper: Extract YouTube Video ID from URL
function extractYouTubeID(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}
