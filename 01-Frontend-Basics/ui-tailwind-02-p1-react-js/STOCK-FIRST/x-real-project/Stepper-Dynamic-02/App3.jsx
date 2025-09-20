import React, { useState } from "react";

const stepsData = [
  { title: "Basic Info" },
  { title: "Contact Info" },
  { title: "Message" },
  { title: "Confirm" },
];

// Stepper component for progress UI
const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {steps.map((step, index) => {
        let status = "upcoming";
        if (index < currentStep) status = "complete";
        else if (index === currentStep) status = "current";

        return (
          <div
            key={index}
            className="flex-1 relative flex flex-col items-center text-center"
          >
            <div className="mb-1">
              {status === "complete" ? (
                <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm">
                  ✓
                </div>
              ) : status === "current" ? (
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

// InputField component with error message
const InputField = ({ name, placeholder, value, onChange, error, type = "text" }) => (
  <div className="mb-4">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const StepForms = ({ currentStep, formData, handleChange, errors }) => {
  switch (currentStep) {
    case 0:
      return (
        <>
          <InputField
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <InputField
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </>
      );
    case 1:
      return (
        <>
          <InputField
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            name="phone"
            type="Number"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
        </>
      );
    case 2:
      return (
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            rows={5}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
      );
    default:
      return (
        <div>
          <p className="text-gray-700 mb-2 font-semibold">
            Please confirm your information:
          </p>
          <ul className="text-sm text-gray-800 space-y-1">
            <li>
              <strong>First Name:</strong> {formData.firstName}
            </li>
            <li>
              <strong>Last Name:</strong> {formData.lastName}
            </li>
            <li>
              <strong>Email:</strong> {formData.email}
            </li>
            <li>
              <strong>Phone:</strong> {formData.phone}
            </li>
            <li>
              <strong>Message:</strong> {formData.message}
            </li>
          </ul>
        </div>
      );
  }
};

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on input
  };

  // Validate current step inputs
  const validateStep = () => {
    let newErrors = {};

    if (currentStep === 0) {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    } else if (currentStep === 1) {
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    } else if (currentStep === 2) {
      if (!formData.message.trim()) newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle next button
  const handleNext = () => {
    if (currentStep < stepsData.length - 1) {
      if (validateStep()) setCurrentStep((prev) => prev + 1);
    } else {
      // Final submission action here
      alert("Form submitted successfully!");
      console.log("Submitted data:", formData);
    }
  };

  // Handle back button
  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-300 to-white flex flex-col items-center justify-center p-6">
      <Stepper steps={stepsData} currentStep={currentStep} />

      <div className="bg-white p-6 rounded shadow-md mt-6 w-full max-w-lg">
        <StepForms
          currentStep={currentStep}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
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
            {currentStep === stepsData.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
