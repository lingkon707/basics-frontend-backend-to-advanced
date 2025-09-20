import React, { useState } from 'react';

const StepProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { title: 'Card Details', status: 'Completed' },
    { title: 'Form Review', status: 'In Progress' },
    { title: 'Authentication', status: 'Pending' },
    { title: 'Create Code', status: 'Pending' },
  ];

  // Get the status class for the step
  const getStatusClass = (step) => {
    if (step < currentStep) return 'bg-teal-500 text-white'; // Completed
    if (step === currentStep) return 'bg-indigo-600 text-white'; // In Progress
    return 'bg-gray-300 text-gray-600'; // Pending
  };

  // Get the line class for connecting steps
  const getLineClass = (step) => {
    if (step < currentStep) return 'bg-teal-500'; // Completed
    if (step === currentStep) return 'bg-indigo-600'; // In Progress
    return 'bg-gray-300'; // Pending
  };

  return (
    <div className="w-full flex justify-center items-center py-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="w-full max-w-7xl bg-white shadow-xl rounded-xl p-6">
        <div className="flex flex-wrap justify-between items-center mb-8 space-y-6 sm:space-y-0 sm:flex-nowrap">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6 sm:space-y-0">
              {/* Circle for each step */}
              <div
                className={`flex justify-center items-center w-12 h-12 rounded-full transition-all duration-0 ease-in-out ${getStatusClass(index + 1)}`}
              >
                {index + 1 < currentStep ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                ) : index + 1 === currentStep ? (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                ) : (
                  <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                )}
              </div>

              {/* Step line between circles */}
              {index < steps.length - 1 && (
                <div className={`h-1 w-20 rounded-full ${getLineClass(index + 1)}`}></div>
              )}

              {/* Step Title and Status */}
              <div className="text-center sm:text-left mt-2 sm:mt-0">
                <div className="font-semibold text-lg">{`Step ${index + 1}`}</div>
                <div className="text-base text-gray-700">{step.title}</div>
                <div className="text-sm text-gray-500 mt-1">{step.status}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 space-x-4 sm:space-x-8">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            className="px-8 py-3 bg-gray-500 text-white rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50"
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50"
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
