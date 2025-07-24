import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="py-12 border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-2 mb-6">
          <img 
            src="/dcc9ec30-1b20-44ed-b83f-1cff27af117d.png" 
            alt="Cognia" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Cognia
          </span>
        </div>
        <p className="text-gray-400 mb-4">
          © 2024 Cognia. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;