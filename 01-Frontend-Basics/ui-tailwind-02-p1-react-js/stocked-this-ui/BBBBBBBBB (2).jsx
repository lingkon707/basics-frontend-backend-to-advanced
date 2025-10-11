'use client';
import { useRouter } from 'next/navigation';

const topics = [
  { id: 'ethics', title: 'Ethics in AI' },
  { id: 'policy', title: 'Technology Policy' },
  { id: 'machine-learning', title: 'Machine Learning Research' },
  { id: 'data-privacy', title: 'Data Privacy & Regulation' },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8f5f0] px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-serif text-[#8a0303] font-bold mb-4">Verify My Skill / Expertics</h1>
        <p className="text-gray-700 text-lg font-light">Showcase your expertise with academic-level credibility.</p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 space-y-6">
        {topics.map((topic, index) => (
          <div
            key={topic.id}
            className="flex items-center justify-between bg-white border border-gray-200 p-6 rounded shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-serif text-[#8a0303] font-semibold">{index + 1}</span>
              <span className="text-xl font-serif text-gray-900">{topic.title}</span>
            </div>
            <button
              onClick={() => router.push(`/tech/${topic.id}`)}
              className="bg-[#8a0303] text-white px-4 py-2 rounded hover:bg-[#600202] transition font-medium"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
