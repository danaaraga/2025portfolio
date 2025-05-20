import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3, color: '#1572B6' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="py-8 px-4 relative overflow-hidden">
      {/* Background Effect */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-5"
        animate={{
          backgroundImage: [
            'radial-gradient(circle at 0% 0%, #6366f1 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, #8b5cf6 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, #6366f1 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold mb-8 relative"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ color: '#c9d1d9' }}
      >
        Keterampilan
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center space-x-3 p-4 rounded-lg bg-gray-800 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 20px ${skill.color}33`
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <skill.icon size={30} color={skill.color} />
              </motion.div>
              <span style={{ color: '#c9d1d9' }} className="font-medium">
                {skill.name}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;