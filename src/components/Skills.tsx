import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { 
  FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, 
  FaPhp, FaBootstrap, FaDatabase, FaTools, FaCodeBranch
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiLaravel, 
  SiDart, SiFlutter, SiMysql 
} from 'react-icons/si';
import type { IconType } from 'react-icons';

// --- INTERFACES & DATA ---
interface Skill {
  name: string;
  icon: IconType;
  color: string;
  level: 'Mahir' | 'Menengah' | 'Dasar';
}

interface SkillCategory {
  title: string;
  icon: IconType;
  skills: Skill[];
}

const jadeColor = "#00A878";
const jadeDark = "#007A5A";

const skillData: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: FaReact,
    skills: [
      { name: 'HTML', icon: FaHtml5, color: '#E34F26', level: 'Menengah' },
      { name: 'CSS', icon: FaCss3, color: '#1572B6', level: 'Dasar' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 'Dasar' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 'Dasar' },
      { name: 'React', icon: FaReact, color: '#61DAFB', level: 'Dasar' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4', level: 'Dasar' },
      { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', level: 'Dasar' },
    ]
  },
  {
    title: "Backend & Database",
    icon: FaDatabase,
    skills: [
      { name: 'PHP', icon: FaPhp, color: '#777BB4', level: 'Dasar' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', level: 'Dasar' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 'Dasar' },
    ]
  },
  {
    title: "Mobile & Lainnya",
    icon: FaTools,
    skills: [
      { name: 'Dart', icon: SiDart, color: '#0175C2', level: 'Dasar' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B', level: 'Dasar' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 'Dasar' },
    ]
  }
];

// --- SECTION HEADER COMPONENT ---
const SectionHeader = ({ title, description }: { title: string; description: string }) => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">{title}</h2>
    <motion.div
      className="relative mx-auto h-1 bg-gray-100 rounded-full overflow-hidden"
      style={{ width: '120px' }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <motion.div 
        className="absolute top-0 left-0 h-full rounded-full w-20"
        style={{ backgroundColor: jadeColor }}
        animate={{
          x: [-120, 120, -120],
          transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
      />
    </motion.div>
    <motion.p
      className="text-lg text-gray-600 max-w-2xl mx-auto mt-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {description}
    </motion.p>
  </motion.div>
);

// --- ENHANCED SKILL CARD ---
const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 300, damping: 20 });
  
  const shineOpacity = useTransform(mouseYSpring, [-0.5, 0.5], [0.3, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const levelIndicator = {
    'Mahir': { width: '90%', color: jadeColor },
    'Menengah': { width: '70%', color: '#FBBF24' },
    'Dasar': { width: '45%', color: '#F87171' },
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white p-5 rounded-xl shadow-sm border border-gray-100 group transition-shadow duration-300 overflow-hidden"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{
        y: -6,
        boxShadow: '0 15px 25px -5px rgba(0,0,0,0.07), 0 8px 10px -6px rgba(0,0,0,0.07)',
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            (values: number[]) => `radial-gradient(300px at ${values[0] * 100 + 50}% ${values[1] * 100 + 50}%, rgba(255,255,255,0.6), transparent 80%)`
          ),
          opacity: shineOpacity,
        }}
      />
      
      <div className="flex items-center gap-4">
        <motion.div
          className="p-3 rounded-lg flex-shrink-0"
          style={{ backgroundColor: `${skill.color}1A`, border: `1px solid ${skill.color}30` }}
        >
          <skill.icon size={24} style={{ color: skill.color }} />
        </motion.div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{skill.name}</h4>
          <p className="text-sm text-gray-500">{skill.level}</p>
        </div>
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: skill.color }}
        >
          <FaCodeBranch />
        </motion.div>
      </div>
      
      <div className="mt-4">
        <div className="w-full bg-gray-100 rounded-full h-2">
          <motion.div
            className="h-2 rounded-full relative"
            style={{ backgroundColor: levelIndicator[skill.level].color }}
            initial={{ width: 0 }}
            animate={isInView ? { width: levelIndicator[skill.level].width } : {}}
            transition={{ duration: 1, delay: index * 0.08 + 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 bg-white"
              style={{ borderColor: levelIndicator[skill.level].color }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ 
                type: 'spring', stiffness: 500, damping: 20,
                delay: index * 0.08 + 1 
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN SKILLS COMPONENT ---
const Skills = () => {
  return (
    <section 
      id="skills"
      className="py-24 px-4 bg-[#f9fbfa] relative overflow-hidden"
    >
      {/* Subtle Background Decorations */}
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
          style={{ background: `radial-gradient(circle, ${jadeColor}10, transparent 70%)` }}
          animate={{ scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 } }}
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <SectionHeader 
          title="Skills"
          description="Beragam teknologi yang saya kuasai untuk mengembangkan aplikasi web dan mobile yang modern dan responsif."
        />

        <div className="space-y-16">
          {skillData.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${jadeColor}1A`}}
                >
                  <category.icon size={22} style={{ color: jadeDark }} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-700">{category.title}</h3>
                <div className="flex-grow h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-24 text-center p-8 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, white, #F9FAFB)`,
            border: `1px solid ${jadeColor}20`,
            boxShadow: `0 20px 40px -15px ${jadeColor}10`,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-3" style={{ color: jadeDark }}>
            Pembelajaran Berkelanjutan
          </h3>
          <p className="max-w-3xl mx-auto text-gray-600">
            Saya selalu bersemangat untuk belajar dan beradaptasi dengan teknologi baru, mengikuti praktik terbaik industri untuk memberikan solusi yang optimal dan tahan masa depan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;