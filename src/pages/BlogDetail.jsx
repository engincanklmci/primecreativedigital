import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Share2, 
  Heart, 
  MessageCircle,
  ChevronLeft,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getPostBySlug, getRelatedPosts, blogPosts } from '../data/blogData';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  
  const post = getPostBySlug(slug);
  const relatedPosts = getRelatedPosts(post?.id);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-prime-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Yazısı Bulunamadı</h1>
            <p className="text-gray-500 mb-8">Aradığınız blog yazısı mevcut değil.</p>
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-prime-yellow text-prime-black rounded-full font-bold hover:bg-yellow-400 transition-all duration-300"
            >
              <ChevronLeft size={20} />
              Blog'a Dön
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      instagram: `https://www.instagram.com/`
    };
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  // Markdown benzeri içerik işleme
  const processContent = (content) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Başlıklar
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-4xl font-bold mb-6 mt-8 text-prime-black">{line.substring(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-3xl font-bold mb-4 mt-6 text-prime-black">{line.substring(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-2xl font-bold mb-3 mt-5 text-prime-black">{line.substring(4)}</h3>;
        }
        
        // Blockquote
        if (line.startsWith('> ')) {
          return <blockquote key={index} className="border-l-4 border-prime-yellow pl-6 py-2 my-4 bg-gray-50 italic text-gray-600">{line.substring(2)}</blockquote>;
        }
        
        // Liste öğeleri
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-6 my-2 text-gray-600">{line.substring(2)}</li>;
        }
        
        // Boş satırlar
        if (line.trim() === '') {
          return <br key={index} />;
        }
        
        // Normal paragraf
        if (line.trim()) {
          return <p key={index} className="text-gray-600 leading-relaxed mb-4">{line}</p>;
        }
        
        return null;
      });
  };

  return (
    <>
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.seoDescription} />
        <meta name="keywords" content={post.seoKeywords} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:description" content={post.seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={post.featuredImage} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle} />
        <meta name="twitter:description" content={post.seoDescription} />
        <meta name="twitter:image" content={post.featuredImage} />
        
        {/* Article */}
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        
        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Navbar />
      
      <article className="min-h-screen bg-prime-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-prime-yellow/10 to-white py-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-gray-500">
                  <li>
                    <Link to="/" className="hover:text-prime-yellow transition-colors">Anasayfa</Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link to="/blog" className="hover:text-prime-yellow transition-colors">Blog</Link>
                  </li>
                  <li>/</li>
                  <li className="text-prime-black font-medium">{post.title}</li>
                </ol>
              </nav>

              {/* Blog Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-prime-yellow text-prime-black text-sm font-bold rounded-full mb-4">
                    {post.category}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-prime-black">
                  {post.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    <span>{post.comments} yorum</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-prime-yellow hover:text-prime-black transition-all duration-300 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  {/* Featured Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title}
                        className="w-full h-96 object-cover"
                        onError={(e) => {
                          e.target.src = `https://picsum.photos/seed/${post.id}/800/400.jpg`;
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Article Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="prose prose-lg max-w-none"
                  >
                    {processContent(post.content)}
                  </motion.div>

                  {/* Engagement Bar */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="border-t border-gray-200 mt-12 pt-8"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={handleLike}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                            isLiked 
                              ? 'bg-red-500 text-white' 
                              : 'bg-gray-100 text-gray-600 hover:bg-prime-yellow hover:text-prime-black'
                          }`}
                        >
                          <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
                          <span>{post.likes + (isLiked ? 1 : 0)}</span>
                        </button>
                        
                        <div className="flex items-center gap-2">
                          <Share2 size={18} className="text-gray-500" />
                          <span className="text-gray-500">Paylaş:</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleShare('facebook')}
                            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                          >
                            <Facebook size={18} />
                          </button>
                          <button
                            onClick={() => handleShare('twitter')}
                            className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                          >
                            <Twitter size={18} />
                          </button>
                          <button
                            onClick={() => handleShare('linkedin')}
                            className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                          >
                            <Linkedin size={18} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        {post.views} görüntülenme
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  {/* Author Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gray-50 rounded-2xl p-6 mb-8"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-prime-yellow rounded-full flex items-center justify-center">
                        <User size={24} className="text-prime-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-prime-black">{post.author}</h3>
                        <p className="text-sm text-gray-500">Yazar</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Prime Dijital ekibi olarak, dijital dünyadaki en güncel trendleri ve en iyi pratikleri sizin için analiz ediyoruz.
                    </p>
                  </motion.div>

                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                    >
                      <h3 className="font-bold text-prime-black mb-4">İlgili Yazılar</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost, index) => (
                          <Link
                            key={relatedPost.id}
                            to={`/blog/${relatedPost.slug}`}
                            className="block p-4 bg-white rounded-xl border border-gray-100 hover:border-prime-yellow hover:shadow-lg transition-all duration-300"
                          >
                            <h4 className="font-medium text-prime-black mb-2 line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                              <span>{formatDate(relatedPost.date)}</span>
                              <span>•</span>
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Back to Blog */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-16 text-center"
              >
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-prime-black rounded-full font-bold hover:bg-prime-yellow transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                  Blog'a Dön
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
};

export default BlogDetail;
