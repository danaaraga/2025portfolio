import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, FaLightbulb
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  // Color palette - vibrant jewel tones
  const colors = {
    bg: "#151921",
    primary: "#5D3FD3", // Rich purple
    secondary: "#00D4FF", // Bright cyan
    accent: "#FF6B6B", // Coral red
    neutral: "#2D3748",
    text: {
      light: "#F5F7FA",
      muted: "#A0AEC0"
    },
    gradient: {
      start: "#5D3FD3",
      mid: "#6B46C1",
      end: "#4A3AFF"
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const skills = [
    { 
      name: 'React', 
      icon: FaReact, 
      color: '#61DAFB',
      level: 90,
      description: 'Frontend Development',
      strengths: ['Component Architecture', 'React Hooks', 'State Management'],
      projects: 12
    },
    { 
      name: 'JavaScript', 
      icon: FaJs, 
      color: '#F7DF1E',
      level: 85,
      description: 'Web Programming',
      strengths: ['ES6+', 'Async/Await', 'DOM Manipulation'],
      projects: 15
    },
    { 
      name: 'HTML5', 
      icon: FaHtml5, 
      color: '#E34F26',
      level: 95,
      description: 'Markup Language',
      strengths: ['Semantic Markup', 'Accessibility', 'Forms'],
      projects: 20
    },
    { 
      name: 'CSS3', 
      icon: FaCss3, 
      color: '#1572B6',
      level: 88,
      description: 'Styling',
      strengths: ['Flexbox', 'Grid', 'Animations'],
      projects: 18
    },
    { 
      name: 'Git', 
      icon: FaGitAlt, 
      color: '#F05032',
      level: 82,
      description: 'Version Control',
      strengths: ['Branching', 'Merging', 'Collaboration'],
      projects: 10
    },
    { 
      name: 'TypeScript', 
      icon: SiTypescript, 
      color: '#3178C6',
      level: 78,
      description: 'Type Safety',
      strengths: ['Static Typing', 'Interfaces', 'Type Inference'],
      projects: 8
    },
    { 
      name: 'Tailwind', 
      icon: SiTailwindcss, 
      color: '#06B6D4',
      level: 88,
      description: 'CSS Framework',
      strengths: ['Utility Classes', 'Responsive Design', 'Customization'],
      projects: 14
    },
    { 
      name: 'Next.js', 
      icon: SiNextdotjs, 
      color: '#ffffff',
      level: 75,
      description: 'React Framework',
      strengths: ['SSR', 'File-based Routing', 'API Routes'],
      projects: 6
    },
  ];
  
  // Background particles for enhanced visual appeal
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 5 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10
  }));

  // Advanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const skillCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: 25,
      scale: 0.9
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.1
      }
    })
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  // Skill category functions
  const getSkillCategory = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Proficient";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  const getCategoryColor = (level: number) => {
    if (level >= 90) return "#FF6B6B"; // Coral
    if (level >= 80) return "#6A5ACD"; // Slateblue
    if (level >= 70) return "#5D3FD3"; // Purple
    if (level >= 60) return "#00D4FF"; // Cyan
    return "#64748B"; // Slate
  };

  return (
    <section 
      ref={containerRef}
      className="py-24 px-4 relative overflow-hidden" 
      id="skills"
      style={{ backgroundColor: colors.bg }}
    >
      {/* Interactive Particle Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(${colors.primary}30 1px, transparent 1px),
              linear-gradient(90deg, ${colors.primary}30 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Animated Particles */}
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full z-0"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, ${particle.id % 3 === 0 ? colors.primary : particle.id % 3 === 1 ? colors.secondary : colors.accent}40 0%, transparent 70%)`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() * 1 + 1.5, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Glowing Orbs */}
        <motion.div
          className="absolute rounded-full blur-[100px] w-[400px] h-[400px] opacity-20"
          style={{ background: colors.primary }}
          animate={{
            x: ['-25vw', '10vw', '-25vw'],
            y: ['10vh', '30vh', '10vh'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute rounded-full blur-[120px] w-[350px] h-[350px] opacity-15"
          style={{ background: colors.secondary }}
          animate={{
            x: ['60vw', '30vw', '60vw'],
            y: ['60vh', '20vh', '60vh'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="container mx-auto max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-20"
          variants={headerVariants}
        >
          <div className="relative inline-block">
            {/* Floating badge */}
            <motion.div
              className="absolute -top-10 -right-10 px-4 py-2 rounded-xl text-sm font-bold"
              style={{ 
                background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`,
                color: colors.text.light,
                boxShadow: `0 10px 25px -5px ${colors.primary}50`
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaLightbulb className="inline mr-2" /> 
              8+ Technologies
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary}, ${colors.accent})` 
                }}
              >
                Technical Skills
              </span>
            </h2>
            
            {/* Animated multi-layer underline */}
            <div className="relative h-[6px] w-48 mx-auto mt-6 rounded-full overflow-hidden"
              style={{ background: `${colors.neutral}` }}
            >
              <motion.div 
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ background: colors.primary }}
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <motion.div 
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ background: colors.secondary }}
                initial={{ width: 0 }}
                animate={{ width: '30%' }}
                transition={{ delay: 1, duration: 0.8 }}
              />
              <motion.div 
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ background: colors.accent }}
                initial={{ width: 0 }}
                animate={{ width: '10%' }}
                transition={{ delay: 1.3, duration: 0.8 }}
              />
            </div>
          </div>
          
          <motion.p 
            className="text-xl max-w-3xl mx-auto mt-8"
            style={{ color: colors.text.muted }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Technologies and tools I use to bring ideas to life. My expertise spans 
            <span style={{ color: colors.secondary }} className="font-semibold"> frontend development</span>, 
            with a focus on creating engaging and accessible web experiences.
          </motion.p>
        </motion.div>

        {/* Skill Level Legend */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          {[
            { level: 90, label: 'Expert' },
            { level: 80, label: 'Advanced' },
            { level: 70, label: 'Proficient' },
            { level: 60, label: 'Intermediate' },
          ].map((category) => (
            <div key={category.label} className="flex items-center gap-2">
              <motion.div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getCategoryColor(category.level) }}
                whileHover={{ scale: 1.5 }}
              />
              <span style={{ color: colors.text.muted }} className="text-sm">
                {category.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Skills Grid - Completely Redesigned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={skillCardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="relative group"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="relative h-full rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: hoveredSkill === skill.name 
                    ? `rgba(50, 50, 60, 0.9)` 
                    : 'rgba(40, 40, 50, 0.7)',
                  border: `1px solid ${hoveredSkill === skill.name ? skill.color : 'rgba(80, 80, 100, 0.3)'}`,
                  boxShadow: hoveredSkill === skill.name 
                    ? `0 20px 40px ${skill.color}20, 0 0 0 1px ${skill.color}20, inset 0 0 0 1px ${skill.color}10` 
                    : `0 10px 30px rgba(0, 0, 0, 0.15)`
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Skill card interior with enhanced depth effects */}
                <div className="p-8 relative z-10">
                  {/* Skill Header with Icon and Level */}
                  <div className="flex justify-between items-start mb-8">
                    {/* Animated Icon Container */}
                    <motion.div
                      className="p-4 rounded-xl"
                      style={{ 
                        background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                        border: `1px solid ${skill.color}30`,
                        boxShadow: `0 10px 25px ${skill.color}15`
                      }}
                      whileHover={{ 
                        rotate: [0, 10, -10, 10, 0],
                        scale: 1.1,
                        boxShadow: `0 15px 30px ${skill.color}25`
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon size={30} color={skill.color} className="drop-shadow-lg" />
                    </motion.div>
                    
                    {/* Skill Level Badge */}
                    <motion.div
                      className="px-3 py-1 rounded-full text-sm font-bold"
                      style={{
                        backgroundColor: getCategoryColor(skill.level),
                        color: 'white',
                        boxShadow: `0 4px 12px ${getCategoryColor(skill.level)}40`
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        y: -3,
                        boxShadow: `0 8px 20px ${getCategoryColor(skill.level)}60`
                      }}
                    >
                      {getSkillCategory(skill.level)}
                    </motion.div>
                  </div>

                  {/* Skill Info with enhanced typography */}
                  <div className="mb-6">
                    <motion.h3 
                      className="text-xl font-bold mb-1 flex items-center gap-2"
                      style={{ color: colors.text.light }}
                      whileHover={{ x: 3 }}
                    >
                      {skill.name}
                      <motion.span 
                        className="w-2 h-2 rounded-full inline-block"
                        style={{ backgroundColor: skill.color }}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                    </motion.h3>
                    <p style={{ color: colors.text.muted }} className="text-sm">
                      {skill.description}
                    </p>
                  </div>

                  {/* Custom Skill Level Bar with animated fill and effects */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium" style={{ color: colors.text.muted }}>
                        Proficiency
                      </span>
                      <span className="text-xs font-bold" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full overflow-hidden relative"
                      style={{ 
                        background: `rgba(30, 30, 40, 0.5)`,
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      <motion.div 
                        className="absolute top-0 left-0 h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}90, ${skill.color})`,
                          boxShadow: `0 0 10px ${skill.color}50, inset 0 0 5px ${skill.color}30`
                        }}
                        variants={progressVariants}
                        custom={skill.level}
                      />
                      
                      {/* Animated Pulse Effect */}
                      <motion.div
                        className="absolute top-0 right-0 h-full w-4 rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, transparent, ${skill.color})`,
                          translateX: skill.level - 100
                        }}
                        animate={{
                          opacity: [0, 0.7, 0],
                          x: [`-${100 - skill.level}%`, `${skill.level}%`, `${skill.level}%`]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      />
                    </div>
                  </div>

                  {/* Extra details that appear on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredSkill === skill.name ? 1 : 0,
                      height: hoveredSkill === skill.name ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {/* Strengths Pills */}
                    <div className="mb-4">
                      <h4 className="text-xs uppercase tracking-wider mb-2" style={{ color: colors.text.muted }}>
                        Core Strengths
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.strengths.map((strength, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs"
                            style={{ 
                              backgroundColor: `${skill.color}15`,
                              color: skill.color,
                              border: `1px solid ${skill.color}30`
                            }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: `${skill.color}25`
                            }}
                          >
                            {strength}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Projects Count */}
                    <div className="flex justify-between items-center">
                      <span className="text-xs" style={{ color: colors.text.muted }}>
                        Projects Completed
                      </span>
                      <motion.div
                        className="px-3 py-1 rounded-lg text-xs font-bold"
                        style={{ 
                          backgroundColor: colors.neutral,
                          color: colors.text.light
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.projects}+
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  {/* Glowing Corner */}
                  <motion.div
                    className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-xl opacity-30"
                    style={{ backgroundColor: skill.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  {/* Decorative Lines */}
                  <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                      d="M100,0 L100,100 L0,100"
                      fill="none"
                      stroke={`${skill.color}15`}
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: hoveredSkill === skill.name ? 1 : 0.3 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer Stats */}
        <motion.div
          className="mt-20 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Technologies', value: skills.length },
            { label: 'Projects Completed', value: '25+' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 rounded-2xl backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(50, 50, 70, 0.3)',
                border: `1px solid ${colors.primary}20`,
                boxShadow: `0 10px 30px rgba(0,0,0,0.1)`
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(60, 60, 80, 0.4)',
                y: -5,
                boxShadow: `0 15px 30px rgba(0,0,0,0.2), 0 0 0 1px ${colors.primary}30`
              }}
            >
              <motion.div
                className="text-3xl font-black mb-1"
                style={{ color: colors.secondary }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  delay: 1.5 + (i * 0.1)
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm" style={{ color: colors.text.muted }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;