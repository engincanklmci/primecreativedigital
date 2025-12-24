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
    'success': 'Basarili!',
    
    // Services Page
    'services.graphic.title': 'Grafik Tasarım',
    'services.graphic.description': 'Prime Dijital olarak, markanızın görsel kimliğini en üst düzeyde temsil edecek grafik tasarım hizmetleri sunuyoruz.',
    'services.printing.title': 'Baskı Hizmetleri',
    'services.printing.description': 'Son teknoloji baskı makinelerimiz ve kaliteli malzemelerimizle, her türlü baskı ihtiyacınız için profesyonel çözümler sunuyoruz.',
    'services.software.title': 'Yazılım Geliştirme',
    'services.software.description': 'Dijital dünyada işinizi öne çıkaracak, kullanıcı deneyimini ön planda tutan yazılım çözümleri geliştiriyoruz.',
    
    // About Page
    'about.story.title': '12 Yıllık Dijital Mükemmellik Yolculuğu',
    'about.story.description1': '2012 yılında kuruluşumuzdan bu yana, Prime Dijital olarak İstanbul\'un kalbi Gaziosmanpaşa\'da faaliyet gösteriyoruz.',
    'about.story.description2': 'Grafik tasarım, baskı hizmetleri ve yazılım geliştirme alanında uzmanlaşarak, her büyüklükteki işletmeye özel çözümler sunuyoruz.',
    
    // Contact Form
    'contact.form.namePlaceholder': 'Adınız Soyadınız',
    'contact.form.emailPlaceholder': 'ornek@email.com',
    'contact.form.messagePlaceholder': 'Mesajınızı buraya yazın...',
    'contact.form.sending': 'Gönderiliyor...',
    'contact.form.success': 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
    'contact.form.error': 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
    'contact.form.subjectOptions.project': 'Proje Teklifi Almak İstiyorum',
    'contact.form.subjectOptions.info': 'Genel Bilgi',
    'contact.form.subjectOptions.job': 'İş Başvurusu',
    'contact.form.subjectOptions.other': 'Diğer'
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
    'success': 'Successful!',
    
    // Services Page
    'services.graphic.title': 'Graphic Design',
    'services.graphic.description': 'As Prime Digital, we offer graphic design services that will represent your brand\'s visual identity at the highest level.',
    'services.printing.title': 'Printing Services',
    'services.printing.description': 'With our state-of-the-art printing machines and quality materials, we offer professional solutions for all your printing needs.',
    'services.software.title': 'Software Development',
    'services.software.description': 'We develop software solutions that will make your business stand out in the digital world, prioritizing user experience.',
    
    // About Page
    'about.story.title': '12 Years of Digital Excellence Journey',
    'about.story.description1': 'Since our establishment in 2012, Prime Digital has been operating in the heart of Istanbul, Gaziosmanpaşa.',
    'about.story.description2': 'Specializing in graphic design, printing services and software development, we offer special solutions for businesses of all sizes.',
    
    // Contact Form
    'contact.form.namePlaceholder': 'Your Name Surname',
    'contact.form.emailPlaceholder': 'example@email.com',
    'contact.form.messagePlaceholder': 'Write your message here...',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Your message has been successfully sent! We will get back to you shortly.',
    'contact.form.error': 'An error occurred while sending the message. Please try again later.',
    'contact.form.subjectOptions.project': 'I Want to Get a Project Quote',
    'contact.form.subjectOptions.info': 'General Information',
    'contact.form.subjectOptions.job': 'Job Application',
    'contact.form.subjectOptions.other': 'Other'
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
