import * as React from 'react'
import PropTypes from 'prop-types'

function GradientBackground({ children }) {
  return (
    <div className="primary-gradient flex flex-grow flex-col md:items-center">
      {children}
    </div>
  )
}

GradientBackground.propTypes = {
  children: PropTypes.node.isRequired,
}
GradientBackground.displayName = 'GradientBackground'

export default GradientBackground
