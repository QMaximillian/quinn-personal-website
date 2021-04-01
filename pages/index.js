import Head from 'next/head'
import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useRouter } from 'next/router'
import DeveloperInfo from '../components/DeveloperInfo'
import Skills from '../components/Skills'
import GradientBackground from '../components/GradientBackground'
import Placeholder from '../components/Placeholder'
import SectionBreak from '../components/SectionBreak'
import Contact from '../components/Contact'

export default function Home() {
  const router = useRouter()
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    open: {
      height: 'auto',
      opacity: 1,
    },
    closed: {
      height: 0,
      opacity: 0,
    },
  }
  const [isOpen, setIsOpen] = useState(true)

  function handleOpen() {
    setIsOpen((state) => !state)
  }
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/apercu-regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <main
        className="overflow-scroll-y h-full"
        style={{ background: 'var(--primary-gradient)' }}
      >
        <button
          type="button"
          onClick={handleOpen}
          className="text-white w-full"
        >
          <p className="text-center border-b-2 border-l-2 border-r-2 border-black">
            Who Am I?
          </p>
        </button>
        <AnimatePresence exitBeforeEnter>
          {isOpen && (
            <motion.div
              key={router.route}
              variants={shouldReduceMotion ? {} : variants}
              initial="closed"
              animate="open"
              exit="closed"
              className="overflow-hidden"
            >
              <DeveloperInfo />
            </motion.div>
          )}
        </AnimatePresence>
        <GradientBackground>
          <DeveloperInfo />
          <SectionBreak />
          <div
            className="w-full h-full flex flex-col justify-center items-center p-2"
            id="skills"
          >
            <Skills />
          </div>
          <SectionBreak />
          <Placeholder />
          <Contact />
        </GradientBackground>
      </main>
    </>
  )
}
