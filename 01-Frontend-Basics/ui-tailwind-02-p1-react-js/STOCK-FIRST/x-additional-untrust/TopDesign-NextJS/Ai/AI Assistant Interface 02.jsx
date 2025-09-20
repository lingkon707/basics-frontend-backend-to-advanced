import { useState } from "react";
import Head from "next/head";

export default function Home() {
  // State for input text, prompts, and chat messages
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [prompts, setPrompts] = useState([
    "Write a to-do list for a personal project or task",
    "Generate an email to reply to a job offer",
    "Summarize this article or text for me in one paragraph",
    "How does AI work in a technical capacity?",
  ]);

  // Handle prompt selection
  const handlePromptSelect = (prompt) => {
    setInputText(prompt);
  };

  // Handle input text change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Handle submit query
  const handleSubmitQuery = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, type: "user" }]);
      setInputText(""); // Clear input after submitting
    }
  };

  // Handle attachment (mockup)
  const handleAttachFile = () => {
    setAttachments([...attachments, "New File Attached"]);
  };

  // Handle use image (mockup)
  const handleUseImage = () => {
    setAttachments([...attachments, "Image Attached"]);
  };

  // Handle refresh prompts
  const handleRefreshPrompts = () => {
    const newPrompts = [
      "What are the benefits of remote work?",
      "Create a travel itinerary for a trip to Japan",
      "What are the top 5 programming languages in 2025?",
      "Explain the concept of machine learning",
    ];
    setPrompts(newPrompts);
  };

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
          <h1 className="text-4xl font-semibold text-gray-900">Hi there, John</h1>
          <p className="text-xl text-gray-600">What would you like to know?</p>
        </div>

        {/* Prompts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {prompts.map((prompt, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transform transition-all duration-300"
              onClick={() => handlePromptSelect(prompt)}
            >
              <h3 className="text-lg font-semibold text-gray-800">{prompt}</h3>
            </div>
          ))}
        </div>

        {/* Refresh Prompts */}
        <div className="flex justify-center mb-8">
          <button
            className="text-teal-600 font-semibold hover:underline"
            onClick={handleRefreshPrompts}
          >
            Refresh Prompts
          </button>
        </div>

        {/* Input Field */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <label className="text-lg font-semibold text-gray-800">Ask whatever you want...</label>
          <textarea
            rows="4"
            value={inputText}
            onChange={handleInputChange}
            className="w-full mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 resize-none"
            placeholder="Type your query here..."
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-4">
              <button
                className="text-teal-600"
                onClick={handleAttachFile}
              >
                Add Attachment
              </button>
              <button
                className="text-teal-600"
                onClick={handleUseImage}
              >
                Use Image
              </button>
            </div>
            <div className="text-gray-600">0/1000</div>
          </div>
        </div>

        {/* Send Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmitQuery}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg transform transition duration-300 hover:bg-teal-700 hover:scale-105"
          >
            Send
          </button>
        </div>

        {/* Attachments */}
        {attachments.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Attachments</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {attachments.map((attachment, index) => (
                <li key={index}>{attachment}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Display Messages */}
        <div className="mt-8 space-y-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                msg.type === "user" ? "bg-teal-100 text-teal-900" : "bg-gray-100 text-gray-900"
              }`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
