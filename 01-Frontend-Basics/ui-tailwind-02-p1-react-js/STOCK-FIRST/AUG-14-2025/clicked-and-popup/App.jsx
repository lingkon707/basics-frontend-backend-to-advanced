import React from 'react';
import AddShortcut from './AddShortcut'; // ✅ default import from correct path

function App() {
  const handleClick = () => {
    alert('Add Shortcut Clicked!');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <AddShortcut onClick={handleClick} />
    </div>
  );
}

export default App;
