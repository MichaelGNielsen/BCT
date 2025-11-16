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
    { name: 'Tryg', path: 'M64 2 C 30 2 20 10 20 16 L 20 22 L 64 30 L 108 22 L 108 16 C 108 10 98 2 64 2 Z' },
    { name: 'Vestas', path: 'M64 16 L 96 4 L 72 16 L 96 28 Z M64 16 L 32 4 L 56 16 L 32 28 Z' },
    { name: 'Novo Nordisk', path: 'M64 30 C 40 30 20 15 20 2 M108 2 C 108 15 88 30 64 30' },
    { name: 'Nilfisk', path: 'M40 30 V 2 H 48 L 76 22 V 2 H 84 V 30 H 76 L 48 10 V 30 H 40 Z' },
    { name: 'Nykredit', path: 'M64 2 L24 22 H 44 V 30 H 84 V 22 H 104 L 64 2 Z' },
    { name: 'Maersk', path: 'M64 2 L77 21 L98 21 L81 32 L88 50 L64 38 L40 50 L47 32 L30 21 L51 21 Z' },
    { name: 'Ørsted', path: 'M64 16 m-14,0 a14,14 0 1,0 28,0 a14,14 0 1,0 -28,0 M64 16 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0' },
];

const allLogos = [...logos, ...logos, ...logos];

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
