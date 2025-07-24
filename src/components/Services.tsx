import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: 'fas fa-code',
    title: 'Desarrollo de Software a Medida',
    description: 'Creamos soluciones tecnológicas personalizadas que se adaptan perfectamente a las necesidades únicas de tu empresa, utilizando las últimas tecnologías y mejores prácticas.',
    color: 'text-yellow-400'
  },
  {
    icon: 'fas fa-brain',
    title: 'Integración de IA Empresarial',
    description: 'Implementamos soluciones de inteligencia artificial de vanguardia que automatizan procesos, mejoran la toma de decisiones y potencian el crecimiento de tu negocio.',
    color: 'text-purple-400'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Consultoría Digital',
    description: 'Te guiamos en tu proceso de transformación digital, desde la estrategia hasta la implementación, asegurando resultados medibles y sostenibles.',
    color: 'text-green-400'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="glitch" data-text="SERVICIOS">SERVICIOS</span> DE IA Y CONSULTORÍA
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="neumorphic card-3d group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <i className={`${service.icon} text-6xl ${service.color} group-hover:scale-110 transition-transform`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;