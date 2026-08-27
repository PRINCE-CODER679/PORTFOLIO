import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#2A835F]/40 bg-[#060d14] py-12 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <a href="#" className="text-xl font-extrabold text-white tracking-tight">
            <span>ASRAR<span className="text-[#34D399]">.</span></span>
          </a>
          <p className="text-xs text-slate-300 font-medium mt-2">
            Engineering intelligent software & full-stack web experiences.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-extrabold text-slate-300">
          <a href="#about" className="hover:text-[#34D399] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#34D399] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#34D399] transition-colors">Projects</a>
          <a href="#experience" className="hover:text-[#34D399] transition-colors">Experience</a>
          <a href="#contact" className="hover:text-[#34D399] transition-colors">Contact</a>
        </div>

        <div className="text-xs text-slate-400 font-medium">
          © {currentYear} Asrar. Built with React & Three.js.
        </div>
      </div>
    </footer>
  );
}