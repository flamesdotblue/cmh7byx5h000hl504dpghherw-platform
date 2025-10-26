import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <Spline 
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800/70 bg-black/30 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-emerald-400/80" />
            <span className="text-xs tracking-widest text-neutral-300">SERENE DESIGNS</span>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Premium Branding & Digital Experiences
          </h1>
          <p className="mx-auto max-w-3xl text-pretty text-neutral-300 md:text-lg">
            We merge aesthetics with functionality to craft distinctive brands, striking social content, and performant websites and apps.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
              Let’s Create Something Remarkable
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black/40 px-6 py-3 text-sm font-medium text-neutral-200 backdrop-blur transition hover:border-neutral-500 hover:text-white">
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
