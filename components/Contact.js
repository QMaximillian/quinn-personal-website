import * as React from 'react'
import PropTypes from 'prop-types'
import SocialLinkList from './SocialLinkList'

function Contact({ onClick }) {
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

  function handleClick() {
    onClick()
    copyTextToClipBoard(emailRef.current.innerText)
  }

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <p className="text-base sm:text-base">Click to Copy Email</p>
      <address className="w-full">
        <button
          type="button"
          ref={emailRef}
          onClick={handleClick}
          onKeyDown={handleClick}
          className="bg-green-600 sm:h-12 w-full text-center p-2 self-center text-base sm:text-lg"
        >
          quinnlashinsky@gmail.com
        </button>
        <SocialLinkList />
      </address>
    </section>
  )
}

Contact.propTypes = {
  onClick: PropTypes.func,
}

Contact.defaultProps = {
  onClick: () => {},
}

Contact.displayName = 'Contact'

export default Contact
