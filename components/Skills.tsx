import { motion } from 'framer-motion'
import React from 'react'
import { skillsArray } from '../public/variables'
import SkillCard from './SkillCard'

type Props = {}


function Skills({ }: Props) {
  return (
    <motion.div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}>
      <h3 className='absolute top-24 uppercase tracking-[10px] text-black text-2xl'
      >Skills</h3>
      {/* grid */}
      <div className='grid grid-cols-4 gap-5'>
        {skillsArray.map((skill,key)=>(
          <SkillCard key={key} skill={skill}/>
        ))}
      </div>


    </motion.div>
  )
}

export default Skills