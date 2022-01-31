import React from 'react';

import { graphql } from 'gatsby';

import { Grid } from '../../components/grid';
import { Layout } from '../../components/layout/';
import { Preview } from '../../components/preview/';

import * as sharedStyles from '../shared.module.css';

export default function Blog({ data }) {
  return (
    <Layout>
      <h2 className={sharedStyles.sectionTitle}>The Blog</h2>
      <Grid wrapper="section">
        {data.posts.nodes.map((post) => (
          <Preview key={post.id} {...post} />
        ))}
      </Grid>
    </Layout>
  );
}

export const query = graphql`
  {
    posts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        ...MdxBlogPostPreviewFragment
      }
    }
  }
`;
