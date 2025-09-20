import React, { useState, useEffect } from 'react';

const PasswordStrengthIndicator = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    checkPasswordStrength(password);
    checkPasswordMatch(password, confirmPassword);
  }, [password, confirmPassword]);

  const checkPasswordStrength = (password) => {
    const lengthCriteria = password.length >= 8;
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const numberCriteria = /\d/.test(password);

    if (lengthCriteria && specialCharCriteria && numberCriteria) {
      setStrength('Strong');
    } else if (lengthCriteria) {
      setStrength('Medium');
    } else {
      setStrength('Weak');
    }
  };

  const checkPasswordMatch = (password, confirmPassword) => {
    if (password === confirmPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Account</h2>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter password"
          />
          <div className="mt-2 text-xs text-gray-500">
            <ul>
              <li className={`text-green-500 ${password.length >= 8 ? 'block' : 'hidden'}`}>
                Password must have 8+ characters
              </li>
              <li
                className={`text-green-500 ${/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'block' : 'hidden'}`}
              >
                Include a number or special character
              </li>
            </ul>
          </div>
          <div className="flex mt-2">
            <span
              className={`text-xs text-green-500 ${strength === 'Strong' ? 'block' : 'hidden'}`}
            >
              Strong
            </span>
            <span
              className={`text-xs text-yellow-500 ${strength === 'Medium' ? 'block' : 'hidden'}`}
            >
              Medium
            </span>
            <span
              className={`text-xs text-red-500 ${strength === 'Weak' ? 'block' : 'hidden'}`}
            >
              Weak
            </span>
          </div>
        </div>

        {/* Repeat Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
            Repeat Password?
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Repeat password"
          />
          <div
            className={`mt-2 text-xs text-green-500 ${passwordMatch ? 'block' : 'hidden'}`}
          >
            Passwords match
          </div>
        </div>

        {/* Line to indicate that both passwords match */}
        {passwordMatch && (
          <div className="mt-4 text-green-500 text-xs">
            <span className="inline-block w-full text-center">✔️ Both passwords match</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
