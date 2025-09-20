// components/Stepper.jsx
import React from 'react';

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {steps.map((step, index) => {
        let status = 'upcoming';
        if (index < currentStep) status = 'complete';
        else if (index === currentStep) status = 'current';

        return (
          <div key={index} className="flex-1 relative flex flex-col items-center text-center">
            <div className="mb-1">
              {status === 'complete' ? (
                <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm">
                  ✓
                </div>
              ) : status === 'current' ? (
                <div className="w-6 h-6 rounded-md border-2 border-teal-500"></div>
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
              )}
            </div>
            <p className="text-sm font-semibold">{step.title}</p>
            {index < steps.length - 1 && (
              <div className="absolute top-3 left-1/2 w-full h-0.5 bg-gray-300 -z-10 transform translate-x-1/2"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
