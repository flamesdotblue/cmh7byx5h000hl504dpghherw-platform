import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import PortfolioTestimonials from './components/PortfolioTestimonials';

function App() {
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
