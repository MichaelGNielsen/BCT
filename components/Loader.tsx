
import React from 'react';

interface LoaderProps {
  t: { [key: string]: string };
}

export const Loader: React.FC<LoaderProps> = ({ t }) => (
  <div className="flex flex-col items-center justify-center gap-4 my-8">
    <div className="w-16 h-16 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
    <p className="text-indigo-300">{t.loaderText}</p>
  </div>
);
