import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import  ContactSection  from '../components/ContactSection';

export default function VideoeditingProtfolio() {
  const projects = [
    {
      title: "Commercial Video Editing",
      description: "Professional commercial and promotional video edits.",
      thumbnail: "/src/images/VideoEditing.jpg",
      technologies: ["Adobe Premiere Pro", "After Effects", "Color Grading"]
    },
    {
      title: "Motion Graphics",
      description: "Dynamic motion graphics and visual effects for videos.",
      thumbnail: "/src/images/ThreeDImage.jpg",
      technologies: ["After Effects", "Cinema 4D", "Motion Design"]
    },
    {
      title: "Social Media Content",
      description: "Engaging video content optimized for social platforms.",
      thumbnail: "/src/images/ThreeDRenders.jpg",
      technologies: ["Premiere Pro", "Social Media", "Content Strategy"]
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black w-full min-h-screen overflow-hidden">
      <div className="relative h-screen w-full flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent animate-pulse"></div>
        </div>

        <div className="text-center z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
          >
            Video Editing Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400"
          >
            Crafting compelling visual stories through expert editing
          </motion.p>
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
                  <img
                    className="w-full h-full object-cover"
                    src={project.thumbnail}
                    alt={project.title}
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