import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
      <Head>
        <title>Video Call Interface</title>
        <meta name="description" content="Modern Video Call Interface" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white p-6 border-r border-gray-200 flex flex-col space-y-8">
        {/* Settings */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Settings</h3>
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-teal-500" />
              <span className="text-gray-700">Noise suppression</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-teal-500" />
              <span className="text-gray-700">Video stabilization</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-teal-500" />
              <span className="text-gray-700">Automatic subtitles</span>
            </div>
          </div>
        </div>

        {/* AI Summary */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">AI Summary</h3>
          <div className="mt-4 text-gray-600">
            <p className="text-sm">Key points:</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Discussed changing the communication tone</li>
              <li>Visual inspiration examples: Apple, Figma</li>
              <li>Design phase budget approved</li>
            </ul>
            <button className="mt-4 bg-teal-600 text-white px-6 py-3 rounded-lg transform transition duration-300 hover:bg-teal-700">
              Send by email
            </button>
          </div>
        </div>

        {/* Participants and Chat */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Participants (7)</h3>
          <div className="space-y-4 mt-4 text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Tony Ware</span>
              <span className="text-sm text-gray-500">@tonyware</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Cara Carr</span>
              <span className="text-sm text-gray-500">@caracarr</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Anisa Whitehead</span>
              <span className="text-sm text-gray-500">@anisawhite</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Martina Doherty</span>
              <span className="text-sm text-gray-500">@martinadoh</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-800">Floyd Bolton</span>
              <span className="text-sm text-gray-500">@floydbolton</span>
            </div>
          </div>
        </div>

        {/* Invite Button */}
        <button className="mt-auto bg-blue-600 text-white py-3 rounded-lg transform transition duration-300 hover:bg-blue-700">
          Invite People
        </button>
      </div>

      {/* Video Call Section */}
      <div className="w-full md:w-3/4 p-6 space-y-8">
        {/* Call Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="/profile-picture.jpg" // Replace with your profile image
              alt="User Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-xl font-semibold text-gray-800">Rebranding</span>
          </div>
          <div className="text-sm text-gray-600">09:50 AM, 16 June, 2025</div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main User Video */}
          <div className="relative bg-gray-200 h-60 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-teal-600 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-3xl">Anisa</span>
            </div>
          </div>

          {/* Participant 1 */}
          <div className="relative bg-gray-200 h-40 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-teal-600 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xl">Floyd</span>
            </div>
          </div>

          {/* Participant 2 */}
          <div className="relative bg-gray-200 h-40 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-teal-600 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xl">Cara</span>
            </div>
          </div>

          {/* Participant 3 */}
          <div className="relative bg-gray-200 h-40 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-teal-600 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xl">Martina</span>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex justify-between items-center mt-8">
          <button className="text-gray-800 transform transition duration-300 hover:text-teal-600">
            <span className="text-2xl">🎙️</span>
            <span className="text-sm">Mute</span>
          </button>
          <button className="text-gray-800 transform transition duration-300 hover:text-teal-600">
            <span className="text-2xl">📹</span>
            <span className="text-sm">Video</span>
          </button>
          <button className="text-gray-800 transform transition duration-300 hover:text-teal-600">
            <span className="text-2xl">📤</span>
            <span className="text-sm">Leave</span>
          </button>
        </div>
      </div>
    </div>
  );
}
