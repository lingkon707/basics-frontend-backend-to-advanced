import React, { useState } from 'react';

const RadioButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Left Box with Red Border */}
      <div className={`w-96 p-6 border-4 ${selectedOption ? 'border-green-500' : 'border-red-500'} rounded-lg shadow-lg bg-white`}>
        <div className="flex justify-between items-start mb-4">
          {/* Status Icon */}
          <div className="flex">
            <div className={`${selectedOption ? 'text-green-500' : 'text-red-500'} text-2xl`}>
              {selectedOption ? '✔' : '✘'}
            </div>
          </div>
        </div>
        {/* Radio Button Group Label */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Radio button group label:</label>
          <div className="space-y-2">
            {/* Radio Button 1 */}
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Option 1"
                checked={selectedOption === 'Option 1'}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="form-radio text-teal-500"
              />
              <span className="text-gray-700">Radio button label that is too long and wraps to multiple lines</span>
            </label>
            {/* Radio Button 2 */}
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Option 2"
                checked={selectedOption === 'Option 2'}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="form-radio text-teal-500"
              />
              <span className="text-gray-700">Radio button label</span>
            </label>
            {/* Radio Button 3 */}
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Option 3"
                checked={selectedOption === 'Option 3'}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="form-radio text-teal-500"
              />
              <span className="text-gray-700">Radio button label</span>
            </label>
            {/* Radio Button 4 */}
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Option 4"
                checked={selectedOption === 'Option 4'}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="form-radio text-teal-500"
              />
              <span className="text-gray-700">Radio button label</span>
            </label>
          </div>
        </div>
      </div>

      {/* Right Box with Green Border */}
      <div className={`w-96 p-6 border-4 ${selectedOption ? 'border-green-500' : 'border-red-500'} rounded-lg shadow-lg bg-white`}>
        <div className="flex justify-between items-start mb-4">
          {/* Status Icon */}
          <div className="flex">
            <div className={`${selectedOption ? 'text-green-500' : 'text-red-500'} text-2xl`}>
              {selectedOption ? '✔' : '✘'}
            </div>
          </div>
        </div>
        {/* Radio Button Group Label */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Radio button group label:</label>
          <div className="space-y-2">
            {/* Radio Button 1 */}
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Option 1"
                checked={selectedOption === 'Option 1'}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="form-radio text-teal-500"
              />
              <span className="text-gray-700">Radio button label that is too long and wraps to multiple lines</span>
            </label>
            {/* Radio Button 2 */}
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Option 2"
                checked={selectedOption === 'Option 2'}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="form-radio text-teal-500"
              />
              <span className="text-gray-700">Radio button label</span>
            </label>
            {/* Radio Button 3 */}
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Option 3"
                checked={selectedOption === 'Option 3'}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="form-radio text-teal-500"
              />
              <span className="text-gray-700">Radio button label</span>
            </label>
            {/* Radio Button 4 */}
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Option 4"
                checked={selectedOption === 'Option 4'}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="form-radio text-teal-500"
              />
              <span className="text-gray-700">Radio button label</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioButtonGroup;
