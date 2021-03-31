import * as React from 'react'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
function DeveloperPreview() {
  return (
    <div
      style={{ background: 'var(--primary-gradient)' }}
      className="text-white p-4 border-2 border-red-500 max-w-6xl w-full tracking-wide font-bold flex flex-col justify-center items-center"
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

DeveloperPreview.displayName = 'DeveloperPreview'

export default DeveloperPreview
