
import React from 'react';

export const Loader: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-4 my-8">
    <div className="w-16 h-16 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
    <p className="text-indigo-300">Genererer AI-anbefalinger...</p>
  </div>
);
