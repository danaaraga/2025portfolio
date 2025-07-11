import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaInstagram, FaEnvelope, 
  FaChevronUp, FaMapMarkerAlt
} from 'react-icons/fa';

// --- CONSTANTS ---
const jadeColor = "#00A878";
const jadeDark = "#007A5A";
const jadeLight = "#4CC9A0";

// --- INTERFACES ---
interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  href: string;
  label: string;
  color: string;
}

// --- DATA ---
// Updated navigation links to match Navbar.tsx
const navigationLinks: FooterLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificate', href: '#certifications' },
  { label: 'Project', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    href: 'https://github.com/danaaraga',
    label: 'GitHub',
    color: '#333'
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/danaaraga',
    label: 'LinkedIn',
    color: '#0077B5'
  },
  {
    icon: FaInstagram,
    href: 'https://instagram.com/danaaraga',
    label: 'Instagram',
    color: '#E4405F'
  },
  {
    icon: FaEnvelope,
    href: 'mailto:danaraga101@gmail.com',
    label: 'Email',
    color: '#EA4335'
  }
];

// Social icon component with modern hover effect
const SocialIcon = ({ link }: { link: SocialLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className="group relative"
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm z-10 relative"
        style={{ 
          backgroundColor: isHovered ? link.color : 'rgba(255, 255, 255, 0.8)',
          boxShadow: isHovered 
            ? `0 8px 20px ${link.color}40` 
            : '0 4px 12px rgba(0, 0, 0, 0.05)'
        }}
        whileHover={{ y: -5 }}
      >
        <link.icon size={20} color={isHovered ? '#ffffff' : link.color} />
      </motion.div>
      <motion.div 
        className="absolute -inset-0.5 rounded-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ 
          background: `linear-gradient(90deg, ${link.color}, ${link.color}AA)`,
          filter: 'blur(5px)'
        }}
      />
    </motion.a>
  );
};

const Footer: React.FC = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative pt-20 overflow-hidden">
      {/* Wave divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-full h-[60px]"
          style={{ fill: '#f5f8f7' }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      {/* Gradient background */}
      <div className="bg-gradient-to-b from-[#f8fcfb] to-[#f0f7f5] pt-8 pb-10 relative">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(${jadeDark} 0.5px, transparent 0.5px)`,
              backgroundSize: "20px 20px",
            }}
          />
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 rounded-full"
            style={{ background: `radial-gradient(circle, ${jadeColor}20, transparent 70%)` }}
            animate={{ 
              scale: [1, 1.05, 1], 
              transition: { repeat: Infinity, duration: 7, ease: "easeInOut" } 
            }}
          />
          <motion.div
            className="absolute -bottom-40 left-10 w-96 h-96 rounded-full"
            style={{ background: `radial-gradient(circle, ${jadeLight}20, transparent 70%)` }}
            animate={{ 
              scale: [1, 1.1, 1], 
              transition: { repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 } 
            }}
          />
        </div>

        <div className="container mx-auto px-4">
          {/* Scroll to top button - fixed position */}
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-xl bg-white shadow-lg border border-gray-100 backdrop-blur-sm z-50 group"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 8px 32px rgba(0, 168, 120, 0.15)'
            }}
            whileHover={{ 
              y: -5, 
              boxShadow: '0 12px 20px rgba(0, 168, 120, 0.2)',
              backgroundColor: jadeColor
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            aria-label="Scroll to top"
          >
            <FaChevronUp className="text-emerald-600 group-hover:text-white" size={16} />
          </motion.button>

          {/* Content container with glass effect */}
          <motion.div 
            className="max-w-6xl mx-auto rounded-2xl backdrop-blur-md p-10 border border-gray-100"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo and links section */}
            <div className="flex flex-col lg:flex-row items-start gap-14 mb-12">
              {/* Logo and about */}
              <div className="lg:w-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="h-12 w-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                    <span className="font-bold text-white text-2xl">D</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Dana Raga</h3>
                    <p className="text-xs text-emerald-700">Front-end Developer</p>
                  </div>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-gray-700 text-sm leading-relaxed mb-6"
                >
                  Seorang pengembang web dengan fokus pada teknologi front-end modern.
                  Selalu bersemangat untuk belajar dan mengembangkan keterampilan baru.
                </motion.p>

                {/* Contact info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-3 mb-8"
                >
                  <a 
                    href="mailto:danaraga101@gmail.com" 
                    className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors duration-300 group no-underline"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 shadow-sm group-hover:bg-emerald-100 transition-colors">
                      <FaEnvelope size={14} className="text-emerald-600" />
                    </div>
                    <span className="text-sm">danaraga101@gmail.com</span>
                  </a>
                  
                  <a 
                    href="https://maps.google.com/?q=Bogor,+Jawa+Barat" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors duration-300 group no-underline"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 shadow-sm group-hover:bg-emerald-100 transition-colors">
                      <FaMapMarkerAlt size={14} className="text-emerald-600" />
                    </div>
                    <span className="text-sm">Bogor, Jawa Barat</span>
                  </a>
                </motion.div>
              </div>
              
              {/* Navigation links */}
              <div className="lg:w-1/4">
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-gray-800 font-semibold mb-6 relative inline-block"
                >
                  Navigasi
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-500 rounded-full"></span>
                </motion.h4>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="grid grid-cols-2 gap-x-6 gap-y-2"
                >
                  {navigationLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 text-sm font-medium no-underline hover:bg-emerald-50 px-2 py-1.5 rounded-lg"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * index }}
                      whileHover={{ x: 3 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Connect section with social links */}
              <div className="lg:w-1/3 lg:pl-10">
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-gray-800 font-semibold mb-6 relative inline-block"
                >
                  Terhubung
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-500 rounded-full"></span>
                </motion.h4>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-4"
                >
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <SocialIcon link={link} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            
            {/* Copyright bar */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-sm text-gray-700 flex items-center flex-wrap justify-center sm:justify-start"
                >
                  <span>© {currentYear} Dana Raga</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="flex items-center">
                    Dibuat menggunakan React & TypeScript
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Global CSS untuk menghilangkan warna biru dari semua link di footer */}
      <style>{`
        footer a {
          color: inherit;
          text-decoration: none;
        }
        footer a:hover {
          color: #00A878;
        }
      `}</style>
    </footer>
  );
};

export default Footer;