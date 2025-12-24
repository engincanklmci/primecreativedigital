import React from 'react';
import { useTranslation } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-lg px-2 py-1 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:shadow-lg">
      <button
        onClick={() => changeLanguage('tr')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'tr'
            ? 'bg-white/20 text-white shadow-sm'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
      >
        TR
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'bg-white/20 text-white shadow-sm'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
