// components/ProductUploadForm.tsx

'use client';

import { useState } from 'react';
import { ProductFormData } from './productTypes';

export default function ProductUploadForm() {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    cityCode: '',
    image: null,
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files && files[0]) {
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
    console.log('Product submitted:', formData);
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
            <label className="block text-sm font-medium">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 block w-full"
              required
            />
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
