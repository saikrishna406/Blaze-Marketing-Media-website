import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'animation', label: '3D Animation' },
    { id: 'renders', label: '3D Renders' },
    { id: 'video', label: 'Video Editing' },
    { id: 'design', label: 'Graphic Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechFusion Brand Campaign',
      category: 'marketing',
      image: ''
    },
    {
      id: 2,
      title: 'Velocity Product Animation',
      category: 'animation',
      image: ''
    },
    {
      id: 3,
      title: 'Skyline Tower Architectural Render',
      category: 'renders',
      image: ''
    },
    {
      id: 4,
      title: 'Horizon Festival Aftermovie',
      category: 'video',
      image: ''
    },
    {
      id: 5,
      title: 'Nebula Brand Identity',
      category: 'design',
      image: ''
    },
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);

  // ... existing code ...
const getProjectLink = (category: string) => {
  switch (category) {
    case 'marketing':
      return '/digital-portfolio';
    case 'animation':
      return '/3d-portfolio';
    case 'renders':
      return '/3d-renderportfolio';
    case 'video':
      return '/video-portfolio';
    case 'design':
      return '/graphic-designprotfolio';
    default:
      return '/portfolio';
  }
};
// ... existing code ...

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Our Work
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our
            expertise and creative capabilities.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg bg-gray-900">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-orange-400">
                      {categories.find(cat => cat.id === project.category)?.label}
                    </span>
                    <Link
                      to={getProjectLink(project.category)}
                      className="text-white hover:text-orange-500 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-orange-500/30 text-white font-medium rounded-md hover:bg-orange-500/10 transition-all"
          >
            Interested in working with us?
          </Link>
        </div>
      </div>
    </section>
  );
}