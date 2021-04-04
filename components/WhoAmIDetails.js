import * as React from 'react'
import { AnimatePresence, useReducedMotion, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import DeveloperInfo from './DeveloperInfo'

function WhoAmIDetails() {
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
  const [isOpen, setIsOpen] = React.useState(false)

  function handleOpen() {
    setIsOpen((state) => !state)
  }

  return (
    <>
      <button type="button" onClick={handleOpen} className="text-white w-full">
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
    </>
  )
}

export default WhoAmIDetails
