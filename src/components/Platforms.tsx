import React from 'react';
import { motion } from 'framer-motion';

const platforms = [
  {
    name: 'CognIA-IntelliLearn',
    category: 'Educación',
    icon: 'fas fa-graduation-cap',
    description: 'Campus virtual con IA que transforma la educación. Personaliza el aprendizaje, detecta deserción temprana y gestiona todo el ciclo académico.',
    tech: ['Next.js 15', 'Gemini AI', 'Firebase'],
    url: 'https://cognia-intellilearn-9030v9svo-maritza-martinezs-projects.vercel.app',
    color: 'from-purple-500 to-blue-500',
    iconColor: 'fas fa-university'
  },
  {
    name: 'MatterMind',
    category: 'Legal',
    icon: 'fas fa-gavel',
    description: 'Sistema de gestión de casos legales con IA. HIPAA-compliant, maneja 2,229+ casos con análisis inteligente y protección de privilegio abogado-cliente.',
    tech: ['React 18', 'AWS Amplify', 'HIPAA'],
    url: 'https://cognia-mattermind-4fpb1qddn-maritza-martinezs-projects.vercel.app',
    color: 'from-yellow-500 to-orange-500',
    iconColor: 'fas fa-balance-scale'
  },
  {
    name: 'IngestorX (NemDocs)',
    category: 'Documental',
    icon: 'fas fa-file-medical',
    description: 'Procesa documentos masivos (10GB+) con IA. Especializado en registros médico-legales, con encriptación AES-256 y análisis inteligente.',
    tech: ['Next.js 15', 'Claude AI', 'FastAPI'],
    url: 'https://cognia-ingestorx-qntmhhj1f-maritza-martinezs-projects.vercel.app',
    color: 'from-green-500 to-teal-500',
    iconColor: 'fas fa-file-alt'
  },
  {
    name: 'Contabil-IA',
    category: 'Contabilidad',
    icon: 'fas fa-calculator',
    description: 'Plataforma contable con IA para empresas mexicanas. Reduce cierres de 15 a 3 días, con diseño neomórfico 3D único y cumplimiento fiscal.',
    tech: ['Next.js 15', 'AWS Textract', 'TypeScript'],
    url: 'https://cognia-contabil-2wfixmx71-maritza-martinezs-projects.vercel.app',
    color: 'from-blue-500 to-indigo-500',
    iconColor: 'fas fa-chart-pie'
  }
];

const stats = [
  { value: '4+', label: 'Plataformas Activas', color: 'text-yellow-400' },
  { value: '50K+', label: 'Usuarios Activos', color: 'text-purple-400' },
  { value: '99.9%', label: 'Uptime', color: 'text-green-400' },
  { value: '24/7', label: 'Soporte', color: 'text-blue-400' }
];

const Platforms: React.FC = () => {
  return (
    <section id="plataformas" className="py-20 relative bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          NUESTRAS <span className="glitch" data-text="PLATAFORMAS">PLATAFORMAS</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Casos de éxito que demuestran nuestra capacidad de crear soluciones empresariales de alto impacto
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <motion.div 
              key={index}
              className="neumorphic card-3d relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`absolute top-0 right-0 bg-gradient-to-br ${platform.color} text-white px-4 py-1 rounded-bl-2xl`}>
                <i className={`${platform.icon} mr-1`}></i> {platform.category}
              </div>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center`}>
                    <i className={`${platform.iconColor} text-3xl text-white`}></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                  <p className="text-gray-400 mb-4">{platform.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {platform.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-purple-900/50 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition"
                  >
                    Ver Demo <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="neumorphic-inset text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;