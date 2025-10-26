import React from 'react';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import PortfolioTestimonials from './components/PortfolioTestimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen antialiased">
      <Hero />
      <AboutServices />
      <PortfolioTestimonials />
      <Footer />
    </div>
  );
}

export default App;
