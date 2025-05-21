import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { IoTriangle, IoSquare, IoEllipse, IoDiamond, IoCube, IoPrism } from "react-icons/io5";
import CVViewer from './CVViewer';

const Hero = () => {
  const [isCVOpen, setIsCVOpen] = useState(false);

  const handleOpenCV = () => {
    setIsCVOpen(true);
  };

  const saffronColor = "#F4C430";
  const saffronDark = "#DAA520";

  // Shapes dekoratif menggunakan react-icons
  const decorativeShapes = [
    { Icon: IoTriangle, color: "#E34F26", position: { top: "10%", left: "0%" } },
    { Icon: IoSquare, color: "#1572B6", position: { top: "10%", right: "0%" } },
    { Icon: IoEllipse, color: "#F7DF1E", position: { top: "40%", left: "-5%" } },
    { Icon: IoDiamond, color: "#61DAFB", position: { top: "40%", right: "-5%" } },
    { Icon: IoCube, color: "#06B6D4", position: { bottom: "10%", left: "0%" } },
    { Icon: IoPrism, color: "#3178C6", position: { bottom: "10%", right: "0%" } },
  ];

  // Container untuk animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Item untuk animasi
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div
      className="min-h-[calc(100vh-64px)] relative overflow-hidden flex items-center"
      style={{ backgroundColor: "rgba(36, 41, 47, 0.98)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(${saffronColor}15 1px, transparent 1px),
              radial-gradient(${saffronColor}10 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 25px 25px",
            backgroundPosition: "0 0, 25px 25px",
          }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(36, 41, 47, 0.8) 100%)`,
          }}
        />
      </div>

      {/* Main content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-items-center">
          {/* Left - Photo section */}
          <motion.div
            className="relative flex justify-center items-center w-full"
            variants={itemVariants}
          >
            {/* Shapes Dekoratif */}
            <div className="absolute -inset-10 z-0">
              {decorativeShapes.map(({ Icon, color, position }, index) => (
                <motion.div
                  key={index}
                  className="absolute p-3 rounded-xl backdrop-blur-sm"
                  style={{
                    ...position,
                    backgroundColor: `${color}10`,
                    border: `1px solid ${color}30`,
                  }}
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  <Icon size={24} color={color} />
                </motion.div>
              ))}
            </div>

            {/* Photo container */}
            <motion.div
              className="relative group mx-auto"
              variants={itemVariants}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-2 rounded-2xl opacity-75 blur-2xl"
                style={{
                  background: `conic-gradient(from 0deg at 50% 50%, 
                    ${saffronColor}20, 
                    ${saffronDark}20, 
                    ${saffronColor}20
                  )`,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Foto Hero Section */}
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  width: "320px",
                  height: "427px",
                  background: `linear-gradient(to bottom right, 
                    ${saffronColor}20, 
                    transparent, 
                    ${saffronDark}20
                  )`,
                  padding: "1px",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="https://morningsidevfd27.com/wp-content/uploads/2016/06/male-silhouette-3x4.jpg"
                  alt="Dana Raga"
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, 
                      ${saffronColor}50,
                      transparent 50%
                    )`,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Content section */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            variants={itemVariants}
          >
            {/* Label Selamat Datang */}
            <motion.div
              variants={itemVariants}
              className="inline-block"
            >
              <motion.span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
                style={{
                  background: `linear-gradient(135deg, ${saffronColor}15, ${saffronDark}05)`,
                  border: `1px solid ${saffronColor}30`,
                  color: saffronColor,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                👋 Halo! Perkenalkan saya
              </motion.span>
            </motion.div>

            {/* Nama dan Role */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.h1
                className="text-5xl lg:text-6xl font-bold tracking-tight"
                style={{
                  background: `linear-gradient(to right, ${saffronColor}, ${saffronDark})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Dana Raga
              </motion.h1>

              <motion.div
                className="text-xl lg:text-2xl font-light"
                style={{ color: "#8b949e" }}
              >
                <motion.div
                  animate={{
                    color: ["#8b949e", "#61DAFB", "#8b949e"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-gray-400">{"<"}</span>
                  <span className="font-bold">Web Developer</span>
                  <span className="text-gray-400">{" />"}</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Deskripsi */}
            <motion.div
              className="space-y-4 max-w-lg mx-auto lg:mx-0"
              variants={itemVariants}
            >
              <p className="text-lg leading-relaxed" style={{ color: "#c9d1d9" }}>
                Seorang siswa kelas 11 berjurusan PPLG (Pengembangan Perangkat Lunak dan Gim).
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#8b949e" }}>
                Fokus pada pembuatan aplikasi web modern dan interaktif.
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button
                onClick={handleOpenCV}
                className="px-8 py-3.5 rounded-lg font-medium relative overflow-hidden group"
                style={{
                  background: `linear-gradient(45deg, ${saffronColor}, ${saffronDark})`,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 text-gray-900">Lihat CV</span>
                <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.button>

              {/* Social Media */}
              <div className="flex items-center gap-5">
                {[
                  { Icon: FaGithub, url: "https://github.com/danaaraga" },
                  { Icon: FaLinkedin, url: "https://linkedin.com/in/dana-raga7" },
                  { Icon: FaEnvelope, url: "mailto:danaraga101@gmail.com" },
                ].map(({ Icon, url }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg hover:bg-white/5"
                    whileHover={{
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    style={{ color: "#8b949e" }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* CV Viewer Modal */}
      <CVViewer
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
        cvUrl="https://img.freepik.com/free-vector/nurse-resume-template-design_742173-19632.jpg?semt=ais_hybrid&w=740"
      />
    </div>
  );
};

export default Hero;