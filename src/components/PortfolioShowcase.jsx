import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Award, TrendingUp, Users, Clock, Eye, ArrowRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const PortfolioShowcase = ({ featured = false, limit = 6 }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [portfolioItems, setPortfolioItems] = useState([]);

  // Portfolio data - bu gerçek projelerinizle değiştirilecek
  const portfolioData = [
    {
      id: 1,
      title: "TechCorp Kurumsal Web Sitesi",
      category: "web-design",
      client: "TechCorp Ltd.",
      image: "/portfolio/techcorp-web.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      completionTime: "6 hafta",
      results: {
        trafficIncrease: "250%",
        conversionRate: "18%",
        pageSpeed: "95/100"
      },
      description: "Modern teknoloji şirketi için responsive kurumsal web sitesi tasarımı ve geliştirmesi.",
      features: [
        "Responsive tasarım",
        "CMS entegrasyonu",
        "SEO optimizasyonu",
        "Hızlı yükleme",
        "Güvenlik sertifikası"
      ],
      testimonial: {
        text: "Prime Dijital ile çalışmak harika bir deneyimdi. Web sitemiz sayesinde müşteri sayımız 3 katına çıktı!",
        author: "Ahmet Yılmaz",
        position: "CEO, TechCorp"
      },
      liveUrl: "https://techcorp-demo.com",
      caseStudyUrl: "/case-study/techcorp",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Mobil Uygulaması",
      category: "mobile-app",
      client: "ShopMax",
      image: "/portfolio/shopmax-app.jpg",
      technologies: ["React Native", "Firebase", "Stripe"],
      completionTime: "8 hafta",
      results: {
        downloads: "50K+",
        rating: "4.8/5",
        retention: "75%"
      },
      description: "Kullanıcı dostu e-ticaret mobil uygulaması geliştirmesi.",
      features: [
        "Cross-platform",
        "Push notifications",
        "Ödeme entegrasyonu",
        "Offline mode",
        "Analytics"
      ],
      testimonial: {
        text: "Uygulamamız sayesinde mobil satışlarımız %400 arttı. Müthiş bir iş çıkardılar!",
        author: "Ayşe Demir",
        position: "Pazarlama Müdürü, ShopMax"
      },
      appStoreUrl: "https://apps.apple.com/shopmax",
      playStoreUrl: "https://play.google.com/shopmax",
      featured: true
    },
    {
      id: 3,
      title: "RestaurantPro SEO Projesi",
      category: "seo",
      client: "Restaurant Pro",
      image: "/portfolio/restaurant-seo.jpg",
      technologies: ["SEO", "Google Ads", "Analytics"],
      completionTime: "3 ay",
      results: {
        organicTraffic: "400%",
        keywordRankings: "1. sayfa",
        localSearches: "300%"
      },
      description: "Restoran zinciri için kapsamlı SEO ve dijital pazarlama çalışması.",
      features: [
        "Yerel SEO",
        "Google My Business",
        "İçerik pazarlama",
        "Link building",
        "Sosyal medya"
      ],
      testimonial: {
        text: "Google'da 1. sırada çıkmaya başladık. Rezervasyonlarımız inanılmaz arttı!",
        author: "Mehmet Kaya",
        position: "Genel Müdür, Restaurant Pro"
      },
      caseStudyUrl: "/case-study/restaurant-pro",
      featured: false
    },
    {
      id: 4,
      title: "StartupX Kurumsal Kimlik",
      category: "branding",
      client: "StartupX",
      image: "/portfolio/startupx-brand.jpg",
      technologies: ["Adobe Creative Suite", "Figma"],
      completionTime: "4 hafta",
      results: {
        brandRecognition: "85%",
        marketPresence: "200%",
        customerTrust: "90%"
      },
      description: "Teknoloji startup'ı için komple kurumsal kimlik tasarımı.",
      features: [
        "Logo tasarım",
        "Kurumsal renk paleti",
        "Tipografi",
        "Kartvizit & kırtasiye",
        "Dijital assets"
      ],
      testimonial: {
        text: "Marka kimliğimiz sayesinde yatırımcılar bizi çok daha profesyonel görüyor.",
        author: "Can Özkan",
        position: "Kurucu, StartupX"
      },
      caseStudyUrl: "/case-study/startupx",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Tümü', count: portfolioData.length },
    { id: 'web-design', name: 'Web Tasarım', count: portfolioData.filter(item => item.category === 'web-design').length },
    { id: 'mobile-app', name: 'Mobil Uygulama', count: portfolioData.filter(item => item.category === 'mobile-app').length },
    { id: 'seo', name: 'SEO', count: portfolioData.filter(item => item.category === 'seo').length },
    { id: 'branding', name: 'Kurumsal Kimlik', count: portfolioData.filter(item => item.category === 'branding').length }
  ];

  useEffect(() => {
    let filtered = portfolioData;
    
    if (featured) {
      filtered = filtered.filter(item => item.featured);
    }
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(item => item.category === activeFilter);
    }
    
    if (limit) {
      filtered = filtered.slice(0, limit);
    }
    
    setPortfolioItems(filtered);
  }, [activeFilter, featured, limit]);

  const PortfolioCard = ({ item }) => (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative overflow-hidden">
        <OptimizedImage
          src={item.image}
          alt={item.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-prime-yellow transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {item.caseStudyUrl && (
              <a
                href={item.caseStudyUrl}
                className="p-2 bg-white rounded-full hover:bg-prime-yellow transition-colors"
              >
                <Eye className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-prime-yellow text-black text-xs font-semibold rounded-full">
            {categories.find(cat => cat.id === item.category)?.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-prime-yellow transition-colors">
          {item.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          {item.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Results */}
        <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
          {Object.entries(item.results).map(([key, value], index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-prime-yellow">{value}</div>
              <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
            </div>
          ))}
        </div>

        {/* Client */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span className="font-medium">{item.client}</span>
          </div>
          <div className="text-sm text-gray-500">
            <Clock className="w-4 h-4 inline mr-1" />
            {item.completionTime}
          </div>
        </div>

        {/* CTA */}
        {item.caseStudyUrl && (
          <a
            href={item.caseStudyUrl}
            className="mt-4 flex items-center justify-center gap-2 w-full py-2 bg-prime-yellow text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Detayları Gör
            <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {featured ? 'Öne Çıkan Projelerimiz' : 'Portfolyomuz'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Müşterilerimiz için gerçekleştirdiğimiz başarılı projeler ve elde ettikleri sonuçlar
          </p>
        </div>

        {/* Filters */}
        {!featured && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeFilter === category.id
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

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        {/* View All Button */}
        {featured && (
          <div className="text-center mt-12">
            <a
              href="/portfoy"
              className="inline-flex items-center gap-2 px-8 py-3 bg-prime-yellow text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Tüm Projeleri Gör
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioShowcase;