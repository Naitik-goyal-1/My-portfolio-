
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const LinkBar: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full py-8 border-y-2 border-[#f5f142]/20"
    >
      <motion.a 
        href="https://github.com/Naitik-goyal-1"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.01, boxShadow: "0 0 20px rgba(245,241,66,0.1)" }}
        whileTap={{ scale: 0.99 }}
        className="group block relative overflow-hidden bg-[#0a3d35] rounded-xl p-6 border-2 border-dashed border-[#f5f142]/40 hover:border-[#f5f142] transition-all"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-3 bg-[#f5f142] rounded-lg text-black"
            >
              <Github size={32} />
            </motion.div>
            <div>
              <p className="text-[#f5f142] text-xs uppercase font-bold tracking-[0.2em]">Primary Source</p>
              <h3 className="text-2xl md:text-3xl font-syncopate font-bold text-white group-hover:text-[#f5f142] transition-colors">
                github.com/Naitik-goyal-1
              </h3>
            </div>
          </div>
          <motion.div
             animate={{ x: [0, 5, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
          >
            <ExternalLink className="text-white/20 group-hover:text-[#f5f142] transition-all" size={40} />
          </motion.div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default LinkBar;
