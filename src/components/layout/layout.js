import React from 'react';
import Helmet from 'react-helmet';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';

import { Header } from '../header/';

export function Layout({ children, compressed, customSkipNavigation = false }) {
  const Wrapper = customSkipNavigation ? React.Fragment : SkipNavContent;
  return (
    <main>
      <Helmet title="Dustin Schau" />
      <SkipNavLink />
      <Header compressed={compressed} />
      <Wrapper>{children}</Wrapper>
    </main>
  );
}
