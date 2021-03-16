import * as React from 'react'

function Navigation() {
  return (
    <nav className="flex w-full text-white">
      <button
        type="button"
        className="h-12 w-1/3  rounded-sm py-2 sm:min-w-min text-md md:text-lg text-center border-2 hover:text-green-300 hover:border-green-300 focus:text-green-300 focus:border-green-300 active:text-green-300 active:border-green-300"
      >
        Skills
      </button>
      <button
        type="button"
        className="h-12 w-1/3  rounded-sm py-2 sm:min-w-min text-md md:text-lg text-center border-2 hover:text-green-300 hover:border-green-300 focus:text-green-300 focus:border-green-300 active:text-green-300 active:border-green-300"
      >
        Projects
      </button>
      <button
        type="button"
        className="h-12 w-1/3  rounded-sm py-2 sm:min-w-min text-md md:text-lg text-center border-2 hover:text-green-300 hover:border-green-300 focus:text-green-300 focus:border-green-300 active:text-green-300 active:border-green-300"
      >
        Contact
      </button>
    </nav>
  )
}

Navigation.displayName = 'Navigation'

export default Navigation
