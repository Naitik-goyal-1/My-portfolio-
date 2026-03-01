
import React from 'react';
import { Code2, Database, Layout, Terminal, Github, Cpu, Globe, Braces } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const mainSkills = [
    { icon: <Code2 />, name: 'C++', desc: 'Modern C++ / DSA' },
    { icon: <Database />, name: 'MySQL', desc: 'Relational DB' },
    { icon: <Globe />, name: 'Web Dev', desc: 'HTML/CSS/JS' },
    { icon: <Layout />, name: 'UI/UX', desc: 'Visual Design' },
    { icon: <Terminal />, name: 'Git', desc: 'Version Control' },
    { icon: <Braces />, name: 'DSA', desc: 'Problem Solving' },
    { icon: <Cpu />, name: 'Maths', desc: 'Computing' },
    { icon: <Github />, name: 'Github', desc: 'Collaboration' },
  ];

  const tags = ['Programming', 'Web Development', 'UI Design', 'Problem Solving', 'Database Management'];

  return (
    <section id="skills" className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-syncopate font-bold text-outline-yellow uppercase">Tech Stack</h2>
          <p className="text-white/60 mt-4 max-w-md italic">The tools and technologies I use to bring ideas to life.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {tags.map((tag, i) => (
            <motion.span 
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#000000" }}
              className="px-4 py-2 bg-[#f5f142] text-black text-xs font-bold rounded-full uppercase tracking-tighter cursor-default transition-colors duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mainSkills.map((skill, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5, borderColor: "#f5f142" }}
            className="group p-6 bg-[#0a3d35] border-2 border-[#f5f142]/10 transition-all rounded-2xl relative overflow-hidden flex flex-col items-center text-center gap-4 cursor-default"
          >
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, 0] }}
              className="w-16 h-16 bg-[#f5f142]/5 group-hover:bg-[#f5f142] text-[#f5f142] group-hover:text-black rounded-xl flex items-center justify-center transition-all duration-300 shadow-[0_0_0_rgba(245,241,66,0)] group-hover:shadow-[0_0_20px_rgba(245,241,66,0.3)]"
            >
              {React.cloneElement(skill.icon as React.ReactElement<any>, { size: 32 })}
            </motion.div>
            <div>
              <h3 className="font-bold text-lg">{skill.name}</h3>
              <p className="text-xs text-white/50">{skill.desc}</p>
            </div>
            
            {/* Hanging tag decor with swing */}
            <motion.div 
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="origin-top"
            >
              <div className="absolute top-0 right-8 w-px h-6 bg-[#f5f142]/30"></div>
              <div className="absolute top-6 right-[30px] w-1.5 h-1.5 rounded-full bg-[#f5f142]/30"></div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
