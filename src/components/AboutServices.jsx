import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Share2, Code } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc, items }) => (
  <motion.div 
    whileHover={{ y: -4 }} 
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="group relative rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] backdrop-blur"
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 ring-1 ring-white/10">
        <Icon className="h-5 w-5 text-emerald-400" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-3 text-sm leading-relaxed text-neutral-300">{desc}</p>
    {items && (
      <ul className="mt-4 space-y-1.5 text-sm text-neutral-300/90">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const AboutServices = () => {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-16 grid items-start gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">About Serene Designs</h2>
          <p className="mt-4 text-neutral-300 md:text-lg">
            Serene Designs is a premium creative studio crafting brands and digital products that resonate. Our process blends strategy, design, and development to deliver elegant solutions with measurable impact.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-300/90">
            <div className="rounded-xl border border-neutral-800/80 p-4">
              <p className="font-medium text-white">Strategy-Led</p>
              <p className="mt-1 text-neutral-400">Research, positioning, and clarity before pixels.</p>
            </div>
            <div className="rounded-xl border border-neutral-800/80 p-4">
              <p className="font-medium text-white">Design-Obsessed</p>
              <p className="mt-1 text-neutral-400">Refined, minimal, and intentional interfaces.</p>
            </div>
            <div className="rounded-xl border border-neutral-800/80 p-4">
              <p className="font-medium text-white">Tech-Driven</p>
              <p className="mt-1 text-neutral-400">Modern stacks, performance, and accessibility.</p>
            </div>
            <div className="rounded-xl border border-neutral-800/80 p-4">
              <p className="font-medium text-white">Collaborative</p>
              <p className="mt-1 text-neutral-400">Transparent communication and agile delivery.</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900/60 to-neutral-950/60 p-6">
          <h3 className="text-xl font-semibold text-white">Our Services</h3>
          <p className="mt-2 text-sm text-neutral-300">A holistic suite combining creativity, strategy, and development.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ServiceCard 
              icon={Palette} 
              title="Branding & Visual Identity" 
              desc="Distinctive brand systems that communicate your essence."
              items={["Logo & Identity Systems","Art Direction","Brand Guidelines","Collateral Design"]}
            />
            <ServiceCard 
              icon={Share2} 
              title="Social Media Design & Management" 
              desc="Cohesive content that captivates and converts across platforms."
              items={["Content Strategy","Design Templates","Campaign Creative","Analytics & Optimization"]}
            />
            <ServiceCard 
              icon={Code} 
              title="Website & App Development" 
              desc="Elegant, fast, and accessible digital products built for growth."
              items={["Design to Code","Web Apps & Sites","eCommerce","Performance & SEO"]}
            />
            <motion.div className="rounded-2xl border border-neutral-800 p-6">
              <p className="text-sm text-neutral-300">
                Every engagement begins with a discovery call to align on goals, audience, and success metrics. From there, we move into iterative design and development sprints.
              </p>
              <a href="#contact" className="mt-4 inline-block rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 transition hover:border-neutral-500 hover:text-white">Book a Discovery Call</a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutServices;
