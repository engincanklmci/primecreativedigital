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

  // Close mobile menu when route changes
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen ? 'bg-prime-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 z-50">
            {/* Logo Image */}
            <img 
              src="/logo.png" 
              alt="Prime Dijital" 
              className="h-12 w-auto object-contain" 
              style={{ backgroundColor: 'transparent' }}
            />
            <span className="text-2xl font-bold tracking-tighter flex items-center gap-1">
              Prime<span className="text-prime-yellow">Dijital</span>
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === item.path ? 'text-prime-yellow' : 'text-prime-black hover:text-prime-yellow'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.span layoutId="underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-prime-yellow" />
                )}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <Link to="/iletisim">
              <button className="bg-prime-yellow text-prime-black px-6 py-2 rounded-md text-sm font-bold hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                İletişime Geç
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 text-prime-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-prime-white z-40 md:hidden pt-24 px-6 flex flex-col"
          >
            <div className="flex flex-col space-y-6 text-center">
              {links.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`text-2xl font-bold transition-colors ${
                    location.pathname === item.path ? 'text-prime-yellow' : 'text-prime-black hover:text-prime-yellow'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/iletisim" className="pt-4">
                <button className="bg-prime-yellow text-prime-black px-8 py-3 rounded-md text-lg font-bold w-full hover:bg-yellow-400 transition-all">
                  İletişime Geç
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
