/* eslint-disable react/require-default-props */
import * as React from 'react'
import { lorem } from '../utilities/index'
import MoreInfo from './MoreInfo'
import PropTypes from 'prop-types'

function DeveloperInfoPreview({ imgSrc = '', imgAlt = '' }) {
  return (
    <div className="justify-start flex-grow text-white p-4 w-full tracking-wide font-bold flex flex-col items-center">
      <div className="w-full pt-4">
        <div className="flex justify-between items-center">
          <h1 className="text-yellow-500 text-4xl sm:text-8xl">
            Hello!
            <div className="table-cell align-bottom text-green-300 whitespace-nowrap">
              I&apos;m Quinn
            </div>
          </h1>
          <div className="h-16 w-16 sm:w-40 sm:h-40">
            <img
              className="object-top object-cover rounded-full h-full w-full"
              src={imgSrc}
              alt={imgAlt}
            />
          </div>
        </div>
      </div>
      <div className="self-start text-base sm:text-2xl font-semibold">
        Junior Web Developer
      </div>
      <p className="pt-2 sm:pt-3 text-sm font-light">{lorem}</p>
      <MoreInfo />
      <p className="pt-2 sm:pt-3 text-sm font-light">{lorem}</p>
      <p className="pt-2 sm:pt-3 text-sm font-light">{lorem}</p>
    </div>
  )
}

DeveloperInfoPreview.propTypes = {
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string,
}

DeveloperInfoPreview.displayName = 'DeveloperInfoPreview'

export default DeveloperInfoPreview
