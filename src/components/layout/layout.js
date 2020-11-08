import React from 'react';
import Helmet from 'react-helmet';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';

import { Header } from '../header/';
import { Footer } from '../footer';

export function Layout({ children, compressed, customSkipNavigation = false }) {
  const Wrapper = customSkipNavigation ? React.Fragment : SkipNavContent;
  return (
    <main>
      <Helmet title="Dustin Schau" />
      <SkipNavLink />
      <Header compressed={compressed} />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </main>
  );
}
