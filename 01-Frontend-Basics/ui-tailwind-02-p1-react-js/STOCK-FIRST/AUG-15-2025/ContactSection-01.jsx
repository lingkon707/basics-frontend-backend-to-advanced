import React from "react";

const ContactSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row gap-8">
      {/* Left side text */}
      <div className="flex-1">
        <p className="text-sm font-mono text-yellow-600 mb-2">07 - SAY HELLO</p>
        <h2 className="text-4xl font-bold mb-4 leading-tight">
          Any questions? Feel free to <br /> contact
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
        </p>
        <a
          href="mailto:info@webmail.com"
          className="text-2xl font-extrabold underline"
        >
          Info@webmail.com
        </a>
      </div>

      {/* Right side form */}
      <form className="flex-1 space-y-6">
        <input
          type="text"
          placeholder="Enter name*"
          className="w-full border-b border-gray-200 outline-none py-2 placeholder-gray-400 text-gray-700"
        />
        <input
          type="email"
          placeholder="Enter mail*"
          className="w-full border-b border-gray-200 outline-none py-2 placeholder-gray-400 text-gray-700"
        />
        <input
          type="tel"
          placeholder="Enter number*"
          className="w-full border-b border-gray-200 outline-none py-2 placeholder-gray-400 text-gray-700"
        />
        <textarea
          placeholder="Enter Massage"
          rows={3}
          className="w-full border-b border-gray-200 outline-none py-2 placeholder-gray-400 text-gray-700 resize-none"
        ></textarea>

        <button
          type="submit"
          className="self-end text-sm font-bold tracking-widest text-black flex items-center gap-2 hover:text-yellow-600 transition"
        >
          SEND MESSAGE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-6 9 6-9 6-9-6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10v4l9 6 9-6v-4" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
