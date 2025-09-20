import React, { useState } from "react";

const ProgressStep = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Reach", "Create", "Automate", "Amplify"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Heading and Subheading */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Connect with customers on their favorite sites and apps
      </h1>

      {/* Progress Steps */}
      <div className="flex items-center space-x-8 mb-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer`}
            onClick={() => setCurrentStep(index + 1)}
          >
            {/* Step label */}
            <span
              className={`text-lg font-medium ${
                currentStep > index
                  ? "text-blue-600"
                  : currentStep === index
                  ? "text-blue-400"
                  : "text-gray-500"
              }`}
            >
              {step}
            </span>
            {/* Step Circle (for visual progress) */}
            <div
              className={`mt-2 w-6 h-6 rounded-full border-2 ${
                currentStep > index
                  ? "border-blue-600 bg-blue-600"
                  : currentStep === index
                  ? "border-blue-400 bg-blue-400"
                  : "border-gray-300 bg-white"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-lg bg-gray-200 h-1 rounded-full">
        <div
          className={`h-full bg-blue-600 rounded-full`}
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressStep;
