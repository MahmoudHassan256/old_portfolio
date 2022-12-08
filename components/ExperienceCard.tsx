import { motion } from 'framer-motion'
import React from 'react'
import { experienceData } from '../public/variables'

type Props = {
    experience:experienceData
}

function ExperienceCard({experience}: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#99aeb1] mt-20 pt-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img src={"experience-icon/"+experience.name+".png"} alt="experience-img" className='h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]'
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{experience.name}</h4>
                <p className='font-bold text-2xl mt-1'>{experience.place}</p>
                <p className='uppercase py-5'>started in {experience.yearOfStart} ended {experience.yearOfEnd}</p>
                <p className='list-disc space-y-1 text-lg ml-5'>
                    {experience.about}
                </p>
            </div>
        </article>
    )
}

export default ExperienceCard