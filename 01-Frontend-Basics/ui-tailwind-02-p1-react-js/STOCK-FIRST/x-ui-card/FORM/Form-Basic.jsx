import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
          <p className="text-gray-600 mt-2">Please fill in the form below to get in touch with us.</p>
        </div>

        <form className="space-y-6">
          {/* Name fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black shadow-sm bg-gray-50 text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black shadow-sm bg-gray-50 text-gray-900"
              />
            </div>
          </div>

          {/* Contact fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black shadow-sm bg-gray-50 text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="+1234567890"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black shadow-sm bg-gray-50 text-gray-900"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black shadow-sm bg-gray-50 text-gray-900 resize-none"
            ></textarea>
          </div>

          {/* Terms */}
          <div className="flex items-start space-x-2 text-sm">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 rounded border-gray-300 focus:ring-2 focus:ring-black"
            />
            <label htmlFor="terms" className="text-gray-700">
              I’ve read and agree with{' '}
              <a href="#" className="underline text-black font-medium">Terms of Service</a> and{' '}
              <a href="#" className="underline text-black font-medium">Privacy Policy</a>.
            </label>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

