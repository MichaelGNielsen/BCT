
import React, { useState, useRef, useEffect } from 'react';

const flags: { [key: string]: string } = {
  da: '🇩🇰',
  en: '🇬🇧',
  fr: '🇫🇷',
  de: '🇩🇪',
  it: '🇮🇹',
  ru: '🇷🇺',
  uk: '🇺🇦',
};

const languages: { [key: string]: string } = {
  da: 'Dansk',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  ru: 'Русский',
  uk: 'Українська',
};

interface LanguageSwitcherProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (lang: string) => {
    onLanguageChange(lang);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-white hover:bg-slate-700 transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Vælg sprog"
      >
        <span>{flags[currentLanguage]}</span>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>

      {isOpen && (
        <ul
          className="absolute right-0 mt-2 w-40 bg-slate-800 border border-slate-700 rounded-md shadow-lg py-1"
          role="menu"
        >
          {Object.keys(languages).map((lang) => (
            <li key={lang}>
              <button
                onClick={() => handleSelect(lang)}
                className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-indigo-600 flex items-center gap-3"
                role="menuitem"
              >
                <span className="text-lg">{flags[lang]}</span>
                <span>{languages[lang]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
