import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left side */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-sm font-mono text-black mb-4 tracking-widest font-bold">
            07 - SAY HELLO
          </p>
          <h1 className="text-5xl font-extrabold mb-6 leading-snug text-black max-w-lg">
            Any questions? Feel free to <br /> contact
          </h1>
          <h2 className="text-xl font-bold text-black mb-8 max-w-md">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
          </h2>
          <a
            href="mailto:info@webmail.com"
            className="text-2xl font-extrabold underline text-black hover:text-gray-700 transition"
          >
            Info@webmail.com
          </a>
        </div>

        {/* Right side form */}
        <form className="flex-1 bg-white rounded-xl shadow-lg p-10 flex flex-col gap-6 border border-gray-200">
          <input
            type="text"
            placeholder="Enter name*"
            className="border-b border-gray-300 focus:border-black outline-none py-3 placeholder-gray-500 text-black text-lg transition"
          />
          <input
            type="email"
            placeholder="Enter mail*"
            className="border-b border-gray-300 focus:border-black outline-none py-3 placeholder-gray-500 text-black text-lg transition"
          />
          <input
            type="tel"
            placeholder="Enter number*"
            className="border-b border-gray-300 focus:border-black outline-none py-3 placeholder-gray-500 text-black text-lg transition"
          />
          <textarea
            placeholder="Enter Message"
            rows={4}
            className="border-b border-gray-300 focus:border-black outline-none py-3 placeholder-gray-500 text-black text-lg resize-none transition"
          ></textarea>

          <button
            type="submit"
            className="self-end bg-black text-white font-bold px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-900 transition"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10l9-6 9 6-9 6-9-6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10v4l9 6 9-6v-4"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
