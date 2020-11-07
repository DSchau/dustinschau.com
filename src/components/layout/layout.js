import React from 'react'
import Helmet from 'react-helmet'

import { Header } from '../header/'

export function Layout({ children, compressed }) {
  return (
    <main>
      <Helmet title="Dustin Schau" />
      <Header compressed={compressed} />
      {children}
    </main>
  )
}
