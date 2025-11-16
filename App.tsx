
import React, { useState, useCallback } from 'react';
import { HeroSection } from './components/HeroSection';
import { SocialProof } from './components/SocialProof';
import { Suggestions } from './components/Suggestions';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { Loader } from './components/Loader';
import { getAnalysis } from './services/geminiService';
import type { AnalysisResult } from './types';

const App: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = useCallback(async () => {
    if (!url.trim()) {
      setError('Indtast venligst en gyldig URL.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const result = await getAnalysis(url);
      setAnalysis(result);
    } catch (err) {
      console.error(err);
      setError('Der opstod en fejl under analysen. Prøv venligst igen.');
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-950 text-gray-100 font-sans isolate">
      <BackgroundAnimation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-16 md:gap-24">
          <HeroSection 
            url={url} 
            setUrl={setUrl} 
            handleAnalyze={handleAnalyze} 
            isLoading={isLoading} 
          />

          {isLoading && <Loader />}
          
          {error && <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg text-left max-w-2xl mx-auto">{error}</div>}
          
          {analysis && <Suggestions analysis={analysis} />}
          
          <SocialProof />
        </div>
      </main>
    </div>
  );
};

export default App;
