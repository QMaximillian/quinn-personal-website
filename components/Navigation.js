/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import NavigationLink from './NavigationLink'

function Navigation() {
  return (
    <nav className="w-full md:h-1/2 md:flex-col text-xs sm:text-sm border border-black md:border-transparent">
      <div className="w-full flex md:flex-col md:h-full">
        <NavigationLink
          href="/projects"
          text="Projects"
          textShadow="md:hover:text-shadow-violet md:active:text-shadow-violet md:focus:text-shadow-violet"
        />

        <NavigationLink
          href="/contact"
          text="Contact"
          textShadow="md:hover:text-shadow-orange md:active:text-shadow-orange md:focus:text-shadow-orange"
        />
        <NavigationLink
          href="/me"
          text="Me"
          textShadow="md:hover:text-shadow-aquamarine md:active:text-shadow-aquamarine md:focus:text-shadow-aquamarine"
        />
        <NavigationLink
          href="/skills"
          text="Skills"
          textShadow="md:hover:text-shadow-violet md:active:text-shadow-violet md:focus:text-shadow-violet"
        />
        <NavigationLink
          href="/"
          text="The Rundown"
          className="hidden md:flex h-10 justify-center items-center md:h-full xl:h-2/5 xl:w-1/2 primary-gradient md:bg-none w-full py-4 md:py-0 sm:min-w-min text-center"
          textShadow="md:hover:text-shadow-orange md:active:text-shadow-orange md:focus:text-shadow-orange"
        />
      </div>
      <NavigationLink
        href="/"
        text="The Rundown"
        className="primary-gradient inline-block md:hidden w-full text-center h-9 py-2 border-t border-black md:border-t-0"
        textShadow="md:hover:text-shadow-orange md:active:text-shadow-orange md:focus:text-shadow-orange"
      />
    </nav>
  )
}

Navigation.displayName = 'Navigation'

export default Navigation
