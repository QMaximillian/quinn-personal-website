import * as React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

function NavigationLink({ text, href }) {
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="primary-gradient w-full py-4 sm:min-w-min text-center hover:text-green-300 hover:border-green-300 focus:text-green-300 focus:border-green-300 active:text-green-300 active:border-green-300">
        {text}
      </a>
    </Link>
  )
}

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}
export default NavigationLink
