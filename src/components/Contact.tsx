import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section id="contacto" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="neumorphic max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            CONSTRUYAMOS EL <span className="glitch" data-text="FUTURO">FUTURO</span> JUNTOS
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Transforma tu empresa con soluciones de IA personalizadas
          </p>
          
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div 
              className="neumorphic-inset"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <input 
                type="text" 
                name="name"
                placeholder="Tu nombre" 
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
                required
              />
            </motion.div>
            <motion.div 
              className="neumorphic-inset"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input 
                type="email" 
                name="email"
                placeholder="Tu email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
                required
              />
            </motion.div>
            <motion.div 
              className="md:col-span-2 neumorphic-inset"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <textarea 
                name="message"
                placeholder="Cuéntanos sobre tu proyecto" 
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white placeholder-gray-500 resize-none"
                required
              ></textarea>
            </motion.div>
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button type="submit" className="btn-neu w-full text-lg">
                <i className="fas fa-paper-plane mr-2"></i>
                Enviar Mensaje
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;