import * as React from 'react'
import PropTypes from 'prop-types'

function GradientBackground({ children }) {
  return (
    <div
      className="h-full w-full"
      style={{ backgroundColor: 'var(--primary-gradient)' }}
    >
      {children}
    </div>
  )
}

GradientBackground.propTypes = {
  children: PropTypes.node.isRequired,
}
GradientBackground.displayName = 'GradientBackground'

export default GradientBackground
