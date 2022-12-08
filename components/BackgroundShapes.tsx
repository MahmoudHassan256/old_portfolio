import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BackgroundShapes({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity:0,
    }}
    animate={{
      scale:[1,2,2,3,1],
      opacity:[0.1,0.2,0.4,0.8,0.1,1],
    }}
    transition={{
      duration:2.5,
    }}
    className='relative flex justify-center items-center'>
        <div className=' absolute border border-black h-[200px] w-[200px] mt-52 rounded-full animate-ping'></div>
        <div className=' absolute border border-blue-900/20 h-[300px] w-[300px] rounded-full mt-52'></div>
        <div className=' absolute border border-blue-900/10 h-[500px] w-[500px] rounded-full mt-52'></div>
        <div className=' absolute border border-blue-900/5 h-[650px] w-[650px] rounded-full mt-52 animate-pulse '></div>
        <div className=' absolute border border-blue-900/0 h-[800px] w-[800px] rounded-full mt-52'></div>
    </motion.div>
  )
}

export default BackgroundShapes