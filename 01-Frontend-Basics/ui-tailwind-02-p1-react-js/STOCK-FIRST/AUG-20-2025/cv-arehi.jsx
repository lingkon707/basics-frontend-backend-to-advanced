import React from 'react';

const App = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-1/4 p-8 flex flex-col">
        <img src="https://m.media-amazon.com/images/I/61BGLZw9P1L._UF1000,1000_QL80_.jpg" alt="Alex Smith" className="rounded-full w-32 h-32 mx-auto" />
        <h2 className="text-center text-xl mt-4">Alex Smith</h2>
        <p className="text-center text-sm mt-2">Frontend Developer</p>
        <nav className="mt-6">
          <ul className="space-y-4">
            <li><a href="#about" className="hover:text-gray-400">About Me</a></li>
            <li><a href="#resume" className="hover:text-gray-400">Resume</a></li>
            <li><a href="#portfolio" className="hover:text-gray-400">Portfolio</a></li>
            <li><a href="#blog" className="hover:text-gray-400">Blog</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
        <footer className="mt-auto text-center text-sm text-gray-400">
          <p>&#169; 2025 All rights reserved.</p>
        </footer>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Alex Smith</h1>
        <h2 className="text-2xl text-gray-600 mt-2">Frontend Developer</h2>

        <section id="about" className="mt-8 text-lg text-gray-800">
          <p>
            Praesent sed aliquam arcu, non accumsan neque. In odio ante, vulputate ac magna vel, pharetra lobortis quam. Duis enim tortor, egestas et felis id, lobortis malesuada magna. Nunc sit amet sagittis nisi, eu semper nisl. Cras ut dictum nisl. Donec tincidunt eget orci.
          </p>
          <p className="mt-4">
            Aliquam mollis, leo nec commodo facilisis, turpis lorem dapibus erat, sed consectetur nunc nulla ac elit. Suspendisse dictum id dui mollis auctor. Etiam id sapien neque. Cras nec rhoncus sem. Mauris metus ligula, varius vel iaculis at, pulvinar tincidunt magna.
          </p>
        </section>

        <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-400">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default App;
