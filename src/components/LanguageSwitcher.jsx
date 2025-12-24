import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
      <button
        onClick={() => changeLanguage('tr')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'tr'
            ? 'bg-prime-yellow text-prime-black'
            : 'text-white hover:bg-white/10'
        }`}
      >
        TR
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'bg-prime-yellow text-prime-black'
            : 'text-white hover:bg-white/10'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
