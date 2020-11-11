import React from 'react';
import { graphql } from 'gatsby';

import { Grid } from '../components/grid/';
import { Layout } from '../components/layout/';
import { Preview } from '../components/preview/';

export default function Index({ data: { posts } }) {
  return (
    <Layout compressed={false}>
      <Grid>
        {posts.nodes.map((post) => (
          <Preview key={post.id} {...post} />
        ))}
      </Grid>
    </Layout>
  );
}

export const indexQuery = graphql`
  {
    posts: allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 4) {
      nodes {
        ...MdxBlogPostPreviewFragment
      }
    }
  }
`;
