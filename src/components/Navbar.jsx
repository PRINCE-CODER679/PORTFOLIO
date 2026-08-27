import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#060d14]/95 backdrop-blur-xl border-b border-[#2A835F]/40 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group text-2xl font-extrabold text-white tracking-tight focus:outline-none"
        >
          <span className="tracking-wide">
            ASRAR<span className="text-[#34D399]">.</span>
          </span>
        </a>

        {/* Center nav links — desktop */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-[#0c1824]/80 backdrop-blur-xl border border-[#2A835F]/40 shadow-lg">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="px-5 py-2 text-xs font-bold tracking-wider text-slate-300 rounded-full transition-all duration-200 hover:text-[#34D399] hover:bg-white/5"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* CTA — desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-xs font-black tracking-wider uppercase text-white rounded-full bg-gradient-to-r from-[#D81B60] to-[#FF5A79] hover:from-[#FF5A79] hover:to-[#D81B60] shadow-[0_0_20px_rgba(216,27,96,0.4)] hover:shadow-[0_0_25px_rgba(255,90,121,0.5)] transition-all duration-300 hover:scale-105 border border-[#FF5A79]/40"
          >
            Let's Connect
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5 text-[#ead5d0]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        id="mobile-menu"
        className={[
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="border-t border-[#2A835F]/40 px-6 pt-4 pb-5 space-y-2 bg-[#060d14]/98 backdrop-blur-2xl shadow-2xl">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={handleLinkClick}
              className="block px-4 py-3 rounded-xl text-base font-extrabold text-slate-200 transition-colors duration-200 hover:text-[#34D399] hover:bg-white/10"
            >
              {label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block w-full text-center px-5 py-3 text-sm font-black tracking-wider uppercase text-white rounded-xl bg-gradient-to-r from-[#D81B60] to-[#FF5A79] shadow-lg transition-all duration-200 border border-[#FF5A79]/40"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}