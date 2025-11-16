
import React from 'react';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center p-4">
    <p className="text-4xl font-bold text-indigo-400">{value}</p>
    <p className="text-sm text-gray-400 mt-1">{label}</p>
  </div>
);

const Logo: React.FC<{ name: string; path: string }> = ({ name, path }) => (
    <svg role="img" aria-label={name} className="h-10 w-auto text-gray-500 hover:text-gray-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 128 32">
        <title>{name}</title>
        <path d={path} />
    </svg>
);


const logos = [
    { name: 'Tryg', path: 'M6,0 L6,10 L12,10 L12,12 L6,12 L6,22 L12,22 L12,24 L6,24 L6,32 L4,32 L4,24 L0,24 L0,22 L4,22 L4,12 L0,12 L0,10 L4,10 L4,0 Z M20,0 L20,32 L18,32 L18,0 Z M24,0 L36,0 L36,2 L26,2 L26,14 L34,14 L34,16 L26,16 L26,30 L36,30 L36,32 L24,32 Z' },
    { name: 'Nordea', path: 'M40,16 L40,0 L38,0 L38,32 L40,32 L40,18 L50,32 L52,32 L52,0 L50,0 L50,14 L40,0 Z M60,0 L66,0 L70,16 L74,0 L80,0 L72,32 L68,32 Z M84,0 L96,0 L96,2 L86,2 L86,14 L94,14 L94,16 L86,16 L86,30 L96,30 L96,32 L84,32 Z' },
    { name: 'Wolt', path: 'M98,0 L102,16 L106,0 L110,0 L114,16 L118,0 L122,0 L112,32 L108,32 Z' },
    { name: 'Vestas', path: 'M0,32 L8,0 L12,0 L4,32 Z M14,0 L22,32 L18,32 L10,0 Z M24,0 L36,0 L36,2 L26,2 L26,14 L34,14 L34,16 L26,16 L26,30 L36,30 L36,32 L24,32 Z' },
];

const allLogos = [...logos, ...logos];

interface SocialProofProps {
  t: { [key: string]: string };
}

export const SocialProof: React.FC<SocialProofProps> = ({ t }) => {
  return (
    <section className="w-full flex flex-col items-center gap-12">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{t.socialProofTitle}</h2>
        <p className="mt-4 text-gray-300">
          {t.socialProofSubtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-700 border border-slate-700 rounded-lg w-full max-w-3xl bg-slate-900/50">
        <StatCard value={t.stat1Value} label={t.stat1Label} />
        <StatCard value={t.stat2Value} label={t.stat2Label} />
        <StatCard value={t.stat3Value} label={t.stat3Label} />
      </div>
      <div className="w-full max-w-4xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {allLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
              <Logo name={logo.name} path={logo.path} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
