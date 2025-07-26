import React, { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonials = [{
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director, TechNova',
    image: '',
    content: 'BlazeMarketingMedia transformed our digital presence completely. Their strategic approach to our campaigns resulted in a 300% increase in qualified leads within just three months.',
    rating: 5
  }, {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, Horizon Innovations',
    image: '',
    content: 'The 3D product renders they created for our launch were absolutely stunning. The level of detail and realism helped us secure major retail partnerships before production was even complete.',
    rating: 5
  }, {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Creative Director, Pulse Studios',
    image: '',
    content: 'Working with the Blaze team on our brand refresh was an incredible experience. They truly understood our vision and elevated it beyond what we thought possible.',
    rating: 5
  }];
  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }
  };
  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);
  return <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with BlazeMarketingMedia.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-4"></div>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }} onTransitionEnd={() => setIsAnimating(false)}>
              {testimonials.map(testimonial => <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-8 relative group hover:border-orange-500/30 transition-all mx-auto max-w-2xl">
                    <div className="absolute top-6 right-6 text-orange-500/30 group-hover:text-orange-500/50 transition-colors">
                      <Quote size={32} />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {Array.from({
                    length: 5
                  }).map((_, index) => <Star key={index} size={16} className={index < testimonial.rating ? 'text-orange-500' : 'text-gray-600'} fill={index < testimonial.rating ? 'currentColor' : 'none'} />)}
                    </div>
                    <p className="text-gray-300">{testimonial.content}</p>
                  </div>
                </div>)}
            </div>
          </div>
          <button onClick={prevTestimonial} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/80 text-white hover:bg-orange-500 transition-colors" disabled={isAnimating}>
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextTestimonial} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/80 text-white hover:bg-orange-500 transition-colors" disabled={isAnimating}>
            <ChevronRight size={24} />
          </button>
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => <button key={index} className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-600'}`} onClick={() => setCurrentIndex(index)} />)}
          </div>
        </div>
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Join our growing list of satisfied clients
          </p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-md hover:shadow-[0_0_15px_rgba(255,94,20,0.5)] transition-all">
            Start Your Project
          </a>
        </div>
      </div>
    </section>;
}