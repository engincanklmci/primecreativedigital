import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../context/LanguageContext';

const Services = () => {
  const { services } = useData();
  const { t } = useTranslation();

  // Debug: Log the services data
  console.log('Services data:', services);
  console.log('First service imagePath:', services[0]?.imagePath);

  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz - Prime Dijital Ajans</title>
        <meta name="description" content="Grafik tasarım, yazılım geliştirme, baskı hizmetleri ve dijital pazarlama alanlarında profesyonel çözümler sunuyoruz." />
      </Helmet>
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container-custom text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t('services.title')}
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-gray-500 max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
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
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            console.error('Image failed to load:', service.imagePath);
                            e.target.style.display = 'none';
                          }}
                          onLoad={() => {
                            console.log('Image loaded successfully:', service.imagePath);
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
                  {service.title}
                </span>
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
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
