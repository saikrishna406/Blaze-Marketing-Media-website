import React, { useEffect } from 'react';
// @ts-ignore
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import  ContactSection  from '../components/ContactSection';


export default function GraphicDesignPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#0B0F17]">
      <motion.div 
        className="container mx-auto px-4 pt-32 pb-20 text-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="max-w-3xl mx-auto" variants={fadeInUp}>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
            variants={fadeInUp}
          >
            Graphic Design
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10"
            variants={fadeInUp}
          >
            Eye-catching graphic designs that communicate your brand message and captivate your audience across all platforms and mediums.
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
                { icon: '✔️', title: 'Brand Identity Design', description: 'Comprehensive brand identity systems including logos, color palettes, typography, and brand guidelines.' },
                { icon: '✔️', title: 'Print Design', description: 'Eye-catching brochures, business cards, packaging, and other print materials that make a lasting impression.' },
                { icon: '✔️', title: 'Digital & Web Design', description: 'Stunning web graphics, social media assets, email templates, and other digital design elements.' },
                { icon: '✔️', title: 'Marketing Collateral', description: 'Cohesive design for all your marketing materials that reinforces your brand and drives engagement.' },
                { icon: '✔️', title: 'Illustration & Custom Graphics', description: 'Unique, custom illustrations and graphics that differentiate your brand and communicate complex ideas.' }
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
            <img src="../src/images/GraphicDesign.jpg" alt="Graphic Design Services" className="w-full h-auto rounded-lg shadow-lg" />
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
              { number: '89%', text: 'Brand Recognition Increase' },
              { number: '67%', text: 'Higher Conversion Rate' },
              { number: '94%', text: 'Client Satisfaction' },
              { number: '35+', text: 'Design Awards' }
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
          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900/60 p-6 md:p-8 rounded-lg shadow-lg">
              <motion.div 
                className="flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="../images/testimonial-1.jpg" 
                  alt="Sarah Johnson" 
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full"
                />
              </motion.div>
              <motion.div 
                className="flex justify-center mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 md:w-6 h-4 md:h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </motion.div>
              <motion.blockquote 
                className="text-lg md:text-xl italic mb-6 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                "BlazeMarketingMedia transformed our digital presence completely. Their team delivered a marketing strategy that increased our conversion rates by 150% in just three months."
              </motion.blockquote>
              <motion.div 
                className="text-base md:text-lg font-semibold text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Sarah Johnson
              </motion.div>
              <motion.div 
                className="text-sm md:text-base text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Marketing Director, TechVision
              </motion.div>
            </div>
          </motion.div>
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          </div>
        </div>
      </motion.section>
      <ContactSection />
    </div>
  );
}