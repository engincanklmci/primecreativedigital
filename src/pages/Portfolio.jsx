import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { getPortfolioProjects } from '../data/portfolioData';

const projects = getPortfolioProjects();

const categories = ['Tümü', 'Kurumsal Kimlik', 'Baskı Tasarım', 'Logo Tasarım', 'Ambalaj Tasarım', 'Dijital Tasarım', 'Reklam Tasarım', 'Web Tasarım'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'Tümü' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container-custom text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Portföyümüz
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-gray-500 max-w-3xl mx-auto"
          >
            Başarıyla tamamladığımız projelerden ilham alın
          </motion.p>
        </div>

        <div className="container-custom mb-12">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-prime-yellow text-prime-black shadow-lg transform scale-105' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-prime-black hover:text-prime-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Proje ara..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-prime-yellow focus:ring-2 focus:ring-prime-yellow/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="container-custom">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <Link
                    to={`/portfoy/${project.slug}`}
                    className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-50"
                  >
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      <span className="inline-block px-3 py-1 bg-prime-yellow/20 text-prime-black text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                        {project.category}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-prime-black group-hover:text-prime-yellow transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center gap-2 text-prime-yellow font-bold text-sm group-hover:gap-3 transition-all duration-300">
                        Projeyi İncele
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Aradığınız kriterlere uygun proje bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default Portfolio;
