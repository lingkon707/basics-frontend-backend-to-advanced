import React from 'react'

const JustifyContent = () => {
  return (
    <main className='bg-black'>
        
        {/* Justify Start */}
        <div className="flex justify-start border p-4 bg-white">
          <div className="w-20 h-20 bg-blue-500"></div>
          <div className="w-20 h-20 bg-green-500"></div>
        </div>

        {/* Justify End */}
        <div className="flex justify-end border p-4 bg-white">
          <div className="w-20 h-20 bg-yellow-500"></div>
          <div className="w-20 h-20 bg-pink-500"></div>
        </div>

        {/* Justify Center */}
        <div className="flex justify-center border p-4 bg-white">
          <div className="w-20 h-20 bg-red-500"></div>
          <div className="w-20 h-20 bg-teal-500"></div>
        </div>

        {/* Justify Between */}
        <div className="flex justify-between border p-4 bg-white">
          <div className="w-20 h-20 bg-indigo-500"></div>
          <div className="w-20 h-20 bg-yellow-400"></div>
        </div>

        {/* Justify Around */}
        <div className="flex justify-around border p-4 bg-white">
          <div className="w-20 h-20 bg-purple-500"></div>
          <div className="w-20 h-20 bg-orange-500"></div>
        </div>

        {/* Justify Evenly */}
        <div className="flex justify-evenly border p-4 bg-white">
          <div className="w-20 h-20 bg-gray-500"></div>
          <div className="w-20 h-20 bg-lime-500"></div>
        </div>

        {/* Justify Stretch */}
        <div className="flex justify-stretch border p-4 bg-white">
          <div className="w-20 h-20 bg-cyan-500"></div>
          <div className="w-20 h-20 bg-fuchsia-500"></div>
        </div>

        {/* Justify Baseline */}
        <div className="flex justify-baseline border p-4 bg-white">
          <div className="w-20 h-20 bg-sky-500"></div>
          <div className="w-20 h-20 bg-violet-500"></div>
        </div>

        {/* Justify Normal */}
        <div className="flex justify-normal border p-4 bg-white">
          <div className="w-20 h-20 bg-rose-500"></div>
          <div className="w-20 h-20 bg-amber-500"></div>
        </div>


    </main>
  )
}

export default JustifyContent;
