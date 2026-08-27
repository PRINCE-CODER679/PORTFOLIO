import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { VantaBackground } from './widgets/VantaBackground';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden pt-28 pb-16 bg-[#030712]"
    >
      {/* ── Layer 1: 3D Electric Indigo Fluid Waves ── */}
      <VantaBackground />

      {/* ── Layer 2: Glowing Curved 3D Glass Arc Highlights (Top-Left & Right) ── */}
      <div className="absolute top-0 left-0 w-[600px] h-[350px] bg-gradient-to-br from-[#3B82F6]/35 via-[#6366F1]/20 to-transparent rounded-full blur-[100px] pointer-events-none -z-5" />
      <div className="absolute top-10 right-0 w-[650px] h-[400px] bg-gradient-to-bl from-[#818CF8]/30 via-[#3B82F6]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-5" />

      {/* ── Layer 3: Main Hero Content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto space-y-7">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center space-y-7"
        >
          {/* Eyebrow Tracking Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[0.72rem] sm:text-xs font-bold tracking-[0.28em] uppercase text-slate-300 drop-shadow-md"
          >
            BUILD INTELLIGENT AI & FULL-STACK SYSTEMS
          </motion.div>

          {/* Main Headline - Attractive & Creative Gradient Highlight Typography */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-black leading-[1.08] tracking-tight text-white drop-shadow-[0_4px_35px_rgba(0,0,0,0.95)] max-w-5xl">
            A new way to{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] drop-shadow-[0_0_35px_rgba(56,189,248,0.6)]">
              think
            </span>{' '}
            &{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A79] via-[#F43F5E] to-[#3B82F6] drop-shadow-[0_0_35px_rgba(255,90,121,0.65)]">
              create
            </span>{' '}
            with computers
          </h1>

          {/* Supporting Bio Subheading */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-300 font-medium max-w-xl drop-shadow-md">
            Hi, I'm Asrar — an AI and full-stack developer engineering modern, high-performance, and visually engaging web applications.
          </p>

          {/* Main Oval Pill Action Button */}
          <div className="pt-2 flex flex-col items-center gap-6">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-9 py-3.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-2xl text-sm font-semibold text-white tracking-wide shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 hover:shadow-[0_0_50px_rgba(255,255,255,0.6)]"
            >
              <span>Explore My Work ↗</span>
            </a>

            {/* Sub-link Demo Trigger */}
            <a
              href="#contact"
              className="text-xs text-slate-400 font-medium hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              <span>Let's Connect & Collaborate</span>
              <span className="text-[10px]">↓</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Layer 4: Minimalist Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-2 pt-8"
      >
        <div className="w-5 h-8 rounded-full border border-white/30 flex justify-center pt-1.5 shadow-sm">
          <span className="block w-1 h-2 rounded-full bg-white/80 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
