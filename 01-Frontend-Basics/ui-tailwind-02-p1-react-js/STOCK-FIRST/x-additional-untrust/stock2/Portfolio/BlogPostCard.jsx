export default function BlogPostCard({ post }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md hover:scale-105 transition transform">
      <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
      <p className="text-gray-300 mb-2">{post.excerpt}</p>
      <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
        Read More
      </a>
    </div>
  );
}
