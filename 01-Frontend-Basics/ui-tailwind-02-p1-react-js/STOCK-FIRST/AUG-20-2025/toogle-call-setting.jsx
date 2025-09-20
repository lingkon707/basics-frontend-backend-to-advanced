import React, { useState } from "react";

export default function CallSettings() {
  const [voiceChat, setVoiceChat] = useState(true);
  const [videoChat, setVideoChat] = useState(true);
  const [realtimeChat, setRealtimeChat] = useState(true);
  const [incomingCall, setIncomingCall] = useState(true);
  const [blackList1, setBlackList1] = useState(true);
  const [blackList2, setBlackList2] = useState(true);

  return (
    <div className="bg-black p-6 rounded-md max-w-[260px]">
      <h2 className="text-gray-300 mb-4">Call Settings</h2>
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400">Voice Chat</span>
        <button
          onClick={() => setVoiceChat(!voiceChat)}
          className={`w-10 h-6 rounded-full relative ${
            voiceChat ? "bg-green-500" : "bg-gray-700"
          } transition-colors`}
        >
          <span
            className={`block w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
              voiceChat ? "left-5" : "left-1"
            }`}
          />
        </button>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400">Video Chat</span>
        <button
          onClick={() => setVideoChat(!videoChat)}
          className={`w-10 h-6 rounded-full relative ${
            videoChat ? "bg-purple-600" : "bg-gray-700"
          } transition-colors`}
        >
          <span
            className={`block w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
              videoChat ? "left-5" : "left-1"
            }`}
          />
        </button>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400">Realtime Chat</span>
        <button
          onClick={() => setRealtimeChat(!realtimeChat)}
          className={`w-10 h-6 rounded-full relative ${
            realtimeChat ? "bg-pink-500" : "bg-gray-700"
          } transition-colors`}
        >
          <span
            className={`block w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
              realtimeChat ? "left-5" : "left-1"
            }`}
          />
        </button>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400">Incoming Call</span>
        <button
          onClick={() => setIncomingCall(!incomingCall)}
          className={`w-10 h-6 rounded-full relative ${
            incomingCall ? "bg-orange-500" : "bg-gray-700"
          } transition-colors`}
        >
          <span
            className={`block w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
              incomingCall ? "left-5" : "left-1"
            }`}
          />
        </button>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400">Black List</span>
        <button
          onClick={() => setBlackList1(!blackList1)}
          className={`w-10 h-6 rounded-full relative ${
            blackList1 ? "bg-sky-500" : "bg-gray-700"
          } transition-colors`}
        >
          <span
            className={`block w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
              blackList1 ? "left-5" : "left-1"
            }`}
          />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Black List</span>
        <button
          onClick={() => setBlackList2(!blackList2)}
          className={`w-10 h-6 rounded-full relative ${
            blackList2 ? "bg-orange-500" : "bg-gray-700"
          } transition-colors`}
        >
          <span
            className={`block w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
              blackList2 ? "left-5" : "left-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
