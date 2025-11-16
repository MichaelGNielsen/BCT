
import React from 'react';
import type { AnalysisResult } from '../types';

interface SuggestionsProps {
  analysis: AnalysisResult;
}

const SuggestionCard: React.FC<{ title: string; content: string; icon: React.ReactNode }> = ({ title, content, icon }) => (
  <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-left flex flex-col gap-4 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-900/50">
    <div className="flex items-center gap-3">
      <div className="bg-indigo-600/20 text-indigo-400 p-2 rounded-md">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 whitespace-pre-wrap">{content}</p>
  </div>
);


const BoltIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const ChartBarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const RocketLaunchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

export const Suggestions: React.FC<SuggestionsProps> = ({ analysis }) => {
  return (
    <section className="w-full flex flex-col items-center gap-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Dine Personaliserede Anbefalinger</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-1 gap-6">
        <SuggestionCard title="Hurtigt Forslag" content={analysis.short} icon={<BoltIcon />} />
        <SuggestionCard title="Udvidet Forslag" content={analysis.medium} icon={<ChartBarIcon />} />
        <SuggestionCard title="Udførlig Plan" content={analysis.detailed} icon={<RocketLaunchIcon />} />
      </div>
    </section>
  );
};
