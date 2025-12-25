/**
 * Backlink Strategy and Link Building Utilities
 */

// Internal linking opportunities
export const internalLinkingStrategy = {
  // Service pages cross-linking
  services: {
    'web-tasarim': ['mobil-uygulama', 'seo-hizmetleri', 'e-ticaret'],
    'mobil-uygulama': ['web-tasarim', 'ui-ux-tasarim'],
    'seo-hizmetleri': ['web-tasarim', 'dijital-pazarlama'],
    'grafik-tasarim': ['kurumsal-kimlik', 'matbaa-hizmetleri']
  },
  
  // Blog to service linking
  blogToServices: {
    'web-tasarim-trendleri': ['web-tasarim', 'ui-ux-tasarim'],
    'seo-ipuclari': ['seo-hizmetleri', 'dijital-pazarlama'],
    'mobil-uygulama-gelistirme': ['mobil-uygulama', 'web-tasarim']
  }
};

// External backlink opportunities
export const backlinkOpportunities = [
  {
    type: 'Yerel İş Dizinleri',
    platforms: [
      'Google İşletmem',
      'Yandex Haritalar',
      'Foursquare',
      'Yelp Türkiye'
    ],
    priority: 'Yüksek'
  },
  {
    type: 'Sektör Dizinleri',
    platforms: [
      'Dijital Ajanslar Rehberi',
      'Web Tasarım Firmaları',
      'İstanbul İş Rehberi'
    ],
    priority: 'Orta'
  }
];

// Generate internal links
export const generateInternalLinks = (currentPage, content) => {
  const suggestions = [];
  
  // Find relevant internal pages to link
  Object.keys(internalLinkingStrategy.services).forEach(service => {
    if (content.includes(service.replace('-', ' '))) {
      suggestions.push({
        anchor: service.replace('-', ' '),
        url: `/hizmetler/${service}`,
        type: 'service'
      });
    }
  });
  
  return suggestions;
};