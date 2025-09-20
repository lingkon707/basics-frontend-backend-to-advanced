import { useState } from "react";

export default function FileUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

  // Handle file drop
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  // Handle file selection via input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Handle the drag over state for styling
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-indigo-600">Upload your files</h2>
      <p className="text-center text-sm text-gray-500 mb-4">Fast and easy way</p>

      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition
          ${dragOver ? "border-indigo-500 bg-indigo-50" : "border-gray-300"}
        `}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {/* Folder Icon */}
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-indigo-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4h4l2 3h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"
            />
          </svg>
        </div>

        {/* Drag and Drop Text */}
        <p className="text-sm text-gray-500">Drag and drop files here</p>

        {/* File Input */}
        <input
          type="file"
          className="hidden"
          onChange={handleChange}
          accept="image/*, .pdf, .doc, .docx"
        />
      </div>

      {/* File Preview Section */}
      {file && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Selected File:</p>
          <p className="text-lg font-medium">{file.name}</p>
          <button
            onClick={handleRemoveFile}
            className="mt-2 text-red-600 text-sm"
          >
            Remove File
          </button>
        </div>
      )}

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition">
          Submit
        </button>
      </div>
    </div>
  );
}
