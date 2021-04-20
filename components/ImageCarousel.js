import * as React from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

const testImages = [
  'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg',
  'https://jooinn.com/images/gray-bridge-and-trees.jpg',
  'https://www.thewowstyle.com/wp-content/uploads/2015/07/Natural-World-Wallpaper-HD-.jpg',
]

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  animate: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const buttonVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

function ImageCarousel() {
  const shouldReduceMotion = useReducedMotion()
  const [[page, direction], setPage] = React.useState([0, 0])
  const [showButtons, setShowButtons] = React.useState(true)

  const imageIndex = wrap(0, testImages.length, page)

  function paginate(newDirection) {
    setPage([page + newDirection, newDirection])
  }
  return (
    <div className="h-full w-full relative">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="absolute h-full w-full object-cover cursor-pointer"
          key={page}
          custom={direction}
          src={testImages[imageIndex]}
          variants={shouldReduceMotion ? {} : variants}
          initial="enter"
          animate="animate"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.1 },
          }}
          drag={shouldReduceMotion ? '' : 'x'}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else {
              paginate(-1)
            }
          }}
          onTap={() => setShowButtons((state) => !state)}
        />
      </AnimatePresence>
      <AnimatePresence>
        {showButtons && (
          <>
            <motion.button
              key="left-button"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={buttonVariants}
              type="button"
              className="transform -translate-y-1/2 absolute inset-y-1/2 left-2 z-10 w-8 h-8 md:w-14 md:h-14 bg-white rounded-full"
              onClick={() => paginate(-1)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowLeft') {
                  paginate(-1)
                }
              }}
            >
              <span className="text-black">{'<'}</span>
            </motion.button>
            <motion.button
              key="right-button"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={buttonVariants}
              type="button"
              className="transform -translate-y-1/2 absolute inset-y-1/2 right-2 z-10 w-8 h-8 md:w-14 md:h-14 bg-white rounded-full"
              onClick={() => paginate(1)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowRight') {
                  paginate(1)
                }
              }}
            >
              <span className="text-black">{'>'}</span>
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

ImageCarousel.propTypes = {}

export default ImageCarousel
