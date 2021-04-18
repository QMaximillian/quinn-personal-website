import * as React from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { lorem } from '../utilities/index'

function ProjectDetailThumbnail({
  src = '/images/placeholder-image.png',
  projectDescription = lorem,
  projectName = 'No Name Given',
  open = false,
}) {
  const [isOpen, setIsOpen] = React.useState(open)
  const shouldReduceMotion = useReducedMotion()
  function toggleOpen() {
    setIsOpen((state) => !state)
  }
  return (
    <>
      <button
        type="button"
        onClick={toggleOpen}
        className="overflow-y-scroll rounded-md flex flex-col border-white border w-full"
      >
        <div className="flex w-full relative h-10">
          <div className="w-10 h-10 absolute border-gray-500 border">
            <Image layout="fill" objectFit="contain" src={src} />
          </div>
          <p className="self-center flex-grow text-shadow-aquamarine">
            {projectName}
          </p>
        </div>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ height: shouldReduceMotion ? 'auto' : 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: shouldReduceMotion ? 'auto ' : 0 }}
                className="self-start text-left flex"
              >
                <p className="mt-2">{projectDescription}</p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </button>
    </>
  )
}

ProjectDetailThumbnail.propTypes = {
  projectDescription: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  open: PropTypes.bool,
}

ProjectDetailThumbnail.defaultProps = {
  open: false,
}
export default ProjectDetailThumbnail
