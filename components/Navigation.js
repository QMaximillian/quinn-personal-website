/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import * as React from 'react'
import NavigationLink from './NavigationLink'

function Navigation() {
  return (
    <nav className="w-full md:h-1/2 md:flex-col text-xs sm:text-sm border border-black md:border-transparent">
      <div className="w-full flex md:flex-col md:h-full">
        <NavigationLink href="/projects" text="Projects" />
        <NavigationLink href="/contact" text="Contact" />
        <NavigationLink href="/me" text="Me" />
        <NavigationLink href="/skills" text="Skills" />
        <NavigationLink
          href="/"
          text="The Rundown"
          className="hidden md:flex h-10 justify-center items-center md:h-full xl:h-2/5 xl:w-1/2 primary-gradient md:bg-none w-full py-4 md:py-0 sm:min-w-min text-center hover:text-green-300 hover:border-green-300 focus:text-green-300 focus:border-green-300 active:text-green-300 active:border-green-300"
        />
      </div>
      <NavigationLink
        href="/"
        text="The Rundown"
        className="primary-gradient inline-block md:hidden w-full text-center h-9 py-2 border-t border-black md:border-t-0"
      />
    </nav>
  )
}

Navigation.displayName = 'Navigation'

export default Navigation
