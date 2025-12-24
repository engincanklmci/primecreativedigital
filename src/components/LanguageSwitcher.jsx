import React from 'react';
import { useTranslation } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-1 bg-prime-black/10 backdrop-blur-md rounded-lg px-2 py-1 border border-prime-black/20 hover:bg-prime-black/20 transition-all duration-300 hover:shadow-lg">
      <button
        onClick={() => changeLanguage('tr')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'tr'
            ? 'bg-prime-black text-white shadow-sm'
            : 'text-prime-black/70 hover:text-prime-black hover:bg-prime-black/10'
        }`}
      >
        TR
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'bg-prime-black text-white shadow-sm'
            : 'text-prime-black/70 hover:text-prime-black hover:bg-prime-black/10'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
