/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <nav className="flex w-full text-white">
      <Link href="/skills">
        <a className="h-12 w-1/3 rounded-sm rounded-bl-xl py-2 sm:min-w-min text-md md:text-lg text-center border-2 hover:text-green-300 hover:border-green-300 focus:text-green-300 focus:border-green-300 active:text-green-300 active:border-green-300">
          Skills
        </a>
      </Link>
      <Link href="/projects">
        <a className="h-12 w-1/3  rounded-sm py-2 sm:min-w-min text-md md:text-lg text-center border-2 hover:text-green-300 hover:border-green-300 focus:text-green-300 focus:border-green-300 active:text-green-300 active:border-green-300">
          Projects
        </a>
      </Link>
      <Link href="/contact">
        <a className="h-12 w-1/3  rounded-sm py-2 sm:min-w-min text-md md:text-lg text-center border-2 hover:text-green-300 hover:border-green-300 focus:text-green-300 focus:border-green-300 active:text-green-300 active:border-green-300">
          Contact
        </a>
      </Link>
      <Link href="/">
        <a className="h-12 w-1/3  rounded-br-xl py-2 sm:min-w-min text-md md:text-lg text-center border-2 hover:text-green-300 hover:border-green-300 focus:text-green-300 focus:border-green-300 active:text-green-300 active:border-green-300">
          Home
        </a>
      </Link>
    </nav>
  )
}

Navigation.displayName = 'Navigation'

export default Navigation
