import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Platforms from './components/Platforms';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CityBackground from './components/CityBackground';
import Particles from './components/Particles';
import './App.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loader-inner"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 2, 14], fov: 20 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} />
          <CityBackground />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} />
        </Canvas>
      </div>

      {/* Particles */}
      <Particles />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Platforms />
        <Technologies />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
