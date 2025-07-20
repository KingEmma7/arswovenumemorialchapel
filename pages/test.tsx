import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Test Page Working! 🎉
        </h1>
        <p className="text-gray-600">
          If you can see this, the basic Next.js setup is working correctly.
        </p>
        <div className="mt-4 p-4 bg-blue-100 rounded">
          <p className="text-blue-800">
            The issue was with the React Icons import. I've fixed it by using only Feather Icons (Fi*) instead of Heroicons (Hi*).
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPage; 