import React from "react";

// Main component for the footer navigation
const Main = () => {
  return (
    <div className="bg-dark-blue bg-amber-950 text-white py-12 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* CONTENT SECTION */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Content</h3>
          <ul>
            <li>Authors</li>
            <li>Icons</li>
            <li>Stickers</li>
            <li>Interface Icons</li>
            <li>Animated Icons</li>
            <li>Icon Tags</li>
            <li>Stickers Tags</li>
          </ul>
        </div>

        {/* TOOLS SECTION */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Tools</h3>
          <ul>
            <li>API</li>
            <li>Google Workspace</li>
          </ul>
        </div>

        {/* HELP SECTION */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul>
            <li>Support</li>
            <li>FAQs</li>
            <li>Icon Styles</li>
            <li>Icons Editor</li>
            <li>Flaticon Collections</li>
            <li>Follow</li>
            <li>Merchandising License</li>
          </ul>
        </div>

        {/* COMPANY SECTION */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li>About</li>
            <li>Contact Us</li>
            <li>Our License</li>
            <li>Blog</li>
            <li>Plans and Pricing</li>
            <li>What's New</li>
          </ul>
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <div className="col-span-1 md:col-span-3 flex justify-between items-center mt-8">
          <div className="flex gap-4">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Contributor Access</button>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg">Go Premium</button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-white">F</a>
            <a href="#" className="text-white">X</a>
            <a href="#" className="text-white">P</a>
            <a href="#" className="text-white">I</a>
            <a href="#" className="text-white">Y</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
        <div className="text-sm">
          <p>Copyright © 2010-2025 Freepik Company S.L. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-sm">Terms & Conditions</a>
          <a href="#" className="text-sm">Privacy Policy</a>
          <a href="#" className="text-sm">Cookies Policy</a>
          <a href="#" className="text-sm">Copyrights Notification</a>
        </div>
      </div>
    </div>
  );
};

export default Main;
