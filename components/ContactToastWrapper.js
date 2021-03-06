import * as React from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import PropTypes from 'prop-types'
import Contact from './Contact'
import Toast from './Toast'

function ContactToastWrapper({
  children,
  message = 'Copied',
  duration = 3000,
}) {
  const [isVisible, setIsVisible] = React.useState(false)
  const shouldReduceMotion = useReducedMotion()

  function onClick() {
    if (isVisible) return
    setIsVisible(() => true)
  }

  React.useEffect(() => {
    let timeoutId
    if (isVisible) {
      timeoutId = setTimeout(() => setIsVisible(false), duration)
    }

    return () => clearTimeout(timeoutId)
  }, [isVisible, setIsVisible, duration])

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="bg-indigo-500 fixed z-50 inset-x-5 md:inset-x-20 lg:inset-x-30 flex text-center justify-center items-center h-10"
            transition={{
              y: { type: 'tween' },
            }}
            initial={{
              y: shouldReduceMotion ? 20 : -200,
            }}
            animate={{
              y: 20,
            }}
            exit={{
              y: shouldReduceMotion ? 20 : -200,
            }}
          >
            <Toast
              message={message}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
      <Contact onClick={onClick} />
    </>
  )
}

ContactToastWrapper.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string,
  duration: PropTypes.number,
}

ContactToastWrapper.defaultProps = {
  duration: 3000,
  message: 'Copied',
}

ContactToastWrapper.defaultProps = {
  children: null,
}
export default ContactToastWrapper
