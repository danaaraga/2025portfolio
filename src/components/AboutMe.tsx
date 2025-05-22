import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaCode,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { BsCardChecklist } from "react-icons/bs";
import LogoSekolah from "../assets/img/logo scanik.png";

const AboutMe = () => {
  const saffronColor = "#F4C430";
  const saffronDark = "#DAA520";

  const interests = [
    "Frontend Development",
    "Backend Development",
    "Web Development",
    "Mobile Development",
    "Responsive Design"
  ];

  const infoCards = [
    {
      icon: FaUserGraduate,
      title: "Pendidikan",
      content: "SMKN 1 Ciomas",
      subContent: "2023 - 2026"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Lokasi",
      content: "Bogor, Jawa Barat",
      subContent: "Indonesia"
    },
    {
      icon: FaCalendarAlt,
      title: "Periode PKL",
      content: "6 Bulan",
    }
  ];

  // Simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Simplified decorative components
    const Particles = () => {
      const particles = Array.from({ length: 15 }); // Reduced from 30
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: saffronColor,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.2,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      );
    };
  
    // Simplified background
    const Background = () => {
      return (
        <>
          {/* Simple grid background */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(${saffronColor} 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
  
          {/* Simple gradient overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, ${saffronColor}08 0%, transparent 60%),
                radial-gradient(circle at 80% 70%, ${saffronDark}08 0%, transparent 60%)
              `,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </>
      );
    };
  
    return (
      <section
        className="py-20 px-4 relative overflow-hidden"
        id="about"
        style={{ backgroundColor: "rgba(36, 41, 47, 0.98)" }}
      >
        <Particles />
        <Background />
  
        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 
                className="text-4xl font-bold mb-2" 
                style={{ color: "#F5F5F5" }}
              >
                Tentang Saya
              </h2>
              {/* Simple underline */}
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-0.5 rounded-full"
                style={{
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    ${saffronColor} 50%, 
                    transparent 100%
                  )`,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
  
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
            {/* Simple divider line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
              style={{
                background: `linear-gradient(to bottom, 
                  transparent, 
                  ${saffronColor}20, 
                  transparent
                )`,
              }}
            />

                      {/* Left Column - Introduction */}
          <motion.div
            className="space-y-8 rounded-xl p-8"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              border: `1px solid ${saffronColor}15`,
            }}
            variants={itemVariants}
          >
            {/* Bio Section */}
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl font-semibold relative inline-block"
                style={{ color: saffronColor }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Dana Raga
              </motion.h3>

              <div className="space-y-4">
                <motion.div 
                  className="relative pl-4"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="absolute left-0 top-0 w-0.5 h-full"
                    style={{
                      background: `linear-gradient(to bottom, ${saffronColor}, transparent)`,
                    }}
                  />
                  <p className="text-[#c9d1d9] leading-relaxed">
                    Seorang siswa yang bersemangat dalam bidang pengembangan web
                    dengan fokus pada frontend development. Memiliki ketertarikan
                    dalam menciptakan antarmuka pengguna yang menarik dan
                    responsif.
                  </p>
                </motion.div>

                <motion.p 
                  className="text-[#8b949e] leading-relaxed pl-4"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  Saat ini aktif mencari kesempatan Praktik Kerja Lapangan (PKL)
                  untuk mengembangkan keterampilan dan mendapatkan pengalaman
                  industri yang berharga.
                </motion.p>
              </div>
            </div>

            {/* Interest Tags */}
            <div className="space-y-3">
              <h4 className="text-[#c9d1d9] font-medium flex items-center gap-2">
                <FaCode size={16} color={saffronColor} />
                Bidang Minat
              </h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 rounded-lg text-sm"
                    style={{
                      backgroundColor: `${saffronColor}10`,
                      color: saffronColor,
                      border: `1px solid ${saffronColor}20`,
                    }}
                    whileHover={{
                      backgroundColor: `${saffronColor}15`,
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.2 }}
                    variants={itemVariants}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: IoSchool,
                  title: "Jurusan",
                  content: "PPLG (Pengembangan Perangkat Lunak dan Gim)",
                },
                {
                  icon: BsCardChecklist,
                  title: "Proyek Selesai",
                  content: "5+ Proyek",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: `1px solid ${saffronColor}15`,
                  }}
                  whileHover={{
                    y: -2,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  }}
                  transition={{ duration: 0.2 }}
                  variants={itemVariants}
                >
                  <stat.icon
                    className="mb-2"
                    size={20}
                    color={saffronColor}
                  />
                  <h5 className="text-[#c9d1d9] font-medium">{stat.title}</h5>
                  <p className="text-[#8b949e] text-sm mt-1">{stat.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Info Cards */}
          <motion.div 
            className="grid gap-6" 
            variants={itemVariants}
          >
            {/* Info Cards */}
            {infoCards.map((card, index) => (
  <motion.div
    key={index}
    className="p-6 rounded-xl"
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      border: `1px solid ${saffronColor}15`,
    }}
    whileHover={{
      scale: 1.01,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    }}
    transition={{ duration: 0.2 }}
    variants={itemVariants}
  >
    <div className="flex items-start gap-4">
      <motion.div
        className="p-3 rounded-lg"
        style={{ backgroundColor: `${saffronColor}10` }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <card.icon size={20} color={saffronColor} />
      </motion.div>
      <div className="flex-1">
        <h4 className="text-[#8b949e] text-sm">{card.title}</h4>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-[#c9d1d9] font-medium">
            {card.content}
          </p>
          {/* Logo sekolah */}
          {card.content === "SMKN 1 Ciomas" && (
            <img
              src={LogoSekolah}
              alt="Logo SMKN 1 Ciomas"
              className="w-6 h-6 object-contain"
            />
          )}
        </div>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-[#8b949e] text-sm">
            {card.subContent}
          </p>
          {/* Bendera Indonesia */}
          {card.subContent === "Indonesia" && (
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAACUCAMAAAB4Mk+VAAAAIVBMVEX/AAD////jvb//WFj/3d3hxsjh4ePf0NLhy83/TEzh3N7rhClvAAAAvElEQVR4nO3PBwGAMBAAsWeV4V8wQnJxkLl30T3XiK7elN6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3hb3/byH533mO0XfrE20elN6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W9YP3GRNPYldp8YAAAAASUVORK5CYII="
              alt="Bendera Indonesia"
              className="w-5 h-3.5 object-contain"
            />
          )}
        </div>
      </div>
    </div>
  </motion.div>
))}

            {/* Goals Card */}
            <motion.div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: `1px solid ${saffronColor}15`,
              }}
              whileHover={{
                scale: 1.01,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              }}
              transition={{ duration: 0.2 }}
              variants={itemVariants}
            >
              <h4 className="text-[#c9d1d9] font-medium mb-4 flex items-center gap-2">
                <FaCode size={16} color={saffronColor} />
                Tujuan PKL
              </h4>
              <ul className="space-y-3">
                {[
                  "Mendapatkan pengalaman industri yang berharga",
                  "Mengembangkan keterampilan teknis dalam lingkungan profesional",
                  "Belajar best practices dalam pengembangan web",
                  "Berkolaborasi dalam tim development",
                ].map((goal, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-[#8b949e]"
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full mt-2"
                      style={{ backgroundColor: saffronColor }}
                    />
                    <span className="text-sm">{goal}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Timestamp */}
              <motion.div
                className="mt-6 text-xs text-[#8b949e] flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.5 }}
              >
                <span>Last updated:</span>
                <span>{new Date("2025-05-22 01:22:30").toLocaleDateString("id-ID", {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;