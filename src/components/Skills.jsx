import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiPostgresql } from 'react-icons/si'

const Skills = () => {
  return (
    <div className="mx-auto max-w-6xl w-full min-h-screen text-white p-4 md:p-8 lg:p-28 flex items-center justify-center" id="skills">
      <motion.div 
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center justify-center gap-8"
      >
        <motion.div 
        text="Skills"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='text-4xl sm:text-6xl'
      >
        My Skills
      </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10"
        >
          {/* Each Skill */}
          <SkillCard icon={<FaHtml5 />} title="HTML5" color="text-orange-500" />
          <SkillCard icon={<FaCss3Alt />} title="CSS3" color="text-blue-500" />
          <SkillCard icon={<FaJsSquare />} title="JavaScript" color="text-yellow-400" />
          <SkillCard icon={<FaReact />} title="React.js" color="text-cyan-400" />
          <SkillCard icon={<SiTailwindcss />} title="Tailwind CSS" color="text-sky-400" />
          <SkillCard icon={<FaNodeJs />} title="Node.js" color="text-green-500" />
          <SkillCard icon={<SiExpress />} title="Express.js" color="text-gray-400" />
          <SkillCard icon={<SiMongodb />} title="MongoDB" color="text-green-600" />
          <SkillCard icon={<SiNextdotjs />} title="Next.js" color="text-white" />  
          <SkillCard icon={<SiPostgresql />} title="PostgreSQL" color="text-blue-300" />
          <SkillCard icon={<FaGithub />} title="GitHub" color="text-white" />
        </motion.div>
      </motion.div>
    </div>
  )
}

// const SkillCard = ({ icon, title, color }) => {
//   return (
//     <motion.div 
//       whileHover={{ scale: 1.1, rotate: 5 }}
//       transition={{ type: 'spring', stiffness: 300 }}
//       className="flex flex-col items-center justify-center gap-2 p-4 bg-zinc-800 rounded-lg shadow-lg hover:shadow-blue-600 hover:shadow-md transition-all duration-300"
//     >
//       <div className={`text-5xl ${color}`}>
//         {icon}
//       </div>
//       <h3 className="text-white text-lg font-medium">{title}</h3>
//     </motion.div>

    const SkillCard = ({ icon, title, color }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center gap-2 p-4 bg-zinc-800 rounded-lg shadow-lg hover:shadow-blue-600 hover:shadow-md transition-all duration-300"
    >
      <div className={`text-5xl ${color}`}>
        {icon}
      </div>
      <h3 className="text-white text-lg font-medium">{title}</h3>
    </motion.div>
  )
}

export default Skills
