import React, { createContext, useContext, useState } from 'react';

const translations = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.portfolio': 'Portföy',
    'nav.about': 'Hakkımızda',
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    'nav.getStarted': 'İletişime Geç',
    
    // Hero Section
    'hero.title': 'Dijital Dunyada Markanizi Zirveye Tasiyoruz',
    'hero.subtitle': 'Grafik tasarim, baski hizmetleri ve yazilim gelistirme alaninda profesyonel cozumler',
    'hero.cta': 'Projemizi Baslatalim',
    
    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Isinizi dijital dunyada zirveye tasiyacak kapsamli cozumlerimizi kesfedin',
    'services.getQuote': 'Teklif Alin',
    
    // About
    'about.title': 'Hakkimizda',
    'about.subtitle': 'Prime Dijital\'in hikayesi, vizyonu ve tutkuyla calisan ekibiyle tanisin',
    'about.teamTitle': 'Ekibimizle Tanisin',
    
    // Contact
    'contact.title': 'Iletisime Gecin',
    'contact.subtitle': 'Projeniz hakkinda konusmak veya sadece tanismak icin formu doldurun',
    'contact.name': 'Ad Soyad',
    'contact.email': 'E-Posta',
    'contact.subject': 'Konu',
    'contact.message': 'Mesajiniz',
    'contact.send': 'Gonder',
    'contact.phone': 'Telefon',
    'contact.address': 'Adres',
    
    // Footer
    'footer.tagline': 'Isinizi zirveye tasiyan prime dokunus. Grafik tasarim, baski ve yazilik hizmetlerinde uzman ekibimizle yaninizdayiz.',
    'footer.quickLinks': 'Hizli Erisim',
    'footer.services': 'Hizmetler',
    'footer.contact': 'Iletisim',
    'footer.copyright': 'Tüm haklari saklidir.',
    
    // Common
    'loading': 'Yükleniyor...',
    'error': 'Bir hata olustu',
    'success': 'Basarili!'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.title': 'Taking Your Brand to the Top in the Digital World',
    'hero.subtitle': 'Professional solutions in graphic design, printing services and software development',
    'hero.cta': 'Start Our Project',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Discover our comprehensive solutions that will take your business to the top in the digital world',
    'services.getQuote': 'Get Quote',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Meet Prime Digital\'s story, vision and passionate team',
    'about.teamTitle': 'Meet Our Team',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Fill out the form to talk about your project or just to get acquainted',
    'contact.name': 'Name Surname',
    'contact.email': 'E-Mail',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.send': 'Send',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    
    // Footer
    'footer.tagline': 'The prime touch that takes your business to the top. We are with you with our expert team in graphic design, printing and software services.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.copyright': 'All rights reserved.',
    
    // Common
    'loading': 'Loading...',
    'error': 'An error occurred',
    'success': 'Successful!'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'tr';
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
