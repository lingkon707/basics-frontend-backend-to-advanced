'use client';

import { useState } from 'react';
import { Tweet } from 'react-tweet';

export default function TweetCardWithInput() {
  const [tweetUrl, setTweetUrl] = useState('');
  const [tweetId, setTweetId] = useState(null);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(false);

  // Extract Tweet ID from full URL
  const extractTweetId = (url) => {
    try {
      const parts = url.split('/');
      const idPart = parts.find((part) => /^\d+$/.test(part));
      return idPart || null;
    } catch {
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const id = extractTweetId(tweetUrl);
    if (id) {
      setTweetId(id);
    } else {
      setError('Invalid Twitter post URL');
    }
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      alert('Download not implemented. Add html2canvas or similar.');
      setDownloading(false);
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Paste Twitter post URL here..."
          value={tweetUrl}
          onChange={(e) => setTweetUrl(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          Submit
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>

      {/* Tweet Display */}
      {tweetId && (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 space-y-4">
          <Tweet id={tweetId} />

          <div className="flex justify-end">
            <button
              onClick={handleDownload}
              className={`bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded flex items-center ${
                downloading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={downloading}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {downloading ? 'Downloading...' : 'Download'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
