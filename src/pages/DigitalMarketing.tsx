import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Change from named export to default export
export default function DigitalMarketingPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#0B0F17]">
      <div className="container mx-auto px-4 pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Digital Marketing
            <br />
            Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
            Strategic campaigns that drive real results. We leverage cutting-edge techniques across Google Ads, Facebook Ads, LinkedIn Ads and more to maximize your ROI and reach.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
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
          </div>
        </div>
      </div>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-left flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-3/5">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-orange-500">What's Included</h2>
            <ul className="list-none">
              {[ 
                { icon: '✔️', title: 'PPC Campaign Management', description: 'Expertly crafted and managed pay-per-click campaigns across Google, Bing, and other search engines to drive targeted traffic.' },
                { icon: '✔️', title: 'Social Media Advertising', description: 'Strategic ad campaigns on Facebook, Instagram, LinkedIn, and other platforms tailored to your target audience and goals.' },
                { icon: '✔️', title: 'Conversion Rate Optimization', description: 'Data-driven analysis and optimization to increase your conversion rates and maximize ROI on existing traffic.' },
                { icon: '✔️', title: 'Performance Tracking & Analytics', description: 'Comprehensive tracking and reporting to measure campaign performance and provide actionable insights.' },
                { icon: '✔️', title: 'Audience Targeting & Segmentation', description: 'Advanced targeting strategies to reach the right audience with the right message at the right time.' }
              ].map((offer, index) => (
                <li key={index} className="flex items-start text-base md:text-lg text-white mb-4">
                  <span className="mr-2">{offer.icon}</span>
                  <div>
                    <strong>{offer.title}</strong>
                    <p className="text-sm md:text-base text-gray-400">{offer.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-2/5">
            <img src="../src/images/myImage.jpg" alt="Digital Marketing Services" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-[#0B0F17]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center text-white">The Results We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            <div className="bg-[#0D1219] p-6 md:p-10 rounded-lg text-center shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">250%</div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Average<br />ROI<br />Increase</div>
            </div>
            <div className="bg-[#0D1219] p-6 md:p-10 rounded-lg text-center shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">65%</div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Lower Cost<br />Per<br />Acquisition</div>
            </div>
            <div className="bg-[#0D1219] p-6 md:p-10 rounded-lg text-center shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">3.2x</div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Conversion<br />Rate<br />Improvement</div>
            </div>
            <div className="bg-[#0D1219] p-6 md:p-10 rounded-lg text-center shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">85%</div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Client<br />Retention<br />Rate</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Client <span className="text-orange-500">Testimonials</span></h2>
          <p className="text-sm md:text-base text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with BlazeMarketingMedia.
          </p>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-900/60 p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="../images/testimonial-1.jpg" 
                  alt="Sarah Johnson" 
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 md:w-6 h-4 md:h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg md:text-xl italic mb-6 text-white">
                "BlazeMarketingMedia transformed our digital presence completely. Their team delivered a marketing strategy that increased our conversion rates by 150% in just three months."
              </blockquote>
              <div className="text-base md:text-lg font-semibold text-white">Sarah Johnson</div>
              <div className="text-sm md:text-base text-gray-400">Marketing Director, TechVision</div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          </div>
        </div>
      </section>
    </div>
  );
}