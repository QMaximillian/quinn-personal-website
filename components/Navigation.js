/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import NavigationLink from './NavigationLink'

function Navigation() {
  return (
    <nav
      className="flex w-full text-white text-xs"
      // style={{ filter: 'drop-shadow(5px 5px 10px #666)' }}
    >
      <NavigationLink href="#projects" text="Projects" />
      <NavigationLink href="#contact" text="Contact" />
      <NavigationLink href="#me" text="Me" />
      <NavigationLink href="#skills" text="Skills" />
    </nav>
  )
}

Navigation.displayName = 'Navigation'

export default Navigation
