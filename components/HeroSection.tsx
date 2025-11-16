
import React from 'react';

interface HeroSectionProps {
  url: string;
  setUrl: (url: string) => void;
  handleAnalyze: () => void;
  isLoading: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ url, setUrl, handleAnalyze, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAnalyze();
  };

  return (
    <section className="flex flex-col items-center gap-6">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        Opdag AI-muligheder
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
        Vi hjælper virksomheder med at træde ind i den digitale tidsalder. Lær hvordan AI kan transformere din forretning med personaliserede anbefalinger.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 w-full max-w-xl flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="f.eks. virksomhed.dk"
          className="w-full sm:flex-1 px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          aria-label="Virksomhedens hjemmeside URL"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-indigo-500 transition-all duration-300 disabled:bg-indigo-900 disabled:cursor-not-allowed disabled:text-gray-400 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyserer...
            </>
          ) : (
            'Analyser min virksomhed'
          )}
        </button>
      </form>
    </section>
  );
};
