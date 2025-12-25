import React, { useMemo } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Lightbulb, Users, Clock, ShieldCheck, Zap, Star, TrendingUp } from 'lucide-react';

const Home = () => {
  // Memoize static data to prevent re-renders
  const whyChooseUsData = useMemo(() => [
    { icon: <Users />, title: "Uzman Kadro", desc: "Alanında deneyimli, yenilikçi ve profesyonel ekibimizle projelerinizi emin ellere teslim edin." },
    { icon: <Zap />, title: "Hızlı Teslimat", desc: "Zamanınızın değerini biliyoruz. Projelerinizi söz verdiğimiz tarihte, eksiksiz teslim ediyoruz." },
    { icon: <ShieldCheck />, title: "Güvenilir Destek", desc: "Proje tesliminden sonra da yanınızdayız. 7/24 teknik destek ve bakım hizmeti sunuyoruz." },
    { icon: <Target />, title: "Sonuç Odaklı", desc: "Sadece güzel görünen değil, işinize değer katan ve dönüşüm sağlayan projeler üretiyoruz." },
    { icon: <Lightbulb />, title: "Yenilikçi Teknoloji", desc: "En güncel yazılım ve tasarım teknolojilerini kullanarak geleceğe hazır çözümler sunuyoruz." },
    { icon: <Star />, title: "Müşteri Memnuniyeti", desc: "Mutlu müşteriler en büyük referansımızdır. %100 müşteri memnuniyeti ilkesiyle çalışıyoruz." }
  ], []);

  const testimonialsData = useMemo(() => [
    { name: "Ahmet Yılmaz", role: "CEO, TechV", text: "Prime Dijital ile çalışmak işimize büyük değer kattı. Web sitemizin yenilenmesi sürecinde gösterdikleri profesyonellik takdire şayan." },
    { name: "Ayşe Demir", role: "Pazarlama Müdürü, ModaLife", text: "Sosyal medya yönetimimizi devraldıklarından beri etkileşimlerimiz %200 arttı. Yaratıcı fikirleri ve enerjileri harika." },
    { name: "Mehmet Kaya", role: "Kurucu, Kaya İnşaat", text: "Kurumsal kimlik çalışmamız için kendilerini tercih ettik. Beklentimizin çok üzerinde, modern ve prestijli bir iş çıkardılar." }
  ], []);
  return (
    <>
      <Helmet>
        <title>Prime Dijital | Web Tasarım, Yazılım & Dijital Pazarlama Ajansı İstanbul</title>
        <meta name="description" content="Prime Dijital: İstanbul'un önde gelen dijital ajansı. Web tasarım, mobil uygulama, SEO, dijital pazarlama ve kurumsal kimlik çözümleri ile işinizi zirveye taşıyın." />
        <meta name="keywords" content="dijital ajans İstanbul, web tasarım İstanbul, yazılım geliştirme, SEO hizmetleri, dijital pazarlama, mobil uygulama, kurumsal kimlik, grafik tasarım, e-ticaret çözümleri" />
        <meta name="author" content="Prime Dijital" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Turkish" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="İstanbul" />
        <meta name="geo.position" content="41.0082;28.9784" />
        <meta name="ICBM" content="41.0082,28.9784" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://primedigitalcreative.com/" />
        <meta property="og:title" content="Prime Dijital | Web Tasarım, Yazılım & Dijital Pazarlama Ajansı İstanbul" />
        <meta property="og:description" content="Prime Dijital: İstanbul'un önde gelen dijital ajansı. Web tasarım, mobil uygulama, SEO, dijital pazarlama ve kurumsal kimlik çözümleri." />
        <meta property="og:image" content="https://primedigitalcreative.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Prime Dijital" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://primedigitalcreative.com/" />
        <meta property="twitter:title" content="Prime Dijital | Web Tasarım, Yazılım & Dijital Pazarlama Ajansı İstanbul" />
        <meta property="twitter:description" content="Prime Dijital: İstanbul'un önde gelen dijital ajansı. Web tasarım, mobil uygulama, SEO, dijital pazarlama ve kurumsal kimlik çözümleri." />
        <meta property="twitter:image" content="https://primedigitalcreative.com/og-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://primedigitalcreative.com/" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Prime Dijital",
            "url": "https://primedigitalcreative.com",
            "logo": "https://primedigitalcreative.com/logo.png",
            "description": "İstanbul'un önde gelen dijital ajansı. Web tasarım, mobil uygulama, SEO, dijital pazarlama ve kurumsal kimlik çözümleri.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "İstanbul",
              "addressRegion": "TR",
              "addressCountry": "Turkey"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-535-949-53-05",
              "contactType": "customer service",
              "email": "info@primedigitalcreative.com"
            },
            "sameAs": [
              "https://www.instagram.com/primedigitalcreative",
              "https://www.linkedin.com/company/primedigitalcreative"
            ],
            "services": [
              "Web Tasarım",
              "Mobil Uygulama Geliştirme",
              "SEO Hizmetleri",
              "Dijital Pazarlama",
              "Kurumsal Kimlik Tasarımı",
              "Grafik Tasarım"
            ]
          }
        `}
        </script>
      </Helmet>
      
      <Navbar />
      <Hero />
      
      {/* Stats Section */}
      <Stats />

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-prime-yellow/20 rounded-full blur-3xl"></div>
              <div className="relative bg-prime-black text-white p-10 rounded-3xl shadow-2xl overflow-hidden">
                 <div className="absolute top-0 right-0 p-10 opacity-10">
                   <Target size={120} />
                 </div>
                 <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                   <Target className="text-prime-yellow" />
                   Misyonumuz
                 </h2>
                 <p className="text-gray-300 leading-relaxed text-lg">
                   Markaların kimliğini güçlendiren özgün, estetik ve etkili tasarımlar üretmek. Dijital ve basılı mecralarda yüksek kalite standartlarıyla hizmet sunarak, işletmelere değer katmak; her projede müşteri odaklı, yenilikçi ve çözüm odaklı yaklaşımımızla fark yaratmak.
                 </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-prime-yellow/20 rounded-full blur-3xl"></div>
              <div className="relative bg-gray-50 p-10 rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                 <div className="absolute top-0 right-0 p-10 opacity-5">
                   <Lightbulb size={120} />
                 </div>
                 <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-prime-black">
                   <Lightbulb className="text-prime-yellow" />
                   Vizyonumuz
                 </h2>
                 <p className="text-gray-600 leading-relaxed text-lg">
                   Türkiye'nin ve dünyanın önde gelen dijital ajanslarından biri olarak, yenilikçiliğin ve teknolojinin sınırlarını zorlayan projelerle sektöre yön vermek. Geleceğin dijital trendlerini bugünden yakalayarak iş ortaklarımıza ilham kaynağı olmak.
                 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Transformation Journey Section */}
      <section className="py-24 bg-gradient-to-br from-prime-white via-white to-prime-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-prime-yellow/30 to-transparent"></div>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-prime-yellow font-bold tracking-wider uppercase text-sm">Dijital Dönüşüm</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-3 mb-6 bg-gradient-to-r from-prime-black to-prime-yellow bg-clip-text text-transparent">
              Markanızın Geleceğini Şekillendiriyoruz
            </h2>
            <p className="text-gray-500 text-lg">
              Sıradanlıktan çıkarıp dijital zirveye taşıyoruz. İşte bu yolculukta size eşlik edeceğimiz 4 temel alan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-prime-yellow/20 to-transparent -translate-y-1/2"></div>
            
            {[
              {
                number: '01',
                title: 'Strateji & Analiz',
                desc: 'Markanızın dijital DNA\'sını analiz edip, özelleştirilmiş stratejiler geliştiriyoruz.',
                icon: <Target className="w-8 h-8" />,
                features: ['Pazar Araştırması', 'Rakip Analizi', 'Hedef Kitle Belirleme']
              },
              {
                number: '02',
                title: 'Tasarım & Yaratıcılık',
                desc: 'Akılda kalıcı, etkileyici ve markanıza özel tasarımlarla sizi farklılaştırıyoruz.',
                icon: <Lightbulb className="w-8 h-8" />,
                features: ['Kurumsal Kimlik', 'Web Tasarım', 'UI/UX']
              },
              {
                number: '03',
                title: 'Teknoloji & Geliştirme',
                desc: 'En güncel teknolojileri kullanarak, ölçeklenebilir ve performanslı çözümler üretiyoruz.',
                icon: <Zap className="w-8 h-8" />,
                features: ['Web Geliştirme', 'Mobil Uygulama', 'API Entegrasyonu']
              },
              {
                number: '04',
                title: 'Büyüme & Optimizasyon',
                desc: 'Projeyi teslim etmekle kalmıyor, sürekli iyileştirme ve büyüme desteği sağlıyoruz.',
                icon: <TrendingUp className="w-8 h-8" />,
                features: ['SEO Optimizasyonu', 'Performans Analizi', 'Sürekli Destek']
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-50 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-prime-yellow rounded-full flex items-center justify-center text-prime-black font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.number}
                  </div>
                  
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-prime-yellow/20 to-prime-yellow/10 rounded-2xl flex items-center justify-center mb-6 text-prime-black group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-prime-black">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-prime-yellow rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-prime-yellow/10 rounded-full text-prime-black font-semibold">
              <Star className="w-5 h-5" />
              %100 Müşteri Memnuniyeti Garantisi
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Müşterilerimiz Ne Diyor?</h2>
            <div className="w-20 h-1 bg-prime-yellow mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonialsData.map((testimonial, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className="bg-prime-white p-8 rounded-2xl relative"
               >
                 <div className="text-prime-yellow text-6xl absolute top-4 left-6 opacity-30 font-serif">"</div>
                 <p className="text-gray-600 italic mb-6 relative z-10 pt-4">
                   {testimonial.text}
                 </p>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                     {/* Placeholder Avatar */}
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} alt={testimonial.name} />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm">{testimonial.name}</h4>
                     <p className="text-xs text-gray-500">{testimonial.role}</p>
                   </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default Home;
