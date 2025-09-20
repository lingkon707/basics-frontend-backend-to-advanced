import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).filter((file) =>
      file.type.startsWith("image/")
    );
    setFiles(selectedFiles);
  };

  const formatSize = (size) => {
    if (size < 1024) return size + " B";
    if (size < 1024 * 1024) return (size / 1024).toFixed(2) + " KB";
    return (size / (1024 * 1024)).toFixed(2) + " MB";
  };

  const formatDate = (date) => {
    return (
      new Date(date).toLocaleDateString() +
      " " +
      new Date(date).toLocaleTimeString()
    );
  };

  const getExtension = (name) => {
    const parts = name.split(".");
    return parts.length > 1 ? parts.pop().toLowerCase() : "N/A";
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-white mb-8">Image Upload Info</h1>

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="mb-6 p-2 rounded-lg border border-white/50 bg-white/90"
      />

      {files.length > 0 ? (
        <div className="overflow-x-auto w-full max-w-3xl bg-white rounded-xl shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-indigo-700">
                  File Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-indigo-700">
                  Extension
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-indigo-700">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-indigo-700">
                  Last Modified
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {files.map((file, idx) => (
                <tr key={idx} className="hover:bg-indigo-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {file.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {getExtension(file.name)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {formatSize(file.size)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {formatDate(file.lastModified)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-white text-lg">No images selected yet.</p>
      )}
    </main>
  );
}
