
import React, { useState, useCallback } from 'react';
import { HeroSection } from './components/HeroSection';
import { SocialProof } from './components/SocialProof';
import { Suggestions } from './components/Suggestions';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { Loader } from './components/Loader';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { getAnalysis } from './services/geminiService';
import type { AnalysisResult } from './types';
import { translations } from './lib/translations';

const App: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>('da');

  const t = translations[language as keyof typeof translations] || translations.da;

  const handleAnalyze = useCallback(async () => {
    if (!url.trim()) {
      setError(t.errorUrl);
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const result = await getAnalysis(url, language);
      setAnalysis(result);
    } catch (err) {
      console.error(err);
      setError(t.errorGeneral);
    } finally {
      setIsLoading(false);
    }
  }, [url, language, t]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-950 text-gray-100 font-sans isolate">
      <BackgroundAnimation />
      
      <header className="absolute top-0 right-0 p-4 sm:p-6 lg:p-8 z-20">
        <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-16 md:gap-24">
          <HeroSection 
            url={url} 
            setUrl={setUrl} 
            handleAnalyze={handleAnalyze} 
            isLoading={isLoading}
            t={t}
          />

          {isLoading && <Loader t={t} />}
          
          {error && <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg text-left max-w-2xl mx-auto">{error}</div>}
          
          {analysis && <Suggestions analysis={analysis} t={t} />}
          
          <SocialProof t={t} />
        </div>
      </main>
    </div>
  );
};

export default App;
