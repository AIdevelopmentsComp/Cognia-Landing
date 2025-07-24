import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'AWS', icon: 'fab fa-aws', color: 'text-orange-400' },
  { name: 'Google Cloud', icon: 'fab fa-google', color: 'text-blue-400' },
  { name: 'OpenAI', icon: '🤖', isEmoji: true, color: 'text-green-400' },
  { name: 'Anthropic', icon: '🧠', isEmoji: true, color: 'text-purple-400' },
  { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400' },
  { name: 'Next.js', icon: '▲', isEmoji: true, color: 'text-white' },
  { name: 'Python', icon: 'fab fa-python', color: 'text-yellow-400' },
  { name: 'TypeScript', icon: 'fab fa-js', color: 'text-yellow-300' }
];

const Technologies: React.FC = () => {
  return (
    <section id="tecnologias" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          STACK <span className="glitch" data-text="TECNOLÓGICO">TECNOLÓGICO</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              className="neumorphic text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {tech.isEmoji ? (
                <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform ${tech.color}`}>
                  {tech.icon}
                </div>
              ) : (
                <i className={`${tech.icon} text-5xl ${tech.color} mb-4 group-hover:scale-110 transition-transform`}></i>
              )}
              <h4 className="font-bold">{tech.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;