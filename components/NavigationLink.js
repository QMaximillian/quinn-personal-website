import * as React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

function NavigationLink({ text, href, className }) {
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={`h-10 flex justify-center items-center md:h-full xl:h-2/5 xl:w-1/2 primary-gradient w-full py-4 md:py-0 sm:min-w-min text-center hover:text-green-300 hover:border-green-300 focus:text-green-300 focus:border-green-300 active:text-green-300 active:border-green-300 ${
          className || ''
        }`}
      >
        <span>{text}</span>
      </a>
    </Link>
  )
}

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}
export default NavigationLink
