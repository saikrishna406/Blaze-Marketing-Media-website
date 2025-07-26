import React, { useEffect, useRef, Suspense } from 'react';
import { OrbitControls, Environment, Stars, Cloud, Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from 'three';
import ContactSection from '../components/ContactSection';

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 2000;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00C9A7"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1.5} />
      <Cloud opacity={0.4} speed={0.3} segments={15} />
      <FloatingParticles />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 0, -2]} rotation={[0, 0, Math.PI / 6]}>
          <torusGeometry args={[3, 0.2, 16, 100]} />
          <meshPhongMaterial color="#00C9A7" opacity={0.6} transparent />
        </mesh>
      </Float>
    </>
  );
}

export default function GraphicDesignPortfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black w-full min-h-screen overflow-hidden">
      <div className="relative h-screen w-full">
        <Canvas
          className="absolute inset-0"
          camera={{ position: [0, 0, 8], fov: 75 }}
          dpr={[1, 2]}
        >
          {/* Removed: <color attach="background" args={["#000000"]} /> */}
          <fog attach="fog" args={["#000000", 5, 20]} />
          <Suspense fallback={null}>
            <Environment preset="night" />
            <Scene />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
        </div> 

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <motion.div
            className="max-w-5xl px-8 py-16 backdrop-blur-2xl bg-black/20 rounded-3xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent text-center leading-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              Graphic
              <br />
              Design
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl text-white/90 text-center mb-12 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Crafting stunning visuals that communicate and captivate
            </motion.p>
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button className="px-10 py-5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full text-white font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/50">
                Explore Work
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <section className="py-32 px-4 bg-gradient-to-b from-black to-gray-900">
        <motion.div 
          className="container mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Our Designs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Brand Identity",
                description: "Created a visual identity system with logo, typography, and color schemes.",
                imageUrl: "/src/images/GraphicDesign.jpg",
                technologies: ["Logo Design", "Branding", "Typography"]
              },
              {
                title: "Poster Campaign",
                description: "Designed bold promotional posters for a local art event.",
                imageUrl: "/src/images/ThreeDImage.jpg",
                technologies: ["Print Design", "Illustration", "Layout"]
              },
              {
                title: "Social Media Kit",
                description: "Developed consistent and vibrant templates for Instagram and LinkedIn.",
                imageUrl: "/src/images/VideoEditing.jpg",
                technologies: ["Social Graphics", "Templates", "Color Theory"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gradient-to-br from-black to-gray-900 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 group hover:scale-105 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-cyan-500 group-hover:to-teal-400">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <ContactSection />
    </main>
  );
}
