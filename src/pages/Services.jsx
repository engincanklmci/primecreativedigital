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
        <div className="container-custom text-center mb-20">
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
             className="text-xl text-gray-500 max-w-3xl mx-auto"
          >
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">İşinizi dijital dünyada zirveye taşıyacak kapsamlı çözümlerimizi keşfedin</p>
          </motion.div>
        </div>

        <div className="container-custom space-y-32">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
              {/* Image/Icon Side */}
              <motion.div 
                initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2"
              >
                <div className="relative">
                   <div className="absolute inset-0 bg-prime-yellow/20 blur-3xl rounded-full transform scale-90"></div>
                   <div className="relative rounded-3xl shadow-2xl border border-gray-100 overflow-hidden aspect-video md:aspect-square group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {service.imagePath ? (
                        <img 
                          src={service.imagePath} 
                          alt={service.title}
                          width="800"
                          height="450"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            console.error('Image failed to load:', service.imagePath);
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="text-red-500 text-center">
                          <p>No imagePath found</p>
                          <p className="text-sm">Service: {service.title}</p>
                        </div>
                      )}
                   </div>
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                 initial={{ opacity: 0, x: service.reverse ? -50 : 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="w-full md:w-1/2"
              >
                <span className="inline-block px-4 py-2 bg-prime-yellow/20 text-prime-black font-bold text-sm rounded-lg mb-4">
                  {service.id === 'grafik-tasarim' ? 'Grafik Tasarım' : 
                   service.id === 'baski-hizmetleri' ? 'Baskı Hizmetleri' : 
                   'Yazılım Geliştirme'}
                </span>
                <h2 className="text-4xl font-bold mb-6">
                  {service.id === 'grafik-tasarim' ? 'Grafik Tasarım' : 
                   service.id === 'baski-hizmetleri' ? 'Baskı Hizmetleri' : 
                   'Yazılım Geliştirme'}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.id === 'grafik-tasarim' ? 'Prime Dijital olarak, markanızın görsel kimliğini en üst düzeyde temsil edecek grafik tasarım hizmetleri sunuyoruz.' : 
                   service.id === 'baski-hizmetleri' ? 'Son teknoloji baskı makinelerimiz ve kaliteli malzemelerimizle, her türlü baskı ihtiyacınız için profesyonel çözümler sunuyoruz.' : 
                   'Dijital dünyada işinizi öne çıkaracak, kullanıcı deneyimini ön planda tutan yazılım çözümleri geliştiriyoruz.'}
                </p>
                
                <h3 className="text-lg font-bold mb-4">Hizmet Kapsamı:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-prime-yellow flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                   <button className="bg-prime-yellow text-prime-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2">
                     Teklif Alın
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                   </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default Services;
