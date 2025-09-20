// components/ProductUploadForm.tsx

"use client";

import { useState } from "react";
import { ProductFormData } from "./productTypes";

export default function ProductUploadForm() {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    cityCode: "",
    image: null,
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "image" && files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Upload Product</h2>

      {submitted ? (
        <div className="text-green-600 font-semibold text-center">
          Product uploaded successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">City Code</label>
            <input
              type="text"
              name="cityCode"
              value={formData.cityCode}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Product Image
            </label>

            <div
              className={`border-2 border-dashed p-4 rounded-md text-center cursor-pointer transition
      ${
        preview
          ? "border-green-500 bg-green-50"
          : "border-gray-300 hover:border-blue-500"
      }`}
            >
              {preview ? (
                <div className="relative inline-block">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-48 object-contain mx-auto rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, image: null });
                      setPreview(null);
                    }}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full hover:bg-red-600"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <>
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <svg
                      className="w-12 h-12 text-gray-400 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-4 4h-4m4-4v4m0 0v-4m0 4h4m-4 0H7"
                      ></path>
                    </svg>
                    <p className="text-sm text-gray-500">
                      Click to upload or drag & drop
                    </p>
                    <p className="text-xs text-gray-400">PNG, JPG, up to 5MB</p>
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                    required={!formData.image}
                  />
                </>
              )}
            </div>
          </div>

          {preview && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Preview:</p>
              <img src={preview} alt="Preview" className="w-full rounded-md" />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Upload
          </button>
        </form>
      )}
    </div>
  );
}
