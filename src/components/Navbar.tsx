import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa';
import { useState, useEffect, useMemo } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const jadeColor = "#00A878";
  const jadeDark = "#007A5A";

  const navItems = useMemo(() => [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certificate' },
    { href: '#projects', label: 'Project' },
    { href: '#contact', label: 'Contact' }
  ], []);

  const socialLinks = [
    { 
      href: 'https://github.com/danaaraga', 
      icon: FaGithub, 
      name: 'GitHub', 
      hoverColor: '#24292f',
      lightColor: '#6e7681',
      description: 'View my code'
    },
    { 
      href: 'https://linkedin.com/in/dana-raga7', 
      icon: FaLinkedin, 
      name: 'LinkedIn', 
      hoverColor: '#0A66C2',
      lightColor: '#0A66C2',
      description: 'Connect with me'
    },
    { 
      href: 'mailto:danaraga101@gmail.com', 
      icon: FaEnvelope, 
      name: 'Email', 
      hoverColor: jadeDark,
      lightColor: jadeDark,
      description: 'Send me a message'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveItem(href);
    setIsMobileMenuOpen(false);
    // Jika menggunakan smooth scroll manual:
    // const element = document.querySelector(href);
    // if (element) {
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
  };

  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
              setActiveItem(`#${sectionId}`);
            }
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Memicu saat section berada di tengah viewport
    );
    sections.forEach(section => {
      if (section) observer.observe(section);
    });
    return () => sections.forEach(section => {
      if (section) observer.unobserve(section);
    });
  }, [navItems]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      if (
        isMobileMenuOpen &&
        mobileMenuButton && !mobileMenuButton.contains(event.target as Node) &&
        mobileMenu && !mobileMenu.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <motion.nav 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg backdrop-blur-md bg-white/95' : 'bg-white/80 backdrop-blur-sm' // Sedikit penyesuaian opacity
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tambahkan 'relative' di sini untuk positioning absolut child */}
        <div className="relative flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 z-10"> {/* z-10 agar di atas nav items jika overlap */}
            <a 
              href="#hero"
              className="text-2xl tracking-tight hover:opacity-80 transition-opacity"
              style={{ 
                color: jadeDark,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 'bold', 
              }}
              onClick={() => handleNavClick('#hero')}
            >
              Dana Raga
            </a>
          </div>

          {/* Navigation Items - Absolutely Centered for Desktop */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <motion.li key={item.href} className="relative">
                  <a
                    href={item.href}
                    className="relative px-3 py-2 text-sm rounded-md transition-colors duration-300 hover:text-emerald-600" // Warna hover disesuaikan
                    style={{
                      color: activeItem === item.href ? jadeColor : '#374151',
                      fontWeight: 'bold', 
                    }}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                    {activeItem === item.href && (
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full"
                        style={{ backgroundColor: jadeColor }}
                        layoutId="activeUnderline"
                        initial={false}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Section: Social Links (Desktop) & Mobile Menu Button */}
          <div className="flex items-center z-10"> {/* z-10 agar di atas nav items jika overlap */}
            {/* Social Media Section - Desktop */}
            <div className="hidden md:flex items-center">
              <motion.div 
                className="flex items-center space-x-1 px-3 py-1.5 rounded-full border border-gray-200/60 bg-white/50 backdrop-blur-sm" // Background sedikit lebih transparan
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ 
                  borderColor: `${jadeColor}50`, // Border lebih jelas saat hover
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  scale: 1.02
                }}
              >
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    className="relative group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  >
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-2.5 rounded-full transition-all duration-200 block"
                      style={{ color: social.lightColor || social.hoverColor }}
                      whileHover={{ 
                        backgroundColor: `${social.hoverColor}12`, // Background hover lebih subtle
                        color: social.hoverColor,
                        scale: 1.1 // Scale ikon saat hover
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      title={social.name} // Title untuk tooltip bawaan browser
                    >
                      <social.icon size={18} />
                      
                      {/* Tooltip - sederhana dan efektif */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div 
                          className="px-2.5 py-1.5 rounded-md text-xs font-semibold text-white shadow-lg whitespace-nowrap"
                          style={{ backgroundColor: social.hoverColor }}
                        >
                          {social.description}
                          {/* Arrow untuk tooltip */}
                          <div 
                            className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
                            style={{ backgroundColor: social.hoverColor }}
                          />
                        </div>
                      </div>
                    </motion.a>
                  </motion.div>
                ))}
                
                <motion.div
                  className="w-px h-6 bg-gray-300/60 mx-1" // Separator lebih jelas
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                />
                
                <motion.span
                  className="text-xs font-semibold text-gray-700 px-2" // Warna teks lebih kontras
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                >
                  Connect
                </motion.span>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                id="mobile-menu-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="p-2 rounded-md transition-colors duration-300 z-20" // z-20 agar di atas mobile menu
                style={{ 
                  color: isMobileMenuOpen ? jadeColor : '#374151',
                  backgroundColor: isMobileMenuOpen ? `${jadeColor}10` : 'transparent'
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu" // Untuk accessibility
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-gray-200/80 shadow-sm" // Shadow tipis
              style={{ backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)' }}
              onClick={(e) => e.stopPropagation()} // Mencegah penutupan saat klik di dalam menu
            >
              <div className="px-2 pt-2 pb-4 space-y-1"> {/* Padding bawah ditambah */}
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-3 text-base rounded-lg transition-all duration-300" // Rounded lebih besar
                    style={{
                      color: activeItem === item.href ? jadeColor : '#374151',
                      backgroundColor: activeItem === item.href ? `${jadeColor}10` : 'transparent',
                      fontWeight: 'bold', 
                    }}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                    whileHover={{ backgroundColor: activeItem !== item.href ? `${jadeColor}08` : `${jadeColor}10` }} // Hover effect
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {activeItem === item.href && (
                        <motion.div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: jadeColor }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </motion.a>
                ))}
                
                {/* Social Links in Mobile Menu */}
                <motion.div
                  className="pt-4 border-t border-gray-200/80 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.05 + 0.1 }}
                >
                  <motion.div
                    className="px-3 mb-3" // Margin bawah dikurangi
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.05 + 0.2 }}
                  >
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">Terhubung dengan saya:</h3>
                    {/* <p className="text-xs text-gray-500">Mari berkolaborasi dan berbagi ide!</p> */}
                  </motion.div>
                  
                  <div className="grid grid-cols-3 gap-3 px-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-3 rounded-xl border border-gray-200/70 bg-white/70 backdrop-blur-sm transition-all duration-200 shadow-sm" // Border & shadow
                        style={{ 
                          borderColor: `${social.hoverColor}25`,
                        }}
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ 
                          backgroundColor: `${social.hoverColor}10`,
                          borderColor: `${social.hoverColor}40`,
                          y: -2,
                          boxShadow: `0 4px 10px ${social.hoverColor}15` // Shadow saat hover
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: navItems.length * 0.05 + 0.3 + index * 0.1 }}
                      >
                        <motion.div
                          className="p-2 rounded-full mb-1.5" // Margin bawah ikon dikurangi
                          style={{ backgroundColor: `${social.hoverColor}1A` }} // Background ikon lebih soft
                          whileHover={{ scale: 1.08 }}
                        >
                          <social.icon 
                            size={22} // Ukuran ikon disesuaikan
                            style={{ color: social.hoverColor }}
                          />
                        </motion.div>
                        <span 
                          className="text-xs font-semibold"
                          style={{ color: social.hoverColor }}
                        >
                          {social.name}
                        </span>
                        {/* Deskripsi di mobile menu bisa dihilangkan agar lebih ringkas jika perlu */}
                        {/* <span className="text-[10px] text-gray-500 text-center leading-tight mt-0.5">
                          {social.description}
                        </span> */}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;