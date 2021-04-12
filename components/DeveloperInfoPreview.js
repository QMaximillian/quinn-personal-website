import * as React from 'react'
import { lorem } from '../utilities/index'

function DeveloperInfoPreview() {
  return (
    <div className="text-white p-4 w-full tracking-wide font-bold flex flex-col justify-center items-center">
      <div className="w-full pt-4">
        <h1 className="text-yellow-500 text-5xl sm:text-8xl">
          Hello!
          <div className="text-green-300">I&apos;m Quinn</div>
        </h1>

        <div className="text-lg sm:text-2xl font-semibold">
          Junior Web Developer
        </div>
        <p className="pt-2 sm:pt-3 text-base font-light">{lorem}</p>
      </div>
    </div>
  )
}

DeveloperInfoPreview.displayName = 'DeveloperInfoPreview'

export default DeveloperInfoPreview
