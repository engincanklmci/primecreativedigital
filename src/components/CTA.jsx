import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-[#f6f6f6] relative overflow-hidden">
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-[#e4ac20] rounded-full opacity-[0.08] blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#292929] via-[#1a1a1a] to-[#292929] rounded-[32px] p-12 md:p-16 text-center overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#e4ac20] rounded-full opacity-10 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e4ac20] rounded-full opacity-10 blur-[120px] animate-pulse animation-delay-2000"></div>
          
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #e4ac20 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#e4ac20]/20 text-[#e4ac20] px-5 py-2 rounded-full text-sm font-bold mb-6 border border-[#e4ac20]/30"
            >
              <Sparkles size={16} />
              <span>Özel Fırsat</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Birlikte Çalışmaya
              <br />
              <span className="bg-gradient-to-r from-[#e4ac20] to-[#f0c563] bg-clip-text text-transparent">
                Hazır mısınız?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-white/80 mb-10 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Projeniz için ücretsiz danışmanlık alabilir ve ekibimizle tanışabilirsiniz.
              <br />
              <span className="text-[#e4ac20] font-semibold">İlk görüşme bizden!</span>
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/iletisim">
                <motion.button 
                  className="group relative bg-gradient-to-r from-[#e4ac20] to-[#c99416] text-[#292929] px-10 py-4 rounded-full font-black text-lg shadow-2xl overflow-hidden flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#f0c563] to-[#e4ac20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
                  <span className="relative z-10">Hemen Başlayalım</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </motion.button>
              </Link>
              
              <motion.a
                href="https://api.whatsapp.com/send?phone=905359495305&text=Merhaba, dijital pazarlama hizmetleriniz hakkında bilgi almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-4 bg-transparent border-2 border-[#e4ac20] text-[#e4ac20] rounded-full font-black text-lg flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -2, backgroundColor: "#e4ac20", color: "#292929" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.552 2.449 3.449c.322.198 1.7.877 2.88 1.224.378.099.677.149.907.149.273 0 .842-.025 1.283-.149.441-.149.842-.447.96-.722.119-.274.119-.508.084-.597-.035-.09-.149-.149-.347-.297z"/>
                  <path d="M20.52 3.449C18.39 1.319 15.56.011 12.49.011 5.879.011.48 5.411.48 12.021c0 2.12.553 4.191 1.603 6.01L.48 23.521l5.683-1.588c1.749.953 3.714 1.456 5.727 1.456h.004c6.61 0 12.009-5.399 12.009-12.009 0-3.07-1.194-5.959-3.383-8.148zM12.49 21.402h-.003c-1.816 0-3.598-.49-5.154-1.416l-.37-.221-3.831 1.004 1.023-3.735-.241-.384c-1.001-1.597-1.531-3.445-1.531-5.345 0-5.528 4.497-10.025 10.025-10.025 2.678 0 5.195 1.043 7.089 2.937 1.894 1.894 2.937 4.411 2.937 7.089-.001 5.528-4.498 10.025-10.025 10.025z"/>
                </svg>
                <span>WhatsApp ile Yaz</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
