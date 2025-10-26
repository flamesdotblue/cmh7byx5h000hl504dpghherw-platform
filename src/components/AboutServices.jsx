import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Share2, Code, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }),
};

const ServiceCard = ({ icon: Icon, title, desc, items, i }) => (
  <motion.div 
    variants={fadeUp}
    custom={i}
    whileHover={{ y: -4, scale: 1.01 }}
    className="group relative rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] backdrop-blur transition-transform duration-200 group-hover:[box-shadow:0_0_0_1px_rgb(var(--accent)_/_0.45),0_10px_40px_rgba(0,0,0,0.35)]"
  >
    <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.04), transparent 30%), radial-gradient(40% 40% at 20% 0%, var(--accent-veil), transparent 70%)' }} />
    <div className="relative flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 ring-1 ring-white/10">
        <Icon className="h-5 w-5 text-[rgb(var(--accent))]" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="relative mt-3 text-sm leading-relaxed text-neutral-300">{desc}</p>
    {items && (
      <ul className="relative mt-4 space-y-1.5 text-sm text-neutral-300/90">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'rgb(var(--accent))' }} />
            <span>{it}</span>
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
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">About Serene Designs</h2>
          <p className="mt-4 text-neutral-300 md:text-lg">
            A premium creative studio shaping brands and digital products for tomorrow. We blend strategy, minimalist design, and modern engineering to produce experiences that feel effortless and future-ready.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-300/90">
            {[
              { t: 'Strategy-Led', s: 'Positioning, clarity, and measurable outcomes.' },
              { t: 'Design-Obsessed', s: 'Intentional, minimal, and elegant systems.' },
              { t: 'Tech-Driven', s: 'Modern stacks, performance, and accessibility.' },
              { t: 'Collaborative', s: 'Transparent, agile, and outcome-focused.' },
            ].map((b, i) => (
              <motion.div key={b.t} variants={fadeUp} custom={(i + 1) * 0.5} className="rounded-xl border border-neutral-800/80 p-4 transition group hover:[box-shadow:0_0_0_1px_rgb(var(--accent)_/_0.45)]">
                <p className="font-medium text-white flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[rgb(var(--accent))]" /> {b.t}
                </p>
                <p className="mt-1 text-neutral-400">{b.s}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900/60 to-neutral-950/60 p-6">
          <h3 className="text-xl font-semibold text-white">Our Services</h3>
          <p className="mt-2 text-sm text-neutral-300">A holistic suite combining creativity, strategy, and development.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ServiceCard 
              i={0}
              icon={Palette} 
              title="Branding & Visual Identity" 
              desc="Distinctive, timeless brand systems that communicate your essence."
              items={["Logo & Identity Systems","Art Direction","Brand Guidelines","Collateral Design"]}
            />
            <ServiceCard 
              i={1}
              icon={Share2} 
              title="Social Media Design & Management" 
              desc="Cohesive, on-brand content that captivates and converts across platforms."
              items={["Content Strategy","Design Templates","Campaign Creative","Analytics & Optimization"]}
            />
            <ServiceCard 
              i={2}
              icon={Code} 
              title="Website & App Development" 
              desc="Elegant, fast, and accessible digital products engineered for growth."
              items={["Design to Code","Web Apps & Sites","eCommerce","Performance & SEO"]}
            />
            <motion.div variants={fadeUp} custom={3} className="group rounded-2xl border border-neutral-800 p-6 transition hover:[box-shadow:0_0_0_1px_rgb(var(--accent)_/_0.45),0_10px_40px_rgba(0,0,0,0.35)]">
              <p className="text-sm text-neutral-300">
                Every engagement begins with a discovery call to align on goals, audience, scope, and success metrics. Then we move into iterative design and development sprints.
              </p>
              <a href="#contact" className="mt-4 inline-block rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 backdrop-blur transition hover:border-[rgb(var(--accent))] hover:text-white hover:translate-y-[-1px] active:translate-y-0">Book a Discovery Call</a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutServices;
