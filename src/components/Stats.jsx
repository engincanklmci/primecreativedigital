import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Users, Award, Trophy } from 'lucide-react';

const stats = [
  { icon: <CheckCircle className="w-8 h-8 text-[#292929]" />, value: 100, label: 'Tamamlanan İş', suffix: '+' },
  { icon: <Users className="w-8 h-8 text-[#292929]" />, value: 100, label: 'Sayısız Mutlu Müşteri', suffix: '+' }, // Value won't matter much if we change display logic, but let's keep it numeric for animation for now, maybe use a high number or handle specific text case? User said "sayısı mutlu müşteri" which implies "Sayısız" (Countless). I cannot animate to "Countless". I'll set value to a high number but maybe display text differently? Or just "999+"? "Sayısız" usually implies a lot. Let's use 500+ or similar and label "Mutlu Müşteri". Wait, request said "sayısı mutlu müşteri olarak düzeltilecek". This might mean "Mutlu Müşteri Sayısı" or "Sayısız Mutlu Müşteri". "Rakamlarla prime dijital kısmı 100 iş , 7 yıllık tecrübe ve sayısı mutlu müşteri olarak düzeltilecek". "Sayısı mutlu müşteri" is weird Turkish. It probably means "Sayısız mutlu müşteri" (Countless happy customers) OR "Mutlu Müşteri Sayısı" (Number of happy customers). Given "Rakamlarla" (With numbers) section, it likely means updating the label or count. 
  // Let's interpret "sayısı mutlu müşteri" as "Sayısız Mutlu Müşteri" text. Since the component animates numbers, I might need to change the component to accept string values or just use a placeholder number and hide it?
  // Actually, standard stats have numbers. "Sayısız" is text. I'll check how StatCard handles it. It expects `value` (number).
  // I will assume they likely meant a specific number is not needed, OR they want the LABEL to be "Mutlu Müşteri Sayısı" and keep the number?
  // "100 iş , 7 yıllık tecrübe ve sayısı mutlu müşteri".
  // Let's try to interpret "sayısı" = "Number of". Maybe they want to KEEP the number but change label?
  // OR "Sayısız" (Countless). 
  // If I look at the current code: `value: 300, label: 'Mutlu Müşteri'`.
  // I will change it to `value: 99, suffix: '+', label: 'Sayısız Mutlu Müşteri'`? No, that looks weird "99+ Sayısız...".
  // Let's assume they want the TEXT "Sayısız" displayed instead of a number?
  // The StatCard animates a number.
  // I will use `value: 1000, suffix: '+', label: 'Mutlu Müşteri'` for now, AND I'll modify the Component to handle "Sayısız" if needed, but let's stick to the simpler number update first. 
  // Wait, "sayısı mutlu müşteri" could be a typo for "Sayısız Mutlu Müşteri".
  // Let's use a large number like 500 and label "Mutlu Müşteri". 
  // OK, re-reading: "100 iş , 7 yıllık tecrübe ve sayısı mutlu müşteri olarak düzeltilecek".
  // Maybe "Sayısız" IS the value?
  // I will modify StatCard to accept string value if needed, or just set value to 0 and handle it.
  // actually, let's just use `value: 100` for jobs, `value: 7` for years. 
  // For customers... "Sayısız" means infinite/uncountable.
  // I'll put a string "Sayısız" in a new property `displayValue` and use that if present.
  { icon: <Users className="w-8 h-8 text-[#292929]" />, value: 0, displayValue: 'Sayısız', label: 'Mutlu Müşteri', suffix: '' },
  { icon: <Award className="w-8 h-8 text-[#292929]" />, value: 7, label: 'Yıl Tecrübe', suffix: '+' },
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
          {stat.displayValue ? stat.displayValue : `${count}${stat.suffix}`}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
