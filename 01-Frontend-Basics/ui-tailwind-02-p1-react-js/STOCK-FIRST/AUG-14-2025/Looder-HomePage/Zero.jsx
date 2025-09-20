// App.jsx or Home.jsx
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to the Homepage!</h1>
      {/* Your real content here */}
    </div>
  );
};

export default App;
