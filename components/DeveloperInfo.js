import * as React from 'react'
import { lorem } from '../utilities/index'

function DeveloperInfo() {
  return (
    <div
      style={{ background: 'var(--primary-gradient)' }}
      className=" text-white p-4 w-full tracking-wide font-bold flex flex-col justify-center items-center"
    >
      <div className="w-full">
        <h1 className="text-yellow-500 text-5xl">
          Hello!
          <div className="text-green-300">I&apos;m Quinn</div>
        </h1>

        <div className="text-xl md:text-2xl font-semibold">
          Junior Web Developer
        </div>
        <div className="mt-4 sm:text-2xl font-light ">{lorem}</div>
      </div>
    </div>
  )
}

DeveloperInfo.displayName = 'DeveloperInfo'

export default DeveloperInfo
