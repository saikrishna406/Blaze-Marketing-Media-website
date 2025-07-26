import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingCursor } from './FloatingCursor';
import { ScrollProgress } from './ScrollProgress';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  children: React.ReactNode;
}

export function ServicePageLayout({ title, description, icon, items, children }: ServicePageLayoutProps) {
  return (
    <div className="bg-black text-white min-h-screen cursor-none">
      <FloatingCursor />
      <ScrollProgress />
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
              <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-8 hover:border-orange-500/50 transition-all duration-300">
                <div className="mb-6 transition-transform duration-300">
                  {icon}
                </div>
                <p className="text-gray-300 text-lg mb-8">{description}</p>
                <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
                <ul className="space-y-3">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8">
                {children}
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-md hover:shadow-[0_0_15px_rgba(255,94,20,0.5)] transition-all text-lg"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}