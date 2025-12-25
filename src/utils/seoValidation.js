/**
 * SEO Validation Utilities
 */

// SEO content validation rules
export const SEO_RULES = {
  title: {
    minLength: 30,
    maxLength: 60,
    optimal: 55
  },
  description: {
    minLength: 120,
    maxLength: 160,
    optimal: 155
  },
  keywords: {
    minCount: 5,
    maxCount: 15,
    optimal: 10
  },
  headings: {
    h1Count: 1,
    h2MinCount: 2,
    h3MaxCount: 10
  }
};

// Validate title length and content
export const validateTitle = (title) => {
  const length = title.length;
  const issues = [];
  
  if (length < SEO_RULES.title.minLength) {
    issues.push(`Title çok kısa (${length} karakter). En az ${SEO_RULES.title.minLength} karakter olmalı.`);
  }
  
  if (length > SEO_RULES.title.maxLength) {
    issues.push(`Title çok uzun (${length} karakter). En fazla ${SEO_RULES.title.maxLength} karakter olmalı.`);
  }
  
  // Check for brand name
  if (!title.includes('Prime Dijital')) {
    issues.push('Title\'da marka adı (Prime Dijital) bulunmuyor.');
  }
  
  // Check for target keywords
  const targetKeywords = ['web tasarım', 'dijital', 'İstanbul'];
  const missingKeywords = targetKeywords.filter(keyword => 
    !title.toLowerCase().includes(keyword.toLowerCase())
  );
  
  if (missingKeywords.length > 0) {
    issues.push(`Eksik anahtar kelimeler: ${missingKeywords.join(', ')}`);
  }
  
  return {
    isValid: issues.length === 0,
    length,
    issues,
    score: Math.max(0, 100 - (issues.length * 20))
  };
};

// Validate meta description
export const validateDescription = (description) => {
  const length = description.length;
  const issues = [];
  
  if (length < SEO_RULES.description.minLength) {
    issues.push(`Meta description çok kısa (${length} karakter). En az ${SEO_RULES.description.minLength} karakter olmalı.`);
  }
  
  if (length > SEO_RULES.description.maxLength) {
    issues.push(`Meta description çok uzun (${length} karakter). En fazla ${SEO_RULES.description.maxLength} karakter olmalı.`);
  }
  
  // Check for call-to-action
  const cta = ['iletişim', 'teklif', 'başlayın', 'keşfedin', 'öğrenin'];
  const hasCTA = cta.some(word => description.toLowerCase().includes(word));
  
  if (!hasCTA) {
    issues.push('Meta description\'da call-to-action bulunmuyor.');
  }
  
  return {
    isValid: issues.length === 0,
    length,
    issues,
    score: Math.max(0, 100 - (issues.length * 15))
  };
};

// Generate optimized meta descriptions
export const generateOptimizedDescription = (pageType, serviceName = '') => {
  const templates = {
    home: "Prime Dijital ile işinizi dijital dünyada zirveye taşıyın! Web tasarım, SEO, mobil uygulama ve dijital pazarlama hizmetleri. İstanbul'da uzman ekibimizle tanışın.",
    services: `${serviceName} hizmetleri ile işinizi büyütün. Prime Dijital'in uzman ekibi ile profesyonel çözümler. İstanbul'da kaliteli hizmet için hemen iletişime geçin.`,
    about: "Prime Dijital olarak İstanbul'da dijital çözümler sunuyoruz. Deneyimli ekibimiz, yenilikçi yaklaşımımız ve müşteri odaklı hizmetimizle tanışın.",
    contact: "Prime Dijital ile iletişime geçin! Web tasarım, dijital pazarlama ve teknoloji çözümleri için İstanbul'daki uzman ekibimizden teklif alın.",
    blog: "Dijital dünyada güncel kalın! Prime Dijital blog'unda web tasarım, SEO, dijital pazarlama ve teknoloji trendleri hakkında uzman görüşleri."
  };
  
  return templates[pageType] || templates.home;
};