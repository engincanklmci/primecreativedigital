import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const { services } = useData();

  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz | Web Tasarım, SEO, Dijital Pazarlama - Prime Dijital</title>
        <meta name="description" content="Prime Dijital hizmetleri: Profesyonel web tasarım, mobil uygulama geliştirme, SEO optimizasyonu, dijital pazarlama, kurumsal kimlik ve grafik tasarım çözümleri." />
        <meta name="keywords" content="web tasarım hizmetleri, SEO hizmetleri, dijital pazarlama ajansı, mobil uygulama geliştirme, kurumsal kimlik tasarımı, grafik tasarım İstanbul" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://primedigitalcreative.com/hizmetler" />
        <meta property="og:title" content="Hizmetlerimiz | Web Tasarım, SEO, Dijital Pazarlama - Prime Dijital" />
        <meta property="og:description" content="Prime Dijital hizmetleri: Profesyonel web tasarım, mobil uygulama geliştirme, SEO optimizasyonu, dijital pazarlama, kurumsal kimlik ve grafik tasarım çözümleri." />
        <meta property="og:image" content="https://primedigitalcreative.com/og-services.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://primedigitalcreative.com/hizmetler" />
        <meta property="twitter:title" content="Hizmetlerimiz | Web Tasarım, SEO, Dijital Pazarlama - Prime Dijital" />
        <meta property="twitter:description" content="Prime Dijital hizmetleri: Profesyonel web tasarım, mobil uygulama geliştirme, SEO optimizasyonu, dijital pazarlama, kurumsal kimlik ve grafik tasarım çözümleri." />
        <meta property="twitter:image" content="https://primedigitalcreative.com/og-services.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://primedigitalcreative.com/hizmetler" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Dijital Ajans Hizmetleri",
            "provider": {
              "@type": "Organization",
              "name": "Prime Dijital",
              "url": "https://primedigitalcreative.com"
            },
            "areaServed": "İstanbul, Türkiye",
            "description": "Profesyonel web tasarım, mobil uygulama geliştirme, SEO optimizasyonu, dijital pazarlama, kurumsal kimlik ve grafik tasarım çözümleri.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Dijital Hizmet Kataloğu",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Tasarım"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Hizmetleri"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Dijital Pazarlama"
                  }
                }
              ]
            }
          }
        `}
        </script>
      </Helmet>
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container-custom text-left mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Hizmetlerimiz</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 max-w-3xl"
          >
            <p className="text-gray-600 text-lg max-w-2xl">İşinizi dijital dünyada zirveye taşıyacak kapsamlı çözümlerimizi keşfedin</p>
          </motion.div>
        </div>

        <div className="container-custom space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-shadow duration-500"
            >
              <div className={`flex flex-col lg:flex-row ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>

                {/* Image Side */}
                <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px]">
                  <div className="absolute inset-0 bg-gray-100">
                    {service.imagePath ? (
                      <img
                        src={service.imagePath}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                        <span className="text-lg">Görsel Hazırlanıyor</span>
                      </div>
                    )}
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Text Side */}
                <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-12 h-1 bg-prime-yellow rounded-full"></span>
                    <span className="text-prime-yellow font-bold text-sm tracking-wider uppercase">
                      {service.id === 'grafik-tasarim' ? 'Yaratıcı Çözümler' :
                        service.id === 'baski-hizmetleri' ? 'Profesyonel Baskı' :
                          'Teknoloji & Yazılım'}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-prime-black">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="mb-10">
                    <h3 className="text-lg font-bold mb-5 text-prime-black flex items-center gap-2">
                      <svg className="w-5 h-5 text-prime-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                      Hizmet Kapsamı
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 group">
                          <div className="w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-prime-yellow transition-colors duration-300">
                            <svg className="w-3 h-3 text-prime-yellow group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                          </div>
                          <span className="text-gray-600 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button className="bg-prime-yellow text-prime-black px-8 py-3.5 rounded-xl font-bold hover:bg-black hover:text-white transition-all duration-300 shadow-lg shadow-yellow-200/50 hover:shadow-xl flex items-center gap-2">
                      Teklif Alın
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                    <button className="px-8 py-3.5 rounded-xl font-bold border-2 border-gray-100 hover:border-prime-black hover:bg-prime-black hover:text-white transition-all duration-300">
                      Detaylı Bilgi
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default Services;
