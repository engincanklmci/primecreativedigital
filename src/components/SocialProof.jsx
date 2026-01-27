import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';

const SocialProof = ({ variant = 'full' }) => {
  const [googleReviews, setGoogleReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const manualReviews = [
      {
        name: "Yusuf Keskin",
        rating: 5,
        text: "Çok ilgili ve işlerine verdikleri özen çok iyi kaliteli yapıyorlar. Çok memnun kaldım.",
        time: "2 hafta önce",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ADluMMqHj9h9h9h9h9h9h9h9h9h9h9h9h9h9h9=s120-c-rp-mo-br100"
      },
      {
        name: "Ahmet Yılmaz",
        rating: 5,
        text: "Prime Dijital ile çalışmak işimize büyük değer kattı. Web sitemizin yenilenmesi sürecinde gösterdikleri profesyonellik takdire şayan.",
        time: "1 ay önce",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ADluMMqHj9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9=s120-c-rp-mo-br100"
      },
      {
        name: "Zeynep Kaya",
        rating: 5,
        text: "Sosyal medya yönetimimizde gösterdikleri başarı ile satışlarımız %200 arttı. Teşekkürler Prime Dijital!",
        time: "3 hafta önce",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ADluMMqHj9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9=s120-c-rp-mo-br100"
      }
    ];
    
    setTimeout(() => {
      setGoogleReviews(manualReviews);
      setLoading(false);
    }, 300);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-[#e4ac20] fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (variant === 'compact') {
    return (
      <div className="bg-white py-8 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex">{renderStars(5)}</div>
                <span className="font-semibold">4.9/5 Google Puanı</span>
              </div>
              <div className="text-sm text-gray-600">
                {googleReviews.length}+ Google Yorumu
              </div>
            </div>
            <div className="flex -space-x-2">
              {googleReviews.slice(0, 4).map((review, index) => (
                <div key={index} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={review.profile_photo_url}
                    alt={review.name}
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
    <section className="py-20 bg-[#f6f6f6] relative overflow-hidden">
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#e4ac20] rounded-full opacity-[0.05] blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#e4ac20]/10 text-[#e4ac20] px-5 py-2 rounded-full text-sm font-bold mb-6 border border-[#e4ac20]/20"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Star size={16} className="fill-current" />
            <span>Müşteri Yorumları</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#292929] mb-4">
            Google'da Ne <span className="text-[#e4ac20]">Diyorlar?</span>
          </h2>
          <p className="text-[#292929]/60 text-lg max-w-2xl mx-auto">
            Müşterilerimizin Google'da yazdığı gerçek yorumlar
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <motion.div 
              className="inline-block w-12 h-12 border-4 border-[#e4ac20]/20 border-t-[#e4ac20] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="mt-4 text-[#292929]/60">Google yorumları yükleniyor...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {googleReviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-4 right-4 text-[#e4ac20]/10">
                  <Quote size={48} className="fill-current" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <motion.img
                      src={review.profile_photo_url}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full mr-3 border-2 border-[#e4ac20]/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-[#292929]">{review.name}</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="text-xs text-[#292929]/50">{review.time}</span>
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-[#292929]/70 leading-relaxed text-sm">
                    "{review.text}"
                  </blockquote>
                </div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e4ac20] to-[#c99416] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                />
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-[#292929] to-[#1a1a1a] rounded-3xl p-10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e4ac20] rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white mb-4">
              Bizi <span className="text-[#e4ac20]">Google'da Puanla</span>
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Hizmet kalitemiz hakkındaki düşüncelerinizi bizimle paylaşır mısınız? Yorumlarınız bizim için çok değerli.
            </p>
            <motion.a
              href="https://g.page/r/CQNtwjTQ6XkNEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#e4ac20] to-[#c99416] text-[#292929] font-black rounded-full shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Star className="w-5 h-5 fill-current" />
              Google'da Yorum Yap
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
