import React from 'react'
import { motion } from 'framer-motion'
import { projectData } from '../projectData'

const Projects = () => {
  return (
    <div className='mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col gap-10 sm:gap-16 items-center justify-center' id='projects'>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='text-4xl sm:text-6xl'
      >
        My Projects
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full' // ✅ Fixed 'gaps-6' to 'gap-6'
      >
        {projectData.map((project) => (
          <a 
            href={project.link} 
            key={project.id} 
            target="_blank" 
            rel="noopener noreferrer" // ✅ Security Fix
            className="flex flex-col rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-110 hover:shadow-2xl hover:shadow-blue-800"
          > 
            <img 
              src={project.image} 
              alt={project.title} // ✅ Added 'alt' attribute
              className="hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col gap-3 bg-gray-900 p-5 transition-colors duration-300 hover:bg-gray-800 flex-grow">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-slate-400">{project.description}</p>
              <div className='flex gap-3 flex-wrap mt-auto'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-indigo-900 rounded-xl text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
