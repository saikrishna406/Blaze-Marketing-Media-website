import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path: string) => {
    // For hash links, navigate to the home page and then scroll
    if (path.startsWith('#')) {
      window.location.href = '/' + path;
    } else {
      // For regular links, the Link component handles navigation
    }
  };

  return <footer className="bg-gray-950 py-10 border-t border-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
              BlazeMarketingMedia
            </h3>
            <p className="text-gray-400 mb-6">
              Fueling brands with digital firepower through innovative marketing
              strategies and creative solutions.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
         
<ul className="space-y-2">
  {[
    { name: 'Digital Marketing', path: '/digital-portfolio' },
    { name: '3D Animation Videos', path: '/3d-portfolio' },
    { name: '3D Renders', path: '/3d-renderportfolio' },
    { name: 'Video Editing', path: '/video-editing' },
    { name: 'Graphic Design', path: '/graphic-design' }
  ].map(service => (
    <li key={service.name}>
      <Link to={service.path} className="text-gray-400 hover:text-orange-500 transition-colors">
        {service.name}
      </Link>
    </li>
  ))}
</ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '#about' },
                { name: 'Portfolio', path: '#portfolio' },
                { name: 'Testimonials', path: '#testimonials' },
                { name: 'Contact', path: '#contact' }
              ].map(item => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                    onClick={(e) => {
                      // Prevent default Link behavior for hash links
                      if (item.path.startsWith('#')) {
                         e.preventDefault();
                         handleNavigation(item.path);
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} BlazeMarketingMedia. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}