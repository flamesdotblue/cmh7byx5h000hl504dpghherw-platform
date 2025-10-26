import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Rocket, Palette } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

const ACCENTS = [
  { name: 'Emerald', rgb: '16 185 129' },
  { name: 'Cyan', rgb: '34 211 238' },
  { name: 'Violet', rgb: '139 92 246' },
  { name: 'Amber', rgb: '245 158 11' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const setAccent = (rgb) => {
    const root = document.documentElement;
    root.style.setProperty('--accent', rgb);
    // derive light veils
    const [r, g, b] = rgb.split(' ').map(Number);
    root.style.setProperty('--accent-weak', `rgba(${r},${g},${b},0.14)`);
    root.style.setProperty('--accent-veil', `rgba(${r},${g},${b},0.08)`);
    setOpen(false);
  };

  return (
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-50" initial={false}>
        <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 ${scrolled ? 'py-2' : 'py-3'}`}>
          <div className={`pointer-events-auto flex w-full items-center justify-between rounded-full border ${scrolled ? 'border-neutral-800/70 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60' : 'border-transparent bg-transparent'} px-4 py-2 transition-colors`}>
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 ring-1 ring-white/10">
                <Rocket className="h-4 w-4 text-[rgb(var(--accent))]" />
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
              <div className="relative ml-2">
                <button onClick={() => setOpen((v) => !v)} aria-label="Change Accent" className="group inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-black/40 px-3 py-1.5 text-sm text-neutral-300 backdrop-blur transition hover:border-neutral-600 hover:text-white">
                  <Palette className="h-4 w-4 text-[rgb(var(--accent))]" />
                  Accent
                </button>
                {open && (
                  <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/90 p-2 shadow-2xl backdrop-blur">
                    {ACCENTS.map((a) => (
                      <button key={a.name} onClick={() => setAccent(a.rgb)} className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-sm text-neutral-200 transition hover:bg-white/5">
                        <span className="h-4 w-4 rounded-full" style={{ backgroundColor: `rgb(${a.rgb})` }} />
                        {a.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <a href="#contact" className="md:hidden rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black transition hover:bg-neutral-200">Start</a>
          </div>
        </div>
        <motion.div style={{ scaleX, backgroundImage: 'linear-gradient(to right, rgb(var(--accent)), rgba(255,255,255,0))' }} className="h-0.5 w-full origin-left" />
      </motion.div>
      <div className="h-16" />
    </>
  );
};

export default Navbar;
