import React from 'react';

// Error Component
const ErrorMessage = ({ message }) => (
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="bg-red-900 border border-red-600 text-white px-6 py-4 rounded-lg">
      <h3 className="font-bold text-lg mb-2">Error</h3>
      <p>{message}</p>
    </div>
  </div>
);

export { ErrorMessage };