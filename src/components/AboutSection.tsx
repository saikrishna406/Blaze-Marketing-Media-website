import React from 'react';
import aboutImage from '../images/about.jpg';
import { Zap, Target, Users } from 'lucide-react';
export default function AboutSection() {

  return <section id="about" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-[0_0_25px_rgba(255,94,20,0.2)]">
              <img src={aboutImage} alt="Creative team working" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg -z-10"></div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              We're Not Just Another Agency
            </h3>
            <p className="text-gray-300 mb-6">
              BlazeMarketingMedia is a collective of creative minds, digital
              strategists, and technical wizards who are passionate about
              transforming businesses through innovative digital solutions.
              Founded in 2015, we've been at the forefront of digital marketing
              and creative services.
            </p>
            <p className="text-gray-300 mb-10">
              Our approach combines cutting-edge technology with strategic
              thinking to deliver results that exceed expectations. We don't
              just execute tasks—we build partnerships that fuel growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[{
              icon: <Zap size={24} className="text-orange-500" />,
              title: 'Innovation',
              description: 'Pushing boundaries with forward-thinking solutions'
            }, {
              icon: <Target size={24} className="text-orange-500" />,
              title: 'Results',
              description: 'Focused on measurable impact and ROI'
            }, {
              icon: <Users size={24} className="text-orange-500" />,
              title: 'Partnership',
              description: 'Your success is our success'
            }].map((item, index) => <div key={index} className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-colors">
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}