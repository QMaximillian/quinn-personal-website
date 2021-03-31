import Head from 'next/head'
import { useState } from 'react'
import DeveloperInfo from '../components/DeveloperInfo'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useRouter } from 'next/router'

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
      <main className="overflow-scroll-y h-full">
        <div open>
          <button
            type="button"
            onClick={handleOpen}
            style={{
              background: 'linear-gradient(to right, #222f3d 40%, #314458)',
            }}
            className="text-white pl-2 w-full"
          >
            <p className="text-center">Who Am I?</p>
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
                <DeveloperInfo isOpen={isOpen} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  )
}
