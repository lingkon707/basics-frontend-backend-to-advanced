// App.jsx
import React, { useState } from 'react';
import Stepper from './Stepper';

const stepsData = [
  { title: 'Step 1', description: 'Explain your step...' },
  { title: 'Step 2', description: 'Explain your step...' },
  { title: 'Step 3', description: 'Explain your step...' },
  { title: 'Step 4', description: 'Explain your step...' },
  { title: 'Step 5', description: 'Explain your step...' },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-300 to-white flex flex-col items-center justify-center">
      <Stepper steps={stepsData} currentStep={currentStep} />

      <div className="mt-6 flex gap-4">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === stepsData.length - 1}
          className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
