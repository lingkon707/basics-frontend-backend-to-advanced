import React from 'react';

const LoginPage = () => {
  return (
    <div className="w-full h-screen bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg">
        {/* Event Section */}
        <div className="flex flex-col items-start mb-8">
          <div className="flex items-center mb-2">
            <span className="text-green-400 text-sm">June 23, 2021</span>
          </div>
          <h1 className="text-3xl font-semibold mb-2">UI/UX Design Conference</h1>
          <div className="flex gap-2">
            <span className="bg-green-500 text-sm text-black px-2 py-1 rounded-md">UI/UX Design</span>
            <span className="bg-green-500 text-sm text-black px-2 py-1 rounded-md">Mobile</span>
          </div>
        </div>

        {/* Sign In Form */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 mb-4">
            {/* Profile Icons */}
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
              <span className="text-lg">J</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
              <span className="text-lg">L</span>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="w-full p-3 mt-2 bg-gray-800 text-white rounded-md"
                placeholder="Enter Username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 mt-2 bg-gray-800 text-white rounded-md"
                placeholder="Enter Password"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 p-3 bg-blue-600 text-white rounded-md font-semibold"
            >
              Sign In
            </button>

            {/* OR Section */}
            <div className="flex items-center justify-center mt-4 text-sm text-white">
              <span className="mr-2">OR</span>
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <button className="p-3 bg-white rounded-md flex items-center justify-center">
                <img src="google-icon.svg" alt="Google" className="w-5 h-5" />
                Google
              </button>
              <button className="p-3 bg-white rounded-md flex items-center justify-center">
                <img src="github-icon.svg" alt="GitHub" className="w-5 h-5" />
                GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
