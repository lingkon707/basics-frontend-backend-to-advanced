import React from "react";

const justifyitems = () => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-items-start bg-black">
     
      <div className="bg-blue-400 text-white p-4">
        A short sentence is under 7 words or under 20 .
      </div>
      <div className="bg-orange-900 text-white p-4">
        1 line height dekho || The Rotter's Clusin.
      </div>
      <div className="bg-sky-400 w-full"></div>

      <div className="bg-blue-500 text-white p-4">A - 2 line height dekho</div>
      <div className="bg-orange-500 text-white p-4">
        B - 2 line height dekho
      </div>
      <div className="bg-blue-700 text-white p-4">
        It is difficult to come up with a magic number or formula for
        determining when a sentence is too long
      </div>

      <div className="bg-blue-700 text-white p-4">
        These things don't matter. A short sentence is not under 7 words or
        under 20 syllables.
      </div>
      <div className="bg-orange-500 text-white p-4">
        However, Jonathan Coe's The Rotter's Club currently holds the record
        with a single sentence
      </div>

      <div className="bg-orange-500 text-white p-4">
        A 12-word sentence that minces words e a crystal clear,
        beautifully-composed 22-word sentence is sometimes just perfect. In
        general, though
      </div>
    
    </div>
  );
};

export default justifyitems;
