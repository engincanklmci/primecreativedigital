import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Users, Award, Trophy } from 'lucide-react';

const stats = [
  { icon: <CheckCircle className="w-8 h-8 text-[#292929]" />, value: 500, label: 'Tamamlanan Proje', suffix: '+' },
  { icon: <Users className="w-8 h-8 text-[#292929]" />, value: 300, label: 'Mutlu Müşteri', suffix: '+' },
  { icon: <Award className="w-8 h-8 text-[#292929]" />, value: 5, label: 'Deneyim Yılı', suffix: '+' },
  { icon: <Trophy className="w-8 h-8 text-[#292929]" />, value: 20, label: 'Ödül ve Sertifika', suffix: '+' },
];

const StatCard = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const duration = 2000;
    const startValue = 0;
    const endValue = stat.value;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, stat.value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-[#292929]/5 overflow-hidden"
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#e4ac20]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      <div className="relative z-10">
        <motion.div 
          className="mb-4 p-4 bg-gradient-to-br from-[#e4ac20]/20 to-[#e4ac20]/10 rounded-2xl shadow-sm inline-flex"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {stat.icon}
        </motion.div>
        
        <motion.p 
          className="text-5xl font-black mb-2 bg-gradient-to-r from-[#e4ac20] to-[#c99416] bg-clip-text text-transparent"
        >
          {count}{stat.suffix}
        </motion.p>
        
        <p className="text-[#292929]/70 text-sm font-semibold uppercase tracking-wider">
          {stat.label}
        </p>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e4ac20] to-[#c99416] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
      />
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-[#f6f6f6] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e4ac20]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e4ac20]/30 to-transparent"></div>
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#292929] mb-3">
            Rakamlarla <span className="text-[#e4ac20]">Prime Dijital</span>
          </h2>
          <p className="text-[#292929]/60 text-lg">
            Başarılarımız ve güvenilirliğimiz rakamlarla konuşuyor
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
