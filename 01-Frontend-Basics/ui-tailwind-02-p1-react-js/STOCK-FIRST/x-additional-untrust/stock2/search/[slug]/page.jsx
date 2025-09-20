// /app/search/[slug]/page.jsx
export default function SearchResultPage({ params }) {
  const { slug } = params;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Search Result Page</h1>
        <p className="text-lg text-gray-600">You visited: <strong>{slug}</strong></p>
      </div>
    </div>
  );
}
