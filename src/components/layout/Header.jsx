import React from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { personalInfo } from '../../data/index';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 bg-black/50 backdrop-blur-dark transition-all duration-300">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center space-x-3"
      >
        <span className="text-xl font-bold text-white">ASR</span>
        <span className="text-sm text-gray-400">asrar</span>
      </motion.div>

      <nav className="hidden md:flex items-center space-x-6">
        <a href="#hero" className="text-gray-300 hover:text-white transition-colors duration-200">
          Home
        </a>
        <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
          About
        </a>
        <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-200">
          Skills
        </a>
        <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200">
          Projects
        </a>
        <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-200">
          Experience
        </a>
        <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
          Contact
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Social Links */}
      <div className="hidden md:flex items-center space-x-4">
        {personalInfo.socialLinks.map((social) => {
          const Icon = social.icon === 'github' ? FiGithub : 
                       social.icon === 'linkedin' ? FiLinkedin : 
                       social.icon === 'twitter' ? FiTwitter : FiGithub;
          return (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </header>
  );
}