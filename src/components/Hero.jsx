import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      if (blobRef.current) {
        blobRef.current.style.left = `${e.clientX}px`;
        blobRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-12 bg-[#f6f6f6]">
      <div 
        ref={blobRef}
        className="pointer-events-none fixed w-96 h-96 rounded-full bg-[#e4ac20] opacity-[0.15] blur-[120px] transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 z-0"
        style={{ willChange: 'transform' }}
      />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-1/4 w-64 h-64 bg-[#e4ac20] rounded-full opacity-[0.08] blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/3 w-80 h-80 bg-[#e4ac20] rounded-full opacity-[0.06] blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container-custom text-center z-10 max-w-6xl mx-auto relative">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.2] tracking-normal text-[#292929]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            İşinizi zirveye taşıyan <span className="text-[#e4ac20] font-black">prime</span> dokunuş.
          </motion.h1>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://api.whatsapp.com/send?phone=905359495305&text=Merhaba, dijital pazarlama hizmetleriniz hakkında bilgi almak istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-[#e4ac20] text-[#292929] rounded-full font-bold text-lg overflow-hidden shadow-lg flex items-center gap-3"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#f0c563] to-[#e4ac20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 group-hover:rotate-12 transition-transform duration-300">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.552 2.449 3.449c.322.198 1.7.877 2.88 1.224.378.099.677.149.907.149.273 0 .842-.025 1.283-.149.441-.149.842-.447.96-.722.119-.274.119-.508.084-.597-.035-.09-.149-.149-.347-.297z"/>
              <path d="M20.52 3.449C18.39 1.319 15.56.011 12.49.011 5.879.011.48 5.411.48 12.021c0 2.12.553 4.191 1.603 6.01L.48 23.521l5.683-1.588c1.749.953 3.714 1.456 5.727 1.456h.004c6.61 0 12.009-5.399 12.009-12.009 0-3.07-1.194-5.959-3.383-8.148zM12.49 21.402h-.003c-1.816 0-3.598-.49-5.154-1.416l-.37-.221-3.831 1.004 1.023-3.735-.241-.384c-1.001-1.597-1.531-3.445-1.531-5.345 0-5.528 4.497-10.025 10.025-10.025 2.678 0 5.195 1.043 7.089 2.937 1.894 1.894 2.937 4.411 2.937 7.089-.001 5.528-4.498 10.025-10.025 10.025z"/>
            </svg>
            <span className="relative z-10">Online Toplantı Planla</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>
          
          <Link to="/portfoy">
            <motion.button 
              className="group relative px-10 py-5 bg-transparent border-2 border-[#e4ac20] text-[#e4ac20] rounded-full font-black text-lg overflow-hidden shadow-lg flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="absolute inset-0 bg-[#e4ac20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 group-hover:rotate-12 transition-transform duration-300 group-hover:text-[#292929] transition-colors">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span className="relative z-10 group-hover:text-[#292929] transition-colors">Portföyümüzü İzle</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:translate-x-1 group-hover:text-[#292929] transition-all duration-300">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </motion.button>
          </Link>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-8 text-[#292929]/60 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { label: '7/24 Destek', delay: 0 },
            { label: '500+ Başarılı Proje', delay: 0.1 },
            { label: '5+ Yıl Deneyim', delay: 0.2 }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + item.delay }}
            >
              <motion.div 
                className="w-2 h-2 bg-[#e4ac20] rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
              />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#292929]/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
