import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-200 py-10 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full">
        {/* Modal Header */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Sign Up</h2>
          <p className="text-sm text-gray-500">Create an account to get started</p>
        </div>

        {/* Form Fields */}
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Terms of Service Checkbox */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-600">
              I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-800">Terms of Service</a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!email || !password || !confirmPassword || !agreeTerms}
            className={`w-full py-3 text-white font-semibold rounded-lg 
              ${!email || !password || !confirmPassword || !agreeTerms ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} 
              transition duration-300`}
          >
            Sign Up
          </button>

          {/* Already have an account? Login Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Already have an account? <a href="#" className="text-indigo-600 hover:text-indigo-800">Log in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
