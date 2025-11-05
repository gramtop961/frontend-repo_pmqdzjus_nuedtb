import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function CTA() {
  return (
    <section id="join" className="relative w-full overflow-hidden bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.25),transparent)]" />
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
            <Star className="h-4 w-4 text-emerald-400" />
            Limited founder memberships available
          </div>

          <h3 className="font-display text-3xl font-semibold md:text-4xl">Join the movement</h3>
          <p className="mt-2 max-w-2xl text-white/70">Unlock unlimited classes, priority booking, and members-only events. Your most aesthetic season starts now.</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            aria-label="Join waitlist"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/10 bg-black/60 px-5 py-3 text-white placeholder-white/50 outline-none transition focus:border-emerald-400"
            />
            <button
              type="submit"
              className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-black transition hover:bg-emerald-400"
            >
              Get Started
            </button>
          </form>

          <p className="mt-3 text-xs text-white/60">We respect your inbox. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
