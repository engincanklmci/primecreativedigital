import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Clock, Eye, Share2, Bookmark, Tag } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const BlogSection = ({ featured = false, limit = 6 }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  // Blog data - gerçek blog yazılarınızla değiştirilecek
  const blogData = [
    {
      id: 1,
      title: "2024'te Web Tasarım Trendleri: Geleceğin Dijital Deneyimleri",
      slug: "2024-web-tasarim-trendleri",
      excerpt: "2024 yılında web tasarım dünyasını şekillendirecek en önemli trendleri ve bunların işinize nasıl fayda sağlayacağını keşfedin.",
      content: "Web tasarım dünyası sürekli evrim geçiriyor...",
      category: "web-design",
      author: {
        name: "Ahmet Yılmaz",
        avatar: "/authors/ahmet-yilmaz.jpg",
        bio: "Senior Web Designer"
      },
      publishDate: "2024-01-15",
      readTime: "8 dakika",
      views: 1250,
      image: "/blog/web-design-trends-2024.jpg",
      tags: ["Web Tasarım", "Trendler", "UI/UX", "2024"],
      featured: true,
      seoTitle: "2024 Web Tasarım Trendleri | Prime Dijital Blog",
      metaDescription: "2024'ün en önemli web tasarım trendlerini keşfedin. Modern web sitesi tasarımı için ipuçları ve örnekler.",
      relatedPosts: [2, 3, 4]
    },
    {
      id: 2,
      title: "SEO'da Yapay Zeka Devrimi: ChatGPT ve Google'ın Geleceği",
      slug: "seo-yapay-zeka-chatgpt-google",
      excerpt: "Yapay zeka teknolojilerinin SEO stratejilerinizi nasıl etkilediğini ve bu değişime nasıl adapte olacağınızı öğrenin.",
      content: "Yapay zeka SEO dünyasını değiştiriyor...",
      category: "seo",
      author: {
        name: "Ayşe Demir",
        avatar: "/authors/ayse-demir.jpg",
        bio: "SEO Uzmanı"
      },
      publishDate: "2024-01-10",
      readTime: "12 dakika",
      views: 2100,
      image: "/blog/ai-seo-revolution.jpg",
      tags: ["SEO", "Yapay Zeka", "ChatGPT", "Google"],
      featured: true,
      seoTitle: "SEO ve Yapay Zeka: 2024 Rehberi | Prime Dijital",
      metaDescription: "Yapay zeka ile SEO stratejilerinizi güçlendirin. ChatGPT ve Google AI güncellemeleri hakkında uzman görüşleri.",
      relatedPosts: [1, 5, 6]
    },
    {
      id: 3,
      title: "E-ticaret Sitesi Nasıl Kurulur? Adım Adım Rehber",
      slug: "e-ticaret-sitesi-nasil-kurulur",
      excerpt: "Sıfırdan e-ticaret sitesi kurmak için bilmeniz gereken her şey. Platform seçiminden ödeme sistemlerine kadar.",
      content: "E-ticaret sitesi kurmak artık çok kolay...",
      category: "e-commerce",
      author: {
        name: "Mehmet Kaya",
        avatar: "/authors/mehmet-kaya.jpg",
        bio: "E-ticaret Uzmanı"
      },
      publishDate: "2024-01-05",
      readTime: "15 dakika",
      views: 1800,
      image: "/blog/ecommerce-guide.jpg",
      tags: ["E-ticaret", "Online Satış", "Rehber", "Başlangıç"],
      featured: false,
      seoTitle: "E-ticaret Sitesi Kurma Rehberi 2024 | Prime Dijital",
      metaDescription: "E-ticaret sitesi nasıl kurulur? Adım adım rehber ile online mağazanızı kurun ve satışa başlayın.",
      relatedPosts: [4, 7, 8]
    },
    {
      id: 4,
      title: "Mobil Uygulama Geliştirme: React Native vs Flutter",
      slug: "react-native-vs-flutter-karsilastirma",
      excerpt: "Mobil uygulama geliştirmede iki popüler framework'ün detaylı karşılaştırması ve hangisini seçmeniz gerektiği.",
      content: "Mobil uygulama geliştirme teknolojileri...",
      category: "mobile-development",
      author: {
        name: "Can Özkan",
        avatar: "/authors/can-ozkan.jpg",
        bio: "Mobil Geliştirici"
      },
      publishDate: "2024-01-01",
      readTime: "10 dakika",
      views: 950,
      image: "/blog/react-native-flutter.jpg",
      tags: ["Mobil Uygulama", "React Native", "Flutter", "Karşılaştırma"],
      featured: false,
      seoTitle: "React Native vs Flutter 2024 | Hangisi Daha İyi?",
      metaDescription: "React Native ve Flutter karşılaştırması. Mobil uygulama projeniz için en uygun teknoloji seçimi.",
      relatedPosts: [1, 3, 9]
    }
  ];

  const categories = [
    { id: 'all', name: 'Tümü', count: blogData.length },
    { id: 'web-design', name: 'Web Tasarım', count: blogData.filter(post => post.category === 'web-design').length },
    { id: 'seo', name: 'SEO', count: blogData.filter(post => post.category === 'seo').length },
    { id: 'e-commerce', name: 'E-ticaret', count: blogData.filter(post => post.category === 'e-commerce').length },
    { id: 'mobile-development', name: 'Mobil Geliştirme', count: blogData.filter(post => post.category === 'mobile-development').length }
  ];

  useEffect(() => {
    let filtered = blogData;
    
    if (featured) {
      filtered = filtered.filter(post => post.featured);
    }
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    if (limit) {
      filtered = filtered.slice(0, limit);
    }
    
    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
    
    setBlogPosts(filtered);
  }, [activeCategory, featured, limit]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const BlogCard = ({ post, variant = 'default' }) => {
    if (variant === 'featured') {
      return (
        <div className="col-span-full lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
          <div className="md:flex">
            <div className="md:w-1/2">
              <OptimizedImage
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-prime-yellow text-black text-sm font-semibold rounded-full">
                  {categories.find(cat => cat.id === post.category)?.name}
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {post.views.toLocaleString()} görüntüleme
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-prime-yellow transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-600 mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <OptimizedImage
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{post.author.name}</div>
                    <div className="text-sm text-gray-500">{post.author.bio}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.publishDate)}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
              
              <a
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 mt-6 text-prime-black font-semibold underline decoration-prime-yellow underline-offset-4 hover:gap-3 transition-all"
              >
                Devamını Oku
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      );
    }

    return (
      <article className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="relative">
          <OptimizedImage
            src={post.image}
            alt={post.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-prime-yellow text-black text-sm font-semibold rounded-full">
              {categories.find(cat => cat.id === post.category)?.name}
            </span>
          </div>
          
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors" type="button" aria-label="Yazıyı kaydet">
              <Bookmark className="w-4 h-4" />
            </button>
            <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors" type="button" aria-label="Yazıyı paylaş">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishDate)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {post.views.toLocaleString()}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-prime-yellow transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <OptimizedImage
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
            </div>
            
            <a
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-prime-black font-semibold underline decoration-prime-yellow underline-offset-4 hover:gap-2 transition-all"
            >
              Oku
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {featured ? 'Öne Çıkan Yazılar' : 'Blog & İçerikler'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dijital dünyada güncel kalmanızı sağlayacak uzman görüşleri, rehberler ve sektör analizleri
          </p>
        </div>

        {/* Categories */}
        {!featured && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeCategory === category.id
                    ? 'bg-prime-yellow text-black shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              variant={featured && index === 0 ? 'featured' : 'default'}
            />
          ))}
        </div>

        {/* Newsletter Signup - DISABLED */}
        {false && (
        <div className="mt-16 bg-gradient-to-r from-prime-yellow/10 to-prime-yellow/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Haftalık Newsletter'ımıza Katılın
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Dijital pazarlama ipuçları, sektör haberleri ve özel içeriklerimizi e-postanızda alın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-yellow"
            />
            <button className="px-6 py-3 bg-prime-yellow text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
              Abone Ol
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            İstediğiniz zaman abonelikten çıkabilirsiniz. Gizlilik politikamızı okuyun.
          </p>
        </div>
        )}

        {/* View All Button */}
        {featured && (
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 bg-prime-yellow text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Tüm Yazıları Gör
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;