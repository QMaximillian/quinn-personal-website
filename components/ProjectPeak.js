import * as React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { lorem } from '../dev/utilities/index'

function ProjectPeak({ image, name, description, href }) {
  return (
    <div className="border-white border h-full w-full p-4">
      <div className="w-full">
        <img
          className="max-w-full border-2 border-black"
          alt={image.primary.alt}
          src={'https://dummyimage.com/600x400/000/fff' || image.primary.src}
        />
      </div>
      <div className="pt-1">
        <span
          className="font-extrabold text-2xl leading-relaxed tracking-wide  border-b-2"
          style={{
            textShadow: '1px 1px 2px orange',
            boxShadow: '0px 1px orange',
          }}
        >
          {name}
        </span>
      </div>
      <p className="text-sm pt-2">{lorem || description}</p>
      <Link href={href}>
        <a
          className="mt-3 inline-block"
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
