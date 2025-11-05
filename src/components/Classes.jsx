import React from 'react';
import { motion } from 'framer-motion';

const classes = [
  {
    name: 'Power Sculpt',
    level: 'All Levels',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
    desc: 'Full-body strength with tempo and control.',
  },
  {
    name: 'HIIT Burn',
    level: 'Intermediate',
    img: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1600&auto=format&fit=crop',
    desc: 'High-intensity intervals for power and endurance.',
  },
  {
    name: 'Mobility Flow',
    level: 'All Levels',
    img: 'https://images.unsplash.com/photo-1599447421294-c4f9a27e9f5b?q=80&w=1600&auto=format&fit=crop',
    desc: 'Reset and recover with mindful movement.',
  },
  {
    name: 'Core Lab',
    level: 'All Levels',
    img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop',
    desc: 'Core stability and anti-rotation mechanics.',
  },
];

export default function Classes() {
  return (
    <section id="classes" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"
        >
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-5xl">Dynamic classes</h2>
            <p className="mt-2 max-w-xl text-white/70">Curated sessions that blend strength, conditioning, and mobility. Book a spot or stream live.</p>
          </div>
          <a href="#join" className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90">View Schedule</a>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{c.name}</h3>
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs text-emerald-400">{c.level}</span>
                </div>
                <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <button className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-emerald-400">Book</button>
                  <button className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium transition hover:border-white/30 hover:bg-white/10">Details</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
