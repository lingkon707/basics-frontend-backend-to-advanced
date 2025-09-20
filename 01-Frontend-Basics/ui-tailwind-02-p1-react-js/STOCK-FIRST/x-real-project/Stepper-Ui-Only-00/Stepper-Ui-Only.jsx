// components/Stepper.jsx
import React from 'react';

const steps = [
  { id: 1, title: 'Step 1', description: 'Explain your step...', status: 'complete' },
  { id: 2, title: 'Step 2', description: 'Explain your step...', status: 'complete' },
  { id: 3, title: 'Step 3', description: 'Explain your step...', status: 'current' },
  { id: 4, title: 'Step 4', description: 'Explain your step...', status: 'upcoming' },
  { id: 5, title: 'Step 5', description: 'Explain your step...', status: 'upcoming' },
];

const Stepper = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-col items-center text-center flex-1 relative">
          <div className="mb-1">
            {step.status === 'complete' ? (
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                ✓
              </div>
            ) : step.status === 'current' ? (
              <div className="w-6 h-6 rounded-md border-2 border-teal-500"></div>
            ) : (
              <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
            )}
          </div>
          <p className="text-sm font-semibold">{step.title}</p>
          <p className="text-xs text-gray-500">{step.description}</p>

          {index < steps.length - 1 && (
            <div className="absolute top-3 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
