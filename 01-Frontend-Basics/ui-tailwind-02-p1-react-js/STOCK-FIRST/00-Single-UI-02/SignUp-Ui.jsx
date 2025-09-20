import React from 'react';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Enjoy lightning fast design-to-code conversion
        </h1>
        <div className="space-y-4 mb-6">
          <div className="flex space-x-4 justify-center">
            <button className="w-1/3 flex justify-center items-center p-2 border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_icon.svg" alt="" className="h-6" />
              Google
            </button>
            <button className="w-1/3 flex justify-center items-center p-2 border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" className="h-6" />
              Github
            </button>
            <button className="w-1/3 flex justify-center items-center p-2 border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/SAML_Logo.svg" alt="" className="h-6" />
             X
            </button>
          </div>
          <p className="text-center text-sm text-gray-500">Or, sign-up with your email</p>
        </div>

        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Sign up
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          Already have an account? <a href="#" className="text-blue-600">Sign in</a>
        </div>

        <div className="mt-4 text-xs text-center text-gray-400">
          By proceeding, you are agreeing to the{' '}
          <a href="#" className="text-blue-600">Terms & Conditions</a> and{' '}
          <a href="#" className="text-blue-600">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
