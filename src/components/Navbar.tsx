import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/dcc9ec30-1b20-44ed-b83f-1cff27af117d.png" 
              alt="Cognia" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Cognia
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#servicios" className="hover:text-yellow-400 transition">Servicios</a>
            <a href="#plataformas" className="hover:text-yellow-400 transition">Plataformas</a>
            <a href="#tecnologias" className="hover:text-yellow-400 transition">Tecnologías</a>
            <a href="#contacto" className="hover:text-yellow-400 transition">Contacto</a>
          </div>
          <button className="btn-neu">
            Agenda una Demo
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;