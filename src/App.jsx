import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Classes from './components/Classes';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-md">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-medium">Aesthetic Fit</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#classes" className="hover:text-white">Classes</a>
            <a href="#join" className="hover:text-white">Join</a>
          </nav>
          <a href="#join" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">Sign up</a>
        </div>
      </header>

      <main className="flex flex-col">
        <Hero />
        <Features />
        <Classes />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Aesthetic Fit. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
