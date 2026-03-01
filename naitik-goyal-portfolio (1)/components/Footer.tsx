
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-12 border-t border-[#f5f142]/10 mt-24 gpu-accel"
    >
      <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
        <div className="flex justify-center items-center gap-4">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ originX: 1 }}
            className="h-px w-20 bg-[#f5f142]/20 will-change-transform"
          ></motion.div>
          <span className="font-syncopate font-bold text-[#f5f142]">NG 2025</span>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ originX: 0 }}
            className="h-px w-20 bg-[#f5f142]/20 will-change-transform"
          ></motion.div>
        </div>
        
        <motion.p 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="text-white/40 text-xs uppercase tracking-[0.3em]"
        >
          Designed & Built by Naitik Goyal
        </motion.p>
        
        <div className="pt-8 flex justify-center gap-1 opacity-20 overflow-hidden no-flicker">
            {Array.from({length: 60}).map((_, i) => (
                <motion.div 
                  key={i} 
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.008, duration: 0.4 }}
                  style={{ originY: 1, height: i % 4 === 0 ? 32 : 16 }}
                  className="w-1 bg-[#f5f142] will-change-transform"
                ></motion.div>
            ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
