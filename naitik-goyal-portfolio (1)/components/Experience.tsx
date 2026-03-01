
import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const milestones = [
    {
      year: '2024',
      title: 'The Foundation',
      desc: 'Started my journey in programming and Mathematics & Computing fundamentals. Focused on logic building and core principles.'
    },
    {
      year: '2025',
      title: 'Skill Acquisition',
      desc: 'Learned C++, MySQL, Web Development, and built multiple academic & personal projects to bridge theory with practice.'
    },
    {
      year: '2026',
      title: 'Professional Growth',
      desc: 'Focused on DSA, UI/UX design, portfolio building, and industry-ready skills. Preparing for impactful software engineering roles.'
    }
  ];

  return (
    <section id="experience" className="py-12 gpu-accel">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-syncopate font-bold uppercase mb-4">Milestones</h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="h-1 bg-[#f5f142]/20 dashed-border border-b will-change-transform"
        ></motion.div>
      </motion.div>

      <div className="relative space-y-12 pb-12 no-flicker">
        {/* Animated Timeline Line - Optimized to use scaleY */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] as any }}
          style={{ originY: 0 }}
          className="absolute left-5 md:left-1/2 -translate-x-px md:-translate-x-0 h-full w-0.5 bg-gradient-to-b from-[#f5f142] via-[#f5f142]/40 to-transparent will-change-transform"
        ></motion.div>

        {milestones.map((item, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.15 }}
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#f5f142] bg-[#06211d] text-[#f5f142] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110 will-change-transform"
            >
              <motion.span 
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: idx * 0.5 }}
                className="w-2 h-2 bg-[#f5f142] rounded-full"
              ></motion.span>
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.015, y: -2 }}
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border-2 border-[#f5f142]/10 bg-[#0a3d35] hover:border-[#f5f142] transition-all duration-300 ticket-cut ticket-cut-side relative group shadow-lg will-change-transform"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-syncopate font-bold text-[#f5f142] group-hover:text-white transition-colors duration-300">{item.year}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Entry #{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase italic">{item.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
              
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#f5f142]"></div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
