'use client';
import { useRouter } from 'next/navigation';

const topics = [
  { id: 'cybersecurity', title: 'Cybersecurity Essentials' },
  { id: 'blockchain', title: 'Blockchain Systems' },
  { id: 'cloud', title: 'Cloud Architecture' },
  { id: 'devops', title: 'DevOps & Automation' },
];

export default function TimelinePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white p-10 font-sans">
      <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">
        Verify My Skill / Expertics
      </h1>

      <div className="relative border-l-4 border-gray-300 max-w-3xl mx-auto">
        {topics.map((topic, index) => (
          <div key={topic.id} className="mb-12 ml-6 group">
            <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-3.5 top-1.5 border-4 border-white group-hover:scale-110 transition" />

            <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-md shadow-md p-6 transition hover:shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900">{topic.title}</h3>
              <p className="text-gray-600 mt-1 mb-4 text-sm">
                Step {index + 1} on your journey to verified expertise.
              </p>
              <button
                onClick={() => router.push(`/tech/${topic.id}`)}
                className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
