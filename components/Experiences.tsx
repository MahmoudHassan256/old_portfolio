import { motion } from 'framer-motion'
import React from 'react'
import { experiencesArray } from '../public/variables'
import ExperienceCard from './ExperienceCard'

type Props = {}

function Experiences({ }: Props) {
  return (
    <motion.div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}>
      <h3 className='absolute top-24 uppercase tracking-[10px] text-black text-2xl'
      >Experiences</h3>
      <div className='flex overflow-x-scroll w-full space-x-5 p-10 snap-x snap-mandatory scrollbar scrollbar-track-blue-500 scrollbar-thumb-blue-900'>
        {/* experience card */}
        {experiencesArray.map((experience,key)=>(
          <ExperienceCard key={key} experience={experience}/>
        ))}

      </div>
    </motion.div>
  )
}

export default Experiences