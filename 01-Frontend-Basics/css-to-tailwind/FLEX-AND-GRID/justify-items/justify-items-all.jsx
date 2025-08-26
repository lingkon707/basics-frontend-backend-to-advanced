import React from "react";

const justifyitems = () => {
  return (
    <main>
      <h2 className="p-3 text-4xl">justify-items-start</h2>

      <div class="grid grid-flow-col justify-items-start bg-black">  
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">05</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">06</div>
      </div>
      <br />
<h2 className="p-3 text-4xl">justify-items-end</h2>
      
      <div class="grid grid-flow-col justify-items-end bg-black">  
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">05</div>
      </div>
      <br />
      <h2 className="p-3 text-4xl">justify-items-center</h2>
      <div class="grid grid-flow-col justify-items-center bg-black">  
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-900 text-white p-5 text-2xl">Molly's Monologue Sent me</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">05</div>
      </div>
      <br />

      <h2 className="p-3 text-4xl">justify-items-center-safe</h2>
      <div class="grid grid-flow-col justify-items-center-safe bg-black">  
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-900 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">01</div>
        <div className="bg-blue-400 text-white p-5 text-2xl">Molly's Monologue Sent me</div>
        <div className="bg-blue-800 text-white p-5 text-2xl">05</div>
      </div>
      <br />
     
    </main>
  );
};

export default justifyitems;
