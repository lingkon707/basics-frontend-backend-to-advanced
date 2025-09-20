import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
        <p className="text-gray-600 mb-8">Please fill in the form below to get in touch with us.</p>

        <form className="space-y-6">
          {/* Row 1: First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Message Textarea */}
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black resize-none"
          ></textarea>

          {/* Terms and Checkbox */}
          <div className="flex items-start space-x-2 text-sm">
            <input
              type="checkbox"
              id="terms"
              className="mt-1"
            />
            <label htmlFor="terms" className="text-gray-700">
              I’ve read and agree with{' '}
              <a href="#" className="underline text-black font-medium">Terms of Service</a> and{' '}
              <a href="#" className="underline text-black font-medium">Privacy Policy</a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-900 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
