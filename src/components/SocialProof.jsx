import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Play, ExternalLink, Award } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const SocialProof = ({ variant = 'full' }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      position: "CEO",
      company: "TechVision Ltd.",
      avatar: "/testimonials/ahmet-yilmaz.jpg",
      rating: 5,
      text: "Prime Dijital ile çalışmak işimizi tamamen değiştirdi. Web sitemizin yenilenmesi sonrası müşteri sayımız 3 katına çıktı. Profesyonel yaklaşımları ve zamanında teslimatları takdire şayan.",
      project: "Kurumsal Web Sitesi",
      results: ["300% müşteri artışı", "95/100 sayfa hızı", "1. sayfa Google sıralaması"],
      videoUrl: "https://youtube.com/watch?v=testimonial1",
      linkedinUrl: "https://linkedin.com/in/ahmetyilmaz",
      featured: true
    },
    {
      id: 2,
      name: "Ayşe Demir",
      position: "Pazarlama Müdürü",
      company: "ModaLife E-ticaret",
      avatar: "/testimonials/ayse-demir.jpg",
      rating: 5,
      text: "SEO çalışmaları sayesinde organik trafiğimiz %400 arttı. Artık Google'da hedef kelimelerimizde 1. sıradayız. ROI'mız inanılmaz yükseldi!",
      project: "SEO & Dijital Pazarlama",
      results: ["400% organik trafik", "1. sayfa sıralama", "250% ROI artışı"],
      videoUrl: null,
      linkedinUrl: "https://linkedin.com/in/aysedemir",
      featured: true
    },
    {
      id: 3,
      name: "Mehmet Kaya",
      position: "Kurucu",
      company: "StartupX",
      avatar: "/testimonials/mehmet-kaya.jpg",
      rating: 5,
      text: "Mobil uygulamamız App Store'da 4.8 puan aldı ve 50.000+ indirme sayısına ulaştı. Prime Dijital'in teknik uzmanlığı ve yaratıcı çözümleri mükemmel.",
      project: "Mobil Uygulama Geliştirme",
      results: ["50K+ indirme", "4.8/5 puan", "75% kullanıcı tutma"],
      videoUrl: "https://youtube.com/watch?v=testimonial3",
      linkedinUrl: "https://linkedin.com/in/mehmetkaya",
      featured: true
    },
    {
      id: 4,
      name: "Zeynep Özkan",
      position: "İşletme Sahibi",
      company: "Özkan Restoran",
      avatar: "/testimonials/zeynep-ozkan.jpg",
      rating: 5,
      text: "Yerel SEO çalışması sayesinde restoranımıza gelen müşteri sayısı ikiye katlandı. Google Haritalar'da en üst sıradayız!",
      project: "Yerel SEO",
      results: ["200% müşteri artışı", "1. sıra Google Maps", "150% rezervasyon"],
      videoUrl: null,
      linkedinUrl: null,
      featured: false
    }
  ];

  const awards = [
    {
      title: "En İyi Dijital Ajans",
      organization: "İstanbul Ticaret Odası",
      year: "2024",
      icon: <Award className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Google Partner",
      organization: "Google",
      year: "2023",
      icon: <Award className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Müşteri Memnuniyeti Ödülü",
      organization: "Dijital Pazarlama Derneği",
      year: "2024",
      icon: <Award className="w-8 h-8 text-green-500" />
    }
  ];

  const liveStats = [
    { label: "Aktif Proje", value: "23", suffix: "" },
    { label: "Bu Ay Tamamlanan", value: "8", suffix: "" },
    { label: "Müşteri Memnuniyeti", value: "98", suffix: "%" },
    { label: "Ortalama Proje Süresi", value: "4", suffix: " hafta" }
  ];

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (variant === 'compact') {
    return (
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex">{renderStars(5)}</div>
                <span className="font-semibold">4.9/5 Müşteri Puanı</span>
              </div>
              <div className="text-sm text-gray-600">
                500+ Tamamlanan Proje
              </div>
            </div>
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <div key={index} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <OptimizedImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Başarılı projelerimiz ve mutlu müşterilerimizin gerçek deneyimleri
          </p>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {liveStats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-prime-black mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="relative mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar & Info */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="w-24 h-24 mx-auto md:mx-0 rounded-full overflow-hidden mb-4">
                  <OptimizedImage
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-gray-900">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonials[activeTestimonial].position}
                </p>
                <p className="text-prime-black font-semibold text-sm bg-prime-yellow/20 inline-block px-2 py-0.5 rounded-md">
                  {testimonials[activeTestimonial].company}
                </p>
                
                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-2 mt-3">
                  {testimonials[activeTestimonial].videoUrl && (
                    <a
                      href={testimonials[activeTestimonial].videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
                      title="Video Testimonial"
                      aria-label="Video testimonial"
                    >
                      <Play className="w-4 h-4" />
                    </a>
                  )}
                  {testimonials[activeTestimonial].linkedinUrl && (
                    <a
                      href={testimonials[activeTestimonial].linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                      title="LinkedIn Profili"
                      aria-label="LinkedIn profili"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <Quote className="w-12 h-12 text-prime-black/20 mb-4" />
                
                <div className="flex mb-4">
                  {renderStars(testimonials[activeTestimonial].rating)}
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    Proje: {testimonials[activeTestimonial].project}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {testimonials[activeTestimonial].results.map((result, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-prime-yellow/20 text-prime-black text-xs font-medium rounded-full"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              type="button"
              aria-label="Önceki yorum"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-prime-yellow' : 'bg-gray-300'
                  }`}
                  type="button"
                  aria-label={`Yorum ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              type="button"
              aria-label="Sonraki yorum"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-white rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Ödüller & Sertifikalar
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="text-center p-4">
                <div className="flex justify-center mb-3">
                  {award.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {award.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {award.organization} • {award.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-play Control */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            {isAutoPlaying ? 'Otomatik geçişi durdur' : 'Otomatik geçişi başlat'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;