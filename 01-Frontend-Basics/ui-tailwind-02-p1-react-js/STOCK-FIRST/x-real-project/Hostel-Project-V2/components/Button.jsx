'use client';

import React from 'react';

export default function Button({ children, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-1 px-3 rounded transition ${className}`}
    >
      {children}
    </button>
  );
}
