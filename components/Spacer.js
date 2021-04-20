import * as React from 'react'
import PropTypes from 'prop-types'

function Spacer({ children, className }) {
  return <div className={`mt-4 ${className}`}>{children}</div>
}

Spacer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Spacer.defaultProps = {
  className: '',
}

export default Spacer
