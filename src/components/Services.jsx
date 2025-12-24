import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Globe, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Globe size={40} />,
    title: 'Web Tasarım',
    desc: 'Markanız için modern, hızlı ve etkileyici web siteleri tasarlıyoruz.'
  },
  {
    icon: <Smartphone size={40} />,
    title: 'Mobil Uygulama',
    desc: 'iOS ve Android için kullanıcı dostu, yüksek performanslı uygulamalar.'
  },
  {
    icon: <Monitor size={40} />,
    title: 'UI/UX Tasarım',
    desc: 'Kullanıcı deneyimini merkeze alan, estetik ve fonksiyonel arayüzler.'
  },
  {
    icon: <BarChart size={40} />,
    title: 'Dijital Pazarlama',
    desc: 'SEO ve sosyal medya stratejileriyle markanızı büyütüyoruz.'
  }
];

const Services = () => {
  return (
    <section id="hizmetler" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Hizmetlerimiz</h2>
          <div className="w-20 h-1 bg-prime-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-prime-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-prime-black to-prime-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="mb-6 text-prime-black group-hover:text-prime-accent transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
