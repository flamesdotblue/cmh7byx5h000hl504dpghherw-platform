import React from 'react';
import { motion } from 'framer-motion';
import { Star, Mail, ArrowRight, Instagram, Twitter, Linkedin } from 'lucide-react';

const projects = [
  { title: 'Aurum Luxury', tag: 'Brand Identity', gradient: 'from-neutral-800 to-neutral-900' },
  { title: 'Vela App', tag: 'Product Design + Dev', gradient: 'from-[color:rgba(0,0,0,0.3)] to-[color:rgba(0,0,0,0.2)]' },
  { title: 'Noir Studio', tag: 'Website Redesign', gradient: 'from-white/10 to-white/0' },
  { title: 'Harbor & Co.', tag: 'Social Campaign', gradient: 'from-[color:var(--accent-veil)] to-transparent' },
  { title: 'Eclipse Labs', tag: 'Web App', gradient: 'from-neutral-800 to-neutral-900' },
  { title: 'Maison Verre', tag: 'eCommerce UX', gradient: 'from-white/10 to-white/0' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.06 } }),
};

const TestimonialCard = ({ quote, name, role, i }) => (
  <motion.div 
    variants={fadeUp}
    custom={i}
    initial="hidden" whileInView="show" viewport={{ once: true }}
    className="relative rounded-2xl border border-neutral-800/80 bg-neutral-950/60 p-6 transition group hover:[box-shadow:0_0_0_1px_rgb(var(--accent)_/_0.45),0_10px_40px_rgba(0,0,0,0.35)]"
  >
    <div className="absolute -top-3 left-6 rounded-full p-2 ring-1" style={{ backgroundColor: 'var(--accent-veil)', borderColor: 'rgba(255,255,255,0.06)' }}>
      <Star className="h-4 w-4 text-[rgb(var(--accent))]" />
    </div>
    <p className="mt-2 text-neutral-200">“{quote}”</p>
    <div className="mt-4 text-sm text-neutral-400">{name} — {role}</div>
  </motion.div>
);

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name');
    alert(`Thank you, ${name}. We will get back to you shortly.`);
    e.currentTarget.reset();
  };

  return (
    <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-2xl border border-neutral-800 bg-black/40 p-6 backdrop-blur">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm text-neutral-300">Name</label>
          <input required name="name" className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-[rgb(var(--accent))] focus:outline-none" placeholder="Your name" />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm text-neutral-300">Email</label>
          <input required type="email" name="email" className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-[rgb(var(--accent))] focus:outline-none" placeholder="you@company.com" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm text-neutral-300">Project Type</label>
          <select name="type" className="w-full appearance-none rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-white focus:border-[rgb(var(--accent))] focus:outline-none">
            <option>Branding & Visual Identity</option>
            <option>Social Media Design & Management</option>
            <option>Website & App Development</option>
            <option>Multi-service Engagement</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm text-neutral-300">Message</label>
          <textarea name="message" rows={4} className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-[rgb(var(--accent))] focus:outline-none" placeholder="Tell us about your goals, timelines, and budget range."></textarea>
        </div>
      </div>
      <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200 hover:translate-y-[-1px] active:translate-y-0">
        Book a Discovery Call
        <ArrowRight className="h-4 w-4" />
      </button>
    </motion.form>
  );
};

const PortfolioTestimonials = () => {
  return (
    <>
      <section id="work" className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Selected Work</h2>
            <p className="mt-2 text-neutral-300">A glimpse into brands, campaigns, and products we’ve crafted.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 transition hover:border-[rgb(var(--accent))] hover:text-white md:inline-block hover:translate-y-[-1px] active:translate-y-0">Start a Project</a>
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
              className="group relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-950 transition hover:-translate-y-0.5 hover:[box-shadow:0_0_0_1px_rgb(var(--accent)_/_0.45),0_18px_60px_rgba(0,0,0,0.45)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ backgroundImage: 'radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%), var(--accent-weak), transparent_40%)' }} />
              <div className="relative aspect-[4/3] p-5">
                <div className="flex h-full w-full items-end">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-neutral-200">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'rgb(var(--accent))' }} />
                      {p.tag}
                    </div>
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
            i={0}
            quote="Serene Designs elevated our brand with a visual system that feels timeless and modern. The process was seamless and strategic."
            name="Ava M."
            role="CEO, Aurum Luxury"
          />
          <TestimonialCard 
            i={1}
            quote="From design sprints to deployment, the team delivered a blazingly fast app our customers love."
            name="Jordan P."
            role="Product Lead, Eclipse Labs"
          />
          <TestimonialCard 
            i={2}
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

      <section id="contact" className="relative mt-10 border-t border-neutral-900/80 bg-neutral-950/80">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(800px_400px_at_20%_-10%, var(--accent-veil), transparent_40%), radial-gradient(600px_300px_at_80%_120%, rgba(99,102,241,0.08), transparent_40%)' }} />

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-semibold tracking-tight text-white">Let’s start your next chapter</h2>
              <p className="mt-3 max-w-lg text-neutral-300">Tell us about your goals. We’ll craft a tailored roadmap across brand, content, and product to get you there.</p>
              <div className="mt-6 flex items-center gap-3 text-neutral-300">
                <a href="mailto:hello@serenestudio.com" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm transition hover:border-[rgb(var(--accent))] hover:text-white">
                  <Mail className="h-4 w-4 text-[rgb(var(--accent))]" /> hello@serenestudio.com
                </a>
              </div>
            </motion.div>

            <ContactForm />
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-neutral-900 pt-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Serene Designs. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4 text-neutral-300">
              <a href="#home" className="text-sm transition hover:text-white">Home</a>
              <a href="#about" className="text-sm transition hover:text-white">About</a>
              <a href="#work" className="text-sm transition hover:text-white">Portfolio</a>
              <a href="#contact" className="text-sm transition hover:text-white">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="rounded-full border border-neutral-800 p-2 text-neutral-300 transition hover:border-[rgb(var(--accent))] hover:text-white">{<Instagram className="h-4 w-4" />}</a>
              <a href="#" aria-label="Twitter" className="rounded-full border border-neutral-800 p-2 text-neutral-300 transition hover:border-[rgb(var(--accent))] hover:text-white">{<Twitter className="h-4 w-4" />}</a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-neutral-800 p-2 text-neutral-300 transition hover:border-[rgb(var(--accent))] hover:text-white">{<Linkedin className="h-4 w-4" />}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioTestimonials;
