import Link from 'next/link'
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundShapes from './BackgroundShapes'

type Props = {}

function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, Im Mahmoud Hassan",
      "<ReactLover/>",
      "Support_main.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundShapes />
      <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="hero-img.jpg" alt="hero-img" />
      <div className='z-20'>
        <h2 className='tracking-[15px] uppercase pb-2'>future developer</h2>
        <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='black' />
        </h1>
        <div className='pt-5'>
          <Link href="#about"><button className='gotoButton'>About</button></Link>
          <Link href="#experiences"><button className='gotoButton'>Experiences</button></Link>
          <Link href="#skills"><button className='gotoButton'>Skills</button></Link>
          <Link href="#projects"><button className='gotoButton'>Projects</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero