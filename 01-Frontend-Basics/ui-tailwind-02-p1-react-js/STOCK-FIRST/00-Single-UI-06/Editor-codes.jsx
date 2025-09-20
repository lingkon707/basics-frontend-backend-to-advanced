import React from 'react';

function CodeView() {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md w-fit mx-auto my-6 overflow-hidden font-mono text-sm">
      <div className="bg-gray-200 px-4 py-2 text-gray-700 font-semibold border-b border-gray-300">
        Video.js
      </div>
      <pre className="bg-white p-4 text-gray-800 overflow-x-auto whitespace-pre">
<code>{`function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}`}</code>
      </pre>
    </div>
  );
}

export default CodeView;
