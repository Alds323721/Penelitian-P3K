import React, { useState, useRef, useEffect } from 'react';

export default function LanguageDropdown({ currentLang = 'id', onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    {
      code: 'id',
      label: 'Bahasa Indonesia',
      shortLabel: 'ID',
      flag: '🇮🇩',
    },
    {
      code: 'en',
      label: 'English',
      shortLabel: 'EN',
      flag: '🇬🇧',
    },
  ];

  const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    if (onLanguageChange) {
      onLanguageChange(code);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#1c1b1b] hover:bg-[#252525] border border-[#262626] hover:border-[#3a3939] text-xs font-medium text-[#EDEDED] transition-all cursor-pointer shadow-sm select-none"
      >
        <span className="text-sm leading-none" role="img" aria-label={currentLanguage.label}>
          {currentLanguage.flag}
        </span>
        <span className="font-semibold text-white tracking-wide">
          {currentLanguage.shortLabel}
        </span>
        <span className="hidden sm:inline text-[#8A8A8A] text-[11px]">
          ({currentLanguage.label})
        </span>
        <svg
          className={`w-3.5 h-3.5 text-[#8A8A8A] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-white' : ''
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#141414] border border-[#262626] shadow-2xl py-1.5 z-50 backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#8A8A8A] border-b border-[#262626]/80 mb-1">
            Pilih Bahasa / Language
          </div>
          {languages.map((lang) => {
            const isSelected = lang.code === currentLang;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer text-left ${
                  isSelected
                    ? 'bg-[#1c1b1b] text-white font-semibold'
                    : 'text-[#c4c7c8] hover:bg-[#1a1a1a] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base leading-none" role="img" aria-label={lang.label}>
                    {lang.flag}
                  </span>
                  <span>{lang.label}</span>
                </div>
                {isSelected && (
                  <svg
                    className="w-4 h-4 text-[#10B981]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
