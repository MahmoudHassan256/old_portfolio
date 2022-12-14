import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from 'next/link'
type Props = {}

function Header({ }: Props) {
  return (
    <header className='sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20
    lg:items-center'>
      <motion.div
        initial={{x: -500,opacity: 0,scale: 0.5}}
        animate={{x: 0,opacity: 1,scale: 1}}
        transition={{duration: 1.5,}}
        className='flex flex-row items-center'>
        <SocialIcon
          url='http://www.facebook.com/AboAl3amer'
          fgColor='black'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://github.com/MahmoudHassan256'
          fgColor='black'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/mahmoud-hassan-151681218/'
          fgColor='black'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div
        initial={{x: 500,opacity: 0,scale: 0.5}}
        animate={{x: 0,opacity: 1,scale: 1}}
        transition={{duration: 1.5,}}
        className='flex flex-row items-center cursor-pointer'>
        <Link href="#contact">
          <p className='uppercase hidden md:inline-flex text-sm text-black font-bold'>Get in Touch</p>
        </Link>
      </motion.div>
    </header >
  )
}

export default Header