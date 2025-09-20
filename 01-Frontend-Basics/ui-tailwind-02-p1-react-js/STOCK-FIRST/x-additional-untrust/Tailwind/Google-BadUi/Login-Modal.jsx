import React, { useState } from 'react';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-300">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Welcome to Acme</h2>
          <button className="text-gray-500 hover:text-gray-700">X</button>
        </div>

        {/* Form Fields */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-600 mb-2">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm text-gray-600 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Remember me and Terms Checkbox */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">Remember this device for 30 days</label>
            </div>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">Reset password</a>
          </div>

          {/* Terms of Service */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              By logging in, I agree and accept the <a href="#" className="text-indigo-600 hover:text-indigo-800">Terms of Service</a>.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mb-6">
            <button className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
              Log In
            </button>
            <button className="w-full bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300">
              Create an account
            </button>
          </div>

          {/* Help Center Link */}
          <div className="text-center text-sm text-gray-500">
            <p>Not sure about your choice? Try the <a href="#" className="text-indigo-600 hover:text-indigo-800">Help Center</a>.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
