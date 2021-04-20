import * as React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { lorem } from '../utilities/index'

function ProjectPeak({ image, title, description, href }) {
  return (
    <div className="h-full w-full">
      <div className="w-full">
        <img
          className="min-w-full border-2 border-black"
          alt={image.primary.alt}
          src={image.primary.src || '/images/placeholder-image.png'}
        />
      </div>
      <div className="pt-1 sm:pt-4">
        <span
          className="text-shadow-orange font-extrabold text-2xl sm:text-3xl leading-relaxed tracking-wide border-b-2"
          style={{
            boxShadow: '0px 1px orange',
          }}
        >
          {title}
        </span>
      </div>
      <p className="text-sm sm:text-base font-light pt-1 sm:pt-4">
        {lorem || description}
      </p>
      <Link href={href}>
        <a className="inline-block mt-3 sm:text-xl text-shadow-aquamarine">
          View ->
        </a>
      </Link>
    </div>
  )
}

ProjectPeak.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.shape({
    primary: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    // all: PropTypes.arrayOf([
    //   PropTypes.shape({
    //     alt: PropTypes.string.isRequired,
    //     src: PropTypes.string.isRequired,
    //   }).isRequired,
    // ]),
  }).isRequired,
}

ProjectPeak.displayName = 'ProjectPeak'

export default ProjectPeak
