import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const Hero = () => {
  const saffronColor = '#F4C430';
  const saffronDark = '#DAA520';

  // Background particles
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: 'rgba(36, 41, 47, 0.95)' }}>
      {/* Animated background particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            background: `rgba(244, 196, 48, ${Math.random() * 0.3})`,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-8 py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side - Photo */}
          <motion.div 
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Tech stack floating icons */}
              <div className="absolute -inset-8 z-0">
                {[
                  { Icon: FaReact, color: '#61DAFB', position: 'top-0 left-0' },
                  { Icon: SiTailwindcss, color: '#06B6D4', position: 'top-0 right-0' },
                  { Icon: FaNodeJs, color: '#339933', position: 'bottom-0 left-0' },
                  { Icon: SiTypescript, color: '#3178C6', position: 'bottom-0 right-0' },
                ].map(({ Icon, color, position }, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${position}`}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <Icon size={24} color={color} />
                  </motion.div>
                ))}
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute -inset-4 rounded-lg blur-2xl opacity-0 group-hover:opacity-15"
                style={{
                  background: `linear-gradient(135deg, ${saffronColor}, ${saffronDark})`,
                }}
                animate={{
                  opacity: [0, 0.15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              
              {/* Image container */}
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0nI6o9l7fyionBcUIlUC15MjBMqIOIcmTQ&s"
                  alt="Foto Formal Dana Raga"
                  className="w-full h-auto object-cover"
                />
                
                {/* Image overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${saffronColor}, transparent)`,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div 
            className="order-1 md:order-2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small text above name */}
            <motion.p
              className="text-sm font-medium mb-4"
              style={{ color: saffronColor }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              👋 Halo! Perkenalkan saya
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6"
              style={{
                color: saffronColor,
                fontFamily: "'Inter', sans-serif",
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              Dana Raga
            </motion.h1>

            {/* Role/Title with typing effect */}
            <motion.div
              className="text-xl md:text-2xl font-light mb-8"
              style={{ color: '#8b949e' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-gray-400">{'<'}</span>
              <span className="text-[#61DAFB]">Web Developer</span>
              <span className="text-gray-400">{' />'}</span>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xl font-light" style={{ color: '#c9d1d9' }}>
                Seorang siswa yang bersemangat dengan pengembangan web.
              </p>
              <p className="text-lg" style={{ color: '#8b949e' }}>
                Fokus pada pembuatan aplikasi web modern dan interaktif.
              </p>
            </motion.div>

            {/* Social Links & CV Button */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <motion.button
                className="px-8 py-4 rounded-lg text-lg font-semibold relative overflow-hidden group"
                style={{
                  backgroundColor: saffronColor,
                  color: '#1a1d21',
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 0 20px ${saffronColor}40`
                }}
                whileTap={{ scale: 0.98 }}
              >
                Lihat CV
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
              </motion.button>

              {/* Social media links */}
              <div className="flex gap-4">
                {[
                  { Icon: FaGithub, url: 'https://github.com/danaaraga' },
                  { Icon: FaLinkedin, url: 'https://linkedin.com/in/danaaraga' },
                  { Icon: FaEnvelope, url: 'mailto:danaaraga@example.com' }
                ].map(({ Icon, url }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    <Icon size={20} color="#8b949e" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;