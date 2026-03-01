
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LinkBar from './components/LinkBar';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#f5f142] selection:text-black scroll-smooth">
      <Navbar />
      <AnimatePresence>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 space-y-24 overflow-hidden">
          <Hero />
          <LinkBar />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
