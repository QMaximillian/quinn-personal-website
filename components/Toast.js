import * as React from 'react'
import PropTypes from 'prop-types'
import Alert from '@reach/alert'

function Toast({ message = 'Copied' }) {
  return <Alert type="polite">{message}</Alert>
}

Toast.propTypes = {
  message: PropTypes.string,
}

Toast.defaultProps = {
  message: 'Copied',
}
export default Toast
