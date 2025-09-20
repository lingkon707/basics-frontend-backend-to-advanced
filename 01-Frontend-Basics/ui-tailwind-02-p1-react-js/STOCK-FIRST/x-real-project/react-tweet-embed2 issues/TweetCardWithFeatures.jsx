'use client';

import { useState, useRef, useEffect } from 'react';
import { Tweet } from 'react-tweet';
import html2canvas from 'html2canvas';

export default function TweetCardWithFeatures() {
  const [tweetUrl, setTweetUrl] = useState('');
  const [tweetId, setTweetId] = useState(null);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [theme, setTheme] = useState('light'); // light or dark
  const tweetRef = useRef(null);
  const [cache, setCache] = useState({}); // Cache tweet data (IDs)

  // Extract tweet ID from URL
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
    const id = extractTweetId(tweetUrl.trim());
    if (id) {
      if (!cache[id]) {
        setCache((prev) => ({ ...prev, [id]: true }));
      }
      setTweetId(id);
    } else {
      setError('Invalid Twitter post URL');
      setTweetId(null);
    }
  };

  const handleDownload = async () => {
    if (!tweetRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(tweetRef.current, {
        scale: 2,
        useCORS: true,
      });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `tweet-${tweetId}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      alert('Error generating image.');
      console.error(err);
    }
    setDownloading(false);
  };

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // Sync theme to html/body classes for Tailwind dark mode
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className={`min-h-screen p-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-xl mx-auto">
        {/* Theme toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleTheme}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded"
            aria-label="Toggle dark/light mode"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Paste Twitter post URL here..."
            value={tweetUrl}
            onChange={(e) => setTweetUrl(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Submit
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>

        {/* Tweet display */}
        {tweetId && (
          <div
            ref={tweetRef}
            className={`bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg p-6 space-y-6 transition-colors duration-300`}
          >
            <Tweet id={tweetId} />
            <div className="flex justify-end">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className={`flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition ${
                  downloading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
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
    </div>
  );
}
