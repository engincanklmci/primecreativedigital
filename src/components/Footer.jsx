import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-prime-black text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Prime Dijital" className="h-10 w-auto object-contain bg-white/10 rounded-lg p-1" />
                <span className="text-2xl font-bold tracking-tighter">
                  Prime <span className="text-prime-yellow">Dijital</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              İşinizi zirveye taşıyan prime dokunuş. Grafik tasarım, baskı ve yazılım hizmetlerinde uzman ekibimizle yanınızdayız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-prime-yellow hover:text-prime-black transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-prime-yellow hover:text-prime-black transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-prime-yellow hover:text-prime-black transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-prime-yellow hover:text-prime-black transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-prime-yellow font-bold text-lg mb-6">Hızlı Erişim</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Hizmetler</Link>
              </li>
              <li>
                <Link to="/portfoy" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Portföy</Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-prime-yellow font-bold text-lg mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/hizmetler" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Grafik Tasarım</Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Baskı Hizmetleri</Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Yazılım Geliştirme</Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Web Tasarım</Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Mobil Uygulama</Link>
              </li>
              <li>
                <Link to="/hizmetler" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">SEO & Pazarlama</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-prime-yellow font-bold text-lg mb-6">İletişim</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400">
                <MapPin className="text-prime-yellow flex-shrink-0 mt-1" size={20} />
                <span>Gaziosmanpaşa - İstanbul</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Phone className="text-prime-yellow flex-shrink-0" size={20} />
                <span>+90 535 949 53 05</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Mail className="text-prime-yellow flex-shrink-0" size={20} />
                <span>primedigitalcreative@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Prime Dijital. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-prime-yellow transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-prime-yellow transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
