import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-6 glitch" 
          data-text="COGNIA"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          COGNIA
        </motion.h1>
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transformamos empresas con Inteligencia Artificial
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Desarrollo de software a medida que impulsa el futuro de tu negocio
        </motion.p>
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="btn-neu text-lg">
            <i className="fas fa-rocket mr-2"></i>
            Descubre nuestras soluciones
          </button>
          <button className="neumorphic px-8 py-4 text-lg font-semibold">
            <i className="fas fa-play-circle mr-2"></i>
            Ver Demo
          </button>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <i className="fas fa-chevron-down text-3xl text-yellow-400"></i>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;