import React, { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Validation for current step
  const validateStep = () => {
    if (step === 1) {
      return formData.name.trim() !== "" && /^\S+@\S+\.\S+$/.test(formData.email);
    }
    if (step === 2) {
      return formData.subject.trim() !== "" && formData.message.trim() !== "";
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, 3));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Progress percent for bar
  const progressPercent = (step / 3) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8 overflow-hidden">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Info</h2>

            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Message</h2>

            <div>
              <label
                htmlFor="subject"
                className="block mb-1 font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                name="subject"
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Message subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your message here..."
                rows={4}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Details</h2>

            <div className="text-left">
              <p>
                <span className="font-semibold">Name:</span> {formData.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {formData.email}
              </p>
              <p>
                <span className="font-semibold">Subject:</span> {formData.subject}
              </p>
              <p>
                <span className="font-semibold">Message:</span> {formData.message}
              </p>
            </div>

            <p className="mt-6 text-green-600 font-semibold">
              Ready to submit your message!
            </p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`px-6 py-2 rounded-md font-semibold border transition
              ${
                step === 1
                  ? "text-gray-400 border-gray-300 cursor-not-allowed"
                  : "text-indigo-600 border-indigo-600 hover:bg-indigo-50"
              }
            `}
          >
            Back
          </button>

          {step < 3 ? (
            <button
              onClick={nextStep}
              disabled={!validateStep()}
              className={`px-6 py-2 rounded-md font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => alert("Form submitted!")}
              className="px-6 py-2 rounded-md font-semibold text-white bg-green-600 hover:bg-green-700 transition"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
