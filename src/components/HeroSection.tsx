import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

// Change from named export to default export
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,94,20,0.1)_0,_rgba(0,0,0,0)_50%)]"></div>
      </div>
      {/* Animated glowing orb */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 -left-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Fueling Brands with Digital Firepower
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We create stunning digital experiences that ignite your brand's
            potential and drive exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-md hover:shadow-[0_0_15px_rgba(255,94,20,0.5)] transition-all">
              Let's Build Something Epic
            </a>
            <a href="#services" className="px-8 py-3 border border-orange-500/30 text-white font-medium rounded-md hover:bg-orange-500/10 transition-all">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-70 hover:opacity-100 transition-opacity animate-bounce">
        <ChevronDownIcon size={32} />
      </a>
    </section>;
}