import React from 'react';

function CodeView() {
  return (
    <div className="bg-[#1e1e1e] rounded-lg shadow-lg w-full max-w-3xl mx-auto my-8 overflow-hidden font-mono text-sm">
      {/* Header */}
      <div className="bg-[#2d2d2d] px-4 py-2 text-gray-300 font-semibold border-b border-gray-700 flex items-center justify-between">
        <span>Video.js</span>
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>

      {/* Code Block */}
      <pre className="p-5 text-gray-100 overflow-x-auto whitespace-pre">
<code>
<span className="text-purple-400">function</span> <span className="text-cyan-400">Video</span><span className="text-white">(&#123; video &#125;) &#123;</span>{'\n'}
  <span className="text-purple-400">return</span> (<span className="text-white">{'\n'}    &lt;</span><span className="text-green-400">div</span><span className="text-white">&gt;</span>{'\n'}
      &nbsp;&nbsp;&lt;<span className="text-blue-400">Thumbnail</span> <span className="text-pink-400">video</span>=&#123;video&#125; /&gt;{'\n'}
      &nbsp;&nbsp;&lt;<span className="text-blue-400">a</span> <span className="text-pink-400">href</span>=&#123;video.url&#125;&gt;{'\n'}
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">h3</span>&gt;&#123;video.<span className="text-amber-400">title</span>&#125;&lt;/<span className="text-blue-400">h3</span>&gt;{'\n'}
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">p</span>&gt;&#123;video.<span className="text-amber-400">description</span>&#125;&lt;/<span className="text-blue-400">p</span>&gt;{'\n'}
      &nbsp;&nbsp;&lt;/<span className="text-blue-400">a</span>&gt;{'\n'}
      &nbsp;&nbsp;&lt;<span className="text-blue-400">LikeButton</span> <span className="text-pink-400">video</span>=&#123;video&#125; /&gt;{'\n'}
    &lt;/<span className="text-green-400">div</span>&gt;{'\n'}
  );
<span className="text-white">&#125;</span>
</code>
      </pre>
    </div>
  );
}

export default CodeView;
