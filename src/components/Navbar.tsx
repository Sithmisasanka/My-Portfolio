import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Strengths', href: '#awards' },
    { name: 'Certifications', href: '#certificates' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FiLinkedin size={18} />, url: 'https://www.linkedin.com/in/sithmi-sasanka-964751256/', label: 'LinkedIn' },
    { icon: <FiGithub size={18} />, url: 'https://github.com/Sithmisasanka', label: 'GitHub' },
    { icon: <FiInstagram size={18} />, url: 'https://instagram.com/imsithmis', label: 'Instagram' },
    { icon: <FiMail size={18} />, url: 'mailto:sithmisasanka2002@gmail.com', label: 'Email' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 300;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.substring(1));
    }
  };

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>

          {/* Left: Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 w-[260px]"
          >
            <a href="#" className="inline-block bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 text-lg font-bold text-white tracking-tight whitespace-nowrap shadow-lg hover:border-purple-500/50 transition-colors duration-300">
              Sithmi <span className="text-purple-400">Sasanka</span><span className="text-pink-500">.</span>
            </a>
          </motion.div>

          {/* Center: Menu Pill Container */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:flex flex-1 justify-center"
          >
            <div className="flex items-center bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-lg">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-md"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center justify-end gap-3 w-[260px]"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/80 hover:border-purple-500 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden ml-auto">
            {/* Mobile menu implementation would go here */}
          </div>
        </div>
      </div>
    </nav>
  );
}
