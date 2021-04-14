import * as React from 'react'
import PropTypes from 'prop-types'

function Spacer({ children }) {
  return <div className="mt-4">{children}</div>
}

Spacer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Spacer
