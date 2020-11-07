import React from 'react'
import Helmet from 'react-helmet'
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";


import { Header } from '../header/'

export function Layout({ children, compressed, skipNavigation = true }) {
  const Wrapper = skipNavigation ? SkipNavContent : React.Fragment
  return (
    <main>
      <Helmet title="Dustin Schau" />
      <SkipNavLink />
      <Header compressed={compressed} />
      <Wrapper>{children}</Wrapper>
    </main>
  )
}
