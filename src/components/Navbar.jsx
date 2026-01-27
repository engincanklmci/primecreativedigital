import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Portföy', path: '/portfoy' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#f6f6f6]/80 backdrop-blur-xl shadow-lg border-b border-[#292929]/5 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 z-50 group">
            <motion.img 
              src="/logo.png" 
              alt="Prime Dijital" 
              width="48"
              height="48"
              className="h-12 w-auto object-contain" 
              style={{ backgroundColor: 'transparent' }}
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <span className="text-2xl font-semibold tracking-tight flex items-center gap-1 text-[#292929]">
              Prime
              <motion.span 
                className="bg-gradient-to-r from-[#e4ac20] to-[#c99416] text-[#292929] px-2.5 py-1 rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Dijital
              </motion.span>
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {links.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="relative text-sm font-semibold transition-colors group"
              >
                <span className={`relative z-10 ${
                  location.pathname === item.path ? 'text-[#e4ac20]' : 'text-[#292929]/80 group-hover:text-[#e4ac20]'
                }`}>
                  {item.name}
                </span>
                {location.pathname === item.path && (
                  <motion.span 
                    layoutId="underline" 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#e4ac20] to-[#c99416]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {location.pathname !== item.path && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#e4ac20] to-[#c99416] group-hover:w-full transition-all duration-300 ease-out" />
                )}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <Link to="/iletisim">
              <motion.button 
                className="relative bg-gradient-to-r from-[#e4ac20] to-[#c99416] text-[#292929] px-6 py-2.5 rounded-full text-sm font-medium shadow-lg overflow-hidden group"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#f0c563] to-[#e4ac20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                <span className="relative z-10">İletişime Geç</span>
              </motion.button>
            </Link>
          </div>

          <button 
            className="md:hidden z-50 text-[#292929]"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            id="mobile-menu"
            className="fixed inset-0 bg-gradient-to-br from-[#f6f6f6] to-[#f6f6f6] z-40 md:hidden pt-24 px-6 flex flex-col backdrop-blur-2xl"
          >
            <div className="flex flex-col space-y-6 text-center">
              {links.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={item.path} 
                    className={`text-2xl font-semibold transition-colors ${
                      location.pathname === item.path ? 'text-[#e4ac20]' : 'text-[#292929] hover:text-[#e4ac20]'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <Link to="/iletisim">
                  <button className="bg-gradient-to-r from-[#e4ac20] to-[#c99416] text-[#292929] px-8 py-4 rounded-full text-lg font-medium w-full shadow-xl">
                    İletişime Geç
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
