import React, { useState } from 'react';

const StepProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { title: 'Card Details', status: 'Completed' },
    { title: 'Form Review', status: 'In Progress' },
    { title: 'Authentication', status: 'Pending' },
    { title: 'Create Code', status: 'Pending' },
  ];

  // Determine step status classes
  const getStatusClass = (step) => {
    if (step < currentStep) return 'bg-green-500 text-white'; // Completed
    if (step === currentStep) return 'bg-blue-600 text-white'; // In Progress
    return 'bg-gray-300 text-gray-500'; // Pending
  };

  const getLineClass = (step) => {
    if (step < currentStep) return 'bg-green-500'; // Completed
    if (step === currentStep) return 'bg-blue-600'; // In Progress
    return 'bg-gray-300'; // Pending
  };

  return (
    <div className="w-full flex justify-center items-center py-10 bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 transition-all duration-500 transform hover:scale-105">
        <div className="flex items-center justify-between mb-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Circle for each step */}
              <div
                className={`flex justify-center items-center w-10 h-10 rounded-full transition-all duration-300 ease-in-out ${getStatusClass(index + 1)}`}
              >
                {index + 1 < currentStep ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                ) : index + 1 === currentStep ? (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                ) : (
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                )}
              </div>

              {/* Step line between the circles */}
              {index < steps.length - 1 && (
                <div className={`h-1 w-16 ${getLineClass(index + 1)} rounded-full`}></div>
              )}

              {/* Step Title and Status */}
              <div className="text-center">
                <div className="font-semibold text-lg">{`Step ${index + 1}`}</div>
                <div className="text-sm text-gray-700">{step.title}</div>
                <div className="text-xs text-gray-500 mt-1">{step.status}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50"
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
            disabled={currentStep === steps.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepProgressBar;
