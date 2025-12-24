import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-12">
      {/* Background Animated Shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-prime-yellow/20 rounded-full blur-[100px] -z-10"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gray-200/50 rounded-full blur-[120px] -z-10"
      />

      <div className="container-custom text-center z-10 max-w-5xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
        >
             <span className="bg-prime-yellow text-prime-black text-xs font-bold px-4 py-2 rounded-full shadow-sm">
               ✨ Dijital Dünyanın Prime Çözüm Ortağı
             </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight text-prime-black"
        >
          <>
            {t('hero.title').split('Prime').map((part, index) => 
              index === 1 ? <span key={index} className="text-prime-yellow">Prime</span> : part
            )}
          </>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Link to="/iletisim">
            <button className="px-8 py-4 bg-prime-yellow text-prime-black rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              Hemen Başlayın
            </button>
          </Link>
          <Link to="/portfoy">
             <button className="px-8 py-4 bg-white border border-gray-200 text-prime-black rounded-full font-bold hover:border-prime-black transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 text-lg">
              Portföyümüz
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
          </Link>
        </motion.div>
      </div>
      
      {/* Decorative Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden hidden md:block">
         <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, y: [0, -20, 0] }}
            transition={{ duration: 1, delay: 0.8, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute top-1/3 left-[10%] w-24 h-24 border-2 border-prime-yellow rounded-xl rotate-12 opacity-50"
        />
         <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, y: [0, 20, 0] }}
            transition={{ duration: 1, delay: 1, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute bottom-1/3 right-[10%] w-16 h-16 bg-prime-yellow rounded-full opacity-20"
        />
         <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-prime-yellow/50"
         >
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="7" ry="7"></rect><path d="M12 15v.01"></path></svg>
         </motion.div>
      </div>
    </section>
  );
};

export default Hero;
