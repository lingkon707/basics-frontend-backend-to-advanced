import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex">
      <Head>
        <title>AI Assistant Interface</title>
        <meta name="description" content="Modern AI Assistant UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sidebar */}
      <div className="w-16 bg-white flex flex-col items-center justify-between p-4 border-r border-gray-200">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-semibold">
            A
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center text-sm font-semibold">
            ?
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex flex-col space-y-4 mb-8">
          <h1 className="text-4xl font-semibold text-gray-900">
            Hi there, John
          </h1>
          <p className="text-xl text-gray-600">
            What would you like to know?
          </p>
        </div>

        {/* Prompts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transform transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800">
              Write a to-do list for a personal project or task
            </h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transform transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800">
              Generate an email to reply to a job offer
            </h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transform transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800">
              Summarize this article or text for me in one paragraph
            </h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transform transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800">
              How does AI work in a technical capacity?
            </h3>
          </div>
        </div>

        {/* Refresh Prompts */}
        <div className="flex justify-center mb-8">
          <button className="text-teal-600 font-semibold hover:underline">
            Refresh Prompts
          </button>
        </div>

        {/* Input Field */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <label className="text-lg font-semibold text-gray-800">Ask whatever you want...</label>
          <textarea
            rows="4"
            className="w-full mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 resize-none"
            placeholder="Type your query here..."
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-4">
              <button className="text-teal-600">Add Attachment</button>
              <button className="text-teal-600">Use Image</button>
            </div>
            <div className="text-gray-600">0/1000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
