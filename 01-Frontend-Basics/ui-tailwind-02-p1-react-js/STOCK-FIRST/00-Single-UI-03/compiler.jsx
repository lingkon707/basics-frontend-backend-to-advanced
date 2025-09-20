import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeShowcase = () => {
  const [codeColor, setCodeColor] = useState(atomOneDark); // Set initial color

  const handleChangeColor = () => {
    // Randomly switch between two colors
    const randomColor = Math.random() < 0.5 ? atomOneDark : tomorrow;
    setCodeColor(randomColor);
  };

  const codeString = `
function Video({ video }) {
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
}
  `;

  return (
    <div className="py-8 px-6 bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Code Showcase</h2>
      <SyntaxHighlighter language="javascript" style={codeColor} className="rounded-lg shadow-lg p-4">
        {codeString}
      </SyntaxHighlighter>
      <button
        onClick={handleChangeColor}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Change Code Color
      </button>
    </div>
  );
};

export default CodeShowcase;
