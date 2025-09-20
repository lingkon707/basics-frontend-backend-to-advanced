import React from 'react';

const CodeDisplay = () => {
  const code = `
import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io();
socket.on('connect', () => { console.log(\`socket connected (\${socket.id})\`) });
socket.on('disconnect', () => { console.log('socket disconnected') });

export default function useSocket(eventName, cb) {
  useEffect(() => {
    socket.on(eventName, cb);

    return function useSocketCleanup() {
      socket.off(eventName, cb);
    };
  }, [eventName, cb]);

  return socket;
}`;

  return (
    <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
      <pre className="text-white font-mono text-sm overflow-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
