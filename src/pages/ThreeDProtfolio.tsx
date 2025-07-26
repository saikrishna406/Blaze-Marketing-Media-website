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
        color="#ff6b6b"
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
      <Cloud
        opacity={0.5}
        speed={0.4}
        segments={20}
      />
      <FloatingParticles />
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={1}
      >
        <mesh position={[0, 0, -2]} rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[3, 0.2, 16, 100]} />
          <meshPhongMaterial color="#ff6b6b" opacity={0.6} transparent />
        </mesh>
      </Float>
    </>
  );
}

export default function ThreeDProtfolio() {
  const projects = [
    {
      title: "Character Animation",
      description: "Dynamic character rigging and animation showcase.",
      videoUrl: "/videos/character-animation.mp4",
      thumbnail: "/src/images/ThreeDImage.jpg",
      technologies: ["Maya", "Blender", "Character Rigging"]
    },
    {
      title: "Environment Design",
      description: "Immersive 3D environment and scene creation.",
      videoUrl: "/videos/environment-design.mp4",
      thumbnail: "/src/images/ThreeDRenders.jpg",
      technologies: ["3ds Max", "V-Ray", "Environment Design"]
    },
    {
      title: "Motion Graphics",
      description: "Engaging motion graphics and visual effects.",
      videoUrl: "/videos/motion-graphics.mp4",
      thumbnail: "/src/images/VideoEditing.jpg",
      technologies: ["Cinema 4D", "After Effects", "Motion Design"]
    }
  ];

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
          <color attach="background" args={["#000000"]} />
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

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
            >
              3D Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400"
            >
              Explore our creative 3D projects
            </motion.p>
          </div>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    className="w-full h-full object-cover"
                    src={project.videoUrl}
                    poster={project.thumbnail}
                    controls
                    playsInline
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}