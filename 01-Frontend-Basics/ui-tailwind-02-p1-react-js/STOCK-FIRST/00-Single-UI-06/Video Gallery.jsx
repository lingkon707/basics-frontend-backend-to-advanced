import React, { useState } from 'react';
import { HeartIcon, PlayIcon } from '@heroicons/react/outline';

const videos = [
  { id: 1, title: 'First video', desc: 'Video description', gradient: 'from-blue-500 to-blue-700' },
  { id: 2, title: 'Second video', desc: 'Video description', gradient: 'from-purple-600 to-red-400' },
  { id: 3, title: 'Third video', desc: 'Video description', gradient: 'from-teal-600 to-green-400' },
];

export default function VideoListResponsive() {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Video Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videos.map((v) => (
          <div key={v.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
            <div className="relative pb-[56.25%] bg-gray-200">
              <div className={`absolute inset-0 bg-gradient-to-r ${v.gradient}`} />
              <button className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <PlayIcon className="h-12 w-12 text-white" />
              </button>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{v.desc}</p>
              </div>
              <button onClick={() => toggleLike(v.id)} className="p-2 rounded-full hover:bg-gray-100 transition">
                <HeartIcon className={`h-6 w-6 ${liked[v.id] ? 'text-pink-500' : 'text-gray-400 hover:text-pink-500'}`} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
