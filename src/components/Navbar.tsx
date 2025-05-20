import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  
  // Saffron color variations
  const saffronColor = '#F4C430';
  const saffronDark = '#DAA520';

  const navItems = [
    { href: '#hero', label: 'Hero' },
    { href: '#skills', label: 'Keterampilan' },
    { href: '#projects', label: 'Proyek' },
    { href: '#certifications', label: 'Sertifikasi' },
    { href: '#contact', label: 'Kontak' }
  ];

  const socialLinks = [
    { href: 'https://github.com/danaaraga', icon: FaGithub, color: '#6e7681', hoverColor: '#238636' },
    { href: 'https://linkedin.com/in/danaaraga', icon: FaLinkedin, color: '#6e7681', hoverColor: '#0a66c2' },
    { href: 'mailto:danaaraga@example.com', icon: FaEnvelope, color: '#6e7681', hoverColor: '#EA4335' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(36, 41, 47, 0.95)' }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center">
          {/* Logo with enhanced typography and adjusted padding */}
          <div className="text-xl pl-8" style={{ flex: '0 0 auto' }}> {/* Menambahkan pl-8 untuk padding kiri */}
            <a 
              href="#" 
              className="no-underline text-[#F5F5F5] hover:text-[#F5F5F5] hover:no-underline tracking-wide"
              style={{ 
                color: '#F5F5F5',
                textDecoration: 'none',
                fontWeight: 800,
                fontFamily: "'Inter', 'Poppins', sans-serif",
                letterSpacing: '0.02em'
              }}
            >
              Dana Raga
            </a>
          </div>

          {/* Navigation Items - centered */}
          <ul className="flex space-x-6 justify-center" style={{ flex: '1 1 auto' }}>
            {navItems.map((item) => (
              <motion.li key={item.href}>
                <a
                  href={item.href}
                  className="relative py-2 transition-colors"
                  style={{
                    fontWeight: 200, 
                    color: activeItem === item.href ? saffronDark : saffronColor
                  }}
                  onMouseEnter={() => setActiveItem(item.href)}
                  onMouseLeave={() => setActiveItem('')}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#F4C430] via-[#DAA520] to-[#FFD700]"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: activeItem === item.href ? 1 : 0,
                      opacity: activeItem === item.href ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center space-x-5" style={{ flex: '0 0 auto' }}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: social.hoverColor }}
                />
                <social.icon 
                  size={24} 
                  className="transition-colors duration-300"
                  style={{ 
                    color: social.color,
                  }}
                />
                <motion.span
                  className="absolute -bottom-1 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300"
                  style={{ backgroundColor: social.hoverColor }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;