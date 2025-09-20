// App.jsx
import React, { useState } from 'react';
import Stepper from './Stepper';
import StepForms from './StepForms';

const stepsData = [
  { title: 'Basic Info' },
  { title: 'Contact Info' },
  { title: 'Message' },
  { title: 'Confirm' },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      console.log("Form Submitted:", formData);
      alert("Form submitted! Check console.");
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-300 to-white flex flex-col items-center justify-center p-4">
      <Stepper steps={stepsData} currentStep={currentStep} />

      <div className="bg-white p-6 rounded shadow-md mt-6 w-full max-w-lg">
        <StepForms
          currentStep={currentStep}
          formData={formData}
          handleChange={handleChange}
        />

        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            {currentStep === stepsData.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
