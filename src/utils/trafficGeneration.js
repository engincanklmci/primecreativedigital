/**
 * Traffic Generation and SEO Strategies
 * Comprehensive system for driving organic traffic
 */

// Content calendar for consistent publishing
export const contentCalendar = {
  weekly: [
    {
      day: 'Pazartesi',
      type: 'Tutorial',
      topic: 'Web tasarım ipuçları',
      keywords: ['web tasarım', 'UI/UX', 'responsive tasarım'],
      targetAudience: 'Başlangıç seviye'
    },
    {
      day: 'Çarşamba',
      type: 'Case Study',
      topic: 'Müşteri başarı hikayeleri',
      keywords: ['dijital dönüşüm', 'ROI', 'başarı hikayesi'],
      targetAudience: 'Karar vericiler'
    },
    {
      day: 'Cuma',
      type: 'Industry News',
      topic: 'Sektör haberleri ve trendler',
      keywords: ['dijital pazarlama', 'teknoloji trendleri', 'SEO'],
      targetAudience: 'Profesyoneller'
    }
  ],
  
  monthly: [
    {
      week: 1,
      type: 'Comprehensive Guide',
      topic: 'Detaylı rehberler',
      keywords: ['nasıl yapılır', 'adım adım', 'rehber'],
      targetLength: '3000+ kelime'
    },
    {
      week: 2,
      type: 'Video Content',
      topic: 'Video eğitimler',
      keywords: ['video tutorial', 'canlı demo', 'webinar'],
      platform: 'YouTube + Blog'
    },
    {
      week: 3,
      type: 'Infographic',
      topic: 'Görsel içerikler',
      keywords: ['infografik', 'istatistik', 'veri görselleştirme'],
      shareability: 'Yüksek'
    },
    {
      week: 4,
      type: 'Expert Interview',
      topic: 'Uzman röportajları',
      keywords: ['uzman görüşü', 'röportaj', 'sektör lideri'],
      networking: 'Evet'
    }
  ]
};

// Long-tail keyword strategy
export const keywordStrategy = {
  primary: [
    'web tasarım İstanbul',
    'dijital ajans İstanbul',
    'SEO hizmetleri İstanbul',
    'mobil uygulama geliştirme İstanbul'
  ],
  
  longTail: [
    'İstanbul\'da en iyi web tasarım firması',
    'kurumsal web sitesi fiyatları İstanbul',
    'e-ticaret sitesi nasıl kurulur',
    'SEO ile Google\'da ilk sıraya çıkma',
    'mobil uygulama geliştirme maliyeti',
    'dijital pazarlama stratejileri 2024',
    'responsive web tasarım nedir',
    'WordPress vs custom web tasarım'
  ],
  
  local: [
    'Şişli web tasarım',
    'Beşiktaş dijital ajans',
    'Kadıköy SEO hizmetleri',
    'Üsküdar mobil uygulama',
    'Bakırköy web tasarım firması'
  ],
  
  questionBased: [
    'web sitesi ne kadar sürede hazırlanır',
    'SEO çalışması ne kadar sürer',
    'mobil uygulama geliştirme süreci nasıl',
    'dijital pazarlama bütçesi nasıl belirlenir',
    'e-ticaret sitesi hangi platform'
  ]
};

// Content types for traffic generation
export const contentTypes = {
  blog: {
    frequency: 'Haftada 3',
    averageLength: '1500-2500 kelime',
    seoOptimization: 'Yüksek',
    shareability: 'Orta',
    conversionPotential: 'Yüksek'
  },
  
  videos: {
    frequency: 'Haftada 1',
    platforms: ['YouTube', 'Instagram', 'LinkedIn'],
    averageLength: '5-15 dakika',
    seoOptimization: 'Orta',
    shareability: 'Çok Yüksek',
    conversionPotential: 'Yüksek'
  },
  
  infographics: {
    frequency: 'Ayda 2',
    platforms: ['Pinterest', 'Instagram', 'LinkedIn', 'Blog'],
    designTime: '2-3 gün',
    seoOptimization: 'Düşük',
    shareability: 'Çok Yüksek',
    conversionPotential: 'Orta'
  },
  
  caseStudies: {
    frequency: 'Ayda 1',
    averageLength: '2000-3000 kelime',
    seoOptimization: 'Yüksek',
    shareability: 'Orta',
    conversionPotential: 'Çok Yüksek'
  },
  
  webinars: {
    frequency: 'Ayda 1',
    duration: '45-60 dakika',
    platforms: ['Zoom', 'YouTube Live'],
    seoOptimization: 'Orta',
    shareability: 'Yüksek',
    conversionPotential: 'Çok Yüksek'
  }
};

// Social media strategy for traffic
export const socialMediaStrategy = {
  linkedin: {
    postFrequency: 'Günlük',
    contentTypes: ['Industry insights', 'Case studies', 'Company updates'],
    bestTimes: ['09:00', '12:00', '17:00'],
    hashtags: ['#dijitalpazarlama', '#webtasarım', '#SEO', '#İstanbul'],
    engagement: 'B2B odaklı'
  },
  
  instagram: {
    postFrequency: 'Günlük',
    contentTypes: ['Behind the scenes', 'Design showcases', 'Tips & tricks'],
    bestTimes: ['11:00', '14:00', '19:00'],
    hashtags: ['#webtasarım', '#dijitalajans', '#tasarım', '#İstanbul'],
    engagement: 'Visual storytelling'
  },
  
  youtube: {
    postFrequency: 'Haftada 1',
    contentTypes: ['Tutorials', 'Case studies', 'Industry analysis'],
    averageLength: '10-15 dakika',
    seoOptimization: 'Video SEO',
    thumbnails: 'Custom designed'
  },
  
  twitter: {
    postFrequency: 'Günde 3-5',
    contentTypes: ['Industry news', 'Quick tips', 'Engagement posts'],
    bestTimes: ['09:00', '13:00', '18:00'],
    hashtags: ['#webdev', '#SEO', '#dijital', '#tech'],
    engagement: 'Real-time conversations'
  }
};

// Email marketing for traffic retention
export const emailMarketingStrategy = {
  newsletter: {
    frequency: 'Haftalık',
    sendDay: 'Salı',
    sendTime: '10:00',
    segments: ['Müşteriler', 'Potansiyel müşteriler', 'Sektör profesyonelleri'],
    content: ['Blog özetleri', 'Özel teklifler', 'Sektör haberleri']
  },
  
  nurturing: {
    newSubscribers: [
      { day: 0, subject: 'Hoş geldiniz! İlk adımlar', type: 'welcome' },
      { day: 3, subject: 'Ücretsiz SEO analizi', type: 'value' },
      { day: 7, subject: 'Başarı hikayelerimiz', type: 'social_proof' },
      { day: 14, subject: 'Size özel teklif', type: 'offer' }
    ],
    
    leadNurturing: [
      { trigger: 'blog_read', subject: 'İlginizi çeken konular', type: 'content' },
      { trigger: 'service_page_visit', subject: 'Hizmetlerimiz hakkında', type: 'information' },
      { trigger: 'case_study_read', subject: 'Benzer projeler', type: 'social_proof' }
    ]
  }
};

// Local SEO strategy
export const localSEOStrategy = {
  googleMyBusiness: {
    optimization: [
      'Tam ve doğru işletme bilgileri',
      'Yüksek kaliteli fotoğraflar',
      'Düzenli post paylaşımı',
      'Müşteri yorumlarına yanıt',
      'SSS bölümü güncelleme'
    ],
    
    posts: {
      frequency: 'Haftada 2-3',
      types: ['Ürün/Hizmet', 'Etkinlik', 'Teklif', 'Güncelleme'],
      callToAction: 'Her postta CTA'
    }
  },
  
  localDirectories: [
    'Yandex Haritalar',
    'Foursquare',
    'Yelp',
    'İstanbul Ticaret Odası',
    'Sektörel dizinler'
  ],
  
  localContent: [
    'İstanbul dijital pazarlama rehberi',
    'Şehir bazlı case study\'ler',
    'Yerel etkinlik sponsorlukları',
    'İstanbul işletmeleri için özel içerikler'
  ]
};

// Backlink building strategy
export const backlinkStrategy = {
  guestPosting: {
    targets: [
      'Sektörel bloglar',
      'Teknoloji siteleri',
      'İş dünyası platformları',
      'Yerel medya'
    ],
    frequency: 'Ayda 4-6 yazı',
    quality: 'DA 30+ siteler'
  },
  
  partnerships: [
    'Tamamlayıcı hizmet sağlayıcıları',
    'Teknoloji şirketleri',
    'Eğitim kurumları',
    'İş geliştirme organizasyonları'
  ],
  
  digitalPR: [
    'Basın bültenleri',
    'Uzman yorumları',
    'Sektör raporları',
    'Ödül başvuruları'
  ]
};

// Performance tracking
export const performanceMetrics = {
  traffic: [
    'Organik trafik artışı',
    'Doğrudan trafik',
    'Referral trafik',
    'Sosyal medya trafiği'
  ],
  
  engagement: [
    'Sayfa kalma süresi',
    'Bounce rate',
    'Sayfa görüntüleme',
    'Sosyal paylaşım'
  ],
  
  conversion: [
    'Lead generation',
    'Email signup',
    'Contact form',
    'Phone calls'
  ],
  
  seo: [
    'Keyword rankings',
    'SERP visibility',
    'Click-through rate',
    'Local pack rankings'
  ]
};

// Content optimization checklist
export const contentOptimizationChecklist = {
  seo: [
    'Target keyword research',
    'Title tag optimization (50-60 karakter)',
    'Meta description (150-160 karakter)',
    'H1, H2, H3 yapısı',
    'Internal linking',
    'Image alt tags',
    'Schema markup',
    'URL optimization'
  ],
  
  readability: [
    'Kısa paragraflar (3-4 cümle)',
    'Alt başlıklar kullanımı',
    'Bullet points',
    'Görsel içerik',
    'Kolay okunabilir font',
    'Beyaz alan kullanımı'
  ],
  
  engagement: [
    'Çekici giriş paragrafı',
    'Actionable tips',
    'Call-to-action',
    'Sosyal paylaşım butonları',
    'İlgili içerik önerileri',
    'Yorum bölümü'
  ]
};

// Generate content ideas based on trends
export const generateContentIdeas = (industry = 'digital', timeframe = 'monthly') => {
  const trendingTopics = {
    digital: [
      'AI ve dijital pazarlama',
      'Voice search optimization',
      'Mobile-first indexing',
      'Core Web Vitals',
      'E-A-T faktörleri',
      'Video marketing trends',
      'Sosyal ticaret',
      'Influencer marketing ROI'
    ],
    
    technical: [
      'Progressive Web Apps',
      'Headless CMS',
      'JAMstack architecture',
      'API-first development',
      'Microservices',
      'Cloud migration',
      'Cybersecurity trends',
      'DevOps best practices'
    ]
  };
  
  return trendingTopics[industry] || trendingTopics.digital;
};

export default {
  contentCalendar,
  keywordStrategy,
  contentTypes,
  socialMediaStrategy,
  emailMarketingStrategy,
  localSEOStrategy,
  backlinkStrategy,
  performanceMetrics,
  contentOptimizationChecklist,
  generateContentIdeas
};