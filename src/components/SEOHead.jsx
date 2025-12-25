import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title = "Prime Dijital | Web Tasarım & Dijital Pazarlama Ajansı İstanbul",
  description = "Prime Dijital ile işinizi dijital dünyada zirveye taşıyın. Profesyonel web tasarım, SEO, mobil uygulama ve dijital pazarlama hizmetleri.",
  keywords = "web tasarım İstanbul, dijital ajans, SEO hizmetleri, mobil uygulama geliştirme, grafik tasarım, dijital pazarlama, e-ticaret çözümleri",
  image = "/logo.png",
  url = "https://primedigitalcreative.com",
  type = "website",
  author = "Prime Dijital",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const fullTitle = title.includes('Prime Dijital') ? title : `${title} | Prime Dijital`;
  const fullUrl = url.startsWith('http') ? url : `https://primedigitalcreative.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://primedigitalcreative.com${image}`;

  // Default structured data
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prime Dijital",
    "alternateName": "Prime Digital Creative",
    "url": "https://primedigitalcreative.com",
    "logo": "https://primedigitalcreative.com/logo.png",
    "description": description,
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Büyükdere Cad. No: 123/A",
      "addressLocality": "Şişli",
      "addressRegion": "İstanbul",
      "postalCode": "34394",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "28.9784"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+90-212-555-0123",
      "email": "info@primedigitalcreative.com",
      "availableLanguage": ["Turkish", "English"],
      "areaServed": "TR"
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 10:00-16:00"
    ],
    "priceRange": "$$",
    "sameAs": [
      "https://www.instagram.com/primedigitalcreative",
      "https://www.linkedin.com/company/primedigitalcreative",
      "https://www.facebook.com/primedigitalcreative",
      "https://twitter.com/primedigitaltr",
      "https://www.youtube.com/@primedigitalcreative"
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
            "description": "Profesyonel web tasarım ve geliştirme hizmetleri",
            "provider": {
              "@type": "Organization",
              "name": "Prime Dijital"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Hizmetleri",
            "description": "Arama motoru optimizasyonu ve dijital pazarlama",
            "provider": {
              "@type": "Organization",
              "name": "Prime Dijital"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobil Uygulama",
            "description": "iOS ve Android mobil uygulama geliştirme",
            "provider": {
              "@type": "Organization",
              "name": "Prime Dijital"
            }
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || fullUrl} />
      
      {/* Robots */}
      {(noindex || nofollow) && (
        <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Prime Dijital" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Article specific */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Turkish" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

export default SEOHead;