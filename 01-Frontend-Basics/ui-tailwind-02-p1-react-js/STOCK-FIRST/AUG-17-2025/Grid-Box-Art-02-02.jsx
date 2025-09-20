import React from "react";

export default function LetterGrid() {
  return (
    <div className="space-y-4 p-4 w-full max-w-full">
      {/* Full width block */}
      <div className="flex w-full">
        <div className="bg-blue-600 text-white rounded-md flex justify-center items-center w-full h-16">
          a
        </div>
      </div>

      {/* Two blocks split evenly */}
      <div className="flex w-full space-x-4">
        <div className="bg-blue-600 text-white rounded-md flex justify-center items-center flex-1 h-16">
          b
        </div>
        <div className="bg-blue-600 text-white rounded-md flex justify-center items-center flex-1 h-16">
          c
        </div>
      </div>

      {/* Three blocks split evenly */}
      <div className="flex w-full space-x-4">
        <div className="bg-blue-600 text-white rounded-md flex justify-center items-center flex-1 h-16">
          d
        </div>
        <div className="bg-blue-600 text-white rounded-md flex justify-center items-center flex-1 h-16">
          e
        </div>
        <div className="bg-blue-600 text-white rounded-md flex justify-center items-center flex-1 h-16">
          f
        </div>
      </div>

      {/* Four blocks split evenly */}
      <div className="flex w-full space-x-4">
        <div className="bg-blue-600 text-white rounded-md flex justify-center items-center flex-1 h-16">
          g
        </div>
        <div className="bg-blue-600 text-white rounded-md flex justify-center items-center flex-1 h-16">
          h
        </div>
        <div className="bg-blue-600 text-white rounded-md flex justify-center items-center flex-1 h-16">
          i
        </div>
        <div className="bg-blue-600 text-white rounded-md flex justify-center items-center flex-1 h-16">
          j
        </div>
      </div>

      {/* Six blocks split evenly */}
      <div className="flex w-full space-x-4">
        {["k", "l", "m", "n", "o", "p"].map((letter) => (
          <div
            key={letter}
            className="bg-blue-600 text-white rounded-md flex justify-center items-center flex-1 h-16"
          >
            {letter}
          </div>
        ))}
      </div>

      {/* Twelve blocks split evenly */}
      <div className="flex w-full space-x-2 flex-wrap">
        {[
          "q", "r", "s", "t", "u", "v",
          "w", "x", "y", "z", "aa", "ab",
        ].map((letter) => (
          <div
            key={letter}
            className="bg-blue-600 text-white rounded-md flex justify-center items-center w-[7.5%] h-16 mb-2"
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}
