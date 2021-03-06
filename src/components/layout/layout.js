import React from 'react';
import Helmet from 'react-helmet';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';

import { Header } from '../header/';
import { Footer } from '../footer';

export function Layout({
  children,
  className,
  compressed,
  customSkipNavigation = false,
  header,
}) {
  const Wrapper = customSkipNavigation ? React.Fragment : SkipNavContent;
  return (
    <main className={className}>
      <Helmet title="Dustin Schau" />
      <SkipNavLink />
      <Header compressed={compressed}>{header}</Header>
      <Wrapper>{children}</Wrapper>
      <Footer />
    </main>
  );
}
