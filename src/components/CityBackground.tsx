import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CityBackground: React.FC = () => {
  const cityRef = useRef<THREE.Group>(null);
  const smokeRef = useRef<THREE.Group>(null);
  
  const buildings = useMemo(() => {
    const buildingsArray = [];
    for (let i = 0; i < 100; i++) {
      const width = 0.9 + Math.random() * 0.1;
      const height = 0.1 + Math.abs(Math.random() * 8);
      const x = Math.round((Math.random() - 0.5) * 20);
      const z = Math.round((Math.random() - 0.5) * 20);
      
      buildingsArray.push({
        position: [x, height / 2, z],
        scale: [width, height, width]
      });
    }
    return buildingsArray;
  }, []);

  const particles = useMemo(() => {
    const particlesArray = [];
    for (let i = 0; i < 300; i++) {
      particlesArray.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10 + 2,
          (Math.random() - 0.5) * 10
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
      });
    }
    return particlesArray;
  }, []);

  useFrame((state) => {
    if (cityRef.current) {
      cityRef.current.rotation.y += 0.001;
    }
    if (smokeRef.current) {
      smokeRef.current.rotation.y += 0.01;
      smokeRef.current.rotation.x += 0.01;
    }
  });

  return (
    <group ref={cityRef}>
      {/* Buildings */}
      {buildings.map((building, index) => (
        <mesh
          key={index}
          position={building.position as [number, number, number]}
          scale={building.scale as [number, number, number]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial 
            color="#222222" 
            metalness={0.6} 
            roughness={0.4}
          />
        </mesh>
      ))}
      
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]} receiveShadow>
        <planeGeometry args={[60, 60]} />
        <meshPhongMaterial 
          color="#000000" 
          side={THREE.DoubleSide}
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
      
      {/* Particles */}
      <group ref={smokeRef}>
        {particles.map((particle, index) => (
          <mesh
            key={index}
            position={particle.position as [number, number, number]}
            rotation={particle.rotation as [number, number, number]}
          >
            <circleGeometry args={[0.01, 3]} />
            <meshBasicMaterial color="#FFD700" side={THREE.DoubleSide} />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export default CityBackground;