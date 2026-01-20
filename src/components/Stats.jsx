import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Trophy } from 'lucide-react';

const stats = [
  { icon: <CheckCircle className="w-8 h-8 text-prime-black" />, value: '100+', label: 'Tamamlanan Proje' },
  { icon: <Users className="w-8 h-8 text-prime-black" />, value: '100+', label: 'Mutlu Müşteri' },
  { icon: <Award className="w-8 h-8 text-prime-black" />, value: '5+', label: 'Deneyim Yılı' },
  { icon: <Trophy className="w-8 h-8 text-prime-black" />, value: '2+', label: 'Ödül ve Sertifika' },
];

const Stats = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 hover:bg-prime-gray/30 rounded-2xl transition-colors duration-300"
            >
              <div className="mb-4 p-3 bg-prime-yellow/20 rounded-full shadow-sm">
                {stat.icon}
              </div>
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
