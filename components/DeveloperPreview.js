import * as React from 'react'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
function DeveloperPreview() {
  return (
    <div className="max-w-6xl w-full tracking-wide text-white font-bold flex flex-col justify-center items-center h-full">
      <div className="w-full">
        <div className="text-yellow-500 text-6xl md:text-7xl">Hello! </div>
        <div className="text-green-300 text-6xl md:text-7xl">
          I&apos;m Quinn
        </div>

        <div className="text-xl md:text-2xl font-semibold">
          Junior Web Developer
        </div>
        <div className="mt-4 sm:text-2xl font-light ">{lorem}</div>
      </div>
    </div>
  )
}

DeveloperPreview.displayName = 'DeveloperPreview'

export default DeveloperPreview
