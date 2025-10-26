import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import PortfolioTestimonials from './components/PortfolioTestimonials';

function App() {
  // Default accent on mount
  useEffect(() => {
    const root = document.documentElement;
    if (!root.style.getPropertyValue('--accent')) {
      root.style.setProperty('--accent', '16 185 129'); // emerald
      root.style.setProperty('--accent-weak', 'rgba(16,185,129,0.12)');
      root.style.setProperty('--accent-veil', 'rgba(16,185,129,0.08)');
    }
  }, []);

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen antialiased">
      <Navbar />
      <Hero />
      <AboutServices />
      <PortfolioTestimonials />
    </div>
  );
}

export default App;
