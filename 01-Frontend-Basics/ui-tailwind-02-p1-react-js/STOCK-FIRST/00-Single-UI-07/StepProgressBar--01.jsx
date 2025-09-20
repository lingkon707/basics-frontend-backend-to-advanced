import React, { useState } from 'react';

const StepProgressBar = () => {
  // Step tracking state
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { title: 'Card Details', status: 'Completed' },
    { title: 'Form Review', status: 'In Progress' },
    { title: 'Authentication', status: 'Pending' },
    { title: 'Create Code', status: 'Pending' },
  ];

  const getStatusClass = (step) => {
    if (step < currentStep) return 'bg-green-500 text-white'; // Completed step
    if (step === currentStep) return 'bg-blue-500 text-white'; // Current step
    return 'bg-gray-300 text-gray-500'; // Pending step
  };

  const getLineClass = (step) => {
    if (step < currentStep) return 'bg-green-500'; // Line to completed step
    if (step === currentStep) return 'bg-blue-500'; // Line to current step
    return 'bg-gray-300'; // Line to pending step
  };

  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className={`flex justify-center items-center w-8 h-8 rounded-full ${getStatusClass(index + 1)}`}
              >
                {index + 1 < currentStep ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                ) : index + 1 === currentStep ? (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                ) : (
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`h-1 w-16 ${getLineClass(index + 1)}`} />
              )}
              <div className="text-center">
                <div className="font-semibold">{`Step ${index + 1}`}</div>
                <div className="text-sm">{step.title}</div>
                <div className="text-xs text-gray-500">{step.status}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50"
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
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
