import * as React from 'react'
import { motion } from 'framer-motion'

function MoreInfo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <motion.div
      layout
      transition={{ duration: 0.7 }}
      animate={{
        // width: isOpen ? '100%' : '25%',
        // height: isOpen ? '200px' : '50px',
        // clipPath: isOpen
        //   ? 'polygon(0% 0%, 95% 0, 100% 50%, 95% 100%, 0% 100%)'
        //   : 'polygon(0% 0%, 80% 0, 100% 50%, 80% 100%, 0% 100%)',
        height: isOpen ? '200px' : '20px',
      }}
      onTap={() => setIsOpen((x) => !x)}
      style={
        {
          // clipPath: 'polygon(0% 0%, 80% 0, 100% 50%, 80% 100%, 0% 100%)',
        }
      }
      className=" bg-indigo-300 self-start min-w-full rounded-r-xl"
    />
  )
}

export default MoreInfo
