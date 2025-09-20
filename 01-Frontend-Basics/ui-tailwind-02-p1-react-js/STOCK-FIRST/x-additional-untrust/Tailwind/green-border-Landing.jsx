import React from 'react';

const ProjectPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-teal-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Professional Project</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#section1" className="hover:underline">Section 1</a></li>
              <li><a href="#section2" className="hover:underline">Section 2</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto p-12 flex flex-wrap gap-12 max-w-screen-xl">
        {/* Card 1 */}
        <div className="w-full lg:w-1/3 max-h-screen text-black bg-white p-6 rounded-lg shadow-lg mt-8 border-8 border-teal-500">
          <h2 className="text-xl font-semibold text-teal-600 mb-4">Section A</h2>
          <p className="text-gray-700">
            This section contains an overview of the first aspect of the project. We can describe the features, details, and objectives here. Adding relevant content will engage the user and provide valuable information.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-1/3 max-h-screen text-black bg-white p-6 rounded-lg shadow-lg mt-8 border-16 border-teal-500">
          <h2 className="text-xl font-semibold text-teal-600 mb-4">Section B</h2>
          <p className="text-gray-700">
            This section explains the second part of the project. Include more details, visuals, or key features here. This will help the user understand the complete scope of the project.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full lg:w-1/3 max-h-screen text-black bg-white p-6 rounded-lg shadow-lg mt-8 border-8 border-teal-500">
          <h2 className="text-xl font-semibold text-teal-600 mb-4">Section C</h2>
          <p className="text-gray-700">
            In this section, add additional context, like project outcomes, timelines, or next steps. Providing a summary or roadmap will guide the users in understanding the bigger picture.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Professional Project. All rights reserved.</p>
          <p>
            <a href="mailto:contact@project.com" className="hover:underline">Contact Us</a> | <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPage;
