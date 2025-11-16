
import React from 'react';

export const BackgroundAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(120,82,255,0.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(120,82,255,0.15),rgba(255,255,255,0))]"></div>

      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-indigo-500/10 rounded-full animate-float"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-fuchsia-500/10 rounded-lg animate-float-reverse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-indigo-500/10 rounded-md animate-float"></div>
      <div className="absolute bottom-1/3 right-1/2 w-8 h-8 bg-fuchsia-500/10 rounded-full animate-float-reverse"></div>
      <div className="hidden md:block absolute top-20 right-48 w-32 h-32 bg-indigo-500/5 rounded-xl animate-float-reverse"></div>
      <div className="hidden md:block absolute bottom-10 left-40 w-40 h-40 bg-fuchsia-500/5 rounded-full animate-float"></div>
    </div>
  );
};
