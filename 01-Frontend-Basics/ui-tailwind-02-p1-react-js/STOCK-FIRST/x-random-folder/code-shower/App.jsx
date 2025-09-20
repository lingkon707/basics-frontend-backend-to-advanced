import React, { useEffect, useState } from 'react';
import CodeDisplay from './CodeDisplay';

// Import JSON data (assuming codes.json is in the same folder)
import codesData from './codes.json';

const CodeGrid = () => {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    setCodes(codesData);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {codes.map((code, index) => (
        <CodeDisplay key={index} title={code.title} code={code.code} />
      ))}
    </div>
  );
};

export default CodeGrid;
