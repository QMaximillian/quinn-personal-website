import * as React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { lorem } from '../utilities/index'

function ProjectPeak({ image, name, description, href }) {
  return (
    <div className="h-full w-full p-4">
      <div className="w-full">
        <img
          className="min-w-full border-2 border-black"
          alt={image.primary.alt}
          src={'https://dummyimage.com/600x400/000/fff' || image.primary.src}
        />
      </div>
      <div className="pt-1 sm:pt-4">
        <span
          className="font-extrabold text-2xl sm:text-3xl leading-relaxed tracking-wide border-b-2"
          style={{
            textShadow: '1px 1px 2px orange',
            boxShadow: '0px 1px orange',
          }}
        >
          {name}
        </span>
      </div>
      <p className="text-sm sm:text-base font-light pt-1 sm:pt-4">
        {lorem || description}
      </p>
      <Link href={href}>
        <a
          className="inline-block mt-3 block sm:text-xl"
          style={{ textShadow: '1px 1px 2px aquamarine' }}
        >
          View ->
        </a>
      </Link>
    </div>
  )
}

ProjectPeak.propTypes = {
  name: PropTypes.string.isRequired,
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
