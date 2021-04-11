/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import * as React from 'react'
import NavigationLink from './NavigationLink'

function Navigation() {
  return (
    <nav className="w-full md:h-1/2 md:flex-col text-xs sm:text-sm border border-black primary-gradient">
      <div className="w-full flex md:flex-col md:h-full xl:flex-row xl:flex-wrap">
        <NavigationLink href="/projects" text="Projects" />
        <NavigationLink href="/contact" text="Contact" />
        <NavigationLink href="/me" text="Me" />
        <NavigationLink href="/skills" text="Skills" />
        <Link href="/">
          <a className="md:flex md:justify-center md:items-center hidden md:h-full xl:h-1/5 w-full text-center h-full border-t border-black md:border-t-0">
            The Rundown
          </a>
        </Link>
      </div>
      <Link href="/">
        <a className="inline-block md:hidden w-full text-center h-8 py-2 border-t border-black md:border-t-0">
          <span>The Rundown</span>
        </a>
      </Link>
    </nav>
  )
}

Navigation.displayName = 'Navigation'

export default Navigation
