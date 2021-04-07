/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import * as React from 'react'
import NavigationLink from './NavigationLink'

function Navigation() {
  return (
    <nav className="w-full text-xs sm:text-sm border border-black primary-gradient">
      <div className="w-full flex">
        <NavigationLink href="/projects" text="Projects" />
        <NavigationLink href="/contact" text="Contact" />
        <NavigationLink href="/me" text="Me" />
        <NavigationLink href="/skills" text="Skills" />
      </div>
      <Link href="/">
        <a className="inline-block w-full text-center h-8 py-2 border-t border-black">
          The Rundown
        </a>
      </Link>
    </nav>
  )
}

Navigation.displayName = 'Navigation'

export default Navigation
