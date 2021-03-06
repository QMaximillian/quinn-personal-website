import * as React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

function NavigationLink({ text, href, className, textShadow }) {
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={
          className
            ? `${className} ${textShadow}`
            : `${textShadow} h-10 flex justify-center items-center md:h-full xl:h-2/5 xl:w-1/2 primary-gradient md:bg-none w-full py-4 md:py-0 sm:min-w-min text-center`
        }
      >
        <span>{text}</span>
      </a>
    </Link>
  )
}

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
}

NavigationLink.defaultProps = {
  className: undefined,
}
export default NavigationLink
