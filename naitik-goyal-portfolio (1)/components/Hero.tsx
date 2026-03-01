
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20, translateZ: 0 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.55, 
        ease: [0.25, 1, 0.5, 1] as any 
      } 
    }
  };

  return (
    <motion.section 
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
      className="relative gpu-accel"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-8 space-y-8">
          <motion.div 
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5f142] text-black font-bold text-sm uppercase rounded-full shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] will-change-transform"
          >
            <span className="animate-pulse">●</span>
            Aspiring Software Engineer
          </motion.div>

          <motion.h1 variants={item} className="text-5xl md:text-8xl font-syncopate font-bold leading-tight tracking-tighter will-change-transform">
            HELLO, <br />
            I’M <span className="text-outline hover:text-white transition-colors duration-500">NAITIK!</span>
          </motion.h1>

          <motion.p variants={item} className="text-xl md:text-2xl font-light text-white/80 max-w-2xl leading-relaxed will-change-opacity">
            Welcome to my <motion.span 
              animate={{ color: ["#ffffff", "#f5f142", "#ffffff"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="font-bold italic"
            >PORTFOLIO</motion.span>.
            I’m a Mathematics & Computing student focusing on Software Development and UI/UX Design.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <button className="bg-[#f5f142] text-black px-8 py-4 font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform group relative overflow-hidden active:scale-95 will-change-transform">
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 font-bold rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-all active:scale-95 will-change-transform">
              <MapPin size={20} />
              From India 🇮🇳
            </button>
          </motion.div>
        </div>

        {/* Right Label/Badge Section */}
        <motion.div 
          variants={item}
          className="lg:col-span-4 flex justify-center lg:justify-end"
        >
          <motion.div 
            animate={{ 
              translateY: [0, -12, 0],
              rotate: [0, 0.5, -0.5, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-64 h-80 bg-[#0a3d35] border-2 border-[#f5f142] rounded-2xl p-6 flex flex-col justify-between overflow-hidden ticket-cut ticket-cut-side shadow-[20px_20px_0px_0px_rgba(245,241,66,0.1)] group hover:shadow-[25px_25px_0px_0px_rgba(245,241,66,0.2)] transition-all cursor-default gpu-accel"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-widest text-[#f5f142]">Identity Card</span>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#f5f142] group-hover:text-black transition-colors duration-300">
                  <span className="font-bold">NG</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold">NAITIK GOYAL</h2>
              <div className="w-full h-[1px] bg-[#f5f142]/30 dashed-border border-b relative overflow-hidden">
                 {/* Fix: Replaced invalid 'translate3d' with 'x' for Framer Motion animation to fix line 102 error */}
                 <motion.div 
                  animate={{ x: ['-100%', '200%', '-100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#f5f142] to-transparent"
                 ></motion.div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-white/50 uppercase">Discipline</p>
                <p className="text-sm font-medium">Maths & Computing</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-[10px] text-white/50 uppercase">Status</p>
                  <p className="text-sm font-medium">Student</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-white/50 uppercase">ID No.</p>
                  <p className="text-sm font-medium">#NG-MAC-2025</p>
                </div>
              </div>
            </div>

            {/* Barcode representation - Optimized with scaleY instead of height */}
            <div className="flex gap-1 h-12 items-end group-hover:opacity-100 transition-opacity">
              {[2, 4, 1, 3, 2, 5, 2, 1, 4, 3, 2, 1, 4, 2, 3].map((h, i) => (
                <motion.div 
                  key={i} 
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: h / 5 }}
                  transition={{ delay: 0.5 + (i * 0.03), duration: 0.45 }}
                  style={{ originY: 1 }}
                  className="flex-1 bg-[#f5f142] will-change-transform"
                ></motion.div>
              ))}
            </div>
            
            {/* Scan Line effect on hover */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#f5f142]/40 shadow-[0_0_15px_rgba(245,241,66,0.5)] animate-scan"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
