import { motion } from 'framer-motion'
import React from 'react'
import { projectData, projectsArray } from '../public/variables'

type Props = {
  project:projectData,
  key:number
}

function ProjectCard({project}: Props) {
return (
<div className='w-screen flex-shrink-0  snap-center flex flex-col space-y-5 items-center justify-center md:p-44 h-screen '>
            <motion.img src={"project-icon/"+project.name+".png"} alt="project-img"  className='h-48 w-72'
            initial={{y:-30,opacity:0}}
            transition={{duration:1}}
            viewport={{once:true}}
            whileInView={{y:0,opacity:1}}
            />
            <div>
              <h4 className='text-center text-4xl font-semibold'>
                <span className='underline decoration-black'>{project.id+1} out of {projectsArray.length}</span>: {project.name}
              </h4>
              <p className='text-lg text-center md:text-left'>
                Github: {project.link}<br></br>
                About: {project.about}
                </p>
            </div>
          </div>  )
}

export default ProjectCard