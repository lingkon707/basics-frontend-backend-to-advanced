import React from 'react';

function ITSolutionSlider() {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Elevate Your Business with IT Solutions</h1>
          <p className="text-gray-600 text-lg mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley and scrambled it to make a type specimen book. It has survived not only five centuries into electronic typesetting remaining essentially unchanged.
          </p>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-6">
          {/* Left Image */}
          <div className="flex-1">
            <img
              src="/https://www.fruitsmith.com/pub/media/wysiwyg/Persimmons.jpg" // Placeholder image URL (replace with your own image URL)
              alt="IT Solution 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Right Image */}
          <div className="flex-1">
            <img
              src="/https://www.fruitsmith.com/pub/media/wysiwyg/Orange.jpg" // Placeholder image URL (replace with your own image URL)
              alt="IT Solution 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 p-6 bg-gray-50 rounded-b-lg">
          <button className="text-gray-700 hover:text-gray-900 text-lg">
            &#8592; Previous
          </button>
          <button className="text-gray-700 hover:text-gray-900 text-lg">
            Next &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ITSolutionSlider;
