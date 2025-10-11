'use client';
import { useRouter } from 'next/navigation';

const topics = [
  { id: 'cybersecurity', title: 'Cybersecurity Essentials' },
  { id: 'cloud', title: 'Cloud Architecture' },
  { id: 'blockchain', title: 'Blockchain Systems' },
  { id: 'devops', title: 'DevOps & Automation' },
];

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Verify My Skill / Expertics
        </h1>

        <div className="overflow-x-auto rounded shadow border border-gray-200 bg-white">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-200 text-gray-800 text-base">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">#</th>
                <th scope="col" className="px-6 py-4 font-semibold">Topic</th>
                <th scope="col" className="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic, index) => (
                <tr key={topic.id} className="border-t hover:bg-gray-50 transition">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium">{topic.title}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => router.push(`/tech/${topic.id}`)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
