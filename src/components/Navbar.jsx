import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Rocket } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-50" initial={false}>
        <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 ${scrolled ? 'py-2' : 'py-3'}`}>
          <div className={`pointer-events-auto flex w-full items-center justify-between rounded-full border ${scrolled ? 'border-neutral-800/70 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60' : 'border-transparent bg-transparent'} px-4 py-2 transition-colors`}>
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 ring-1 ring-white/10">
                <Rocket className="h-4 w-4 text-emerald-400" />
              </span>
              <span className="text-sm font-semibold tracking-wide text-white">Serene Designs</span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="rounded-full px-3 py-1.5 text-sm text-neutral-300 transition hover:bg-white/5 hover:text-white">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="ml-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-black transition hover:bg-neutral-200">Start Project</a>
            </nav>

            <a href="#contact" className="md:hidden rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black transition hover:bg-neutral-200">Start</a>
          </div>
        </div>
        <motion.div style={{ scaleX }} className="h-0.5 w-full origin-left bg-gradient-to-r from-emerald-400/70 via-emerald-400/50 to-transparent" />
      </motion.div>
      <div className="h-16" />
    </>
  );
};

export default Navbar;
