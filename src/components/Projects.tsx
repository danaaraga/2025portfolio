import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaExternalLinkAlt, FaCode, FaEye,
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs,
  FaDatabase, FaMobile, FaDesktop,    
  FaCalendarAlt, FaTag, FaStar, FaArrowRight
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiFlutter,
  SiDart, SiLaravel, SiMysql, SiBootstrap, SiPhp
} from 'react-icons/si';

// --- CONSTANTS ---
const jadeColor = "#00A878";
const jadeDark = "#007A5A";
const jadeLight = "#4CC9A0";

// --- INTERFACES ---
interface Technology {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: Technology[];
  category: 'Web Development' | 'Mobile Development' | 'Full Stack' | 'Landing Page';
  status: 'Completed' | 'In Progress' | 'Planning';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  highlights: string[];
}

// --- PROJECT DATA ---
const technologies: { [key: string]: Technology } = {
  react: { name: 'React', icon: FaReact, color: '#61DAFB' },
  typescript: { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  javascript: { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  html: { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  css: { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  tailwind: { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  bootstrap: { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  nextjs: { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  nodejs: { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  flutter: { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  dart: { name: 'Dart', icon: SiDart, color: '#0175C2' },
  laravel: { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  php: { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  mysql: { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
};

const projectsData: Project[] = [
  {
    id: 'portfolio-2025',
    title: 'Portfolio Website 2025',
    description: 'Website portfolio modern dengan React, TypeScript, dan animasi interaktif menggunakan Framer Motion.',
    longDescription: 'Website portfolio pribadi yang dibangun dengan teknologi modern untuk menampilkan proyek-proyek dan kemampuan saya. Dilengkapi dengan animasi yang halus, desain responsif, dan performa yang optimal.',
    imageUrl: 'src/assets/img/project-port2025.png',
    technologies: [technologies.react, technologies.typescript, technologies.tailwind],
    category: 'Web Development',
    status: 'Completed',
    featured: true,
    githubUrl: 'https://github.com/danaaraga/2025portfolio',
    liveUrl: 'https://danaraga-portfolio.vercel.app',
    date: 'Juli 2025',
    highlights: [
      'Responsive design untuk semua perangkat',
      'Animasi interaktif dengan Framer Motion',
      'Optimasi performa dan SEO',
      'Contact form dengan EmailJS'
    ]
  },
  {
    id: 'portfolio-2024',
    title: 'Portfolio Website 2024',
    description: 'Website portfolio dengan Laravel dan Bootstrap, menampilkan proyek dan pengalaman saya.',
    longDescription: 'Tugas sekolah kelas 11 yang dibuat dengan Laravel dan Bootstrap. Menampilkan proyek-proyek yang telah saya kerjakan, dilengkapi dengan fitur admin untuk mengelola konten.',
    imageUrl: 'src/assets/img/project-port2024.png',
    technologies: [technologies.laravel, technologies.html, technologies.css, technologies.bootstrap],
    category: 'Web Development',
    status: 'Completed',
    featured: false,
    liveUrl: 'https://danaraga.kuadratdev.com',
    date: 'Oktober 2024',
    highlights: [
      'Dashboard admin untuk mengelola konten',
      'Login dan register dengan Laravel Breeze',
      'Responsive design dengan Bootstrap',
    ]
  },
  {
    id: 'bblara-pos',
    title: "Bblar'A POS",
    description: 'Sistem kasir dan manajemen stok barang mentah dengan Laravel untuk mengelola Kedai Kopi dan Teh',
    longDescription: "Aplikasi web untuk mengelola Kasir dan Manajemen Inventori di Bblar'A Coffee and ThaiTea. Dilengkapi dengan dashboard admin dengan role berbeda.",
    imageUrl: 'src/assets/img/project-bblara.png',
    technologies: [technologies.laravel, technologies.php, technologies.mysql, technologies.tailwind],
    category: 'Full Stack',
    status: 'Completed',
    featured: true,
    githubUrl: 'https://github.com/rhelzz/bblara-cashier',
    liveUrl: 'https://bblara-cashier.kuadrattech.my.id',
    date: 'Agustus 2025',
    highlights: [
      'Multi-user authentication',
      'CRUD operations untuk semua entitas',
      'Generate laporan to Excel',
      'Role-based access control'
    ]
  },
];

// --- SECTION HEADER ---
const SectionHeader = () => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
      Proyek Terbaru
    </h2>
    <motion.div
      className="relative mx-auto h-1 bg-gray-100 rounded-full overflow-hidden"
      style={{ width: '120px' }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <motion.div 
        className="absolute top-0 left-0 h-full rounded-full w-20"
        style={{ backgroundColor: jadeColor }}
        animate={{
          x: [-120, 120, -120],
          transition: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }
        }}
      />
    </motion.div>
    <motion.p
      className="text-lg text-gray-600 max-w-2xl mx-auto mt-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      Kumpulan proyek yang telah saya kerjakan menggunakan berbagai teknologi modern
    </motion.p>
  </motion.div>
);

// --- PROJECT CARD COMPONENT ---
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return '#10B981';
      case 'In Progress': return '#F59E0B';
      case 'Planning': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'Completed': return '#10B98110';
      case 'In Progress': return '#F59E0B10';
      case 'Planning': return '#6B728010';
      default: return '#6B728010';
    }
  };

  return (
    <motion.div
      className={`relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        boxShadow: `0 20px 40px ${jadeColor}15`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <motion.div
          className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-medium text-white"
          style={{ backgroundColor: jadeColor }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <FaStar className="inline mr-1" size={10} />
          Featured
        </motion.div>
      )}

      {/* Project Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-700"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={20} />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 backdrop-blur-sm rounded-full text-white transition-colors"
              style={{ backgroundColor: `${jadeColor}CC` }}
              whileHover={{ scale: 1.1, backgroundColor: jadeColor }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt size={20} />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-500 flex items-center gap-1">
                <FaCalendarAlt size={12} />
                {project.date}
              </span>
              <span 
                className="px-2 py-1 rounded-full text-xs font-medium"
                style={{ 
                  color: getStatusColor(project.status),
                  backgroundColor: getStatusBgColor(project.status)
                }}
              >
                {project.status}
              </span>
            </div>
          </div>
          <div 
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${jadeColor}15` }}
          >
            {project.category === 'Mobile Development' ? (
              <FaMobile size={16} style={{ color: jadeColor }} />
            ) : project.category === 'Full Stack' ? (
              <FaDatabase size={16} style={{ color: jadeColor }} />
            ) : (
              <FaDesktop size={16} style={{ color: jadeColor }} />
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.featured ? project.longDescription : project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <motion.div
              key={tech.name}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-700"
              whileHover={{ 
                backgroundColor: `${tech.color}15`,
                color: tech.color 
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * techIndex }}
            >
              <tech.icon size={12} color={tech.color} />
              {tech.name}
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        {project.featured && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <FaTag size={12} style={{ color: jadeColor }} />
              Key Features
            </h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight, idx) => (
                <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                  <span 
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: jadeColor }}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ x: 2 }}
            >
              <FaCode size={12} />
              Source Code
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium transition-colors"
              style={{ color: jadeColor }}
              whileHover={{ x: 2, color: jadeDark }}
            >
              <FaEye size={12} />
              Live Demo
              <FaArrowRight size={10} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-[#f9fbfa] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(${jadeDark} 0.5px, transparent 0.5px)`,
            backgroundSize: "30px 30px",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${jadeColor}10, transparent 70%)` }}
          animate={{ scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 8, ease: "easeInOut" } }}
        />
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${jadeLight}10, transparent 70%)` }}
          animate={{ scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 } }}
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <SectionHeader />
        
        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;