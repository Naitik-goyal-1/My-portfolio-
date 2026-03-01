
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactLinks = [
    { 
      id: 'li',
      name: 'LinkedIn', 
      icon: <Linkedin />, 
      value: 'Naitik Goyal', 
      href: 'https://www.linkedin.com/in/naitik-goyal-8a8678378',
      color: 'bg-[#0077b5]'
    },
    { 
      id: 'gh',
      name: 'GitHub', 
      icon: <Github />, 
      value: 'naitik-goyal-1', 
      href: 'https://github.com/Naitik-goyal-1',
      color: 'bg-[#333]'
    },
    { 
      id: 'email',
      name: 'Email', 
      icon: <Mail />, 
      value: 'naitikgoyal796@gmail.com', 
      href: 'mailto:naitikgoyal796@gmail.com',
      color: 'bg-[#ea4335]'
    },
    { 
      id: 'tel',
      name: 'Phone', 
      icon: <Phone />, 
      value: '+91 7803920480', 
      href: 'tel:+917803920480',
      color: 'bg-[#34a853]'
    },
  ];

  return (
    <section id="contact" className="py-12 gpu-accel">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98, translateZ: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] as any }}
        className="bg-[#f5f142] text-black p-8 md:p-16 rounded-[3rem] relative overflow-hidden ticket-cut ticket-cut-side shadow-2xl will-change-transform"
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-7xl font-syncopate font-bold uppercase leading-none tracking-tighter">
              Let's <br /> 
              <motion.span 
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >Connect</motion.span>
            </h2>
            <p className="mt-6 text-lg font-medium max-w-sm italic opacity-80">
              Have a project in mind or just want to chat about tech? Drop a line!
            </p>
            <div className="mt-12 space-y-4">
              <div className="flex gap-2 h-16 w-full max-w-xs items-end">
                {[4, 6, 2, 8, 3, 5, 4, 7, 2, 6, 3, 5, 8, 4, 6].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: h / 10 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.03), duration: 0.4 }}
                    style={{ originY: 1 }}
                    className="flex-1 bg-black/10 will-change-transform"
                  ></motion.div>
                ))}
              </div>
              <p className="text-[10px] font-bold tracking-[0.5em] text-black/40 uppercase">Authenticity Checked</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((link, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + (idx * 0.08), duration: 0.45 }}
                className="group p-6 bg-black text-white rounded-2xl flex flex-col gap-4 hover:scale-105 hover:bg-[#111] transition-all duration-300 shadow-xl relative will-change-transform"
              >
                <div className="flex justify-between items-start">
                   <motion.div 
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center`}
                   >
                     {link.icon}
                   </motion.div>
                   <button 
                    onClick={() => copyToClipboard(link.value, link.id)}
                    className="text-white/20 hover:text-white transition-colors duration-200"
                   >
                    <AnimatePresence mode="wait">
                      {copied === link.id ? (
                        <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.2 }}><Check size={16} className="text-[#f5f142]" /></motion.div>
                      ) : (
                        <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.2 }}><Copy size={16} /></motion.div>
                      )}
                    </AnimatePresence>
                   </button>
                </div>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="block">
                  <p className="text-[10px] uppercase font-bold opacity-40 group-hover:text-[#f5f142] transition-colors duration-300">{link.name}</p>
                  <p className="text-sm font-bold truncate">{link.value}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating decoration - Hardware accelerated */}
        <motion.div 
          animate={{ rotate: 360, translateZ: 0 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 border-4 border-black/5 rounded-full will-change-transform"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
