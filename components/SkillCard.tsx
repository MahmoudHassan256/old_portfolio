import { motion } from 'framer-motion'
import React from 'react'
import { skillData } from '../public/variables'

type Props = {
skill:skillData,
}

function SkillCard({ skill }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
            initial={{x:200,opacity:0}}
            transition={{duration:0.25}}
            whileInView={{opacity:1,x:0}}
            src={"skills-icon/"+skill.name+".png"}
            alt='skill'
            className='rounded-full border border-blue-500 object-cover w-24 h-24 md:w-28 md:h28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h28 xl:w-32 xl:h-32  rounded-full z-0'>
                <div className='flex items-center justify-center h-full flex-col'>
                    <p className='text-xl font-semibold placeholder-opacity-100'>{skill.name}</p>
                    <p className='text-3xl font-bold opacity-100'>{skill.percentage}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillCard