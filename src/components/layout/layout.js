import React from 'react'
import Helmet from 'react-helmet'
import { SkipNavLink } from "@reach/skip-nav";


import { Header } from '../header/'

export function Layout({ children, compressed }) {
  return (
    <main>
      <Helmet title="Dustin Schau" />
      <SkipNavLink />
      <Header compressed={compressed} />
      {children}
    </main>
  )
}
