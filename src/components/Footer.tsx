import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [activeSection, setActiveSection] = useState('about');

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sithmi-sasanka-964751256/',
      icon: <FiLinkedin size={20} />,
      color: 'hover:bg-blue-600',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Sithmisasanka',
      icon: <FiGithub size={20} />,
      color: 'hover:bg-gray-700',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/imsithmis',
      icon: <FiInstagram size={20} />,
      color: 'hover:bg-pink-600',
    },
    {
      name: 'Email',
      url: 'mailto:sithmisasanka2002@gmail.com',
      icon: <FiMail size={20} />,
      color: 'hover:bg-purple-600',
    },
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Strengths', href: '#awards' },
    { name: 'Certifications', href: '#certificates' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 200;

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
    }
  };

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left: Identity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
              Sithmi Sasanka
            </h3>
            <p className="text-gray-400 text-sm mb-1">
              Software Engineering Undergraduate & UI/UX Enthusiast
            </p>
            <p className="text-gray-500 text-xs">
              Designing and building clean, user-focused digital experiences.
            </p>
          </motion.div>

          {/* Center: Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`w-11 h-11 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:shadow-lg hover:border-purple-500/50`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Right: Navigation Pills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    y: isActive ? -4 : 0,
                  }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/40'
                    : 'bg-gray-800/60 text-gray-400 hover:bg-gray-700/80 hover:text-white border border-gray-700/30'
                    }`}
                >
                  {link.name}
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-gray-800/50 text-center"
        >
          <p className="text-gray-600 text-xs">
            © 2024 Sithmi Sasanka. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
