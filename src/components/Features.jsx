import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Heart, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Performance Programs',
    desc: 'Strength, HIIT, mobility, and conditioning tracks built by coaches.',
  },
  {
    icon: Heart,
    title: 'Mindful Movement',
    desc: 'Breathwork and recovery flows to balance body and mind.',
  },
  {
    icon: Clock,
    title: 'Anytime Access',
    desc: 'Train in-studio or on the go with flexible schedules.',
  },
  {
    icon: Shield,
    title: 'Coaching & Form',
    desc: 'Smart tips and cues to keep your form clean and safe.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-black to-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-3xl font-semibold md:text-5xl"
        >
          Designed for results, crafted for aesthetics
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-emerald-500/20 p-3 text-emerald-400">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
