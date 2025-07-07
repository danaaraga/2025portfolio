import { motion } from "framer-motion";
import { useState } from "react";
import CVViewer from './CVViewer';

const Hero = () => {
  const [isCVOpen, setIsCVOpen] = useState(false);

  const handleOpenCV = () => {
    setIsCVOpen(true);
  };

  // Jade Color Palette - Simplified
  const jadeColor = "#00A878";
  const jadeDark = "#007A5A";
  const jadeLight = "#4ECDC4";

  // Simple animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="hero" className="min-h-screen relative overflow-hidden flex items-center bg-white pt-2 pb-8">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-jade-50/30" 
             style={{ background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.5) 50%, ${jadeColor}05 100%)` }} />
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0">
          {/* Large floating circle */}
          <motion.div
            className="absolute w-96 h-96 rounded-full opacity-5"
            style={{ 
              backgroundColor: jadeColor,
              top: '20%',
              right: '-10%',
            }}
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Medium floating triangle */}
          <motion.div
            className="absolute w-32 h-32 opacity-10"
            style={{ 
              backgroundColor: jadeLight,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              top: '60%',
              left: '-5%',
            }}
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Corner brackets - enhanced */}
          <div className="absolute top-8 left-8 w-12 h-12">
            <motion.div 
              className="absolute top-0 left-0 w-8 h-1 opacity-20" 
              style={{ backgroundColor: jadeColor }}
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.div 
              className="absolute top-0 left-0 w-1 h-8 opacity-20" 
              style={{ backgroundColor: jadeColor }}
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          </div>
          
          <div className="absolute top-8 right-8 w-12 h-12">
            <motion.div 
              className="absolute top-0 right-0 w-8 h-1 opacity-20" 
              style={{ backgroundColor: jadeColor }}
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
            <motion.div 
              className="absolute top-0 right-0 w-1 h-8 opacity-20" 
              style={{ backgroundColor: jadeColor }}
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </div>
          
          <div className="absolute bottom-8 left-8 w-12 h-12">
            <motion.div 
              className="absolute bottom-0 left-0 w-8 h-1 opacity-20" 
              style={{ backgroundColor: jadeColor }}
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-1 h-8 opacity-20" 
              style={{ backgroundColor: jadeColor }}
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            />
          </div>
          
          <div className="absolute bottom-8 right-8 w-12 h-12">
            <motion.div 
              className="absolute bottom-0 right-0 w-8 h-1 opacity-20" 
              style={{ backgroundColor: jadeColor }}
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-1 h-8 opacity-20" 
              style={{ backgroundColor: jadeColor }}
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </div>
        </div>

        {/* Enhanced floating dots with varied sizes */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-25"
              style={{
                backgroundColor: i % 3 === 0 ? jadeColor : i % 3 === 1 ? jadeLight : jadeDark,
                width: i % 4 === 0 ? '3px' : i % 4 === 1 ? '2px' : '1.5px',
                height: i % 4 === 0 ? '3px' : i % 4 === 1 ? '2px' : '1.5px',
                left: `${15 + i * 8}%`,
                top: `${10 + (i * 6) % 60}%`,
              }}
              animate={{
                y: [0, -12, 0],
                opacity: [0.25, 0.7, 0.25],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <motion.div 
        className="container mx-auto px-6 lg:px-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-center lg:items-start">
          
          {/* Left - Photo Section with enhanced effects */}
          <motion.div
            className="flex justify-center items-start" 
            variants={itemVariants}
          >
            <div className="relative flex flex-col items-center">
              {/* Floating decoration around photo */}
              <motion.div
                className="absolute -top-6 -left-6 w-4 h-4 rounded-full opacity-40"
                style={{ backgroundColor: jadeLight }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute -top-8 right-8 w-2 h-2 rounded-full opacity-30"
                style={{ backgroundColor: jadeDark }}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
              />

              <motion.div
                className="relative rounded-2xl overflow-hidden bg-white"
                style={{ width: "300px", height: "400px", border: `3px solid ${jadeColor}`, boxShadow: `0 20px 40px ${jadeColor}20` }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `0 25px 50px ${jadeColor}30`,
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://morningsidevfd27.com/wp-content/uploads/2016/06/male-silhouette-3x4.jpg"
                  alt="Dana Raga - Web Developer"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle overlay effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-jade-500/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Enhanced status badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white px-3 py-2 rounded-full border flex items-center gap-2 shadow-lg"
                style={{ borderColor: `${jadeColor}40` }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: jadeColor }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-medium text-gray-700">Open to Work</span>
              </motion.div>

              {/* Additional floating element */}
              <motion.div
                className="absolute bottom-12 -left-8 w-3 h-3 rounded-full opacity-30"
                style={{ backgroundColor: jadeColor }}
                animate={{
                  x: [0, 8, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 2,
                }}
              />
            </div>
          </motion.div>

          {/* Right - Content Section with enhanced elements */}
          <motion.div
            className="flex flex-col justify-start space-y-5 text-center lg:text-left" 
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white border shadow-sm"
                style={{ borderColor: `${jadeColor}30`, color: '#374151' }}
              >
                <span>👋</span>
                <span>Hi! I'm Dana Raga</span>
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: jadeColor }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-tight relative"
              style={{ color: jadeColor }}
              variants={itemVariants}
            >
              Dana Raga
              {/* Subtle text decoration */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-20"
                style={{ backgroundColor: jadeLight }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 2,
                }}
              />
            </motion.h1>

            <motion.div 
              className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-2" 
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 text-xl lg:text-2xl font-medium">
                <span style={{ color: jadeColor }}>{'<'}</span>
                <span className="text-gray-700 font-bold relative">
                  Web Developer
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                    style={{ backgroundColor: jadeColor }}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
                <span style={{ color: jadeColor }}>{'/>'}</span>
              </div>
              
              <motion.button
                onClick={handleOpenCV}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm text-white font-medium transition-all duration-300" 
                style={{
                  backgroundColor: jadeColor,
                  boxShadow: `0 4px 12px ${jadeColor}30`,
                }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: `0 6px 16px ${jadeColor}40`,
                  y: -1,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 3 }}
                >
                  📄
                </motion.span>
                <span>Lihat CV Saya</span>
              </motion.button>
            </motion.div>

            <motion.div className="space-y-3 pt-2" variants={itemVariants}> 
              <p className="text-gray-700 leading-relaxed">
                Siswa kelas 11 jurusan{' '}
                <span 
                  className="inline-block px-2 py-1 rounded-md font-medium"
                  style={{ backgroundColor: `${jadeColor}15`, color: jadeDark }}
                >
                  PPLG
                </span>
                {' '}di SMKN 1 Ciomas yang passionate dalam pengembangan web modern.
              </p>
              <p className="text-gray-500 text-sm">
                Fokus pada pembuatan aplikasi web interaktif dengan teknologi terkini.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
                 <motion.span 
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-white border"
                  style={{ backgroundColor: `${jadeColor}08`, borderColor: `${jadeColor}20`, color: jadeDark }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Available for internship opportunities ✨
                </motion.span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-start mt-5 text-sm" 
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <CVViewer
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
        cvUrl="https://img.freepik.com/free-vector/nurse-resume-template-design_742173-19632.jpg?semt=ais_hybrid&w=740"
      />
    </div>
  );
};

export default Hero;