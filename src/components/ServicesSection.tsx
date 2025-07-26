import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MonitorSmartphone, Film, Video, PenTool } from 'lucide-react'

declare global {
  interface Window {
    VanillaTilt: any
  }
}

export default function ServicesSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js'
    script.async = true
    script.onload = () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          window.VanillaTilt.init(card, {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.2,
          })
        }
      })
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const services = [
    {
      icon: <MonitorSmartphone className="w-10 h-10 text-orange-500" />,
      title: 'Digital Marketing',
      description:
        'Strategic campaigns across Google Ads, Facebook Ads, LinkedIn Ads, and more to reach your target audience and drive conversions.',
      items: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'SEO', 'Content Marketing'],
    },
    {
      icon: <Film className="w-10 h-10 text-orange-500" />,
      title: '3D Animation Videos',
      description:
        'Captivating animated content that brings your concepts to life with stunning visuals and engaging storytelling.',
      items: ['Character Animation', 'Product Showcases', 'Explainer Videos', 'Motion Graphics', 'Brand Stories'],
    },
    {
      icon: <div className="w-10 h-10 text-orange-500" />,
      title: '3D Renders',
      description:
        'Photorealistic 3D renders that showcase your products or architectural designs with incredible detail and precision.',
      items: ['Product Visualization', 'Architectural Rendering', 'Interior Design', 'Concept Art', 'Virtual Prototypes'],
    },
    {
      icon: <Video className="w-10 h-10 text-orange-500" />,
      title: 'Video Editing',
      description:
        'Professional video editing that transforms raw footage into polished, engaging content that captivates your audience.',
      items: ['Commercial Editing', 'Social Media Content', 'Documentary Style', 'Event Highlights', 'Training Videos'],
    },
    {
      icon: <PenTool className="w-10 h-10 text-orange-500" />,
      title: 'Graphic Design',
      description:
        'Eye-catching visual designs that strengthen your brand identity and communicate your message effectively.',
      items: ['Brand Identity', 'Print Materials', 'Digital Assets', 'UI/UX Design', 'Packaging Design'],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital marketing and creative
            services to help your brand stand out in today's competitive
            landscape.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(255,94,20,0.15)] transform-gpu"
            >
              <div className="relative z-10">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-orange-500">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block mt-2 text-sm font-medium text-orange-500 hover:underline hover:text-orange-400 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}