import React from 'react';

const AboutMe = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-6 flex flex-col items-center">
        <img
          src="https://menandhealing.ca/wp-content/uploads/2020/09/banner-psy-735x550.jpg"
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover mb-6"
        />
        <h2 className="font-bold text-xl mb-2">Alex Smith</h2>
        <p className="text-sm mb-6">Frontend Developer</p>

        <div className="flex space-x-4 mb-6">
          <a href="#" className="text-white hover:text-gray-200">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <div className="mt-auto text-xs text-center text-gray-400">
          <p>&copy; 2020 All rights reserved.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 bg-white p-10">
        <h1 className="text-4xl font-bold mb-4">Alex Smith</h1>
        <h2 className="text-xl text-gray-600 mb-4">Frontend Developer</h2>
        <p className="text-gray-700 mb-6">
          Praesent sed aliquam arcu, non accumsan neque. In odio ante, vulputate ac magna vel, pharetra lobortis quam.
          Duis enim tortor, egestas et felis id, lobortis malesuada magna. Nunc sit amet sagittis nisi, eu semper nisl.
          Cras ut dictum nisl. Donec tincidunt eget orci.
        </p>
        <p className="text-gray-700 mb-6">
          Aliquam mollis, leo nec commodo facilisis, turpis lorem dapibus erat, sed consectetur nunc nulla ac elit.
          Suspendisse dictum id dui mollis auctor. Etiam id sapien neque. Cras nec rhoncus sem. Mauris metus ligula,
          varius vel iaculis at, pulvinar tincidunt magna.
        </p>
        <a
          href="#"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg inline-block hover:bg-blue-600"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
