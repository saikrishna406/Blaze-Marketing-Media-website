import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingCursor } from './components/FloatingCursor';
import { ScrollProgress } from './components/ScrollProgress';
// Lazy load homepage sections
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const AboutSection = React.lazy(() => import('./components/AboutSection'));
const ServicesSection = React.lazy(() => import('./components/ServicesSection'));
const PortfolioSection = React.lazy(() => import('./components/PortfolioSection'));
const TestimonialsSection = React.lazy(() => import('./components/TestimonialsSection'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));

// Lazy load pages
const DigitalMarketingPage = React.lazy(() => import("./pages/DigitalMarketing"));
const ThreeDAnimationPage = React.lazy(() => import('./pages/ThreeDAnimationPage'));
const ThreeDRendersPage = React.lazy(() => import('./pages/ThreeDRendersPage'));
const VideoEditingPage = React.lazy(() => import('./pages/VideoeditingPage'));
const GraphicDesignPage = React.lazy(() => import('./pages/GraphicDesignPage'));
const DigitalPortfolio = React.lazy(() => import('./pages/DigitalPortfolio'));
const ThreeDProtfolio = React.lazy(() => import('./pages/ThreeDProtfolio'));
const ThreeDRenderportfolio = React.lazy(() => import('./pages/ThreeDRenderportfolio'));
const VideoeditingProtfolio = React.lazy(() => import('./pages/VideoeditingProtfolio'));
const GraphicdesignProtfolio = React.lazy(() => import('./pages/GraphicdesignProtfolio'));
const BookingPage = React.lazy(() => import('./pages/BookingPage'));

function HomePage() {
  return (
    <Suspense fallback={<div>Loading home content...</div>}>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </Suspense>
  );
}

export function App() {
  return (
    <div className="app-container">
      <FloatingCursor />
      <ScrollProgress />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/3d-animation-videos" element={<ThreeDAnimationPage />} />
          <Route path="/3d-renders" element={<ThreeDRendersPage />} />
          <Route path="/video-editing" element={<VideoEditingPage />} />
          <Route path="/graphic-design" element={<GraphicDesignPage />} />
          <Route path="/digital-portfolio" element={<DigitalPortfolio />} />
          <Route path="/3d-portfolio" element={<ThreeDProtfolio />} />
          <Route path="/3d-render-portfolio" element={<ThreeDRenderportfolio />} />
          <Route path="/video-editing-portfolio" element={<VideoeditingProtfolio />} />
          <Route path="/graphicDesignportfolio" element={<GraphicdesignProtfolio />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}