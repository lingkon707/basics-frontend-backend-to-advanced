import React from 'react';
import { HeartIcon, PlayIcon } from '@heroicons/react/outline';

const videos = [
  {
    id: 1,
    title: 'First video',
    description: 'Video description',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    title: 'Second video',
    description: 'Video description',
    gradient: 'from-purple-600 to-red-400',
  },
  {
    id: 3,
    title: 'Third video',
    description: 'Video description',
    gradient: 'from-teal-600 to-green-400',
  },
];

function VideoList() {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">3 Videos</h2>
        
        <div className="space-y-5">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              {/* Thumbnail */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-r ${video.gradient}`}
              >
                <PlayIcon className="h-7 w-7 text-white opacity-90" />
              </div>

              {/* Text content */}
              <div className="ml-4 flex-1">
                <h3 className="text-base font-medium text-gray-900 leading-snug">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {video.description}
                </p>
              </div>

              {/* Like Button */}
              <button className="ml-4 p-2 rounded-full hover:bg-gray-200 transition">
                <HeartIcon className="h-6 w-6 text-gray-500 hover:text-pink-500 transition" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoList;
