import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-md hover:bg-gradient-to-r hover:from-red-400 hover:to-pink-400"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-gray-600">Don't have an account?</span>
          <button className="ml-2 text-indigo-600 font-semibold">Register</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
