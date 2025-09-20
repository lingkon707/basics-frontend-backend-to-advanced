import { useState } from "react";

export default function FileUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="file-upload" className="cursor-pointer">
          {/* File Icon */}
          <div className="relative w-32 h-32 bg-orange-200 rounded-xl flex items-center justify-center">
            <div className="absolute top-0 right-0 w-8 h-8 bg-orange-300 rounded-tl-xl"></div>
            <div className="absolute w-12 h-12 bg-white rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-4 4h-4m4-4v4m0 0v-4m0 4h4m-4 0H7"
                />
              </svg>
            </div>
          </div>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleChange}
            accept="image/*"
          />
        </label>

        <button
          className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          Upload
        </button>
      </div>

      {/* Preview Image Section */}
      {preview && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Preview:</p>
          <img src={preview} alt="Preview" className="w-full h-48 object-contain mx-auto rounded-md" />
          <button
            onClick={handleRemove}
            className="mt-2 text-red-600 text-sm"
          >
            Remove Image
          </button>
        </div>
      )}
    </div>
  );
}
