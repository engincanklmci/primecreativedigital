/**
 * Dynamic sitemap generator for better SEO
 */

// Site configuration
const SITE_URL = 'https://primedigitalcreative.com';
const DEFAULT_PRIORITY = 0.7;
const DEFAULT_CHANGEFREQ = 'weekly';

// Static pages configuration
const STATIC_PAGES = [
  {
    url: '/',
    priority: 1.0,
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    url: '/hakkimizda',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  },
  {
    url: '/hizmetler',
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    url: '/portfoy',
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    url: '/blog',
    priority: 0.7,
    changefreq: 'daily',
    lastmod: new Date().toISOString()
  },
  {
    url: '/iletisim',
    priority: 0.6,
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  }
];

// Generate XML sitemap
export const generateSitemap = (dynamicPages = []) => {
  const allPages = [...STATIC_PAGES, ...dynamicPages];
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';
  const urlsetClose = '</urlset>';
  
  const urls = allPages.map(page => {
    const fullUrl = `${SITE_URL}${page.url}`;
    return `
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${page.lastmod || new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq || DEFAULT_CHANGEFREQ}</changefreq>
    <priority>${page.priority || DEFAULT_PRIORITY}</priority>
  </url>`;
  }).join('');
  
  return `${xmlHeader}\n${urlsetOpen}${urls}\n${urlsetClose}`;
};

// Generate robots.txt
export const generateRobotsTxt = (additionalRules = []) => {
  const defaultRules = [
    'User-agent: *',
    'Allow: /',
    '',
    `Host: ${SITE_URL}`,
    '',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    '',
    '# Disallow specific paths if any',
    '# Disallow: /admin/',
    '# Disallow: /private/',
    '',
    '# Crawl delay (optional)',
    'Crawl-delay: 1'
  ];
  
  return [...defaultRules, ...additionalRules].join('\n');
};

// Generate structured data for organization
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prime Dijital",
    "alternateName": "Prime Digital Creative",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "description": "İstanbul'un önde gelen dijital ajansı. Web tasarım, mobil uygulama, SEO, dijital pazarlama ve kurumsal kimlik çözümleri.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressRegion": "İstanbul",
      "addressLocality": "İstanbul"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Turkish", "English"],
      "areaServed": "TR"
    },
    "sameAs": [
      "https://www.instagram.com/primedigitalcreative",
      "https://www.linkedin.com/company/primedigitalcreative",
      "https://twitter.com/primedigitaltr"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dijital Hizmetler",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Tasarım",
            "description": "Profesyonel web tasarım ve geliştirme hizmetleri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobil Uygulama",
            "description": "iOS ve Android mobil uygulama geliştirme"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Hizmetleri",
            "description": "Arama motoru optimizasyonu ve dijital pazarlama"
          }
        }
      ]
    }
  };
};

// Generate breadcrumb schema
export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${SITE_URL}${crumb.url}`
    }))
  };
};

// Generate FAQ schema
export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate service schema
export const generateServiceSchema = (service) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Prime Dijital",
      "url": SITE_URL
    },
    "areaServed": {
      "@type": "Country",
      "name": "Turkey"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": service.features?.map(feature => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      })) || []
    }
  };
};

// Generate article schema for blog posts
export const generateArticleSchema = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image ? `${SITE_URL}${article.image}` : `${SITE_URL}/logo.png`,
    "author": {
      "@type": "Organization",
      "name": "Prime Dijital"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Prime Dijital",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}${article.url}`
    }
  };
};