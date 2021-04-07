/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import NavigationLink from './NavigationLink'

function Navigation() {
  return (
    <nav className="flex w-full text-xs sm:text-sm border-2 border-black">
      <NavigationLink href="/#projects" text="Projects" />
      <NavigationLink href="/#contact" text="Contact" />
      <NavigationLink href="/#me" text="Me" />
      <NavigationLink href="/#skills" text="Skills" />
    </nav>
  )
}

Navigation.displayName = 'Navigation'

export default Navigation
