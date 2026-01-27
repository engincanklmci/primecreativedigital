import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import LiveChat from '../components/LiveChat';
import SocialProof from '../components/SocialProof';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Prime Dijital | SEO Uygun Dijital Pazarlama Ajansı İstanbul</title>
        <meta name="description" content="Prime Dijital: İstanbul'un önde gelen SEO uyumlu dijital pazarlama ajansı. Sosyal medya yönetimi, Google Ads, e-ticaret reklam, marka görsel tasarım, 3D modelleme hizmetleri." />
        <meta name="keywords" content="dijital pazarlama ajansı, sosyal medya yönetimi ajansı, instagram reklam ajansı, google ads ajansı, e-ticaret reklam ajansı, marka görsel tasarım ajansı, ürün görseli hazırlama ajansı, 3d ürün modelleme ajansı, katalog tasarım ajansı, web sitesi tasarım ajansı, seo hizmetleri" />
        <meta name="author" content="Prime Dijital" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Turkish" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="İstanbul" />
        <meta name="geo.position" content="41.0082;28.9784" />
        <meta name="ICBM" content="41.0082,28.9784" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://primedigitalcreative.com/" />
        <meta property="og:title" content="Prime Dijital | SEO Uygun Dijital Pazarlama Ajansı İstanbul" />
        <meta property="og:description" content="Prime Dijital: İstanbul'un önde gelen SEO uyumlu dijital pazarlama ajansı. Sosyal medya yönetimi, Google Ads, e-ticaret reklam, marka görsel tasarım, 3D modelleme hizmetleri." />
        <meta property="og:image" content="https://primedigitalcreative.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Prime Dijital" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://primedigitalcreative.com/" />
        <meta property="twitter:title" content="Prime Dijital | SEO Uygun Dijital Pazarlama Ajansı İstanbul" />
        <meta property="twitter:description" content="Prime Dijital: İstanbul'un önde gelen SEO uyumlu dijital pazarlama ajansı. Sosyal medya yönetimi, Google Ads, e-ticaret reklam, marka görsel tasarım, 3D modelleme hizmetleri." />
        <meta property="twitter:image" content="https://primedigitalcreative.com/og-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://primedigitalcreative.com/" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Prime Dijital",
            "url": "https://primedigitalcreative.com",
            "logo": "https://primedigitalcreative.com/logo.png",
            "description": "İstanbul'un önde gelen SEO uyumlu dijital pazarlama ajansı. Sosyal medya yönetimi, Google Ads, e-ticaret reklam, marka görsel tasarım, 3D modelleme hizmetleri.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "İstanbul",
              "addressRegion": "TR",
              "addressCountry": "Turkey"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-535-949-53-05",
              "contactType": "customer service",
              "email": "info@primedigitalcreative.com"
            },
            "sameAs": [
              "https://www.instagram.com/primedigitalcreative",
              "https://www.linkedin.com/company/primedigitalcreative"
            ],
            "services": [
              "Dijital Pazarlama",
              "SEO Hizmetleri",
              "Sosyal Medya Yönetimi",
              "Google Ads Reklamları",
              "E-ticaret Reklamları",
              "Marka Görsel Tasarım",
              "Ürün Görseli Hazırlama",
              "3D Ürün Modelleme",
              "Katalog Tasarım",
              "Web Sitesi Tasarım"
            ]
          }
        `}
        </script>
      </Helmet>
      
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <SocialProof />
      <CTA />
      <Footer />
      <LiveChat />
    </>
  );
};

export default Home;
