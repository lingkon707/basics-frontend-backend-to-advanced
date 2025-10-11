// app/page.jsx
'use client';

import { useRouter } from 'next/navigation';

const topics = [
  { id: 'react', title: 'React Fundamentals' },
  { id: 'node', title: 'Node.js Mastery' },
  { id: 'nextjs', title: 'Next.js 15 Deep Dive' },
  { id: 'tailwind', title: 'Tailwind CSS Tricks' },
];

export default function HomePage() {
  const router = useRouter();

  const handleView = (id) => {
    router.push(`/tech/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Verify My Skill / Expertics</h1>

      <div className="max-w-2xl mx-auto space-y-6">
        {topics.map((topic, index) => (
          <div key={topic.id} className="flex items-center justify-between bg-white p-6 rounded shadow">
            <div className="flex items-center space-x-4">
              <span className="text-lg font-bold text-gray-700">{index + 1}.</span>
              <span className="text-lg font-medium text-gray-800">{topic.title}</span>
            </div>
            <button
              onClick={() => handleView(topic.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
