// components/StepForms.jsx
import React from 'react';

const StepForms = ({ currentStep, formData, handleChange }) => {
  switch (currentStep) {
    case 0:
      return (
        <div className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      );
    case 1:
      return (
        <div className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      );
    case 2:
      return (
        <div className="space-y-4">
          <textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      );
    default:
      return <p>Review & Submit</p>;
  }
};

export default StepForms;
