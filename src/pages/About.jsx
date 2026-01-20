import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const team = [
  {
    name: 'Engincan Kelemci',
    role: 'Full Stack Developer',
    title: 'Full Stack Developer',
    image: '/engincan.png',
    description: '5 yıllık deneyime sahip full stack developer ve sistem mimarisi uzmanı. Modern web teknolojileri ve e-ticaret çözümleri konusunda uzmanlaşmış durumda.',
    isSvg: false
  },
  {
    name: 'Emel Gökçe Kelemci',
    role: 'Graphic Designer',
    title: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: '5 yıllık deneyime sahip grafik tasarımcı ve marka stratejisti. Kurumsal kimlik, dijital tasarım ve marka yönetimi konusunda uluslararası ödüllü çalışmalar.',
    isSvg: false
  }
];

const faqs = [
  {
    question: 'Projeler ne kadar sürede teslim edilir?',
    answer: 'Projenin kapsamına göre değişmekle birlikte, basit web siteleri 1-2 hafta, kapsamlı e-ticaret siteleri ve özel yazılımlar 4-8 hafta arasında tamamlanmaktadır. Kurumsal kimlik çalışmaları ise ortalama 1-2 hafta sürmektedir.'
  },
  {
    question: 'Fiyatlandırma nasıl yapılıyor?',
    answer: 'Her proje benzersiz olduğu için sabit bir fiyat listemiz bulunmamaktadır. İhtiyaçlarınızı analiz ettikten sonra size özel, şeffaf ve detaylı bir fiyat teklifi sunuyoruz.'
  },
  {
    question: 'Revizyon hakları var mı?',
    answer: 'Evet, müşteri memnuniyeti bizim için önceliklidir. Tasarım aşamasında belirli sayıda revizyon hakkınız bulunmaktadır. Proje başlamadan önce bu detaylar sözleşmede belirtilir.'
  },
  {
    question: 'Teknik destek sağlıyor musunuz?',
    answer: 'Kesinlikle. Projeyi teslim ettikten sonra teknik destek ve bakım hizmetlerimizle yanınızdayız. Ayrıca kullanım eğitimi de veriyoruz.'
  },
  {
    question: 'Hangi bölgelere hizmet veriyorsunuz?',
    answer: 'İstanbul merkezli olmamıza rağmen, dijital dünyanın avantajlarını kullanarak tüm Türkiye ve yurt dışındaki müşterilerimize hizmet vermekteyiz.'
  }
];

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container-custom text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Hakkımızda
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-gray-500 max-w-3xl mx-auto"
          >
            Prime Dijital'in hikayesi, vizyonu ve tutkuyla çalışan ekibiyle tanışın
          </motion.p>
        </div>

        {/* Our Story Section */}
        <div className="container-custom mb-32">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full md:w-1/2"
             >
                <span className="inline-block px-4 py-1 bg-prime-yellow/20 text-prime-black text-sm font-bold rounded-full mb-6">
                  Hikayemiz
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  5 Yıllık Dijital Mükemmellik Yolculuğu
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    2019 yılında kuruluşumuzdan bu yana, alanında deneyimli profesyonellerden oluşan freelancer dijital ajans olarak İstanbul'da faaliyet gösteriyoruz.
                  </p>
                  <p>
                    Grafik tasarım, baskı hizmetleri ve yazılım geliştirme alanında uzmanlaşarak, her büyüklükteki işletmeye özel çözümler sunuyoruz.
                  </p>
                </div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full md:w-1/2"
             >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                   <img 
                     src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Ofis Ekibi" 
                     width="800"
                     height="600"
                     loading="lazy"
                     decoding="async"
                     className="w-full h-full object-cover"
                   />
                </div>
             </motion.div>
          </div>
        </div>

        {/* Team Section */}
        <div className="container-custom mb-32">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold">Ekibimizle Tanışın</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 text-center pb-6 border border-gray-100 group"
              >
                <div className="relative overflow-hidden aspect-square mb-6 flex items-center justify-center bg-gray-100">
                  {member.isSvg ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      width="400"
                      height="400"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18945cb716a%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18945cb716a%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
                      }}
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-prime-black font-bold text-sm mb-3 uppercase tracking-wider underline decoration-prime-yellow underline-offset-4">{member.title}</p>
                <p className="text-gray-500 text-sm px-6 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container-custom max-w-4xl">
           <div className="text-center mb-12">
             <h2 className="text-4xl font-bold mb-4">Sıkça Sorulan Sorular</h2>
             <p className="text-gray-500">Merak ettiklerinizin yanıtları</p>
           </div>
           
           <div className="space-y-4">
             {faqs.map((faq, index) => (
               <div 
                 key={index} 
                 className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
               >
                 <button 
                   onClick={() => toggleFaq(index)}
                   className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                 >
                   <span className="font-bold text-lg">{faq.question}</span>
                   {openFaq === index ? (
                     <ChevronUp className="text-prime-yellow" />
                   ) : (
                     <ChevronDown className="text-gray-400" />
                   )}
                 </button>
                 <AnimatePresence>
                   {openFaq === index && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.3 }}
                     >
                       <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                         {faq.answer}
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             ))}
           </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default About;
