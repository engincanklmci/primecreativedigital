import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Search, Instagram, Globe, ShoppingCart, Palette, Box, FileText, Monitor } from 'lucide-react';

const services = [
  {
    icon: <Search size={40} />,
    title: 'SEO Uygun Dijital Pazarlama Ajansı',
    desc: 'Google\'da ilk sıralarda yer almanız için kapsamlı SEO stratejileri ve dijital pazarlama çözümleri sunuyoruz.',
    keywords: ['dijital pazarlama ajansı', 'seo hizmetleri', 'google sıralama'],
  },
  {
    icon: <Instagram size={40} />,
    title: 'Sosyal Medya Yönetimi Ajansı',
    desc: 'Instagram, Facebook, TikTok platformlarında markanızı büyüten, etkileşim odaklı sosyal medya yönetimi.',
    keywords: ['sosyal medya yönetimi ajansı', 'instagram reklam ajansı', 'sosyal medya danışmanlığı'],
  },
  {
    icon: <Search size={40} />,
    title: 'Google Ads Reklam Ajansı',
    desc: 'Google Ads reklamları ile hedef kitlenize ulaşın, dönüşümleri artırın ve bütçenizi en verimli şekilde kullanın.',
    keywords: ['google ads ajansı', 'google reklam yönetimi', 'ppc reklam ajansı'],
  },
  {
    icon: <ShoppingCart size={40} />,
    title: 'E-ticaret Reklam Ajansı',
    desc: 'E-ticaret siteniz için özel reklam stratejileri, ürün gösterimleri ve satış odaklı kampanyalar.',
    keywords: ['e-ticaret reklam ajansı', 'e-ticaret danışmanlığı', 'online satış yönetimi'],
  },
  {
    icon: <Palette size={40} />,
    title: 'Marka Görsel Tasarım Ajansı',
    desc: 'Logo, kurumsal kimlik, marka kimliği tasarımı ile markanızı rakiplerinden ayırın.',
    keywords: ['marka görsel tasarım ajansı', 'kurumsal kimlik tasarımı', 'logo tasarım ajansı'],
  },
  {
    icon: <Box size={40} />,
    title: 'Ürün Görseli Hazırlama Ajansı',
    desc: 'Profesyonel ürün fotoğrafçılığı, katalog çekimleri ve e-ticaret görselleri hazırlama hizmetleri.',
    keywords: ['ürün görseli hazırlama ajansı', 'ürün fotoğrafçılığı', 'e-ticaret görsel'],
  },
  {
    icon: <Box size={40} />,
    title: '3D Ürün Modelleme Ajansı',
    desc: '3D ürün modelleme, render ve animasyon hizmetleri ile ürünlerinizi dijital dünyada canlandırın.',
    keywords: ['3d ürün modelleme ajansı', '3d render hizmeti', 'ürün animasyonu'],
  },
  {
    icon: <FileText size={40} />,
    title: 'Katalog Tasarım Ajansı',
    desc: 'Dijital ve basılı katalog tasarımı, broşür ve marka materyalleri hazırlama hizmetleri.',
    keywords: ['katalog tasarım ajansı', 'broşür tasarım', 'materyal tasarım'],
  },
  {
    icon: <Monitor size={40} />,
    title: 'Web Sitesi Tasarım Ajansı',
    desc: 'Modern, responsive ve SEO uyumlu web siteleri tasarlayarak dijital varlığınızı güçlendirin.',
    keywords: ['web sitesi tasarım ajansı', 'web tasarım hizmetleri', 'responsive tasarım'],
  }
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!isHovered) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 cursor-pointer"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#e4ac20]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: "translateZ(20px)" }}
      />

      <div className="relative p-8" style={{ transform: "translateZ(40px)" }}>
        <motion.div
          className="mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#e4ac20] to-[#c99416] flex items-center justify-center text-white shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {service.icon}
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 text-[#292929] group-hover:text-[#e4ac20] transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-[#292929]/70 mb-6 leading-relaxed">
          {service.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {service.keywords.map((keyword, idx) => (
            <motion.span
              key={idx}
              className="px-3 py-1 bg-[#e4ac20]/10 text-[#e4ac20] text-xs font-medium rounded-full border border-[#e4ac20]/20"
              whileHover={{ scale: 1.05, backgroundColor: "#e4ac20", color: "#292929" }}
              transition={{ duration: 0.2 }}
            >
              {keyword}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e4ac20] to-[#c99416] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
      />
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="hizmetler" className="py-24 bg-[#f6f6f6] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23292929' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-[#e4ac20] text-[#292929] text-sm font-bold px-6 py-3 rounded-full shadow-lg">
              Hizmetlerimiz
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#e4ac20] to-[#c99416] bg-clip-text text-transparent">
              Bir Marka İnşa Etmek
            </span>
            <br />
            <span className="text-[#292929]">
              İçin Ne Lazım?
            </span>
          </h2>

          <p className="text-xl text-[#292929]/70 max-w-3xl leading-relaxed">
            Dijital dünyada markanızı zirveye taşıyan,
            <span className="font-bold text-[#e4ac20]"> SEO optimize edilmiş</span> ve
            <span className="font-bold text-[#292929]"> sonuç odaklı</span> hizmetlerimizle tanışın.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-[#292929] to-[#1a1a1a] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e4ac20] rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e4ac20] rounded-full opacity-10 blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                Dijital Büyüme Stratejinizi
                <br />
                <span className="text-[#e4ac20]">Birlikte Planlayalım!</span>
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                E-ticaret markalarının büyüme yolculuklarını tasarlıyor,
                Google'da ilk sıralarda yer almanızı sağlıyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://api.whatsapp.com/send?phone=905359495305&text=Merhaba, dijital pazarlama hizmetleriniz hakkında bilgi almak istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#e4ac20] text-[#292929] rounded-full font-bold text-lg shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Hemen Teklif Al
                </motion.a>
                <motion.a
                  href="/iletisim"
                  className="px-8 py-4 bg-transparent border-2 border-[#e4ac20] text-[#e4ac20] rounded-full font-bold text-lg"
                  whileHover={{ scale: 1.05, y: -2, backgroundColor: "#e4ac20", color: "#292929" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Detaylı Bilgi
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
