import * as React from 'react'
import Alert from '@reach/alert'

function Toast({ message }) {
  return <Alert type="polite">{message}</Alert>
}

export default Toast
