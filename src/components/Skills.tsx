import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React from 'react';
import { 
  FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, 
  FaCode, FaBrain, FaLaptopCode, FaPhp, FaBootstrap, FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiLaravel, 
  SiDart, SiFlutter, SiMysql 
} from 'react-icons/si';
import type { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  color: string;
  description: string;
}

const Skills = () => {
  // Warna utama jade untuk tema terang
  const jadeColor = "#00A878";
  const jadeDark = "#007A5A";
  const jadeLight = "#4ECDC4";
  const textDark = "#1E293B";
  const textMuted = "#64748B";
  const backgroundLight = "#FFFFFF";
  const cardBg = "#F8FAFC";

  const skills = [
    { 
      name: 'HTML', 
      icon: FaHtml5, 
      color: '#E34F26',
      description: 'Struktur'
    },
    { 
      name: 'CSS', 
      icon: FaCss3, 
      color: '#1572B6',
      description: 'Styling'
    },
    { 
      name: 'JavaScript', 
      icon: FaJs, 
      color: '#F7DF1E',
      description: 'Interaktivitas'
    },
    { 
      name: 'TypeScript', 
      icon: SiTypescript, 
      color: '#3178C6',
      description: 'Type Safety'
    },
    { 
      name: 'PHP', 
      icon: FaPhp, 
      color: '#777BB4',
      description: 'Backend'
    },
    { 
      name: 'Bootstrap', 
      icon: FaBootstrap, 
      color: '#7952B3',
      description: 'Framework CSS'
    },
    { 
      name: 'TailwindCSS', 
      icon: SiTailwindcss, 
      color: '#06B6D4',
      description: 'Utility-first CSS'
    },
    { 
      name: 'React', 
      icon: FaReact, 
      color: '#61DAFB',
      description: 'UI Library'
    },
    { 
      name: 'Laravel', 
      icon: SiLaravel, 
      color: '#FF2D20',
      description: 'PHP Framework'
    },
    { 
      name: 'Git', 
      icon: FaGitAlt, 
      color: '#F05032',
      description: 'Version Control'
    },
    { 
      name: 'MySQL', 
      icon: SiMysql, 
      color: '#4479A1',
      description: 'Database'
    },
    { 
      name: 'Dart', 
      icon: SiDart, 
      color: '#0175C2',
      description: 'Language'
    },
    { 
      name: 'Flutter', 
      icon: SiFlutter,
      color: '#02569B',
      description: 'Mobile Framework'
    }
  ];
  
  // Efek dekoratif
  const decorativeIcons = [FaCode, FaBrain, FaLaptopCode, FaDatabase];

  // Komponen SkillCard yang telah dirombak dengan mode terang
  const SkillCard = ({ skill }: { skill: Skill }) => {
    const ref = React.useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ['40%', '60%']);
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-44 rounded-xl"
        whileHover={{ 
          boxShadow: `0 15px 30px -10px ${skill.color}30, 0 5px 15px rgba(0,0,0,0.05)` 
        }}
      >
        <div
          style={{
            transform: 'translateZ(50px)',
            transformStyle: 'preserve-3d',
            backgroundColor: cardBg,
            borderTop: `3px solid ${skill.color}`,
            boxShadow: `0 10px 30px -15px rgba(0,0,0,0.1)`
          }}
          className="absolute inset-0 grid place-content-center rounded-xl p-4"
        >
          <div className="flex flex-col items-center">
            <skill.icon 
              className="text-4xl mb-3"
              style={{ color: skill.color }}
            />
            <p 
              className="text-center font-bold text-lg"
              style={{ color: textDark }}
            >
              {skill.name}
            </p>
            <p 
              className="text-center text-xs mt-1"
              style={{ color: textMuted }}
            >
              {skill.description}
            </p>
          </div>
        </div>
        {/* Efek cahaya (glow) yang mengikuti mouse */}
        <motion.div
          style={{
            top,
            left,
            position: 'absolute',
            width: '150%',
            height: '150%',
            background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            opacity: useTransform(mouseYSpring, [-0.5, 0.5], [0.5, 1]),
            filter: 'blur(30px)',
          }}
        />
      </motion.div>
    );
  };

  return (
    <section 
      className="py-24 px-4 relative overflow-hidden" 
      id="skills"
      style={{ backgroundColor: backgroundLight }}
    >
      {/* Background & Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              radial-gradient(${jadeColor} 1px, transparent 1px),
              radial-gradient(${jadeColor} 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 30px 30px',
            backgroundPosition: '0 0, 15px 15px',
          }}
        />
        {decorativeIcons.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.05, 0.1, 0.05],
              y: [-15, 15, -15],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 8 + index * 2,
              delay: index * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              top: `${15 + index * 25}%`,
              left: index % 2 === 0 ? '10%' : '85%',
              fontSize: `${50 + index * 15}px`,
              color: `${jadeColor}20`
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          <h2 
            className="text-5xl font-bold mb-3"
            style={{ color: textDark }}
          >
            Keterampilan Teknis
          </h2>
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 rounded-full"
            style={{
              background: `linear-gradient(to right, ${jadeLight}, ${jadeDark})`
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'circOut' }}
            viewport={{ once: true }}
          />
        </motion.div>
        <motion.p 
          className="max-w-2xl mx-auto mt-6 text-lg"
          style={{ color: textMuted }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Beragam teknologi yang saya kuasai untuk mengembangkan aplikasi web dan mobile yang modern dan responsif.
        </motion.p>
      </div>

      {/* Grid Keterampilan */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </div>

      {/* Skill Statistic */}
      <motion.div
        className="mt-24 max-w-4xl mx-auto py-10 px-8 rounded-2xl text-center"
        style={{ 
          background: `linear-gradient(135deg, ${jadeLight}15, ${jadeColor}05)`,
          border: `1px solid ${jadeColor}20`,
          boxShadow: `0 20px 50px -25px ${jadeColor}50`
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-2xl font-bold mb-2"
          style={{ color: jadeColor }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Teknologi & Pembelajaran Berkelanjutan
        </motion.h3>
        <motion.p
          className="max-w-3xl mx-auto"
          style={{ color: textMuted }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          Selalu beradaptasi dengan teknologi terbaru dan praktik terbaik industri untuk memberikan solusi yang optimal dan future-proof.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Skills;