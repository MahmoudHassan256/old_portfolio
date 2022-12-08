import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({ }: Props) {
  return (
    <motion.div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className='absolute top-24 uppercase tracking-[10px] text-black text-2xl'

      >About</h3>
      <motion.img src="full-img.jpg" alt="full-img"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.5 }}
        viewport={{ once: true }}
        className="-mb-36 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-100 md:h-95 xl::w-[400px] xl:h-[400px] "
      />
      <div className='space-y-10 px- md:px-10'>
        <h4 className='text-2xl font-semibold'>Here is something to know about me</h4>
        <p>my name is Mahmoud Hassan and i just finished Uni at university of haifa.I studied Computer Science and Mathmatics.
        I'm learning on my own some web-development including React javaScript,typeScript and more.
        In my free time im Gamer loves League of Legends which brings me out of any bad mood i was in.</p>
      </div>
    </motion.div>
  )
}

export default About