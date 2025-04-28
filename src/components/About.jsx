import React from 'react';
import {motion} from 'framer-motion';
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';

const About = () => {
  return (
    <div className='mx-auto max-w-6xl w-full min-h-screen p-4 md:p-8 lg:p-28 flex items-center justify-center' id='about'>
      <motion.div initial={{opacity:0, y:70}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.8, delay:0.2}}
      className='flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-24'>

        <motion.div initial={{opacity:0, x: -70}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        transition={{duration:0.8, delay:0.2}} className='flex flex-col items-center md:items-start justify-center gap-3'>

            <h1 className='text-5xl md:text-6xl lg:text-7xl font-semibold text-center md:text-left bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text py-1'>
              Shaily Chaturvedi
            </h1>

            <h3 className='text-xl md:text-2xl lg:text-3xl font-light text-center md:text-left bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 text-transparent bg-clip-text'>
              Full-Stack Developer
            </h3>

            <p className='text-sm text-blue-100 text-center md:text-left'>
              Hi! I am Shaily, a student at LNMIIT, studying B.tech. I am passionate about good looking websites, that serve a purpose, without making things unnecessarily complicated. So here is my portfolio website.
            </p>

            <div className='flex gap-5 mt-3'>
                <a href="https://github.com/shaily1710" target="_blank" rel="noopener noreferrer">
                  <BiLogoGithub className='text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out' />
                </a>
                <a href="https://www.linkedin.com/in/shaily-chaturvedi-49b50a280/" target="_blank" rel="noopener noreferrer">
                  <BiLogoLinkedin className='text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-blue-500 hover:rotate-12 transition-all duration-300 ease-in-out' />
                </a>
            </div>
        </motion.div>

        <img src="/image.JPG" alt="Shaily Chaturvedi" className="w-[300px] md:w-[400px] h-auto object-cover rounded-full hover:shadow-2xl hover:shadow-blue-800 hover:scale-105 hover:rotate-2 transition-all duration-500" />
        
      </motion.div>

    </div>
  );
};

export default About;
