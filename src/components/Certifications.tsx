import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  FaExternalLinkAlt, 
  FaCalendarAlt, 
  FaCheckCircle,
} from 'react-icons/fa';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  imageUrl: string;
  credentialUrl: string;
  category: string;
  skills: string[];
  verified: boolean;
}

const certificateData: Certificate[] = [
  {
    id: 'dicoding-start-programming',
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    issuer: 'Dicoding Indonesia',
    issueDate: 'September 2023',
    imageUrl: 'src/assets/certificates/certificate-5.png',
    credentialUrl: 'https://www.dicoding.com/certificates/0LZ0Q396KZ65',
    category: 'Data',
    skills: ['HTML', 'CSS', 'JavaScript'],
    verified: true
  },
  {
    id: 'dicoding-visualization',
    title: 'Belajar Dasar Visualisasi Data',
    issuer: 'Dicoding Indonesia',
    issueDate: 'Juni 2024',
    imageUrl: 'src/assets/certificates/certificate-4.png',
    credentialUrl: 'https://www.dicoding.com/certificates/N9ZOYQ69YPG5',
    category: 'Data',
    skills: ['Data Visualization', 'Chart'],
    verified: true
  },
  {
    id: 'dicoding-python',
    title: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding Indonesia',
    issueDate: 'Desember 2023',
    imageUrl: 'src/assets/certificates/certificate-1.png',
    credentialUrl: 'https://www.dicoding.com/certificates/1OP8NN7M2XQK',
    category: 'Programming Language',
    skills: ['Array', 'Matrix', 'OOP'],
    verified: true
  },
  {
    id: 'dicoding-programming-logic',
    title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
    issuer: 'Dicoding Indonesia',
    issueDate: 'September 2023',
    imageUrl: 'src/assets/certificates/certificate-1.png',
    credentialUrl: 'https://www.dicoding.com/certificates/98XWVLK8JPM3',
    category: 'Data',
    skills: ['Logic', 'Computational Thinking'],
    verified: true
  },
  {
    id: 'ggjxcib',
    title: 'Certificate of Completion',
    issuer: 'Global Game Jam x CIB',
    issueDate: 'Januari 2024',
    imageUrl: 'src/assets/certificates/certificate-6.jpg',
    credentialUrl: 'https://drive.google.com/file/d/1hCb6vl4L5I3v2gRgo-R6m0beErRswGSs/view?usp=drive_link',
    category: 'Game',
    skills: ['Game', 'Horror', 'Absurd'],
    verified: true
  },
];

const jadeColor = '#00A878';
const jadeLighter = '#80D4BC';

// Enhanced Certificate Card
const CertificateCard = ({ cert, index }: { cert: Certificate; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] // Smooth ease-out
      }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 20px 25px -5px rgba(0, 168, 120, 0.15), 0 8px 10px -6px rgba(0, 168, 120, 0.1)',
        transition: { 
          y: { type: 'spring', stiffness: 300, damping: 15 },
          boxShadow: { duration: 0.2 } 
        }
      }}
    >
      {/* Image with Interactive Overlay */}
      <div className="relative h-48 overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${jadeColor} 0%, transparent 50%), 
                             radial-gradient(circle at 80% 20%, ${jadeColor} 0%, transparent 50%)`
          }}
        />
        
        {/* Certificate Image */}
        <motion.img
          src={cert.imageUrl}
          alt={cert.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <motion.a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: jadeColor,
              color: 'white'
            }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt size={12} />
            <span>Lihat Sertifikat</span>
          </motion.a>
        </motion.div>

        {/* Category Badge */}
        <motion.div 
          className="absolute top-3 left-3"
          initial={{ x: -10, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm"
            style={{ backgroundColor: jadeColor }}
          >
            {cert.category}
          </span>
        </motion.div>

        {/* Verified Badge */}
        {cert.verified && (
          <motion.div 
            className="absolute top-3 right-3"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 10, 
              delay: index * 0.1 + 0.4 
            }}
          >
            <motion.div 
              className="bg-white rounded-full p-1.5 shadow-sm"
              whileHover={{ 
                scale: 1.1,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
            >
              <FaCheckCircle className="text-green-500 text-sm" />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Content with Better Spacing */}
      <div className="p-6">
        {/* Title with Hover Effect */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#00A878] transition-colors duration-200">
          {cert.title}
        </h3>

        {/* Issuer */}
        <p className="text-sm text-gray-600 mb-3">
          Diterbitkan oleh{' '}
          <span style={{ color: jadeColor, fontWeight: '500' }}>
            {cert.issuer}
          </span>
        </p>

        {/* Date */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <FaCalendarAlt className="mr-2" size={12} />
          <span>{cert.issueDate}</span>
        </div>

        {/* Skills with Hover Effect */}
        <div className="flex flex-wrap gap-2">
          {cert.skills.slice(0, 3).map((skill) => (
            <motion.span
              key={skill}
              className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-700 text-xs rounded-full transition-all duration-200"
              whileHover={{ 
                backgroundColor: jadeLighter, 
                color: '#007A5E',
                scale: 1.05
              }}
            >
              {skill}
            </motion.span>
          ))}
          {cert.skills.length > 3 && (
            <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-500 text-xs rounded-full">
              +{cert.skills.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Main Certificates Component
const Certificates = () => {

  return (
    <section id="certifications" className="py-20 bg-[#f9fbfa]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Certificate
            </motion.span>
          </h2>
          
          {/* Animated Underline */}
          <motion.div
            className="relative mx-auto mb-6 h-1 bg-gray-100 rounded-full overflow-hidden"
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
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Sertifikasi profesional dan pencapaian dalam bidang teknologi
          </motion.p>
        </motion.div>

        {/* Certificates Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {certificateData.map((cert, index) => (
              <CertificateCard key={cert.id} cert={cert} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;