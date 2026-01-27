import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-12 bg-[#f6f6f6]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-[#e4ac20] rounded-full opacity-[0.08] blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-[#e4ac20] rounded-full opacity-[0.06] blur-3xl"></div>
      </div>

      <div className="container-custom text-center z-10 max-w-6xl mx-auto relative">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-[1.2] tracking-normal text-[#292929]">
            İşinizi zirveye taşıyan <span className="text-[#e4ac20] font-semibold">prime</span> dokunuş.
          </h1>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=905359495305&text=Merhaba, dijital pazarlama hizmetleriniz hakkında bilgi almak istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-[#e4ac20] text-[#292929] rounded-full font-medium text-lg shadow-lg hover:bg-[#f0c563] transition-colors duration-300 flex items-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.552 2.449 3.449c.322.198 1.7.877 2.88 1.224.378.099.677.149.907.149.273 0 .842-.025 1.283-.149.441-.149.842-.447.96-.722.119-.274.119-.508.084-.597-.035-.09-.149-.149-.347-.297z"/>
              <path d="M20.52 3.449C18.39 1.319 15.56.011 12.49.011 5.879.011.48 5.411.48 12.021c0 2.12.553 4.191 1.603 6.01L.48 23.521l5.683-1.588c1.749.953 3.714 1.456 5.727 1.456h.004c6.61 0 12.009-5.399 12.009-12.009 0-3.07-1.194-5.959-3.383-8.148zM12.49 21.402h-.003c-1.816 0-3.598-.49-5.154-1.416l-.37-.221-3.831 1.004 1.023-3.735-.241-.384c-1.001-1.597-1.531-3.445-1.531-5.345 0-5.528 4.497-10.025 10.025-10.025 2.678 0 5.195 1.043 7.089 2.937 1.894 1.894 2.937 4.411 2.937 7.089-.001 5.528-4.498 10.025-10.025 10.025z"/>
            </svg>
            <span>Online Toplantı Planla</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          
          <Link to="/portfoy">
            <button 
              className="px-10 py-5 bg-transparent border-2 border-[#e4ac20] text-[#e4ac20] rounded-full font-medium text-lg shadow-lg hover:bg-[#e4ac20] hover:text-[#292929] transition-all duration-300 flex items-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>Portföyümüzü İzle</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-8 text-[#292929]/60 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { label: '7/24 Destek' },
            { label: '500+ Başarılı Proje' },
            { label: '5+ Yıl Deneyim' }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#e4ac20] rounded-full"></div>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#292929]/40">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
