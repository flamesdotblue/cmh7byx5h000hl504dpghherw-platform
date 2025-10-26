import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const paraY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const vignette = useTransform(scrollYProgress, [0, 1], [0.7, 0.85]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.15]);

  return (
    <section ref={ref} className="relative h-[92vh] md:h-screen w-full overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <Spline 
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <motion.div 
        className="pointer-events-none absolute inset-0 z-10" 
        style={{ background: 'radial-gradient(80% 80% at 50% 30%, rgba(0,0,0,0.2), rgba(0,0,0,0.8))', opacity: vignette }}
      />

      <motion.div 
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 z-10 h-72 w-[120vw] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, var(--accent-weak), transparent 60%)', opacity: glowOpacity }}
      />

      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{ y: titleY }}
          >
            Sleek, Modern, Futuristic Experiences
          </motion.h1>
          <motion.p 
            className="mx-auto max-w-3xl text-pretty text-neutral-300 md:text-lg"
            style={{ y: paraY }}
          >
            We merge aesthetic minimalism with cutting-edge engineering to shape brands, social systems, and high-performance digital products.
          </motion.p>

          <motion.div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ y: ctaY }}>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:translate-y-[-1px] hover:bg-neutral-200 active:translate-y-[0px]">
              Let’s Create Something Remarkable
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black/40 px-6 py-3 text-sm font-medium text-neutral-200 backdrop-blur transition hover:border-neutral-500 hover:text-white hover:translate-y-[-1px] active:translate-y-[0px]">
              View Our Work
              <span className="ml-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'rgb(var(--accent))' }} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.8, 0.2]) }}
      />
    </section>
  );
};

export default Hero;
