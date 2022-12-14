import { motion } from 'framer-motion'
import React from 'react'
import { projectsArray } from '../public/variables'
import ProjectCard from './ProjectCard'

type Props = {}

function Projects({ }: Props) {
  return (
    <motion.div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-0'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}>
      <h3 className='absolute top-24 uppercase tracking-[10px] text-black text-2xl'>
        Projects</h3>
      <div className='relative w-full flex overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-blue-500 scrollbar-thumb-blue-900 scrollbar-corner-black '>
        {projectsArray.map((project, key) => (
          <ProjectCard key={key} project={project} />
        ))}
      </div>
      <div className='w-full absolute top-[40%] bg-blue-500 h-[250px] left-0 -skew-y-12 '></div>
    </motion.div>
  )
}

export default Projects