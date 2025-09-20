import { useState } from 'react';
import RecursiveTable from './RecursiveTable';

export default function Home() {
  const [jsonText, setJsonText] = useState('');
  const [parsedJson, setParsedJson] = useState(null);
  const [error, setError] = useState(null);

  const handleParse = () => {
    try {
      const parsed = JSON.parse(jsonText);
      setParsedJson(parsed);
      setError(null);
    } catch (e) {
      setError('Invalid JSON');
      setParsedJson(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 px-4 py-8 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-blue-700 mb-2">🧩 JSON Table Viewer</h1>
          <p className="text-gray-600 text-lg">Paste any JSON below and visualize it as a structured, readable table.</p>
        </header>

        <section className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="json-input">
            Paste your JSON:
          </label>
          <textarea
            id="json-input"
            className="w-full min-h-[200px] max-h-[400px] resize-y font-mono text-sm p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder='Example: { "users": [{ "id": 1, "name": "Alice" }] }'
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
          />

          <button
            onClick={handleParse}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-150 shadow-sm"
          >
            🔍 Parse JSON
          </button>

          {error && (
            <div className="mt-4 bg-red-50 text-red-700 border border-red-300 p-3 rounded-md">
              ⚠️ {error}
            </div>
          )}
        </section>

        {parsedJson && (
          <section className="bg-white shadow-xl rounded-lg border border-gray-200 p-6 overflow-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">📋 Table Output</h2>
            <RecursiveTable data={parsedJson} />
          </section>
        )}

        <footer className="mt-12 text-center text-sm text-gray-400">
          Built with ❤️ using Next.js & Tailwind CSS.
        </footer>
      </div>
    </div>
  );
}
