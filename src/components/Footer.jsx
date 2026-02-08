import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Facebook, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#292929] via-[#1a1a1a] to-[#292929] text-white pt-20 pb-10 border-t border-[#e4ac20]/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e4ac20] rounded-full opacity-[0.05] blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e4ac20] rounded-full opacity-[0.05] blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-2">
                <motion.img
                  src="/logo.png"
                  alt="Prime Dijital"
                  width="40"
                  height="40"
                  className="h-10 w-auto object-contain bg-white/5 rounded-lg p-1 group-hover:bg-white/10 transition-colors"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
                <span className="text-2xl font-semibold tracking-tight">
                  Prime <span className="text-[#e4ac20]">Dijital</span>
                </span>
              </div>
            </Link>
            <p className="text-white/60 mb-6 leading-relaxed">
              İşinizi zirveye taşıyan prime dokunuş. Grafik tasarım, baskı ve yazılım hizmetlerinde uzman ekibimizle yanınızdayız.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/primedijital.co/", label: "Instagram" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/primedigitalcreative", label: "LinkedIn" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"
                  whileHover={{ scale: 1.1, backgroundColor: "#e4ac20", borderColor: "#e4ac20" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-[#e4ac20] font-black text-lg mb-6">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {[
                { name: 'Ana Sayfa', path: '/' },
                { name: 'Hizmetler', path: '/hizmetler' },
                { name: 'Portföy', path: '/portfoy' },
                { name: 'Hakkımızda', path: '/hakkimizda' },
                { name: 'Blog', path: '/blog' }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-[#e4ac20] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#e4ac20] group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-[#e4ac20] font-black text-lg mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {[
                'Grafik Tasarım',
                'Baskı Hizmetleri',
                'Yazılım Geliştirme',
                'Web Tasarım',
                'Mobil Uygulama',
                'SEO & Pazarlama'
              ].map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/hizmetler"
                    className="text-white/60 hover:text-[#e4ac20] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#e4ac20] group-hover:w-4 transition-all duration-300"></span>
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-[#e4ac20] font-black text-lg mb-6">İletişim</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-white/60 group hover:text-white/80 transition-colors">
                <MapPin className="text-[#e4ac20] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                <span>Gaziosmanpaşa - İstanbul</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 group hover:text-white/80 transition-colors">
                <Phone className="text-[#e4ac20] flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <a href="tel:+905359495305" className="hover:text-[#e4ac20]">+90 535 949 53 05</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 group hover:text-white/80 transition-colors">
                <Mail className="text-[#e4ac20] flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <a href="mailto:primeagency@zohomail.eu" className="hover:text-[#e4ac20] break-all">primeagency@zohomail.eu</a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-sm">
              © 2024 Prime Dijital. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 text-sm text-white/40">
              <Link to="/gizlilik-politikasi" className="hover:text-[#e4ac20] transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/cerez-politikasi" className="hover:text-[#e4ac20] transition-colors">
                Çerez Politikası
              </Link>
              <Link to="/kvkk-aydinlatma-metni" className="hover:text-[#e4ac20] transition-colors">
                KVKK
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem('cookie_consent');
                  localStorage.removeItem('cookie_consent_date');
                  localStorage.removeItem('cookie_preferences');
                  window.location.reload();
                }}
                className="hover:text-[#e4ac20] transition-colors cursor-pointer"
              >
                Çerez Ayarları
              </button>
            </div>
          </div>
        </motion.div>

        <motion.button
          onClick={scrollToTop}
          aria-label="Yukarı Çık"
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#e4ac20] to-[#c99416] rounded-full flex items-center justify-center shadow-2xl z-50"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <ArrowUp size={20} className="text-[#292929]" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
