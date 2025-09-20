import React from 'react';
// i use :  @heroicons/react@1.0.6

import { HeartIcon, PlayIcon } from '@heroicons/react/outline';

const videos = [
  { id: 1, title: 'First video', description: 'Video description', gradient: 'from-blue-500 to-blue-700' },
  { id: 2, title: 'Second video', description: 'Video description', gradient: 'from-purple-700 to-red-500' },
  { id: 3, title: 'Third video', description: 'Video description', gradient: 'from-cyan-700 to-emerald-500' },
];

function VideoList() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 rounded-xl bg-white shadow-lg border border-gray-100">
      <h2 className="text-xl font-semibold mb-4">3 Videos</h2>
      <div className="space-y-4">
        {videos.map((video) => (
          <div key={video.id} className="flex items-center justify-between bg-white rounded-md">
            <div className={`w-16 h-16 flex items-center justify-center rounded-md bg-gradient-to-r ${video.gradient}`}>
              <PlayIcon className="h-6 w-6 text-white opacity-80" />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-semibold text-gray-900">{video.title}</h3>
              <p className="text-sm text-gray-500">{video.description}</p>
            </div>
            <button className="p-2">
              <HeartIcon className="h-5 w-5 text-gray-500 hover:text-pink-500 transition duration-150" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoList;
