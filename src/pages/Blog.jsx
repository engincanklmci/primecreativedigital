import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search,
  Filter,
  ChevronRight,
  Heart,
  MessageCircle,
  Eye
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  blogPosts, 
  blogCategories, 
  popularTags, 
  getPostsByCategory, 
  getPostsByTag,
  getPopularPosts,
  getLatestPosts 
} from '../data/blogData';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  // Filtrelenmiş blogları hesapla
  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];
    
    // Arama filtresi
    if (searchTerm) {
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Kategori filtresi
    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === selectedCategory);
    }
    
    // Etiket filtresi
    if (selectedTag !== 'all') {
      posts = posts.filter(post => post.tags.includes(selectedTag));
    }
    
    return posts;
  }, [searchTerm, selectedCategory, selectedTag]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  const popularPosts = getPopularPosts(3);

  return (
    <>
      <Helmet>
        <title>Blog - Prime Dijital | Dijital Pazarlama, Web Tasarım & Yazılım Geliştirme</title>
        <meta name="description" content="Prime Dijital blogunda dijital pazarlama, web tasarım, grafik tasarım ve yazılım geliştirme hakkında en güncel makaleleri keşfedin." />
        <meta name="keywords" content="prime dijital blog, dijital pazarlama, web tasarım, yazılım geliştirme, grafik tasarım, seo, istanbul dijital ajans" />
        <link rel="canonical" href="https://primedijital.com/blog" />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-prime-yellow/10 to-white py-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-prime-yellow font-bold tracking-wider uppercase text-sm">Prime Dijital Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-prime-black">
              Dijital Dünyadaki <span className="text-prime-yellow">Güncel Trendler</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Web tasarım, dijital pazarlama, grafik tasarım ve yazılım geliştirme alanlarında uzman ekibimizin analizleri, ipuçları ve en iyi pratikler.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Blog yazılarında arayın..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-prime-yellow transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-6">
            {/* Category Filter */}
            <div className="flex items-center gap-3">
              <Filter size={18} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Kategori:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-prime-yellow"
              >
                <option value="all">Tüm Kategoriler</option>
                {blogCategories.map(category => (
                  <option key={category.id} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Tag Filter */}
            <div className="flex items-center gap-3">
              <Tag size={18} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Etiket:</span>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-prime-yellow"
              >
                <option value="all">Tüm Etiketler</option>
                {popularTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="ml-auto text-sm text-gray-500">
              {filteredPosts.length} yazı bulundu
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-prime-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts Grid */}
            <div className="lg:col-span-2">
              {filteredPosts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-prime-black mb-2">Sonuç Bulunamadı</h3>
                  <p className="text-gray-500 mb-6">
                    Arama kriterlerinize uygun blog yazısı bulunamadı. Filtreleri temizleyerek tekrar deneyin.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedTag('all');
                    }}
                    className="px-6 py-3 bg-prime-yellow text-prime-black rounded-full font-bold hover:bg-yellow-400 transition-colors"
                  >
                    Filtreleri Temizle
                  </button>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-prime-yellow hover:shadow-xl transition-all duration-300">
                          {/* Featured Image */}
                          <div className="relative overflow-hidden h-48">
                            <img 
                              src={post.featuredImage}
                              alt={post.title}
                              width="400"
                              height="300"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                e.target.src = `https://picsum.photos/seed/${post.id}/400/300.jpg`;
                              }}
                            />
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-prime-yellow text-prime-black text-xs font-bold rounded-full">
                                {post.category}
                              </span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-3 text-prime-black line-clamp-2 group-hover:text-prime-yellow transition-colors">
                              {post.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                              {post.excerpt}
                            </p>
                            
                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
                              <div className="flex items-center gap-1">
                                <User size={14} />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                <span>{formatDate(post.date)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock size={14} />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span 
                                  key={tagIndex}
                                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                >
                                  #{tag}
                                </span>
                              ))}
                              {post.tags.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  +{post.tags.length - 3}
                                </span>
                              )}
                            </div>
                            
                            {/* Engagement Stats */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Eye size={14} />
                                  <span>{post.views}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Heart size={14} />
                                  <span>{post.likes}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageCircle size={14} />
                                  <span>{post.comments}</span>
                                </div>
                              </div>
                              
                              <ChevronRight 
                                size={20} 
                                className="text-prime-yellow group-hover:translate-x-2 transition-transform duration-300" 
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Popular Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h3 className="font-bold text-prime-black mb-4 flex items-center gap-2">
                    <Heart size={18} className="text-red-500" />
                    Popüler Yazılar
                  </h3>
                  <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <div className="flex-shrink-0 w-16 h-16 bg-prime-yellow rounded-lg overflow-hidden">
                            <img 
                              src={post.featuredImage}
                              alt={post.title}
                              width="100"
                              height="100"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = `https://picsum.photos/seed/${post.id}/100/100.jpg`;
                              }}
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm text-prime-black mb-1 line-clamp-2 group-hover:text-prime-yellow transition-colors">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span>{formatDate(post.date)}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h3 className="font-bold text-prime-black mb-4">Kategoriler</h3>
                  <div className="space-y-2">
                    {blogCategories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                          selectedCategory === category.name
                            ? 'bg-prime-yellow text-prime-black font-medium'
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{category.name}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Popular Tags */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h3 className="font-bold text-prime-black mb-4 flex items-center gap-2">
                    <Tag size={18} />
                    Popüler Etiketler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.slice(0, 12).map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                          selectedTag === tag
                            ? 'bg-prime-yellow text-prime-black font-medium'
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-gradient-to-br from-prime-yellow to-yellow-400 rounded-2xl p-6 text-center"
                >
                  <h3 className="font-bold text-prime-black mb-3">Dijital Dönüşüm Başlasın!</h3>
                  <p className="text-sm text-prime-black/80 mb-4">
                    Projelerinizi hayata geçirmek için uzman ekibimizle iletişime geçin.
                  </p>
                  <Link
                    to="/iletisim"
                    className="inline-block px-6 py-3 bg-prime-black text-prime-yellow rounded-full font-bold hover:bg-gray-800 transition-colors text-sm"
                  >
                    Hemen İletişime Geç
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
