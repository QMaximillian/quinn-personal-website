import * as React from 'react'
import PropTypes from 'prop-types'

function Contact() {
  const emailRef = React.useRef()

  function fallbackCopyTextToClipboard() {
    emailRef.current.focus()
    emailRef.current.select()

    try {
      const result = document.execCommand('copy')
      console.log(result)
      // Tell User Copy Succeeded
    } catch (error) {
      console.log(error)
      // Tell User Copy Failed
      // Tell User To Copy Manually
    }
  }
  function copyTextToClipBoard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard()
      return
    }

    navigator.clipboard
      .writeText(text)
      .then(() => console.log('success'))
      .catch(() => console.log('failure'))
  }

  return (
    <div className="h-20 w-full flex flex-col justify-center items-center">
      <p>Click to Copy Email</p>
      <button
        type="button"
        onClick={() => copyTextToClipBoard('quinnlashinsky@gmail.com')}
        onKeyDown={() => copyTextToClipBoard('quinnlashinsky@gmail.com')}
      >
        <input
          ref={emailRef}
          className="bg-green-600 w-screen text-center"
          readOnly
          value="quinnlashinsky@gmail.com"
        />
      </button>
    </div>
  )
}

Contact.displayName = 'Contact'

export default Contact
