import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaMapMarkerAlt,
  FaCode,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { BsCardChecklist } from "react-icons/bs";
import LogoSekolah from "../assets/img/logo scanik.png"; // Pastikan path ini benar

const AboutMe = () => {
  // Jade Color Palette - konsisten dengan komponen lain
  const jadeColor = "#00A878";
  const jadeDark = "#007A5A";
  const jadeLight = "#4ECDC4";

  // Warna untuk Light Mode
  const backgroundColorLight = "#FFFFFF"; // Latar belakang utama putih
  const cardBackgroundColorLight = "#F9FAFB"; // Latar belakang kartu sedikit off-white
  const cardBackgroundColorHoverLight = "#F3F4F6"; // Hover untuk kartu
  const textPrimaryLight = "#1F2937"; // Abu-abu gelap untuk teks utama
  const textSecondaryLight = "#4B5563"; // Abu-abu medium untuk teks sekunder
  const textMutedLight = "#9CA3AF"; // Abu-abu terang untuk teks muted
  const borderColorLight = "#E5E7EB"; // Border abu-abu terang

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
      content: "5-6 Bulan",
    }
  ];

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

  const Particles = () => {
    const particles = Array.from({ length: 15 });
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: jadeLight, // Menggunakan jadeLight untuk partikel
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.1, // Opacity sedikit lebih tinggi
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [Math.random() * 0.2 + 0.1, Math.random() * 0.3 + 0.1, Math.random() * 0.2 + 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  };

  const Background = () => {
    return (
      <>
        <div
          className="absolute inset-0 opacity-[0.03]" // Opacity disesuaikan untuk light mode
          style={{
            backgroundImage: `radial-gradient(${jadeDark} 0.5px, transparent 0.5px)`, // Grid lebih halus
            backgroundSize: "30px 30px",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 15% 25%, ${jadeLight}05 0%, transparent 50%),
              radial-gradient(circle at 85% 75%, ${jadeColor}05 0%, transparent 50%)
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
      style={{ backgroundColor: backgroundColorLight }} // Latar belakang utama light mode
    >
      <Particles />
      <Background />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
              style={{ color: textPrimaryLight }} // Warna teks utama light mode
            >
              About Me
            </h2>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-0.5 rounded-full"
              style={{
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  ${jadeColor} 50%, 
                  transparent 100%
                )`, // Underline dengan jadeColor
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
            style={{
              background: `linear-gradient(to bottom, 
                transparent, 
                ${jadeColor}30,  // Opacity disesuaikan untuk light mode
                transparent
              )`,
            }}
          />

          {/* Introduction */}
          <motion.div
            className="space-y-8 rounded-2xl p-8 shadow-lg" // Shadow lebih terlihat di light mode
            style={{
              backgroundColor: cardBackgroundColorLight,
              border: `1px solid ${borderColorLight}`,
            }}
            variants={itemVariants}
            whileHover={{
                boxShadow: `0 10px 15px -3px ${jadeColor}1A, 0 4px 6px -4px ${jadeColor}1A`, // Shadow jade saat hover
                borderColor: `${jadeColor}30`
            }}
          >
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl font-semibold relative inline-block"
                style={{ color: jadeDark }} // Warna jadeDark untuk nama
              >
                Dana Raga
              </motion.h3>

              <div className="space-y-4">
                <motion.div 
                  className="relative pl-4"
                >
                  <div
                    className="absolute left-0 top-0 w-0.5 h-full rounded-full"
                    style={{
                      background: `linear-gradient(to bottom, ${jadeColor}, ${jadeLight}80)`,
                    }}
                  />
                  <p style={{ color: textSecondaryLight }} className="leading-relaxed">
                    Seorang siswa yang bersemangat dalam bidang pengembangan web
                    dengan fokus pada frontend development. Memiliki ketertarikan
                    dalam menciptakan antarmuka pengguna yang menarik dan
                    responsif.
                  </p>
                </motion.div>

                <motion.p 
                  style={{ color: textMutedLight }} 
                  className="leading-relaxed pl-4"
                >
                  Saat ini aktif mencari kesempatan Praktik Kerja Lapangan (PKL)
                  untuk mengembangkan keterampilan dan mendapatkan pengalaman
                  industri yang berharga.
                </motion.p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 style={{ color: textPrimaryLight }} className="font-medium flex items-center gap-2">
                <FaCode size={16} color={jadeColor} />
                Bidang Minat
              </h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 rounded-lg text-sm font-medium" // Font medium
                    style={{
                      backgroundColor: `${jadeColor}1A`, // Background lebih soft
                      color: jadeDark, // Teks jadeDark
                      border: `1px solid ${jadeColor}30`,
                    }}
                    whileHover={{
                      backgroundColor: `${jadeColor}26`,
                      borderColor: `${jadeColor}50`,
                      scale: 1.03, // Hover lebih halus
                      boxShadow: `0 2px 8px ${jadeColor}20`
                    }}
                    transition={{ duration: 0.2 }}
                    variants={itemVariants}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="p-4 rounded-xl shadow-sm" // Shadow tipis
                  style={{
                    backgroundColor: backgroundColorLight, // Background putih
                    border: `1px solid ${borderColorLight}`,
                  }}
                  whileHover={{
                    y: -2,
                    backgroundColor: cardBackgroundColorHoverLight,
                    borderColor: `${jadeColor}30`,
                    boxShadow: `0 4px 10px ${jadeColor}15`
                  }}
                  transition={{ duration: 0.2 }}
                  variants={itemVariants}
                >
                  <stat.icon
                    className="mb-2"
                    size={20}
                    color={jadeColor}
                  />
                  <h5 style={{ color: textPrimaryLight }} className="font-medium">{stat.title}</h5>
                  <p style={{ color: textSecondaryLight }} className="text-sm mt-1">{stat.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid gap-6" 
            variants={itemVariants}
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl shadow-lg" // Shadow lebih terlihat
                style={{
                  backgroundColor: cardBackgroundColorLight,
                  border: `1px solid ${borderColorLight}`,
                }}
                whileHover={{
                  scale: 1.02, // Scale lebih halus
                  backgroundColor: cardBackgroundColorHoverLight,
                  borderColor: `${jadeColor}40`,
                  boxShadow: `0 8px 16px ${jadeColor}20`
                }}
                transition={{ duration: 0.2 }}
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 rounded-xl" // Padding disesuaikan
                    style={{ backgroundColor: `${jadeColor}1A` }} // Background icon lebih soft
                  >
                    <card.icon size={20} color={jadeDark} /> 
                  </motion.div>
                  <div className="flex-1">
                    <h4 style={{ color: textSecondaryLight }} className="text-sm font-medium">{card.title}</h4> {/* Font medium */}
                    <div className="flex items-center gap-2 mt-1">
                      <p style={{ color: textPrimaryLight }} className="font-semibold"> {/* Font semibold */}
                        {card.content}
                      </p>
                      {card.content === "SMKN 1 Ciomas" && (
                        <img
                          src={LogoSekolah}
                          alt="Logo SMKN 1 Ciomas"
                          className="w-6 h-6 object-contain"
                        />
                      )}
                    </div>
                    {card.subContent && (
                        <div className="flex items-center gap-2 mt-1">
                        <p style={{ color: textMutedLight }} className="text-sm">
                            {card.subContent}
                        </p>
                        {card.subContent === "Indonesia" && (
                            <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAACUCAMAAAB4Mk+VAAAAIVBMVEX/AAD////jvb//WFj/3d3hxsjh4ePf0NLhy83/TEzh3N7rhClvAAAAvElEQVR4nO3PBwGAMBAAsWeV4V8wQnJxkLl30T3XiK7elN6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3hb3/byH533mO0XfrE20elN6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W3pbelt6W9YP3GRNPYldp8YAAAAASUVORK5CYII="
                            alt="Bendera Indonesia"
                            className="w-5 h-3.5 object-contain rounded-sm" // Rounded
                            />
                        )}
                        </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="p-6 rounded-2xl shadow-lg" // Shadow lebih terlihat
              style={{
                backgroundColor: cardBackgroundColorLight,
                border: `1px solid ${borderColorLight}`,
              }}
              whileHover={{
                scale: 1.02,
                backgroundColor: cardBackgroundColorHoverLight,
                borderColor: `${jadeColor}40`,
                boxShadow: `0 8px 16px ${jadeColor}20`
              }}
              transition={{ duration: 0.2 }}
              variants={itemVariants}
            >
              <h4 style={{ color: textPrimaryLight }} className="font-medium mb-4 flex items-center gap-2">
                <FaCode size={16} color={jadeColor} />
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
                    className="flex items-start gap-3"
                    style={{ color: textSecondaryLight }}
                    variants={itemVariants}
                    whileHover={{ x: 4, color: jadeDark }}
                    transition={{ duration: 0.2 }}
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" // Disesuaikan agar align
                      style={{ backgroundColor: jadeColor }}
                    />
                    <span className="text-sm">{goal}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-6 text-xs flex items-center gap-2"
                style={{ color: textMutedLight }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }} // Opacity disesuaikan
                transition={{ duration: 0.5 }}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;