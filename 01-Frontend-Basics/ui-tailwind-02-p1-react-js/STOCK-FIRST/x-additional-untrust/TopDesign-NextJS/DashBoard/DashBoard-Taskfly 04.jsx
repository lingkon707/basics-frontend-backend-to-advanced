import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [files, setFiles] = useState([
    { name: "IMG_729.PNG", reason: "You Opened", owner: "Arvind Islam", location: "New Client Docs", time: "9:09 AM" },
    { name: "IMG_728.PNG", reason: "You Opened", owner: "Alex James", location: "New Client Docs", time: "6:13 PM" },
    { name: "Everyday Design Update", reason: "You Opened", owner: "Anil Hook", location: "Shared With Me", time: "6:13 PM" },
    { name: "IMG_729.PNG", reason: "You Opened", owner: "Amir Ali", location: "Shared With Me", time: "6:14 PM" },
    { name: "iBook", reason: "You Opened", owner: "James Kop", location: "Shared With Me", time: "6:14 PM" },
    { name: "Cooking App User Flow", reason: "You Opened", owner: "Jackal Paul", location: "Shared With Me", time: "6:27 PM" },
    { name: "NAMA AI", reason: "You Opened", owner: "Jackal Paul", location: "Shared With Me", time: "6:27 PM" },
    { name: "IMG_729.PNG", reason: "You Opened", owner: "Kamal Mak", location: "New Client Docs", time: "6:30 PM" },
    { name: "Job Web", reason: "You Opened", owner: "Jacob Kam", location: "New Client Docs", time: "6:30 PM" },
    { name: "UX Class", reason: "You Opened", owner: "Mike E.E", location: "Shared With Me", time: "6:31 PM" },
    { name: "AI Lists 1", reason: "You Opened", owner: "Amir Islam", location: "New Client Docs", time: "6:35 PM" },
    { name: "IMG_729.PNG", reason: "You Opened", owner: "Isaim", location: "Shared With Me", time: "6:40 PM" },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Head>
        <title>Taskfly - My Drive</title>
        <meta name="description" content="File Management Dashboard with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sidebar */}
      <div className="w-64 bg-white p-6 border-r  border-gray-200">
        <div className="flex items-center fixed space-x-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-semibold">
            T
          </div>
          <div className="text-xl font-semibold">Taskfly</div>
        </div>

        <nav className="space-y-6 fixed mt-16 ">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-600">
            <span className="text-xl">🏠</span>
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-600">
            <span className="text-xl">💻</span>
            <span>My Drive</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-600">
            <span className="text-xl">📂</span>
            <span>Computers</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-600">
            <span className="text-xl">📅</span>
            <span>Recent</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-600">
            <span className="text-xl">⭐</span>
            <span>Starred</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-600">
            <span className="text-xl">🗑️</span>
            <span>Trash</span>
          </div>
        </nav>

        {/* Settings */}
        {/* <div className="mt-auto">
          <div className="text-gray-600 text-sm">
            <div className="font-semibold">Sophia Williams</div>
            <div>sophia@taskfly.com</div>
          </div>
        </div> */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-xl font-semibold text-gray-900">My Drive</div>
          <div className="flex items-center space-x-6">
            <input
              type="text"
              placeholder="Search in Drive"
              className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
            />
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg transform transition duration-300 hover:bg-teal-700">
              Create New
            </button>
          </div>
        </div>

        {/* Suggested Files */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Suggested Files</h3>
          <table className="w-full text-sm text-left text-gray-600">
            <thead>
              <tr className="border-b">
                <th className="p-3">Name</th>
                <th className="p-3">Reason Suggested</th>
                <th className="p-3">Owner</th>
                <th className="p-3">Location</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">{file.name}</td>
                  <td className="p-3">{file.reason}</td>
                  <td className="p-3">{file.owner}</td>
                  <td className="p-3">{file.location}</td>
                  <td className="p-3 text-teal-600 cursor-pointer hover:underline">Open</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-8">
          <div className="text-sm text-gray-600">
            Page 1 of 12
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">1</button>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">2</button>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
