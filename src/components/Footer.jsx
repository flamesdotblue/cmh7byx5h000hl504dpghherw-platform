import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name');
    alert(`Thank you, ${name}. We will get back to you shortly.`);
    e.currentTarget.reset();
  };

  return (
    <footer id="contact" className="relative mt-10 border-t border-neutral-900/80 bg-neutral-950/80">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_circle_at_20%_-10%,rgba(16,185,129,0.10),transparent_40%),radial-gradient(600px_circle_at_80%_120%,rgba(99,102,241,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-semibold tracking-tight text-white">Let’s start your next chapter</h2>
            <p className="mt-3 max-w-lg text-neutral-300">Tell us about your goals. We’ll craft a tailored roadmap across brand, content, and product to get you there.</p>
            <div className="mt-6 flex items-center gap-3 text-neutral-300">
              <a href="mailto:hello@serenestudio.com" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm transition hover:border-neutral-500 hover:text-white"><Mail className="h-4 w-4" /> hello@serenestudio.com</a>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-2xl border border-neutral-800 bg-black/40 p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-neutral-300">Name</label>
                <input required name="name" className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-neutral-600 focus:outline-none" placeholder="Your name" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-neutral-300">Email</label>
                <input required type="email" name="email" className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-neutral-600 focus:outline-none" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-neutral-300">Project Type</label>
                <select name="type" className="w-full appearance-none rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-white focus:border-neutral-600 focus:outline-none">
                  <option>Branding & Visual Identity</option>
                  <option>Social Media Design & Management</option>
                  <option>Website & App Development</option>
                  <option>Multi-service Engagement</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-neutral-300">Message</label>
                <textarea name="message" rows={4} className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-neutral-600 focus:outline-none" placeholder="Tell us about your goals, timelines, and budget range."></textarea>
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200">
              Book a Discovery Call
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.form>
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
            <a href="#" aria-label="Instagram" className="rounded-full border border-neutral-800 p-2 text-neutral-300 transition hover:border-neutral-600 hover:text-white"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="rounded-full border border-neutral-800 p-2 text-neutral-300 transition hover:border-neutral-600 hover:text-white"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-neutral-800 p-2 text-neutral-300 transition hover:border-neutral-600 hover:text-white"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
