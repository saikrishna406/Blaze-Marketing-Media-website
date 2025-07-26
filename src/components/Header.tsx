import React, { useEffect, useState } from 'react';
import { Link /*, useLocation*/ } from 'react-router-dom'; // Comment out useLocation here
import { MenuIcon, XIcon } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const location = useLocation(); // Comment out or remove this line

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified handleNavigation to only manage scrolling
  const handleNavigation = (path: string) => {
    if (path.startsWith('/#')) {
      const element = document.querySelector(path.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '/') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'Book Now', path: '/book' } // Updated from 'Contact' to 'Book Now'
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          {/* Removed onClick and preventDefault for Home link */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
            // Removed onClick handler here to let Link handle navigation
          >
            BlazeMarketingMedia
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm uppercase tracking-wider hover:text-orange-500 transition-colors"
              onClick={(e) => {
                // Only prevent default and handle scrolling for hash links or home link on the home page
                // if (location.pathname === '/' && item.path.startsWith('/#')) {
                if (item.path.startsWith('/#')) { // Simplified check
                  e.preventDefault();
                  handleNavigation(item.path); // Scrolls to section on home page
                } else if (item.path === '/' /*&& location.pathname === '/'*/) { // Simplified check
                   e.preventDefault(); // Prevent default to handle smooth scroll to top
                   handleNavigation(item.path);
                }
                // For all other cases (e.g., /book, or hash links when not on home),
                // the default Link behavior will navigate.
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full border-t border-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block py-4 px-6 text-center text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors"
              onClick={(e) => {
                setIsMenuOpen(false); // Close menu on click
                 // Only prevent default and handle scrolling for hash links or home link on the home page
                // if (location.pathname === '/' && item.path.startsWith('/#')) {
                if (item.path.startsWith('/#')) { // Simplified check
                  e.preventDefault();
                  handleNavigation(item.path); // Scrolls to section on home page
                } else if (item.path === '/' /*&& location.pathname === '/'*/) { // Simplified check
                   e.preventDefault(); // Prevent default to handle smooth scroll to top
                   handleNavigation(item.path);
                }
                // For all other cases (e.g., /book, or hash links when not on home),
                // the default Link behavior will navigate.
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}