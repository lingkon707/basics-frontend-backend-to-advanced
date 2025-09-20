import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-xl flex max-w-4xl w-full">
        {/* Left Side: Sign In Form */}
        <div className="w-1/2 p-8 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Signin</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="w-full py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none">
              Signin
            </button>
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500">or sign in with</span>
            <div className="flex justify-center space-x-4 mt-2">
              <button className="p-3 rounded-full bg-blue-600 text-white">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="p-3 rounded-full bg-red-500 text-white">
                <i className="fab fa-google"></i>
              </button>
              <button className="p-3 rounded-full bg-blue-700 text-white">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Welcome Message */}
        <div className="w-1/2 bg-green-100 p-8 rounded-r-xl">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Welcome back!</h2>
          <p className="text-gray-700 mb-6">
            Welcome back! We are so happy to have you here. It's great to see you again. We hope you had
            a safe and enjoyable time away.
          </p>
          <a href="/signup" className="text-green-600 hover:underline text-lg">
            No account yet? Signup.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
