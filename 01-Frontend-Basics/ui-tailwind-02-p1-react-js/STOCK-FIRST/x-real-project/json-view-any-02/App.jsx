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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">JSON Table Viewer</h1>

        <textarea
          className="w-full p-4 h-60 border border-gray-300 rounded mb-4 font-mono text-sm"
          placeholder='Paste your JSON here...'
          value={jsonText}
          onChange={(e) => setJsonText(e.target.value)}
        />

        <button
          onClick={handleParse}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Parse JSON
        </button>

        {error && <p className="text-red-600 mt-4">{error}</p>}

        {parsedJson && (
          <div className="mt-6 overflow-auto border border-gray-300 rounded">
            <RecursiveTable data={parsedJson} />
          </div>
        )}
      </div>
    </div>
  );
}
