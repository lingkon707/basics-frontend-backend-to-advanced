import React from 'react';
import { 
  CubeIcon, 
  DesktopComputerIcon, 
  RefreshIcon, 
  SupportIcon, 
  CodeIcon, 
  PuzzleIcon, 
  DeviceMobileIcon, 
  DocumentTextIcon 
} from '@heroicons/react/outline';

const features = [
  {
    icon: <CubeIcon className="h-8 w-8 text-indigo-500" />,
    title: "600+ Components",
    description: "All you need to build a professional website is there",
  },
  {
    icon: <DesktopComputerIcon className="h-8 w-8 text-indigo-500" />,
    title: "160+ Demos",
    description: "Bulkit offers endless possibilities for your pages",
  },
  {
    icon: <RefreshIcon className="h-8 w-8 text-indigo-500" />,
    title: "Lifetime Updates",
    description: "Buying Bulkit gives you access to lifetime updates",
  },
  {
    icon: <SupportIcon className="h-8 w-8 text-indigo-500" />,
    title: "Active Support",
    description: "Our support helps you solve any issues you have",
  },
  {
    icon: <CodeIcon className="h-8 w-8 text-indigo-500" />,
    title: "Clean Code",
    description: "Bulkit’s code is structured and easy to understand",
  },
  {
    icon: <PuzzleIcon className="h-8 w-8 text-indigo-500" />,
    title: "Premium Plugins",
    description: "FileUploader and Icons Mind are included ($90 value)",
  },
  {
    icon: <DeviceMobileIcon className="h-8 w-8 text-indigo-500" />,
    title: "Fully Responsive",
    description: "Bulkit is built with Bulma, a mobile first framework",
  },
  {
    icon: <DocumentTextIcon className="h-8 w-8 text-indigo-500" />,
    title: "Extensive Docs",
    description: "A nice documentation to help you get started fast",
  },
];

const Features = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border p-6 rounded-lg">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
