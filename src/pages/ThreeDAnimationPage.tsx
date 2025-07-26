import React, { useEffect } from 'react';
// @ts-ignore
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

export default function ThreeDAnimationPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#0B0F17] pt-20">
      <motion.div
        className="container mx-auto px-4 py-16 text-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="max-w-3xl mx-auto" variants={fadeInUp}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
            variants={fadeInUp}
          >
            Three 3 Animation video
            <br />
        
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10"
            variants={fadeInUp}
          >
            Captivating 3D animations that bring your ideas to life with movement, depth, and professional storytelling.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            variants={fadeInUp}
          >
            <Link
              to="/contact"
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity w-full md:w-auto"
            >
              Get Started
            </Link>
            <Link
              to="/portfolio"
              className="px-6 md:px-8 py-3 md:py-4 border border-gray-700 rounded-lg text-white font-semibold hover:bg-gray-900 transition-colors w-full md:w-auto"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.section
        className="py-12 md:py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-left flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-orange-500">What's Included</h2>
            <ul className="list-none space-y-4">
              {[
                { icon: '✔️', title: 'Character Animation', description: 'Bring characters to life with fluid, expressive movement and personality that connects with your audience.' },
                { icon: '✔️', title: 'Product Visualization', description: 'Showcase your products in stunning 3D detail, highlighting features and functionality in ways photos cannot.' },
                { icon: '✔️', title: 'Explainer Videos', description: 'Break down complex concepts into engaging, easy-to-understand visual stories that educate and persuade.' },
                { icon: '✔️', title: 'Logo Animation', description: 'Transform your static logo into a dynamic brand element that makes a memorable impression.' },
                { icon: '✔️', title: 'Architectural Visualization', description: 'Turn architectural plans into immersive 3D experiences that showcase spaces before they\'re built.' }
              ].map((offer, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-base md:text-lg text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="mr-2">{offer.icon}</span>
                  <div>
                    <strong>{offer.title}</strong>
                    <p className="text-sm md:text-base text-gray-400">{offer.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src="../src/images/ThreeDImage.jpg" alt="Three D Animation" className="w-full h-auto rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-12 md:py-20 bg-[#0B0F17]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center text-white">The Results We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {[
              { number: '87%', text: 'Higher Engagement Rate' },
              { number: '72%', text: 'Better Information Retention' },
              { number: '64%', text: 'Increased Conversion Rate' },
              { number: '40+', text: 'Industry Awards Won' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#0D1219] p-6 md:p-10 rounded-lg text-center shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-12 md:py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Client <span className="text-orange-500">Testimonials</span></h2>
          <p className="text-sm md:text-base text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with BlazeMarketingMedia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-900/60 p-6 md:p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-400 italic mb-4">"BlazeMarketingMedia transformed our digital presence completely. Their team delivered a marketing strategy that increased our conversion rates by 150% in just three months."</p>
              <div className="text-white font-semibold">Sarah Johnson</div>
              <div className="text-orange-500 text-sm">Marketing Director, TechVision</div>
            </motion.div>

            <motion.div
              className="bg-gray-900/60 p-6 md:p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-400 italic mb-4">"The 3D animations created by the Blaze team helped us explain our complex product in a way that was both engaging and easy to understand. Our customer acquisition cost dropped by 40%!"</p>
              <div className="text-white font-semibold">Michael Chen</div>
              <div className="text-orange-500 text-sm">CEO, Innovate Solutions</div>
            </motion.div>

            <motion.div
              className="bg-gray-900/60 p-6 md:p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-400 italic mb-4">"Working with BlazeMarketingMedia on our rebrand was the best decision we made. Their creative direction and execution were flawless, resulting in a 70% increase in brand recognition."</p>
              <div className="text-white font-semibold">Jessica Miller</div>
              <div className="text-orange-500 text-sm">Brand Manager, Urban Apparel</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="pb-20">
        <ContactSection />
      </div>
    </div>
  );
}