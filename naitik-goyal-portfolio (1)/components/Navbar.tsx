
import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Entrance Variants - Explicitly typed as Variants and using 'as any' for easing to avoid TS inference errors
  const taglinePart1: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" as any } 
    }
  };

  const taglinePart2: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" as any, delay: 1.0 } // 0.6s animation + 0.4s pause = 1.0s
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#06211d]/90 backdrop-blur-md border-b border-[#f5f142]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center py-3 md:h-20 gap-2">
          
          {/* Brand & Tagline Signature */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group">
            <div className="flex items-center gap-2 cursor-pointer">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 180 }}
                className="w-8 h-8 bg-[#f5f142] rounded-full flex items-center justify-center transition-all duration-500"
              >
                <span className="text-black font-bold">N</span>
              </motion.div>
              <span className="text-white font-syncopate font-bold tracking-tighter text-lg group-hover:text-[#f5f142] transition-colors whitespace-nowrap">
                NAITIK.G
              </span>
            </div>

            {/* Vertical Divider (Desktop only) */}
            <div className="hidden md:block w-px h-6 bg-[#f5f142]/20" />

            {/* Animated Tagline */}
            <div className="relative inline-block overflow-hidden">
              <div className="flex flex-wrap items-center text-[11px] md:text-xs font-medium uppercase tracking-[0.15em] text-white/60">
                
                <motion.span 
                  variants={shouldReduceMotion ? {} : taglinePart1}
                  initial="hidden"
                  animate="visible"
                  className="mr-1"
                >
                  Powered by <span className="text-[#f5f142] font-bold drop-shadow-[0_0_8px_rgba(245,241,66,0.3)]">logic</span>,
                </motion.span>

                <motion.span 
                  variants={shouldReduceMotion ? {} : taglinePart2}
                  initial="hidden"
                  animate="visible"
                >
                  driven by <span className="text-[#f5f142] font-bold drop-shadow-[0_0_8px_rgba(245,241,66,0.3)]">impact</span>.
                </motion.span>
              </div>

              {/* Continuous Micro-animation: Underline */}
              {!shouldReduceMotion && (
                <motion.div 
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ 
                    scaleX: [0, 1, 1], 
                    opacity: [0, 1, 0],
                    originX: 0
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 4, // Total 6 second cycle
                    ease: "easeInOut" as any,
                    delay: 2.5 // Start after initial entrance
                  }}
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-[#f5f142]/40"
                />
              )}
            </div>
          </div>
          
          {/* Right side spacer or additional profile indicators can go here if needed */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
