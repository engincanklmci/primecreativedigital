import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 bg-prime-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-prime-yellow rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-xl"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-prime-black">Birlikte Çalışmaya Hazır mısınız?</h2>
            <p className="text-prime-black/80 mb-8 text-lg">
              Projeniz için ücretsiz danışmanlık alabilir ve ekibimizle tanışabilirsiniz.
            </p>
            <Link to="/iletisim">
              <button className="bg-prime-black text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                Hemen Başlayalım
              </button>
            </Link>
          </div>
          
          {/* Background Abstract Pattern */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
