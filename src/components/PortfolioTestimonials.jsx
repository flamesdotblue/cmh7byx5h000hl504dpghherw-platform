import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const projects = [
  {
    title: 'Aurum Luxury',
    tag: 'Brand Identity',
    gradient: 'from-neutral-800 to-neutral-900',
  },
  {
    title: 'Vela App',
    tag: 'Product Design + Dev',
    gradient: 'from-emerald-500/20 to-emerald-300/10',
  },
  {
    title: 'Noir Studio',
    tag: 'Website Redesign',
    gradient: 'from-white/10 to-white/0',
  },
  {
    title: 'Harbor & Co.',
    tag: 'Social Campaign',
    gradient: 'from-emerald-500/15 to-emerald-400/10',
  },
  {
    title: 'Eclipse Labs',
    tag: 'Web App',
    gradient: 'from-neutral-800 to-neutral-900',
  },
  {
    title: 'Maison Verre',
    tag: 'eCommerce UX',
    gradient: 'from-white/10 to-white/0',
  },
];

const TestimonialCard = ({ quote, name, role }) => (
  <motion.div 
    initial={{ opacity: 0, y: 8 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }} 
    transition={{ duration: 0.5 }}
    className="relative rounded-2xl border border-neutral-800/80 bg-neutral-950/60 p-6"
  >
    <div className="absolute -top-3 left-6 rounded-full bg-emerald-500/20 p-2 ring-1 ring-emerald-500/30">
      <Star className="h-4 w-4 text-emerald-300" />
    </div>
    <p className="mt-2 text-neutral-200">“{quote}”</p>
    <div className="mt-4 text-sm text-neutral-400">{name} — {role}</div>
  </motion.div>
);

const PortfolioTestimonials = () => {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Selected Work</h2>
          <p className="mt-2 text-neutral-300">A glimpse into brands, campaigns, and products we’ve crafted.</p>
        </div>
        <a href="#contact" className="hidden rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 transition hover:border-neutral-500 hover:text-white md:inline-block">Start a Project</a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href="#contact"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.03 }}
            className="group relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-950"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
            <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ backgroundImage: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(16,185,129,0.15), transparent 40%)' }} />
            <div className="relative aspect-[4/3] p-5">
              <div className="flex h-full w-full items-end">
                <div className="space-y-1">
                  <div className="inline-flex rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-neutral-200">{p.tag}</div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-sm text-neutral-400">Hover to preview</p>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-20 grid gap-4 md:grid-cols-3">
        <TestimonialCard 
          quote="Serene Designs elevated our brand with a visual system that feels timeless and modern. The process was seamless and strategic."
          name="Ava M."
          role="CEO, Aurum Luxury"
        />
        <TestimonialCard 
          quote="From design sprints to deployment, the team delivered a blazingly fast app our customers love."
          name="Jordan P."
          role="Product Lead, Eclipse Labs"
        />
        <TestimonialCard 
          quote="Our socials finally reflect our brand. Engagement is up 2.3x since launch—stunning work!"
          name="Clara R."
          role="Marketing Director, Harbor & Co."
        />
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        const cards = document.querySelectorAll('[href="#contact"].group');
        cards.forEach((card)=>{
          card.addEventListener('mousemove', (e)=>{
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; const y = e.clientY - rect.top;
            card.style.setProperty('--x', x + 'px');
            card.style.setProperty('--y', y + 'px');
          });
        });
      `}} />
    </section>
  );
};

export default PortfolioTestimonials;
