import React from 'react'

const JustifyContent = () => {
  return (
    <main className='bg-black'>

        {/* Justify Start */}
        <div className="flex justify-start border p-4 bg-white">
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Orange.jpg" alt="Orange" className="w-20 h-20 object-cover" />
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Persimmons.jpg" alt="Persimmons" className="w-20 h-20 object-cover" />
        </div>

        {/* Justify End */}
        <div className="flex justify-end border p-4 bg-white">
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/White_Peach.jpg" alt="White Peach" className="w-20 h-20 object-cover" />
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Clementine_Orange.jpg" alt="Clementine Orange" className="w-20 h-20 object-cover" />
        </div>

        {/* Justify Center */}
        <div className="flex justify-center border p-4 bg-white">
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Golden_Berry.jpg" alt="Golden Berry" className="w-20 h-20 object-cover" />
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Muskmelon.jpg" alt="Muskmelon" className="w-20 h-20 object-cover" />
        </div>

        {/* Justify Between */}
        <div className="flex justify-between border p-4 bg-white">
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Papaya.jpg" alt="Papaya" className="w-20 h-20 object-cover" />
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Apricots.jpg" alt="Apricots" className="w-20 h-20 object-cover" />
        </div>

        {/* Justify Around */}
        <div className="flex justify-around border p-4 bg-white">
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Mangoes.jpg" alt="Mangoes" className="w-20 h-20 object-cover" />
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Orange.jpg" alt="Orange" className="w-20 h-20 object-cover" />
        </div>

        {/* Justify Evenly */}
        <div className="flex justify-evenly border p-4 bg-white">
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Persimmons.jpg" alt="Persimmons" className="w-20 h-20 object-cover" />
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/White_Peach.jpg" alt="White Peach" className="w-20 h-20 object-cover" />
        </div>

        {/* Justify Stretch */}
        <div className="flex justify-stretch border p-4 bg-white">
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Clementine_Orange.jpg" alt="Clementine Orange" className="w-20 h-20 object-cover" />
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Golden_Berry.jpg" alt="Golden Berry" className="w-20 h-20 object-cover" />
        </div>

        {/* Justify Baseline */}
        <div className="flex justify-baseline border p-4 bg-white">
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Muskmelon.jpg" alt="Muskmelon" className="w-20 h-20 object-cover" />
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Papaya.jpg" alt="Papaya" className="w-20 h-20 object-cover" />
        </div>

        {/* Justify Normal */}
        <div className="flex justify-normal border p-4 bg-white">
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Apricots.jpg" alt="Apricots" className="w-20 h-20 object-cover" />
          <img src="https://www.fruitsmith.com/pub/media/wysiwyg/Mangoes.jpg" alt="Mangoes" className="w-20 h-20 object-cover" />
        </div>

 
    </main>
  )
}

export default JustifyContent;
