
import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    { title: 'Portfolio Website', category: 'Web Design', tags: ['React', 'Tailwind', 'Framer'] },
    { title: 'Calculator App', category: 'C++ Utility', tags: ['C++', 'Algorithm'] },
    { title: 'MySQL DB Projects', category: 'Database', tags: ['SQL', 'Normalization'] },
    { title: 'C++ Mini Projects', category: 'Fundamentals', tags: ['OOP', 'CLI'] },
    { title: 'Academic Coding', category: 'Algorithm', tags: ['DSA', 'Maths'] },
    { title: 'UI/UX Prototypes', category: 'Design', tags: ['Figma', 'Prototyping'] },
  ];

  return (
    <section id="projects" className="py-12 gpu-accel">
      <div className="flex justify-between items-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-syncopate font-bold uppercase text-outline"
        >
          Selected Work
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
        >
          <span className="text-xs font-bold text-[#f5f142]">6 PROJECTS TOTAL</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 no-flicker">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 25, translateZ: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            whileHover={{ 
              y: -8, 
              borderColor: "rgba(245,241,66,1)", 
              borderStyle: "solid",
              rotateX: 4,
              rotateY: -4,
              transition: { duration: 0.3 }
            }}
            className="group relative bg-[#0a3d35] border-2 border-dashed border-[#f5f142]/20 transition-all duration-300 p-8 rounded-3xl flex flex-col justify-between h-80 overflow-hidden perspective-1000 cursor-pointer will-change-transform gpu-accel shadow-lg"
          >
            <div className="flex justify-between items-start z-10">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-12 h-12 bg-[#f5f142] text-black rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_20px_rgba(245,241,66,0.4)] transition-all duration-300"
              >
                <Folder size={24} />
              </motion.div>
              <ExternalLink className="text-[#f5f142]/40 group-hover:text-[#f5f142] transition-colors duration-300" />
            </div>

            <div className="z-10">
              <motion.span 
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1, x: 3 }}
                className="text-[10px] uppercase font-bold text-[#f5f142] tracking-widest block transition-all"
              >
                {project.category}
              </motion.span>
              <h3 className="text-2xl font-syncopate font-bold mt-2 group-hover:translate-x-1 transition-transform duration-300">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-white/10 px-2 py-1 rounded hover:bg-[#f5f142] hover:text-black transition-colors duration-200">#{tag}</span>
                ))}
              </div>
            </div>

            {/* Decorative ticket notch */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#06211d] rounded-full border-t-2 border-[#f5f142]/20 group-hover:border-[#f5f142] transition-colors duration-300 z-10"></div>
            
            {/* Background pattern - Hardware accelerated */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.08 }}
              whileHover={{ opacity: 0.2, scale: 1.1, rotate: -10 }}
              className="absolute top-0 right-0 p-4 select-none pointer-events-none will-change-transform"
            >
              <span className="text-8xl font-bold font-syncopate">{idx + 1}</span>
            </motion.div>
            
            {/* Shine effect - Optimized transition */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
