import React from "react";

const ForumLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Hero Section */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Welcome to KnowledgeHub
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            A vibrant forum platform where you can create discussions, ask questions, and share knowledge on topics that matter to you.
          </p>
          <a
            href="#get-started"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
          >
            Get Started
          </a>
        </header>

        {/* What is a Forum */}
        <section className="max-w-4xl mx-auto mb-20 bg-white rounded-xl shadow-lg p-10">
          <h2 className="text-3xl font-bold mb-4 text-indigo-800">
            What is a Forum Website?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Forum websites are platforms designed for users to create discussions, ask questions, and share knowledge on specific topics. 
            They foster community engagement, collaboration, and collective problem-solving.
          </p>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {[
            {
              title: "Create Discussions",
              desc: "Start new topics and invite others to share their thoughts.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-indigo-600 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"
                  />
                </svg>
              ),
            },
            {
              title: "Ask Questions",
              desc: "Get answers from experts and community members worldwide.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-indigo-600 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              ),
            },
            {
              title: "Share Knowledge",
              desc: "Contribute articles, solutions, and tips to help others grow.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-indigo-600 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 8h10M7 12h4m1 4h5"
                  />
                </svg>
              ),
            },
          ].map(({ title, desc, icon }, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section
          id="get-started"
          className="max-w-4xl mx-auto bg-indigo-600 rounded-xl p-12 shadow-lg text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to join the conversation?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-lg leading-relaxed">
            Sign up today and start exploring communities, sharing your expertise, and learning from others.
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Create an Account
          </a>
        </section>
      </div>
    </div>
  );
};

export default ForumLandingPage;
