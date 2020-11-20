import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../../components/layout/';

export default function Index({ data }) {
  return (
    <Layout>
      <section>{/* TODO: Open source */}</section>
    </Layout>
  );
}

export const indexQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
