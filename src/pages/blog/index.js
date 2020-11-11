import React from 'react';

import { graphql } from 'gatsby';

import { Grid } from '../../components/grid';
import { Layout } from '../../components/layout/';
import { Preview } from '../../components/preview/';

export default ({ data }) => (
  <Layout>
    <Grid>
      {data.posts.nodes.map((post) => (
        <Preview key={post.id} {...post} />
      ))}
    </Grid>
  </Layout>
);

export const query = graphql`
  {
    posts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        excerpt
        slug
        # slug: gatsbyPath(filePath: "/blog/{Mdx.slug}")
        frontmatter {
          featured {
            childImageSharp {
              fluid(maxHeight: 200, cropFocus: NORTH) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
        }
      }
    }
  }
`;
