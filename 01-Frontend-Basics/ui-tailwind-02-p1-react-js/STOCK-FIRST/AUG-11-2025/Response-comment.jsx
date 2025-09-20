import React from 'react';

export default function ResponseSection() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 py-10 border-t">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Responses (1)</h2>

        {/* Write a response box */}
        <div className="flex items-start space-x-4 mb-10">
          <div className="w-10 h-10 bg-gray-200 rounded-full" />
          <input
            type="text"
            placeholder="What are your thoughts?"
            className="flex-1 bg-gray-100 text-sm px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Response */}
        <div className="flex items-start space-x-4 mb-6">
          {/* Avatar */}
          <img
            src="https://thumbs.dreamstime.com/b/young-indian-man-happy-outdoors-looking-camera-39595562.jpg"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="flex-1">
            {/* Name and Date */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm text-gray-900">Joachim Guth</p>
                <p className="text-xs text-gray-500">Apr 10, 2023</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <span className="text-xl">⋯</span>
              </button>
            </div>

            {/* Comment Body */}
            <p className="mt-3 text-gray-800 text-sm">
              I think we do not need an Andrew Tate for this.
            </p>

            {/* Actions */}
            <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
              <button className="flex items-center hover:text-black">
                👏 <span className="ml-1">1</span>
              </button>
              <button className="hover:underline hover:text-black">Reply</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
