import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

function NavigationLink({ text, href }) {
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        style={{
          background: 'var(--primary-gradient)',
        }}
        className="w-full py-4 sm:min-w-min md:text-lg text-center border-2 border-black hover:text-green-300 hover:border-green-300 focus:text-green-300 focus:border-green-300 active:text-green-300 active:border-green-300"
      >
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
