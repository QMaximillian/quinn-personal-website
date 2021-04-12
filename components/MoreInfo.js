import * as React from 'react'
import { motion } from 'framer-motion'

function MoreInfo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <motion.div
      layout
      transition={{ duration: 0.7 }}
      animate={{
        height: isOpen ? '200px' : '1.25rem',
      }}
      onTap={() => setIsOpen((x) => !x)}
      className=" bg-indigo-300 self-start min-w-full rounded-r-xl h-5"
    />
  )
}

export default MoreInfo
