import React, { useState } from "react";

const steps = [
  ["First Name", "Last Name", "Email"],
  ["Phone Number", "Address", "City"],
  ["State", "Zip Code", "Country"],
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  const handleSubmit = () => {
    setSubmitted(true);
    console.log("Final Submitted Data:", formData);
  };

  if (submitted) {
    return (
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">✅ Submitted Successfully!</h2>
        <p className="text-gray-600">Thank you for providing your information.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg mx-auto mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Step {step + 1} of {steps.length}
      </h2>

      <form className="space-y-5">
        {steps[step].map((field, index) => {
          const name = field.toLowerCase().replace(/\s/g, "");
          return (
            <div key={index}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{field}</label>
              <input
                type="text"
                name={name}
                value={formData[name] || ""}
                onChange={handleChange}
                placeholder={`Enter ${field.toLowerCase()}`}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          );
        })}

        <div className="flex justify-between pt-6">
          {step > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md"
            >
              ← Back
            </button>
          )}

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md ml-auto"
            >
              Next →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md ml-auto"
            >
              ✅ Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
