import Head from "next/head";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-[#a2b9bc] h-screen text-black snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-blue-500 scrollbar-thumb-blue-900">
      <Head>
        <title>Protfolio Mahmoud</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experiences" className="snap-center">
        <Experiences />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact/>
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image src="hero-img.jpg" alt="" className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"/>
          </div>
        </footer>
      </Link>
    </div>
  );
}
